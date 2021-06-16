using JLD2, Turing, Flux, BSON

JLD2.@load "bnn_10tanh_2tanh.jld2"

map_est = ch2[34,:,1].value.data |> λ -> reshape(λ,77)

network_shape = [
    (10,3, :tanh),
    (2,10, :tanh), 
    (1,2, :σ)]

# Regularization, parameter variance, and total number of
# parameters.
alpha = 0.09
sig = sqrt(1.0 / alpha)
num_params = sum([i * o + i for (i, o, _) in network_shape])

# This modification of the unpack function generates a series of vectors
# given a network shape.
function unpack(θ::AbstractVector, network_shape::AbstractVector)
    index = 1
    weights = []
    biases = []
    for layer in network_shape
        rows, cols, _ = layer
        size = rows * cols
        last_index_w = size + index - 1
        last_index_b = last_index_w + rows
        push!(weights, reshape(θ[index:last_index_w], rows, cols))
        push!(biases, reshape(θ[last_index_w+1:last_index_b], rows))
        index = last_index_b + 1
    end
    return weights, biases
end

# Generate an instance of an abstract neural network given a shape


function nn_create_instance(θ::AbstractVector, network_shape::AbstractVector)
    weights, biases = unpack(θ, network_shape)
    layers = []
    for i in eachindex(network_shape)
        push!(layers, Dense(Float32.(weights[i]),
            Float32.(biases[i]),
            eval(network_shape[i][3])))
    end
    nn = Chain(layers...)
    return nn
end

bnn_1_website = nn_create_instance(map_est,network_shape)

BSON.@save "anime.bson"  bnn_1_website
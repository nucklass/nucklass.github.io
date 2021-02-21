using PlotlyJS, Franklin, VegaLite, StatsBase

data = dataset("cars")

y = data |> @vlplot(:point, x=:Miles_per_Gallon, y=:Horsepower)

function onemark(v0,P, n)
     X = zeros(Int,n)
     s = length(v0)
     pv =  pweights(v0)
     X[1] = sample(Array(1:s),pv) 
     for k ∈ 2:n 
          X[k] = sample(Array(1:s),pweights(P[X[k - 1],:]))
     end
     return X
end

p = rand(100,100)

vₒ = rand(100)

marky = hcat(onemark(vₒ,p,100),Array(1:100))


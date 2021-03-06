let weightsandbiases = []
// import map estimates for weights from julia
flux.fetchVarWeights("./bnn/anime_weights.bson").then((function (ws) {
    return weightsandbiases = ws;
  }));

var  mod_weights = []
var  mod_biases = []
var i;
for(i=0; i=weightsandbiases.length;i++){
    if (i % 2 == 0) mod_biases[(i/2)] = weightsandbiases[i]
    else mod_weights[(i/2 + .5)] = weightsandbiases[i]
}

// upload model weights to re-constructed neural net specs
function model(data){
  score = data.matMul(weightsandbiases[0])
              .add(weightsandbiases[1])
              .tanh()
              .matMul(weightsandbiases[2])
              .add(weightsandbiases[3])
              .tanh()
              .matMul(weightsandbiases[4])
              .add(weightsandbiases[5])
              .sigmoid();
  return score;
}

// grab input data and use model to give probablility
function score_data(){
  data = []
  data[0] = parseFloat(document.getElementById("complete").value);
  data[1] = parseFloat(document.getElementById("rating").value);
  data[2] = parseFloat(document.getElementById("episodes").value);

  model(tf.tensor(data).reshape([1,3])).data().then(function(x){
    document.getElementById("scorebox").innerText = (x[0] *100).toPrecision(4) + "%" 
  });
  return 0
}
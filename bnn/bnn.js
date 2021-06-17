let weightsandbiases = []

flux.fetchVarWeights("./bnn/anime_weights.bson").then((function (ws) {
    return weightsandbiases = ws;
  }));

let mod_weights = []
let mod_biases = []
var i;
for(i=0; i=weightsandbiases.length;i++){
    if (i % 2 == 0) mod_biases[(i/2)] = weightsandbiases[i]
    else mod_weights[(i/2 + .5)] = weightsandbiases[i]
}
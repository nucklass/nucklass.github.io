let weightsandbiases = []

flux.fetchVarWeights("./bnn/anime_weights.bson").then((function (ws) {
    return weightsandbiases = ws;
  }))
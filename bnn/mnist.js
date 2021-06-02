let model = (function () {
  let math = tf;
  model.weights = [];
  $(Expr(:parameters));
  let model = [$(Expr(:parameters)), [$(Expr(:parameters)), (function (emu) {
  return [$(Expr(:parameters)), math.softmax(math.add(math.vectorTimesMatrix(math.relu(math.add(math.vectorTimesMatrix(emu, model.weights[0]), model.weights[1])), model.weights[2]), model.weights[3]))];
})]];
  $(Expr(:parameters));
  $(Expr(:parameters));
  model.setWeights = (function (ws) {
    model.weights = ws;
    $(Expr(:parameters));
    return;
  });
  return model;
})();
flux.fetchWeights("mnist.bson").then(model.setWeights);

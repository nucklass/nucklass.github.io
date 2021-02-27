spec = {
  "width": 450,
  "height": 550,
  "autosize": {
    "type": "pad",
    "contains": "padding"
  },
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "config": {"background": "black"},
  "padding": {"left": 5, "top": 5, "right": 5, "bottom": 5},
  "description": "Reproducing http://robslink.com/SAS/democd91/pyramid_pie.htm",
  "data": {
    "values": [
      {"category": "Waka", "value": 80, "order": 1},
      {"category": "Mouth", "value": 20, "order": 2}
    ]
  },
  "mark": {"type": "arc", "outerRadius": 80},
  "encoding": {
    "theta": {
      "field": "value",
      "type": "quantitative",
      "scale": {"range": [2.35619449, 8.639379797]},
      "stack": true
    },
    "color": {dth: 450,dth: 450,
      height: 550,
      height: 550,
      "field": "category",
      "type": "nominal",
      "scale": {
        "domain": ["waka", "waka2", "Waka"],
        "range": ["white", "white", "#FFFF00"]
      },
      "legend": {
        "orient": "none",
        "title": "waka waka",
        "columns": 2,
        "legendX": 325,
        "legendY": 250,
        "symbolLimit": 2,
        "values": ["waka", "waka"],
        "titlePadding": 25,
        "labelColor": "white"
      }
    },
    "order": {"field": "order"}
  },
  "view": {"stroke": null}
}
// vegaEmbed('#graph1', spec);
vegaEmbed('#graph2', spec);
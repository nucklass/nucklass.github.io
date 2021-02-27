var data = [
    {
      z: [
        [1, 1 ,1, 1, 1, 1, 1, 1 ],
        [1, 1, 1, 1, 1, 1 ,1 ,1 ],
        [1, 1, 2, 1, 1, 2 ,1 ,1 ], 
        [1, 1, 2, 2, 2, 2 ,1 ,1 ], 
        [1, 1, 2, 2, 2, 2 ,1 ,1 ], 
        [1, 1, 1, 2, 2, 1 ,1 ,1 ], 
        [1, 2, 2, 1, 1, 2 ,2 ,1 ], 
        [1, 2, 2, 1, 1, 2 ,2 ,1 ], 
        [1, 1, 1, 1, 1, 1 ,1 ,1 ],
        [1, 1 ,1, 1, 1, 1, 1, 1 ]
      ],
  
      type: 'heatmap',
      colorscale : [
        [0, '#3D9970'],
        [1, '#001f3f']
      ], 
      x : ["there", "is", "a", "creep", "er", "in", "my", "bed"]
    }
  ];
  
  var layout = {
    autosize: false,
    with: 350,
    height: 700,
    showlegend: false
  }
  
  Plotly.newPlot('graph1', data, layout);
  
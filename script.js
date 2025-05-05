function drawViz(data) {
    let container = document.getElementById('container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'container';
      document.body.appendChild(container);
    }
  
    container.innerText = 'Hello, viz world!';
  }
  
  dscc.subscribeToData(drawViz, { transform: dscc.tableTransform });
  
window.onload = function () {
      
    var chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      data: [{
        type: "pie",
        radius: 300,
        click: explodePie,
        dataPoints: [
          { y: 7, name: "Problem Solving", color: '#46DCE4'},
          { y: 8, name: "Time Management", color: '#3CC3D5'},
          { y: 7, name: "Flexibility", color: '#2FABC4'},
          { y: 8, name: "Adaptability", color: '#2192B5'},
          { y: 8, name: "Communication", color: '#56F5F3'}
        ]
      }]
    });
    chart.render();
    
    function explodePie(e) {
      for(var i = 0; i < e.dataSeries.dataPoints.length; i++) {
        if(i !== e.dataPointIndex)
          e.dataSeries.dataPoints[i].exploded = false;
      }
    }
     
}
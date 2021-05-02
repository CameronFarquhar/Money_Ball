// d3.json('/api/Visuals').then(data=>{
//     console.log(data);
// })

var myMap = L.map("map", {
    center: [39.8097, -98.5556],
    zoom: 11
  });
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 4,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);


// d3.json('../static/js/championship.json').then(function(data) {
//     console.log(data);
// })

d3.json('../static/js/championship.json').then(function(data) {
  console.log(data.lat[0]);
  console.log(data.City[1]);
  // console.log(data.lat);

    // var data.City = 


  for (var i = 0; i < 50; i++) {
    console.log(data.lat[i])
  //  Conditionals for depth color
    var color = "";
    if (data.total[i] > 50) {
      // color = "red"; 
      color = "rgb(255,0,0)";
    }
    else if (data.total[i] > 40) {
      // color = "orange"; 
      color = "rgb(225,100,0)";
    }
    else if (data.total[i] > 30) {
      // color = "rgb(255,218,185)"; 
      color = "rgb(200,200,0)";
    }
        else if (data.total[i] > 20) {
      // color = "lightblue";
      color = "rgb(255,255,0)";
    }
        else if (data.total[i] > 10) {
      // color = "yellow";
      color = "rgb(150,255,0)";
    }
    else {
      // color = "green";
      color = "rgb(0,255,0)";
    }

    // Add circles to map
    L.circle([data.lat[i], data.lng[i]], {
      fillOpacity: 0.7,
      colorOpacity: 0.7,
      color: "black",
      weight: 0.5,
      fillColor: color,
      // Adjust radius
      radius: data.total[i] * 20000
    }).bindPopup("<h2> Location: " + data.City[i] + "</h2> <hr> <h3> Wins: " + data.total[i]).addTo(myMap);
  }

var legend = L.control({ position: "bottomright" });

legend.onAdd = function(map) {
var div = L.DomUtil.create("div", "legend");
div.innerHTML += "<h4>Wins</h4>";
div.innerHTML += '<i style="background: rgb(0,255,0)"></i><span>0-10</span><br>';
div.innerHTML += '<i style="background: rgb(150,255,0)"></i><span>10-20</span><br>';
div.innerHTML += '<i style="background: rgb(255,255,0)"></i><span>20-30</span><br>';
div.innerHTML += '<i style="background: rgb(200,200,0)"></i><span>30-40</span><br>';
div.innerHTML += '<i style="background: rgb(225,100,0)"></i><span>40-50</span><br>';
div.innerHTML += '<i style="background: rgb(255,0,0)"></i><span>50+</span><br>';

return div;
};

legend.addTo(myMap);

});
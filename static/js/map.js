  var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});

var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
});

var map = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: 'satellite-v9', // style URL
  accessToken: API_KEY
});



d3.json('../static/js/championship.json').then(function(data) {
  console.log(data.lat[0]);
  console.log(data.City[1]);
  // console.log(data.lat);

  var winCircles = [];
  var nbaCircles=[];
  var mlsCircles = [];
  var mlbCircles=[];
  var nflCircles = [];
  var nhlCircles = [];


  console.log(winCircles);
  console.log(nbaCircles);
  console.log(mlsCircles);
  console.log(mlbCircles);
  console.log(nhlCircles);
  console.log(nflCircles);


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
    nbaCircles.push(
    L.circle([data.lat[i], data.lng[i]], {
      fillOpacity: 0.7,
      colorOpacity: 0.7,
      color: "black",
      weight: 0.5,
      fillColor: color,
        // Adjust radius
      radius: data.NBA[i] * 20000
    })
    .bindPopup("<h2> Location: " + data.City[i] + "</h2> <hr> <h3> Wins: " + data.NBA[i])
    );

    mlsCircles.push(
    L.circle([data.lat[i], data.lng[i]], {
      fillOpacity: 0.7,
      colorOpacity: 0.7,
      color: "black",
      weight: 0.5,
      fillColor: color,
          // Adjust radius
      radius: data.MLS[i] * 20000
      })
      .bindPopup("<h2> Location: " + data.City[i] + "</h2> <hr> <h3> Wins: " + data.MLS[i])
    );

    mlbCircles.push(
    L.circle([data.lat[i], data.lng[i]], {
      fillOpacity: 0.7,
      colorOpacity: 0.7,
      color: "black",
      weight: 0.5,
      fillColor: color,
            // Adjust radius
      radius: data.MLB[i] * 20000
      })
      .bindPopup("<h2> Location: " + data.City[i] + "</h2> <hr> <h3> Wins: " + data.MLB[i])
    );

    nflCircles.push(
    L.circle([data.lat[i], data.lng[i]], {
        fillOpacity: 0.7,
        colorOpacity: 0.7,
        color: "black",
        weight: 0.5,
        fillColor: color,
              // Adjust radius
        radius: data.NFL[i] * 20000
        })
        .bindPopup("<h2> Location: " + data.City[i] + "</h2> <hr> <h3> Wins: " + data.NFL[i])
      );

    nhlCircles.push(
    L.circle([data.lat[i], data.lng[i]], {
        fillOpacity: 0.7,
        colorOpacity: 0.7,
        color: "black",
        weight: 0.5,
        fillColor: color,
                // Adjust radius
        radius: data.total[i] * 20000
        })
        .bindPopup("<h2> Location: " + data.City[i] + "</h2> <hr> <h3> Wins: " + data.NHL[i])
      );


    winCircles.push(
    L.circle([data.lat[i], data.lng[i]], {
      fillOpacity: 0.7,
      colorOpacity: 0.7,
      color: "black",
      weight: 0.5,
      fillColor: color,
      // Adjust radius
      radius: data.total[i] * 20000
    })
    .bindPopup("<h2> Location: " + data.City[i] + "</h2> <hr> <h3> Wins: " + data.total[i])
    );
  }

  circleLayer = L.layerGroup(winCircles);
  nbaLayer = L.layerGroup(nbaCircles);
  mlbLayer = L.layerGroup(mlbCircles);
  mlsLayer = L.layerGroup(mlsCircles);
  nflLayer = L.layerGroup(nflCircles);
  nhlLayer = L.layerGroup(nhlCircles);

  var baseMaps = {
  Light: light,
  Dark: dark,
  Sattellite: map
  };
      
      
  var overlayMaps = {
  "Championships": circleLayer,
  "nba": nbaLayer,
  "mlb": mlbLayer,
  "mls": mlsLayer,
  "nfl": nflLayer,
  "nhl": nhlLayer
  };

  // Creating map object
  var myMap = L.map("map", {
  center: [40.7128, -74.0059],
  zoom: 3,
  layers: [light, circleLayer]
});

L.control.layers(baseMaps, overlayMaps).addTo(myMap);

});

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


legend.addTo(myMap);
};
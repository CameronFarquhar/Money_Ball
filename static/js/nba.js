  // d3.json('/api/Visuals').then(data=>{
//     console.log(data);
// })

function init() {
    d3.json("../static/js/NBA.json").then((data)=> {
        // loop through names object and grab all the ids/names and eppend them to demographics dropdown

        for (var i = 0; i < 29; i++) {
            console.log(data.Team[i])
                    d3.select("#selDataset")
                    .append("option")
                    .text(data.Team[i])
                    .property("value");
        }

        // apply an ID for the intial plots
        buildPlot(data.Team[0]);
        demographics(data.Team[0]);
        gaugePlot(data.Team[0]);
    });
  };
  
  function optionChanged(Team){
    buildPlot(Team);
    demographics(Team);
    gaugePlot(Team);
  };
  
  function demographics(Team){
    d3.json("../static/js/NBA.json").then(function(data) {

      // tell JS where you want to put the new list of elements
      var panel = d3.select("#sample-metadata");
  
    for (var i = 0; i < 29; i++) {
      // loop through data and append specified team info to panel
      if (Team === data.Team[i]) {
        panel.append("li").text("City : " + data.City[i]);
        panel.append("li").text("State : " + data.State[i]);
        panel.append("li").text("Population: " + data.Population[i]);
        panel.append("li").text("Median Income $: " + data.Income[i]);
        panel.append("li").text("Team Revenue: $" + data.Revenue[i]);
        panel.append("li").text("Total Yearly Points: " + data.Points_For[i]);
        panel.append("li").text("Points Against: " + data.Points_Against[i]);
        panel.append("li").text("Season Wins: " + data.Wins[i]);
        panel.append("li").text("Games Played : " + data.Games[i]);
        panel.append("li").text("Win Percentage : " + data.Wins_Per[i] + "%");
        console.log(data.population[i])
      }
      // clear the output
      panel.html("");
    }
    }
     );
  }
  
  
  function buildPlot(Team) {
    d3.json("../static/js/NBA.json").then(function(data) {
  


      var winning = [];
      for (var i = 0; i < 29; i++) {
        // loop through data and append specified team info to panel
        if (Team === data.Team[i]) {
          winning.push(data.Wins_Per[i]);
        }
      }
      console.log(winning[0])
      var data = [
        {
          type: "indicator",
          mode: "number+gauge+delta",
          gauge: { 
            shape: "bullet",
            axis: {range: [null, 1]}
        },
          // axis: {range: [Null, 1]},
          // delta: { reference: 1 },
          value: winning[0],
          domain: { x: [0, 1.5], y: [0, 1.5] },
          title: { text: "Win %" }
        }
      ];
      
      var layout = { width: 600, height: 250 };
      Plotly.newPlot('bar-one', data, layout);


  // console.log(data.Population[0])

  //       var population = data.Population[0]

  //   // Bar Chart
  //   var trace1 = {
  //     x: population,
  //     y: 1,
  //     text: data.City,
  //   //   name: IDslice,
  //     type: "bar",
  //     orientation: "h"
  //   };
  
  //   var chartData = [trace1];
  
  //   // Apply the group bar mode to the layout
  //   var layout = {
  //     title: "Population",
  //     yaxis: {automargin: true},
  //     height: 600,
  //     width: 500,
  //     margin: {r:100}
  //   };
  
  //   // Render the plot to the div tag with id "plot"
  //   Plotly.newPlot("bar-one", chartData, layout);
  
  
  
  });}
  
  function gaugePlot(Team){
    d3.json("../static/js/NBA.json").then(function(data) {
  
      // find the object that matches the id entered then grab the list with [0] and identify the value of the key with wfreq.
    var teamRev = []
    var teamName = []
      for (var i = 0; i < 29; i++) {

        if (Team === data.Team[i]) {
          teamRev.push(data.Revenue[i])[0];
          teamName.push(data.Team[i])[0];
        }
      }
      console.log(teamRev)
        // gauge plot
        console.log(Team)
  
      var data = [
        {
          domain: { x: [0, 1], y: [0, 1] },
          value: teamRev[0],
          title: `${teamName[0]} Revenue`,
          type: "indicator",
          mode: "gauge+number",
          gauge: {
            axis: { range: [null, 3000000000], color: "blue" },
            bar: { color: "rgb(0,30,110)", thickness: 0.25 },
            steps: [
              { range: [0, 10000000], color: "rgba(0, 150, 50, 0.1)"},
              { range: [250000000, 500000000], color: "rgba(0, 150, 50, 0.2)" },
              { range: [500000000, 100000000], color: "rgba(0, 150, 50, 0.3)" },
              { range: [100000000, 250000000], color: "rgba(0, 150, 50, 0.4)" },
              { range: [250000000, 500000000], color: "rgba(0, 150, 50, 0.5)" },
              { range: [500000000, 1000000000], color: "rgba(0, 150, 50, 0.6)" },
              { range: [1000000000, 1500000000], color: "rgba(0, 150, 50, 0.7)" },
              { range: [1500000000, 2000000000], color: "rgba(0, 150, 50, 0.8)" },
              { range: [2000000000, 2500000000], color: "rgba(0, 150, 50, 0.9)" },
              { range: [2500000000, 3000000000], color: "rgba(0, 150, 50, 1)" }
            ],
            threshold: {
              line: { color: "red", width: 4 },
              thickness: 0.75
            }
          }
        }
      ];
      
      var layout = { width: 525, height: 450, margin: { t: 0, b: 0, l:1 }, 
      };
        Plotly.newPlot('gauge', data, layout);
    });
  }
  
  init();
  // d3.json('/api/Visuals').then(data=>{
//     console.log(data);
// })

function init() {
    d3.json("../static/js/MLS.json").then((data)=> {
        // loop through names object and grab all the ids/names and eppend them to demographics dropdown

        for (var i = 0; i < 22; i++) {
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
    d3.json("../static/js/MLS.json").then(function(data) {

      // tell JS where you want to put the new list of elements
      var panel = d3.select("#sample-metadata");
  
    for (var i = 0; i < 22; i++) {
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
        console.log(data.population[i]);
      }
      // clear the output
      panel.html("");
    }
    }
     );
  }
  
  
  function buildPlot(Team) {
    d3.json("../static/js/MLS.json").then(function(data) {
  
 
      var winning = [];
      for (var i = 0; i < 22; i++) {
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

  });}
  
  function gaugePlot(Team){
    d3.json("../static/js/MLS.json").then(function(data) {
  
      // find the object that matches the id entered then grab the list with [0] and identify the value of the key with wfreq.
      var teamRev = []
      var teamName = []
        for (var i = 0; i < 22; i++) {

          if (Team === data.Team[i]) {
            teamRev.push(data.Revenue[i])[0];
            teamName.push(data.Team[i])[0];
          }
        }
        
        console.log(teamRev)
          // gauge plot
      var data = [
        {
          domain: { x: [0, 1], y: [0, 1] },
          value: teamRev[0],
          title:  `${teamName[0]} Revenue`,
          type: "indicator",
          mode: "gauge+number",
          gauge: {
            axis: { range: [null, 63000000], color: "blue" },
            bar: { color: "rgb(0,30,110)", thickness: 0.25 },
            steps: [
              { range: [0, 15000000], color: "rgba(0, 150, 50, 0.1)"},
              { range: [15000000, 20000000], color: "rgba(0, 150, 50, 0.2)" },
              { range: [20000000, 25000000], color: "rgba(0, 150, 50, 0.3)" },
              { range: [25000000, 30000000], color: "rgba(0, 150, 50, 0.4)" },
              { range: [30000000, 35000000], color: "rgba(0, 150, 50, 0.5)" },
              { range: [35000000, 40000000], color: "rgba(0, 150, 50, 0.6)" },
              { range: [40000000, 45000000], color: "rgba(0, 150, 50, 0.7)" },
              { range: [45000000, 50000000], color: "rgba(0, 150, 50, 0.8)" },
              { range: [50000000, 55000000], color: "rgba(0, 150, 50, 0.9)" },
              { range: [55000000, 63000000], color: "rgba(0, 150, 50, 1)" }
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
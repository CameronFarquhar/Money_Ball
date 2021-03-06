  // d3.json('/api/Visuals').then(data=>{
//     console.log(data);
// })

function init() {
  // d3.json("/api/NBA").then((data)=> {
    d3.json("../static/js/Data/NBA.json").then((data)=> {

        // loop through names object and grab all the ids/names and eppend them to demographics dropdown

        for (var i = 0; i < 29; i++) {
            console.log(data.Team[i])
                    d3.select("#selDataset")
                    .append("option")
                    .text(data.Team[i])
                    .property("value");
        }

        // apply an ID for the intial plots
        // buildPlot(data.Team[0]);
        demographics(data.Team[0]);
        gaugePlot(data.Team[0]);
        bulletPlot(data.Team[0]);
        revenuePlot(data.Team[0]);
    });
  };
  
  function optionChanged(Team){
    // buildPlot(Team);
    demographics(Team);
    gaugePlot(Team);
    bulletPlot(Team);
    revenuePlot(Team);
  };
  
  function demographics(Team){
    // d3.json("/api/NBA").then((data)=> {
    d3.json("../static/js/Data/NBA.json").then((data)=> {

      // tell JS where you want to put the new list of elements
      var panel = d3.select("#sample-metadata");
  
    for (var i = 0; i < 29; i++) {
      // loop through data and append specified team info to panel
      if (Team === data.Team[i]) {
        panel.append("li").text("City : " + data.City[i]);
        panel.append("li").text("State : " + data.State[i]);
        panel.append("li").text("Population: " + data.Population[i]);
        panel.append("li").text("Median Income: $ " + data.Income[i]);
        panel.append("li").text("Team Revenue: $" + data.Revenue[i]);
        panel.append("li").text("Total Points Scored: " + data.Points_For[i]);
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
  
  function revenuePlot(Team) {
    // d3.json("/api/NBA").then((data)=> {
    d3.json("../static/js/Data/NBA.json").then((data)=> {
    
      var totalRev = [];
      var totalPoints = [];
      var totalPop = [];
      var totalGames = [];
      var totalIncome = [];
      for (var i = 0; i < 29; i++) {
  // loop through data and append specified team info to panel
        if (Team === data.Team[i]) {
          totalRev.push(data.Revenue[i]);
          totalPoints.push(data.Points_For[i]);
          totalPop.push(data.Population[i]);
          totalGames.push(data.Games[i]);
          totalIncome.push(data.Income[i]);
    }
  }


  console.log(totalRev[0]/totalPoints[0])
    var dolPerPoint = totalRev[0]/totalPoints[0];
    var dolPerCap = totalRev[0]/totalPop[0];
    var dolPerGame = totalRev[0]/totalGames[0];
    var dolPerIncome = totalRev[0]/totalIncome[0];


  var trace1  = 
  {
    x: ['$/Points(x10)', '$/Game(x1000)','$/Capita', '$/Income'],
    y: [dolPerPoint/10, dolPerGame/1000,dolPerCap, dolPerIncome],
    marker:{
      color: ['rgba(200,0,0,0.7)', 'rgba(0,250,250,0.7)', 'rgba(0,0,200,0.7)', 'rgba(150,250,0,0.7)']
    },
    type: 'bar'
  };
  
  var data = [trace1];
  
  var layout = {
  title: 'Revenue vs Points, Per Capita, Median Income and Game'
  // width: 525, height: 350, margin: { t: 0, b: 0, l:1 }, 
  };
  
  Plotly.newPlot('bar-one', data, layout);
  });}
  


//   function buildPlot(Team) {
  // d3.json("../static/js/Data/NBA.json").then((data)=> {
  // 
//             var forPoints = [];
//             var againstPoints = [];
//       for (var i = 0; i < 29; i++) {
//         // loop through data and append specified team info to panel
//         if (Team === data.Team[i]) {
//           forPoints.push(data.Points_For[i]);
//       againstPoints.push(data.Points_Against[i]);
//         }
//       }


//       var trace1  = 
//         {
//           x: ['Points Scored', 'Points Against'],
//           y: [forPoints[0], againstPoints[0]],
//           marker:{
//             color: ['rgba(0,204,50,0.7)', 'rgba(204,20,20,0.7)']
//           },
//           type: 'bar'
//         };


//       var data = [trace1];

// var layout = {
//   title: 'Least Used Feature'
// };

// Plotly.newPlot('bar-one', data, layout);
// });}



  
function bulletPlot(Team) {
  // d3.json("/api/NBA").then((data)=> {
  d3.json("../static/js/Data/NBA.json").then((data)=> {
    var winning = [];
      for (var i = 0; i < 29; i++) {
        // loop through data and append specified team info to panel
        if (Team === data.Team[i]) {
          winning.push(data.Wins_Per[i]);
        }
      }
      var teamData = data.Team
      console.log(teamData.length)

      var data = [
        {
          type: "indicator",
          mode: "number+gauge+delta",
          gauge: { 
            shape: "bullet",
            axis: {range: [null, 1]}
        },
          value: winning[0],
          domain: { x: [0, 1.5], y: [0, 1.5] },
          title: { text: "Win %" }
        }
      ];
      
      var layout = { width: 600, height: 250 };
      Plotly.newPlot('bar-two', data, layout);
  });}

  
  function gaugePlot(Team){
    // d3.json("/api/NBA").then((data)=> {
    d3.json("../static/js/Data/NBA.json").then((data)=> {
  
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
            axis: { range: [null, 3600000000], color: "blue" },
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
              { range: [2500000000, 3600000000], color: "rgba(0, 150, 50, 1)" }
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
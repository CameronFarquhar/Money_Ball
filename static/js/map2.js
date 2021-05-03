d3.csv('../static/js/Data/OK_Championships_table_Clean.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var cityName = unpack(rows, 'City'),
        cityWin = unpack(rows, '5 Major Sports Championships'),
        cityLat = unpack(rows, 'lat'),
        cityLon = unpack(rows, 'lng'),
        color = [,"rgb(255,65,54)","rgb(133,20,75)","rgb(255,133,27)","lightgrey"],
        citySize = [],
        hoverText = [];
        // scale = 50000
        

    for ( var i = 0 ; i < cityWin.length; i++) {
        var currentSize = cityWin[i];
        var currentText = cityName[i] + "<br>Championships: " + cityWin[i];
        citySize.push(currentSize);
        hoverText.push(currentText);
    }
    console.log(citySize);
    var data = [{
        type: 'scattergeo',
        locationmode: 'USA-states',
        lat: cityLat,
        lon: cityLon,
        hoverinfo: 'text',
        text: hoverText,
        marker: {
            size: citySize,
            line: {
                color: 'black',
                width: 2
            },
        }
    }];

    var layout = {
        title: 'Cities With Championship Wins',
        showlegend: false,
        geo: {
            scope: 'usa',
            projection: {
                type: 'albers usa'
            },
            showland: true,
            landcolor: 'rgb(217, 217, 217)',
            subunitwidth: 1,
            countrywidth: 1,
            subunitcolor: 'rgb(255,255,255)',
            countrycolor: 'rgb(255,255,255)'
        },
    };

    Plotly.newPlot("map", data, layout, {showLink: false});

});

// example code found at https://plotly.com/javascript/bubble-maps/
let bar_route_url = "http://127.0.0.1:3009/api/v1.0/covid_bar"

let cdc_url = "http://127.0.0.1:3009/cdc_data"

//console.log(bar_route_url)
d3.json(bar_route_url).then((data) => {

//console.log(data)
let states = []
let numbers = []
for (i = 0; i < data.length; i++) {
  states.push(data[i][0])
   numbers.push(data[i][1])
} 
//console.log(states)
//console.log(numbers)
  
var data = [
  {
    x: states,
    y: numbers,
    type: 'bar'
  }
];

Plotly.newPlot('bar', data);

})

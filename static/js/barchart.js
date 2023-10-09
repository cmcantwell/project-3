let bar_route_url = "http://127.0.0.1:5000/api/v1.0/covid_bar"

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
let layout = {
        title: "Total Vaccines Administered by State, 2021-2023",
        legend: False
}
Plotly.newPlot('barChart', data, layout);

})

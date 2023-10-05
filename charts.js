let bar_route_url = "http://127.0.0.1:3009/api/v1.0/covid_bar"

let age_url = "http://127.0.0.1:3009/api/v1.0/age_bar"

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
let layout = {
        title: "Total Vaccines Administered by State, 2021-2023",
        legend: False
}
Plotly.newPlot('bar', data, layout);

})

d3.json(age_url).then((data) => {
    let x = ["Age 5 Plus", "Age 12 Plus", "Age 18 Plus", "Age 65 Plus"]
    let y = data
    let data1 = [
        {
            x: x,
            y: y,
            type: 'bar'
        }
    ];
let layout = {
        title: "Total Vaccines Given by Age Group, 2021 - 2023",
        legend: False
}
Plotly.newPlot('bar', data, layout)

})




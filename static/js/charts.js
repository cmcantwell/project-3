import Chart from 'chart.js/auto'

const url = 'https://data.cdc.gov/resource/unsk-b7fc.json'
d3.csv


d3.json(url).then(function(data) {
    console.log(data);
});

new Chart (
    document.getElementById('vaccinations'),
    {
        type: 'bar',
        data: {
            labels: 
            datasets: [
                {
                    label: ''
                    data:
                }
            ]
        }    }
)

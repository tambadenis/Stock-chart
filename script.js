Highcharts.getJSON('https://demo-live-data.highcharts.com/aapl-c.json', function (data) {
    // Create the chart
    Highcharts.stockChart('container', {
        rangeSelector: {
            selected: 1
        },

        title: {
            tecontainert: 'AAPL Stock Price'
        },

        series: [{
            name: 'AAPL',
            data: data,
            tooltip: {
                valueDecimals: 2
            }
        }]
    });
});

function showChart() {
  let container = document.getElementById("container");
  let main = document.getElementById("main");
  if (main.style.display !== "none") {
    main.style.display = "none";
    container.style.display = "block";
  }
}
// Get context with jQuery - using jQuery's .get() method.
var salesChartCanvas = $("#salesChart").get(0).getContext("2d");
// This will get the first returned node in the jQuery collection.
var salesChart = new Chart(salesChartCanvas);

var salesChartData = {
  labels: ["Internal", "Direct", "Social", "Search", "Other"],
  datasets: [
    {
      label: "Internal",
      fillColor: "rgba(51, 122, 183, 0.3)",
      strokeColor: "#337ab7",
      pointColor: "#337ab7",
      pointStrokeColor: "#337ab7",
      pointHighlightFill: "#ffffff",
      pointHighlightStroke: "#337ab7",
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "Direct",
      fillColor: "rgba(91, 184, 92, 0.3)",
      strokeColor: "#5cb85c",
      pointColor: "#5cb85c",
      pointStrokeColor: "#5cb85c",
      pointHighlightFill: "#ffffff",
      pointHighlightStroke: "#5cb85c",
      data: [38, 28, 50, 69, 36, 17, 100]
    },
    {
      label: "Social",
      fillColor: "rgba(217, 83, 79, 0.3)",
      strokeColor: "#d9534f",
      pointColor: "#d9534f",
      pointStrokeColor: "#d9534f",
      pointHighlightFill: "#ffffff",
      pointHighlightStroke: "#d9534f",
      data: [15, 89, 43, 32, 45, 23, 95]
    },
    {
      label: "Search",
      fillColor: "rgba(91, 192, 222, 0.3)",
      strokeColor: "#5bc0de",
      pointColor: "#5bc0de",
      pointStrokeColor: "#5bc0de",
      pointHighlightFill: "#ffffff",
      pointHighlightStroke: "#5bc0de",
      data: [4, 8, 44, 49, 56, 47, 10]
    },
    {
      label: "Other",
      fillColor: "rgba(240, 183, 78, 0.3)",
      strokeColor: "#f0ad4e",
      pointColor: "#f0ad4e",
      pointStrokeColor: "#f0ad4e",
      pointHighlightFill: "#ffffff",
      pointHighlightStroke: "#f0ad4e",
      data: [48, 58, 60, 79, 89, 93, 98]
    }
  ]
};

var salesChartOptions = {
  //Boolean - If we should show the scale at all
  showScale: true,
  //Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines: false,
  //String - Colour of the grid lines
  scaleGridLineColor: "rgba(0,0,0,.05)",
  //Number - Width of the grid lines
  scaleGridLineWidth: 1,
  //Boolean - Whether to show horizontal lines (except X axis)
  scaleShowHorizontalLines: true,
  //Boolean - Whether to show vertical lines (except Y axis)
  scaleShowVerticalLines: true,
  //Boolean - Whether the line is curved between points
  bezierCurve: true,
  //Number - Tension of the bezier curve between points
  bezierCurveTension: 0.3,
  //Boolean - Whether to show a dot for each point
  pointDot: true,
  //Number - Radius of each point dot in pixels
  pointDotRadius: 2.5,
  //Number - Pixel width of point dot stroke
  pointDotStrokeWidth: .1,
  //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
  pointHitDetectionRadius: 20,
  //Boolean - Whether to show a stroke for datasets
  datasetStroke: true,
  //Number - Pixel width of dataset stroke
  datasetStrokeWidth: 2,
  //Boolean - Whether to fill the dataset with a color
  datasetFill: true,
  //String - A legend template
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",
  //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
  maintainAspectRatio: true,
  //Boolean - whether to make the chart responsive to window resizing
  responsive: true
};

//Create the line chart
salesChart.Line(salesChartData, salesChartOptions);





/*Small charts*/

      window.onload = function() {
        chart1();
        chart2();
        chart3();
        chart4();
        chart5();
        chart6();
        chart7();
        chart8();
        chart9();
        chart10();
        chart11();
        chart12();
        chart13();
        chart14();
        chart15();
        chart16();
        chart17();
        chart18();
        chart19();
        chart20();
      };

      function chart1() {
        var ctx = $("#small-chart-1").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [49, 47, 81]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }

      function chart2() {
        var ctx = $("#small-chart-2").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [80, 80, 80]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }

      function chart3() {
        var ctx = $("#small-chart-3").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [5, 40, 80]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }

      function chart4() {
        var ctx = $("#small-chart-4").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [80, 100, 40]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }

      function chart5() {
        var ctx = $("#small-chart-5").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [1, 2, 3]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }

      function chart6() {
        var ctx = $("#small-chart-6").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [60, 40, 80]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }

      function chart7() {
        var ctx = $("#small-chart-7").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [80, 80, 10]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }

      function chart8() {
        var ctx = $("#small-chart-8").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [80, 80, 100]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }

      function chart9() {
        var ctx = $("#small-chart-9").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [70, 79, 80]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }

      function chart10() {
        var ctx = $("#small-chart-10").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [76, 81, 76]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }

      function chart11() {
        var ctx = $("#small-chart-11").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [49, 47, 81]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }

      function chart12() {
        var ctx = $("#small-chart-12").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [80, 80, 80]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }

      function chart13() {
        var ctx = $("#small-chart-13").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [5, 40, 80]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }

      function chart14() {
        var ctx = $("#small-chart-14").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [80, 100, 40]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }

      function chart15() {
        var ctx = $("#small-chart-15").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [1, 2, 3]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }

      function chart16() {
        var ctx = $("#small-chart-16").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [60, 40, 80]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }

      function chart17() {
        var ctx = $("#small-chart-17").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [80, 80, 10]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }

      function chart18() {
        var ctx = $("#small-chart-18").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [80, 80, 100]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }

      function chart19() {
        var ctx = $("#small-chart-19").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [70, 79, 80]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }

      function chart20() {
        var ctx = $("#small-chart-20").get(0).getContext("2d");

        var data = {
          labels: ["Позавчера", "Вчера", "Сегодня"],
          datasets: [
            {
              strokeColor: "#505050",
              fillColor: "#d8d8d8",
              data: [76, 81, 76]
            }
          ]
        }
        var options = {
          animation: false,
          showScale: false,
          responsive: true,
          showTooltips: false,
          pointDot : false,
          scaleBackdropPaddingY : 0,
          scaleBackdropPaddingX : 0
        }

        var myNewChart = new Chart(ctx).Line(data, options);
      }






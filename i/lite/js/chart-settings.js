$(function() {
    $(".sp").knob({
        'readOnly': true,
        'min':0,
        'max':800000,
        'width': 250,
        'height': 120,
        'thickness': 0.2,
        font : 'Roboto',
        inputColor : '#333333'
    });
});



$(function () {
    var f = $(document).find("#trafficGraph");
    f.length > 0 && Morris.Area({
        element: f,
        lineColors: ["#337ab7", "#5bc0de", "#5cb85c", "#d9534f", "#f0ad4e"],
        data: [
            {period: '15 апр', internal: 10284, direct: 12735, other: 12543, search: 8907, social: 3020},
            {period: '4:00', internal: 2778, direct: 2294, other: 2441, search: 2647, social: 2647},
            {period: '5:00', internal: 4912, direct: 1969, other: 2501, search: 2647, social: 2647},
            {period: '6:00', internal: 3767, direct: 3597, other: 5689, search: 2647, social: 2647},
            {period: '7:00', internal: 6810, direct: 1914, other: 2293, search: 2647, social: 2647},
            {period: '8:00', internal: 5670, direct: 4293, other: 1881, search: 2647, social: 2647},
            {period: '9:00', internal: 4820, direct: 3795, other: 1588, search: 2647, social: 2647},
            {period: '10:00', internal: 15073, direct: 5967, other: 5175, search: 2647, social: 2647},
            {period: '11:00', internal: 10687, direct: 4460, other: 2028, search: 2647, social: 2647},
            {period: '12:00', internal: 30432, direct: 5713, other: 1791, search: 2647, social: 10647}
        ],
        xkey: 'period',
        ykeys: ['internal', 'direct', 'other', 'search', 'social'],
        labels: ['Internal', 'Direct', 'Other', 'Search', 'Social'],
        parseTime: false,
        scaleLabel: false,
        lineWidth: 1,
        padding: 6,
        grid: false,
        axes: 'x',
        pointSize: 2,
        resize: true,
        hideHover: 'auto'
    });
});

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






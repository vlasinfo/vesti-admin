/* Dropdown */
/*Speedometer views*/
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


/*Main Graph Traffic*/
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

/* Social graph */

$(function () {
    var f = $(document).find("#social-chart");
    f.length > 0 && Morris.Donut({
        element: f,
        resize: true,
        colors: ["#3b5998", "#00aced", "#dd4b39", "#45668e", "#ed812b"],
        data: [
            {label: "Facebook", value: 8304},
            {label: "Twitter", value: 2304},
            {label: "Google", value: 1902},
            {label: "Вконтакте", value: 3094},
            {label: "Одноклассники", value: 2839}
        ],
        hideHover: 'auto',
        labelColor: '#333333'
    });
});


/* Small graph */

$('#small-chart-1, #small-chart-2, #small-chart-3, #small-chart-4, #small-chart-5, #small-chart-6, #small-chart-7, #small-chart-8, #small-chart-9, #small-chart-10, #small-chart-11, #small-chart-12, #small-chart-13, #small-chart-14, #small-chart-15, #small-chart-16, #small-chart-17, #small-chart-18, #small-chart-19, #small-chart-20, #small-chart-21, #small-chart-22, #small-chart-23, #small-chart-24, #small-chart-25, #small-chart-26, #small-chart-27, #small-chart-28, #small-chart-29, #small-chart-30').sparkline('html',
    {   height: '40',
        width: '74',
        lineColor: '#505050',
        fillColor: '#d8d8d8',
        highlightLineColor: '#337ab7',
        highlightSpotColor: '#5cb85c',
        minSpotColor: false,
        maxSpotColor: false,
        spotColor: '#505050',
        spotRadius: 2
    });


/* Datepicker */

$(function () {

    $('#dateRange').daterangepicker({
        "autoApply": true,
        "ranges": {
            "Сегодня": [
                "2016-04-19",
                "2016-04-19"
            ],
            "Вчера": [
                "",
                "2016-04-18"
            ],
            "За неделю": [
                "2016-04-13",
                "2016-04-19"
            ],
            "За месяц": [
                "2016-03-21",
                "2016-04-19"
            ],
            "В этом месяце": [
                "2016-03-31",
                "2016-04-30"
            ]
        },
        "locale": {
            "separator": " - ",
            "applyLabel": "Применить",
            "cancelLabel": "Отмена",
            "fromLabel": "С",
            "toLabel": "До",
            "customRangeLabel": "Указать",
            "daysOfWeek": [
                "Вс",
                "Пн",
                "Вт",
                "Ср",
                "Чт",
                "Пт",
                "Сб"
            ],
            "monthNames": [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь"
            ],
            "firstDay": 1
        },
        "linkedCalendars": false,
        "startDate": "04/13/2016",
        "endDate": "04/19/2016"
    })

});


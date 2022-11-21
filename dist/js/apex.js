// Summary Indeks KPSF - Nasional
var options = {
    series: [2.96, 3.16, 2.75],
    chart: {
        type: "donut",
        width: "100%",
    },
    labels: ["Index 4P NAS", "Index 4P OPR", "Index 4P SUP"],
    data: ["asd", "va", "zxc"],
    dataLabels: {
        enabled: false,
    },
    legend: {
        position: "bottom",
        formatter: function(seriesName, opts, data) {
            return (
                "<span>" +
                seriesName +
                "</span>" +
                "<div>" +
                "<h5 class='text-bold m-0'>" +
                opts.w.globals.series[opts.seriesIndex] +
                "</h5>" +
                "</div>" +
                data
            );
        },
    },
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

//   Trend Achivement KPSF YTD by Month
const dynamicWidth = 24 * 50;
const chartWidth =
    dynamicWidth < window.innerWidth ? "100%" : dynamicWidth;
var options = {
    series: [{
            data: [
                2.58, 2.79, 2.67, 2.63, 2.74, 2.97, 3.25, 3.14, 3.46, 3.68, 3.59, 3.44, 3.27
            ],
        },
        {
            data: [
                2.45, 2.57, 2.49, 2.25, 2.31, 2.67, 2.87, 2.78, 2.92, 3.14, 3.12, 3.07, 2.88
            ],
        },
        {
            data: [
                2.33, 2.35, 2.32, 1.87, 1.88, 2.37, 2.50, 2.42, 2.37, 2.60, 2.65, 2.71, 2.50
            ],
        },
    ],
    chart: {
        height: 350,
        width: chartWidth,
        type: "line",
        toolbar: {
            show: false,
        },
    },
    colors: ["#50B052", "#F8C045", "#9186D0", "#FF8B8B"],
    dataLabels: {
        enabled: true,
    },
    stroke: {
        curve: "smooth",
    },
    grid: {
        show: false,
    },
    markers: {
        size: 4,
    },
    xaxis: {
        categories: [
            "Jan 2020",
            "Feb 2020",
            "Mar 2020",
            "Apr 2020",
            "Mei 2020",
            "Jun 2020",
            "Jul 2020",
            "Aug 2020",
            "Sep 2020",
            "Okt 2020",
            "Nov 2020",
            "Des 2020",
            "YTD Des",
        ],
    },
    legend: {
        show: false
    },
};

var chart = new ApexCharts(document.querySelector("#chartline"), options);
chart.render();

// Summary Indeks KPSF - Region 
var options = {
    series: [{
        data: [2.97, 2.5, 2, 1.5]
    }],
    chart: {
        height: 350,
        type: 'bar',
    },
    grid: {
        show: false,
        },
    plotOptions: {
        bar: {
            dataLabels: {
                position: 'top', // top, center, bottom
            },
        }
    },
    dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        }
    },

    xaxis: {
        categories: ["Reg 1",
        "Reg 2",
        "Reg 3",
        "Reg 4"],
        position: 'bottom',
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        crosshairs: {
            fill: {
                type: 'gradient',
                gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                }
            }
        },
        tooltip: {
            enabled: true,
        }
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function(val) {
                return val + "%";
            }
        }

    },
};

var chart = new ApexCharts(document.querySelector("#chartcolumn1"), options);
chart.render();

// Summary Region Dept. OPR
var options = {
    colors : ['#1A3B59', '#EDC000', '#FFF1A6', '#FFE600', '#D6B74A'],
    series: [     {
        name: 'Idx 4P OPR',
        data: [2.72, 2.70, 2.74, 2.76]
    },
    {
        name: 'Idx Place',
        data: [2.45, 2.49, 2.50, 2.50]
    },
    {
        name: 'Idx Process',
        data: [2.45, 2.44, 2.38, 2.46]
    },
    {
        name: 'Idx Product',
        data: [2.91, 2.81, 3.04, 3.00]
    },
    {
        name: 'Idx People',
        data: [4.00, 4.00, 4.00, 4.00]
    },
],
dataLabels: {
    style: {
      colors: ['#fff', '#000', '#000', '#000', '#000']
    }
  },
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
            show: true
        },
        zoom: {
            enabled: true
        }
    },
    grid: {
        show: false,
        },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    yaxis:{
        show : false,
      },
    xaxis: {
        categories: [
            "Reg 1",
            "Reg 2",
            "Reg 3",
            "Reg 4"
        ],
    },
    legend: {
        position: 'right',
        offsetY: 100
    },
    fill: {
        opacity: 1
    }
};

var chart = new ApexCharts(document.querySelector("#chartcolumn2"), options);
chart.render();

// Summary Region Dept. SUP
var options = {
    colors : ['#1A3B59', '#0EBF80', '#B4EDD8', '#409C70', '#0EBF80'],
    series: [     {
        name: 'Idx 4P OPR',
        data: [2.72, 2.70, 2.74, 2.76]
    },
    {
        name: 'Idx Place',
        data: [3.10, 3.09, 3.00, 3.08]
    },
    {
        name: 'Idx Process',
        data: [2.69, 2.26, 2.68, 2.63]
    },
    {
        name: 'Idx Product',
        data: [3.85, 3.89, 3.93, 3.85]
    },
    {
        name: 'Idx People',
        data: [3.85, 2.60, 3.70, 2.43]
    },
],
dataLabels: {
    style: {
      colors: ['#fff', '#000', '#000', '#000', '#000']
    }
  },
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
            show: true
        },
        zoom: {
            enabled: true
        }
    },
    grid: {
        show: false,
        },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    yaxis:{
        show : false,
      },
    xaxis: {
        categories: [
            "Reg 1",
            "Reg 2",
            "Reg 3",
            "Reg 4"
        ],
    },
    legend: {
        position: 'right',
        offsetY: 100
    },
    fill: {
        opacity: 1
    }
};

var chart = new ApexCharts(document.querySelector("#chartcolumn3"), options);
chart.render();
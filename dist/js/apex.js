// Index KPSF - Nasional
var options = {
    series: [2.96, 3.16, 2.75, 2.55],
    chart: {
        type: "donut",
        width: "100%",
        toolbar: {
            show: true,
        },
    },
    labels: ["3 Entitas", "Store", "Office", "DC" ],
    dataLabels: {
        enabled: false,
    },
  
    legend: {
        position: "bottom",
        formatter: function(seriesName, opts) {
            return (
                "<span>" +
                seriesName +
                "</span>" +
                "<div>" +
                "<h5 class='text-bold m-0'>" +
                opts.w.globals.series[opts.seriesIndex] +
                "</h5>" +
                "</div>" +
                "<p class='fz-14px'>" +
                "3.25" +
                "</p>"
            );
        },
    },
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// Index KPSF Region
var options = {
    series: [2.96, 2.96, 2.96, 2.96],
    chart: {
        type: "donut",
        width: "100%",
    },
    labels: ["Region 1", "Region 2", "Region 3", "Region 4"],
    dataLabels: {
        enabled: false,
    },
    legend: {
        fontSize: '14px',
        position: "right",
        offsetY: 80,
        formatter: function(seriesName, opts) {
            return (    
                seriesName +
                "<span class='bold ml-1 mr-1'>" +
                opts.w.globals.series[opts.seriesIndex] +
                "</span>" +
                "<img src='/dist/img/custom/down.png'>"
            );
        },
    },
    responsive: [{
        breakpoint: 1442,
        options: {
            legend: {
                position: 'bottom',
                offsetX: 0,
                offsetY: 0
            }
        }
    }],
};
var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();

//   Trend Achievement KPSF YTD
const dynamicWidth = 24 * 50;
const chartWidth =
    dynamicWidth < window.innerWidth ? "100%" : dynamicWidth;
var options = {
    series: [{
            name: '3 Entitas',
            data: [
                2.58, 2.79, 2.67, 2.63, 2.74, 2.97, 3.25, 3.14, 3.46, 3.68, 3.59, 3.44, 3.27
            ],
        },
        {
            name: 'Store',
            data: [
                2.45, 2.57, 2.49, 2.25, 2.31, 2.67, 2.87, 2.78, 2.92, 3.14, 3.12, 3.07, 2.88
            ],
        },
        {
            name: 'Office',
            data: [
                2.33, 2.35, 2.32, 1.87, 1.88, 2.37, 2.50, 2.42, 2.37, 2.60, 2.65, 2.71, 2.50
            ],
        },
        {
            name: 'DC',
            data: [
                3.33, 3.35, 3.33, 1.87, 1.88, 3.37, 3.50, 3.43, 3.37, 3.60, 3.65, 3.71, 3.50
            ],
        },
    ],
    chart: {
        height: 350,
        width: chartWidth,
        type: "line",
        toolbar: {
            show: true,
        },
    },
    colors: ['rgb(0, 143, 251)', 'rgb(0, 227, 150)','rgb(254, 176, 25)', 'rgb(255, 69, 96)'],
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
        show: true
    },
};

var chart = new ApexCharts(document.querySelector("#chartline"), options);
chart.render();

//   Trend Achivement KPSF YTD by Month
var options = {
    series: [{
            name: '3 Entitas',
            data: [
                2.58, 2.79, 2.67, 2.63, 2.74, 2.97, 3.25, 3.14, 3.46, 3.68, 3.59, 3.44, 3.27
            ],
        },
        {
            name: 'Store',
            data: [
                2.45, 2.57, 2.49, 2.25, 2.31, 2.67, 2.87, 2.78, 2.92, 3.14, 3.12, 3.07, 2.88
            ],
        },
        {
            name: 'Office',
            data: [
                2.33, 2.35, 2.32, 1.87, 1.88, 2.37, 2.50, 2.42, 2.37, 2.60, 2.65, 2.71, 2.50
            ],
        },
        {
            name: 'DC',
            data: [
                3.33, 3.35, 3.33, 1.87, 1.88, 3.37, 3.50, 3.43, 3.37, 3.60, 3.65, 3.71, 3.50
            ],
        },
    ],
    chart: {
        height: 350,
        width: chartWidth,
        type: "line",
        toolbar: {
            show: true,
        },
    },
    colors: ['rgb(0, 143, 251)', 'rgb(0, 227, 150)','rgb(254, 176, 25)', 'rgb(255, 69, 96)'],
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
        show: true
    },
};
var chart = new ApexCharts(document.querySelector("#chartline2"), options);
chart.render();
//   Trend YTD Index KSPF by Month - Dept. Operation
var options = {
    series: [{
            name: 'Index People',
            data: [
                1.68, 1.75, 1.65, 1.00, 1.00, 1.75, 1.75, 1.75, 1.75, 1.75, 1.75, 1.75, 1.68
            ],
        },
        {
            name: 'Index Product',
            data: [
                2.08, 2.08, 2.06, 2.09, 2.10, 2.18, 2.27, 2.27, 2.40, 2.62, 2.73, 2.78, 2.08
            ],
        },
        {
            name: 'Index Process',
            data: [
                2.66, 2.66, 2.68, 3.15, 3.15, 2.64, 2.96, 2.72, 2.73, 2.98, 3.01, 3.16, 2.66
            ],
        },
        {
            name: 'Index Place',
            data: [
                4.00, 4.00, 4.00, 0.00, 0.00, 4.00, 4.00, 4.00, 4.00, 4.00, 4.00, 4.00, 4.00
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
    colors: ['#EDC000', '#FFF1A6','#FFE600','#D6B74A'],
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
        show: true,
        position: "top"
    },
};

var chart = new ApexCharts(document.querySelector("#chartline3"), options);
chart.render();
//   Trend YTD Index KSPF by Month - Dept. Operation
var options = {
    series: [{
            name: 'Index People',
            data: [
                1.68, 1.75, 1.65, 1.00, 1.00, 1.75, 1.75, 1.75, 1.75, 1.75, 1.75, 1.75, 1.68
            ],
        },
        {
            name: 'Index Product',
            data: [
                2.08, 1.48, 2.06, 2.09, 2.10, 2.18, 2.27, 2.27, 2.40, 2.62, 2.73, 2.78, 2.08
            ],
        },
        {
            name: 'Index Process',
            data: [
                2.66, 2.66, 2.18, 1.15, 2.15, 2.64, 2.96, 2.72, 2.73, 2.98, 3.01, 3.16, 2.66
            ],
        },
        {
            name: 'Index Place',
            data: [
                1.00, 1.00, 1.00, 3.00, 3.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00
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
    colors: ['#0EBF80', '#B4EDD8','#409C70','#00CFAA'],
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
        show: true,
        position: "top"
    },
};

var chart = new ApexCharts(document.querySelector("#chartline4"), options);
chart.render();


// Index KPSF 3 Entitas
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

// Index KPSF Store
var options = {
    colors : ['#00e396', '#01cf8b', '#02b97c', '#01a16c', '#018559'],
    series: [     {
        name: '4P OPR',
        data: [2.72, 2.70, 2.74, 2.76]
    },
    {
        name: 'Place',
        data: [2.45, 2.49, 2.50, 2.50]
    },
    {
        name: 'Process',
        data: [2.45, 2.44, 2.38, 2.46]
    },
    {
        name: 'Product',
        data: [2.91, 2.81, 3.04, 3.00]
    },
    {
        name: 'People',
        data: [4.00, 4.00, 4.00, 4.00]
    },
],
dataLabels: {
    style: {
      colors: ['#000', '#000', '#fff', '#fff', '#fff']
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
        position: 'top',
        offsetY: 20
    },
    fill: {
        opacity: 1
    }
};

var chart = new ApexCharts(document.querySelector("#chartcolumn2"), options);
chart.render();

// Index KPSF Office
var options = {
    colors : ['#feb019', '#e29f19', '#d1941a', '#bb8417', '#9e7014'],
    series: [     {
        name: '4P OPR',
        data: [2.72, 2.70, 2.74, 2.76]
    },
    {
        name: 'Place',
        data: [3.10, 3.09, 3.00, 3.08]
    },
    {
        name: 'Process',
        data: [2.69, 2.26, 2.68, 2.63]
    },
    {
        name: 'Product',
        data: [3.85, 3.89, 3.93, 3.85]
    },
    {
        name: 'People',
        data: [3.85, 2.60, 3.70, 2.43]
    },
],
dataLabels: {
    style: {
        colors: ['#000', '#000', '#fff', '#fff', '#fff']
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
        position: 'top',
        offsetY: 20
    },
    fill: {
        opacity: 1
    }
};

var chart = new ApexCharts(document.querySelector("#chartcolumn3"), options);
chart.render();

// Index KPSF DC
var options = {
    colors : ['#ff4560', '#e23c55', '#c43449', '#a12b3d', '#802331'],
    series: [     {
        name: '4P OPR',
        data: [2.72, 2.70, 2.74, 2.76]
    },
    {
        name: 'Place',
        data: [3.10, 3.09, 3.00, 3.08]
    },
    {
        name: 'Process',
        data: [2.69, 2.26, 2.68, 2.63]
    },
    {
        name: 'Product',
        data: [3.85, 3.89, 3.93, 3.85]
    },
    {
        name: 'People',
        data: [3.85, 2.60, 3.70, 2.43]
    },
],
dataLabels: {
    style: {
        colors: ['#000', '#000', '#fff', '#fff', '#fff']
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
        position: 'top',
        offsetY: 20
    },
    fill: {
        opacity: 1
    }
};

var chart = new ApexCharts(document.querySelector("#chartcolumn6"), options);
chart.render();

// Index KPSF Dept. Operation
var options = {
    colors: ['#EDC000', '#FFF1A6', '#FFE500', '#D6B74A'],
    series: [{
        data: [2.97, 2.97, 1.50, 4.00]
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
            distributed: true,
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
    legend: {
        show: false
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
        }
    },
};

var chart = new ApexCharts(document.querySelector("#chartdeptoperation"), options);
chart.render();

// Index KPSF Dept. Support
var options = {
    colors: ['#0EBF80', '#B4EDD8', '#409C70', '#00CFAA'],
    series: [{
        data: [2.97, 2.97, 1.50, 4.00]
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
            distributed: true,
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
    legend: {
        show: false
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
        }
    },
};

var chart = new ApexCharts(document.querySelector("#chartdeptsupport"), options);
chart.render();
// Index KPSF Dept. Support
var options = {
    colors: ['#fa3250', '#e62f4a', '#ce2b43', '#af2439'],
    series: [{
        data: [2.97, 2.97, 1.50, 4.00]
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
            distributed: true,
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
    legend: {
        show: false
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
        }
    },
};

var chart = new ApexCharts(document.querySelector("#chartdeptdc"), options);
chart.render();

// Index KPSF Cabang
var options = {
    colors: ['#FFE600', '#0EBF80'],
    series: [{
    name: 'Dep. OPR',
    data: [2.80, 2.50, 2.60, 3.00]
  }, {
    name: 'Dep. SUP',
    data: [2.50, 3.30, 3.50, 3.20]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Pekan Baru', 'Bala Raja', 'Lampung', 'Medan', 'Kota Bumi'],
  },
  fill: {
    opacity: 1
  },
  };

  var chart = new ApexCharts(document.querySelector("#chartcolumncabang"), options);
  chart.render();


//   Area Chart
var options = {
    chart: {
      height: 320,
      type: "area",
      toolbar: {
        show: false
    },
    },
    dataLabels: {
      enabled: true,   
          formatter: (val) => {
            return val + '%'
          }
    },
    series: [
      {
        name: "Nasional",
        data: [{
            x: 'Jan 2020',
            y: [0.87]
          },{
            x: 'Feb 2020',
            y: [0.77]
          },{
            x: 'Mar 2020',
            y: [0.20]
          },{
            x: 'Apr 2020',
            y: [0.49]
          },{
            x: 'Mei 2020',
            y: [0.48]
          },{
            x: 'Jun 2020',
            y: [1.03]
          },{
            x: 'Jul 2020',
            y: [1.06]
          },{
            x: 'Aug 2020',
            y: [0.95]
          },{
            x: 'Sep 2020',
            y: [0.982]
          },{
            x: 'Okt 2020',
            y: [0.68]
          },{
            x: 'Nov 2020',
            y: [0.47]
          },{
            x: 'Des 2020',
            y: [0.19]
          },{
            x: 'YTD Des',
            y: [0.70]
          }]
      }
    ],
    
    stroke: {
        curve: 'straight'
      },
      markers: {
        size: 5,
        hover: {
          size: 9
        }
      },
      colors: ['#FF7A00'],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100, 100]
      }
    },
    
    yaxis: {
        labels: {
          formatter: (val) => {
            return val + '%'
          }
        }
      },  grid: {
        borderColor: '#f1f1f1',
      }
  };
  
  var chart = new ApexCharts(document.querySelector("#areachart1"), options);
  
  chart.render();
  
//   Mix Line Chart

var options = {
    series: [{
      name: "Nasional",
      data: [89, 29, 24, 45, 66, 70, 74, 65, 30, 25, 20, 70, 50]
    },
    {
      name: "Balaraja",
      data: [80, 20, 15, 38, 59, 62, 66, 58, 24, 18, 12, 65, 45]
    }
  ],
    chart: {
    height: 320,
    type: 'line',
    toolbar: {
      show: false
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  colors: ['#FF7A00', '#5CCDD3'],
  legend: {
    tooltipHoverFormatter: function(val, opts) {
      return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
    }
  },
  markers: {
    size: 6,
    hover: {
      sizeOffset: 1
    },
    shape: ["square","circle"]
  },
  xaxis: {
    categories: ["Jan 2020",
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
    "YTD Des"
    ],
  },
  yaxis: {
    labels: {
      formatter: (val) => {
        return val + '%'
      }
    }
  },
  legend:{
    position:"top"
  },
  grid: {
    borderColor: '#f1f1f1',
  }
  };

  var chart = new ApexCharts(document.querySelector("#mixline1"), options);
  chart.render();
  
//   Column Chart %
var options = {
    series: [{
    name: 'Nasional',
    data: [80, 50,50,50,50,50,50,48,40,50,50,50,50,50]
  }],
    chart: {
    height: 320,
    type: 'bar',
    toolbar: false
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
    formatter: function (val) {
      return val + "%";
    },
    offsetY: -20,
    style: {
      fontSize: '12px',
      colors: ["#304758"]
    }
  },
  colors: ['#FF7A00'],
  xaxis: {
    categories: ["Jan 2020",
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
    "YTD Des"],
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
      show: true,
      formatter: function (val) {
        return val + "%";
      }
    }
  
  },
  };

  var chart = new ApexCharts(document.querySelector("#chartcolumn4"), options);
  chart.render();

//   Line Column Chart
var options = {
    series: [{
    name: 'Balaraja',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  },
  {
    name: 'Serpong',
    type: 'column',
    data: [330, 480, 410, 620, 320, 415, 222, 111, 444, 555, 252, 126]
  }, {
    name: 'Nasional',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }],
    chart: {
    height: 320,
    type: 'line',
    toolbar: false
  },
  colors: ['#CFD4FF','#5CCDD3','#FF7A00'],
  stroke: {
    width: [0, 0, 4]
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [2]
  },
  labels: ["Jan 2020",
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
  "YTD Des"],
  yaxis: [{
  }, {
    opposite: true,
    show: false
  }]
  };

  var chart = new ApexCharts(document.querySelector("#linecolumnchart"), options);
  chart.render();

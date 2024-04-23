/*======== 16. ANALYTICS - ACTIVITY CHART ========*/

$(function () {
    var earning = document.getElementById("EarningGraph");
    if (earning !== null) {
        var earningData = [
            {
                first: [35, 65, 52, 115, 98, 185, 125,35, 65, 52, 115, 140],
                second: [40, 105, 92, 155, 138, 205, 165, 35, 65, 52, 115, 110],
            },
            // {
            //     first: [15, 65, 77, 33, 49, 100, 100],
            //     second: [20, 85, 97, 53, 69, 120, 120],
            // },
            // {
            //     first: [25, 40, 77, 55, 33, 116, 50],
            //     second: [30, 70, 107, 85, 73, 146, 80],
            // },
            // {
            //     first: [20, 44, 22, 77, 33, 151, 99],
            //     second: [60, 32, 120, 55, 19, 134, 88],
            // },
        ];

        earning.height = 280;

        var config = {
            type: "bar",
            data: {
                labels: [
                    "4 Jan",
                    "5 Jan",
                    "6 Jan",
                    "7 Jan",
                    "8 Jan",
                    "9 Jan",
                    "10 Jan",
                    "11 Jan",
                    "12 Jan",
                    "13 Jan",
                    "14 Jan",
                    "15 Jan",
                ],
                datasets: [
                    {
                        label: "Visit",
                        backgroundColor:  "rgba(32, 212, 137, 1)",
                        borderColor: "transparent",
                        data: earningData[0].first,
                        lineTension: 0,
                        pointRadius: 0,
                        borderWidth: 2,
                    },
                    {
                        label: "Sales",
                        backgroundColor: "rgba(32, 212, 137, 0.15)",
                        borderColor: "transparent",
                        data: earningData[0].second,
                        lineTension: 0,
                        // borderDash: [10, 5],
                        borderWidth: 1,
                        pointRadius: 0,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            stacked: false,
                            barPercentage: 0.8,
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                            ticks: {
                                // fontColor: "#8a909d",
                            },
                        },
                    ],
                    yAxes: [
                        {
                            stacked: false,
                            gridLines: {
                                display: false,
                                color: "#eee",
                            },
                            ticks: {
                                stepSize: 50,
                                // fontColor: "#8a909d",
                            },
                        },
                    ],
                },
                tooltips: {
                    mode: "index",
                    intersect: false,
                    titleFontColor: "#888",
                    bodyFontColor: "#555",
                    titleFontSize: 12,
                    bodyFontSize: 15,
                    backgroundColor: "rgba(256,256,256,0.95)",
                    displayColors: true,
                    xPadding: 10,
                    yPadding: 7,
                    borderColor: "rgba(220, 220, 220, 0.9)",
                    borderWidth: 2,
                    caretSize: 6,
                    caretPadding: 5,
                },
            },
        };

        var ctx = document.getElementById("EarningGraph").getContext("2d");
        var myLine = new Chart(ctx, config);

        var items = document.querySelectorAll("#user-earning .btn");
        items.forEach(function (item, index) {
            item.addEventListener("click", function () {
                config.data.datasets[0].data = earningData[index].first;
                config.data.datasets[1].data = earningData[index].second;
                myLine.update();
            });
        });
    }
});

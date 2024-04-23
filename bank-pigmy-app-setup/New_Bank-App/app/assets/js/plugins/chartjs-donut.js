//doughut chart
var ctx = document.getElementById("TotalSales");
ctx.height = 305;
new Chart(ctx, {
    type: "doughnut",
    data: {
        datasets: [
            {
                data: [33,45,22],
                backgroundColor: [
                    "rgba(32, 212, 137,1)",
                    "rgba(255, 199, 0,1)",
                    "rgba(0, 163, 255,1)",
                ],
            },
        ],
        labels: ["Direct", "Affiliate", "Referral",]
    },
    options: {
        responsive: true,
        cutoutPercentage: 80,
        maintainAspectRatio: false,
        animation: {
            animateRotate: true,
            animateScale: true,
        },
        labels: ["Direct", "Affiliate", "Referral",]
    },
    options: {
        responsive: true,
        cutoutPercentage: 80,
        maintainAspectRatio: false,
        animation: {
            animateRotate: true,
            animateScale: true,
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                usePointStyle: true,
                // fontFamily: "Segoe UI",
                fontSize: 12,
                fontColor: "#464a53",
                padding: 20,
            },
        },
    },
});

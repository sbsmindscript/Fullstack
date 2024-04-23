var gdpData = {
    "us": 34.56,
    "in": 34.56,
    "gb": 34.56,
    "tr": 34.56,
    "ru": 34.56,
}


$("#world-map").vectorMap({
    map: "world_en",
    backgroundColor: "transparent",
    borderColor: "#fff",
    color: "#eee",
    colors: { in: "rgba(89, 59, 219, 1)",
        gb: "rgba(89, 59, 219, 0.8)",
        tr: "rgba(89, 59, 219, 0.7)",
        us: "rgba(89, 59, 219, 0.6)",
        ru: "rgba(89, 59, 219, 0.5)",
    },
    onLabelShow: function(event, label, code) {
        label.text(label.text() + " (" + gdpData[code] + ")");
    },
    enableZoom: true,
    showTooltip: true,
    selectedColor: "rgba(93, 120, 255,1)",
    hoverColor: "rgba(93, 120, 255,0.8)",
});
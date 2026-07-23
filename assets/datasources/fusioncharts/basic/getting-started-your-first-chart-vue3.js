{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '420',
    dataFormat: 'json',
    dataSource: {
        // Chart Configuration
        "chart": {
            "caption": "Monthly Website Traffic",
            "subCaption": "January to June 2026",
            "xAxisName": "Month",
            "yAxisName": "Website visits",
            "numberSuffix": "",
            "formatNumberScale": "0",
            "showValues": "1",
            "usePlotGradientColor": "0",
            "showPlotBorder": "0",
            "animation": "1",
            "theme": "fusion"
        },
        // Chart Data
        "data": [{
            "label": "January",
            "value": "42000"
        }, {
            "label": "February",
            "value": "48500"
        }, {
            "label": "March",
            "value": "53000"
        }, {
            "label": "April",
            "value": "61500"
        }, {
            "label": "May",
            "value": "68000"
        }, {
            "label": "June",
            "value": "76500"
        }]
    }
}

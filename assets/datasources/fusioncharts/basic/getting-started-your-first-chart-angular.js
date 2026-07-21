{
    type: 'column2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '450',
    dataFormat: 'json',
    dataSource: {
        // Chart Configuration
        "chart": {
            "caption": "Monthly Online Sales",
            "subCaption": "January to June 2026",
            "xAxisName": "Month",
            "yAxisName": "Sales",
            "numberPrefix": "$",
            "theme": "fusion"
        },
        // Chart Data
        "data": [{
            "label": "January",
            "value": "42000"
        }, {
            "label": "February",
            "value": "51000"
        }, {
            "label": "March",
            "value": "48000"
        }, {
            "label": "April",
            "value": "61000"
        }, {
            "label": "May",
            "value": "58000"
        }, {
            "label": "June",
            "value": "67000"
        }]
    }
}

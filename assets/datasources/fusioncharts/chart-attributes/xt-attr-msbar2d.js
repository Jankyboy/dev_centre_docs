{
    type: 'msbar2d',
    renderAt: 'chart-container',
    width: '100%',
    height: '100%',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Split of Sales by Product Category",
            "subCaption": "In top 5 stores last month",
            "yAxisname": "Sales (In USD)",
            "numberPrefix": "$",
            "placevaluesInside": "1",
            "xAxisLineColor": "#999999",
            "theme": "fusion"
        },
        "categories": [{
            "category": [{
                "label": "Bakersfield Central"
            }, {
                "label": "Garden Groove harbour"
            }, {
                "label": "Los Angeles Topanga"
            }, {
                "label": "Compton-Rancho Dom"
            }, {
                "label": "Daly City Serramonte"
            }]
        }],
        "dataset": [{
            "seriesname": "Food Products",
            "data": [{
                "value": "17000"
            }, {
                "value": "19500"
            }, {
                "value": "12500"
            }, {
                "value": "14500"
            }, {
                "value": "17500"
            }]
        }, {
            "seriesname": "Non-Food Products",
            "data": [{
                "value": "25400"
            }, {
                "value": "29800"
            }, {
                "value": "21800"
            }, {
                "value": "19500"
            }, {
                "value": "11500"
            }]
        }],
        "trendlines": [{
            "line": [{
                "startvalue": "15000",
                "color": "#0075c2",
                "valueOnRight": "1",
                "displayvalue": "Avg. for{br}Food"
            }, {
                "startvalue": "22000",
                "color": "#1aaf5d",
                "valueOnRight": "1",
                "displayvalue": "Avg. for{br}Non-food"
            }]
        }]
    }
}

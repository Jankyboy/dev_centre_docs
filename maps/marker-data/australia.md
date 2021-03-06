---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Australia

#### JavaScript Alias: maps/australia


<div class="code-wrapper">
<ul class='code-tabs'>
    <li class='active'>
        <a data-toggle='new-json'>New JSON Format</a>
    </li>
    <li>
        <a data-toggle='old-json'>Old JSON Format</a>
    </li>
</ul>
<div class='tab-content'>
    
<div class='tab new-json-tab active'>
<pre><code class="language-json">
{
    "map": {
        "showshadow": "0",
        "showlabels": "0",
        "showmarkerlabels": "1",
        "fillcolor": "F1f1f1",
        "bordercolor": "CCCCCC",
        "basefont": "Verdana",
        "basefontsize": "10",
        "markerbordercolor": "000000",
        "markerbgcolor": "FF5904",
        "markerradius": "6",
        "usehovercolor": "0",
        "hoveronempty": "0",
        "showmarkertooltip": "1",
        "canvasBorderColor": "375277",
        "canvasBorderAlpha": "0"
    },
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "items": [
            {
                "id": "SW",
                "shapeid": "myCustomShape",
                "x": "200.33",
                "y": "142.3",
                "label": "Canberra ",
                "labelpos": "right"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "209.41",
                "y": "136.24",
                "label": "Sydney",
                "labelpos": "top"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "181.15",
                "y": "154.41",
                "label": "Melbourne",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "223.54",
                "y": "100.92",
                "label": "Brisbane"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "20.68",
                "y": "121.1",
                "label": "Perth"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "145.83",
                "y": "141.29",
                "label": "Adelaide"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "195.28",
                "y": "181.66",
                "label": "Hobart"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "104.45",
                "y": "19.17",
                "label": "Darwin",
                "labelpos": "bottom"
            }
        ]
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>


<p class='text-success'>New JSON format for map marker data.</p>

</div>
<div class='tab old-json-tab'>
<pre><code class="language-json">
{
    "map": {},
    "markers": {
        "shapes": [
            {
                "id": "myCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,333333",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "4"
            },
            {
                "id": "newCustomShape",
                "type": "circle",
                "fillcolor": "FFFFFF,000099",
                "fillpattern": "radial",
                "showborder": "0",
                "radius": "3"
            }
        ],
        "definition": [
            {
                "id": "SW",
                "x": "200.33",
                "y": "142.3",
                "label": "Canberra ",
                "labelpos": "right"
            },
            {
                "id": "01",
                "x": "209.41",
                "y": "136.24",
                "label": "Sydney",
                "labelpos": "top"
            },
            {
                "id": "02",
                "x": "181.15",
                "y": "154.41",
                "label": "Melbourne",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "223.54",
                "y": "100.92",
                "label": "Brisbane"
            },
            {
                "id": "04",
                "x": "20.68",
                "y": "121.1",
                "label": "Perth"
            },
            {
                "id": "06",
                "x": "145.83",
                "y": "141.29",
                "label": "Adelaide"
            },
            {
                "id": "07",
                "x": "195.28",
                "y": "181.66",
                "label": "Hobart"
            },
            {
                "id": "08",
                "x": "104.45",
                "y": "19.17",
                "label": "Darwin",
                "labelpos": "bottom"
            }
        ],
        "application": [
            {
                "id": "SW",
                "shapeid": "myCustomShape"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape"
            }
        ]
    }
}
</code><button class='btn btn-outline-secondary btn-copy' title='Copy to clipboard'>COPY</button>
</pre>


<p class='text-success'>Old JSON format for map marker data, using separate application and definition blocks.</p>

</div>
    
</div>
</div>

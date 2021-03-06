---
# Front matter (even empty) required for Jekyll to process
---

#### Map Name: Afghanistan

#### JavaScript Alias: maps/afghanistan


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
                "id": "KA",
                "shapeid": "myCustomShape",
                "x": "388.77",
                "y": "207.41",
                "label": "Kabul",
                "labelpos": "left"
            },
            {
                "id": "01",
                "shapeid": "newCustomShape",
                "x": "358.11",
                "y": "72.54",
                "label": "Shir Khan"
            },
            {
                "id": "02",
                "shapeid": "newCustomShape",
                "x": "364.24",
                "y": "92.97",
                "label": "Kondoz",
                "labelpos": "left"
            },
            {
                "id": "03",
                "shapeid": "newCustomShape",
                "x": "280.46",
                "y": "95.02",
                "label": "Mazar-e-Sharif",
                "labelpos": "left"
            },
            {
                "id": "04",
                "shapeid": "newCustomShape",
                "x": "403.07",
                "y": "183.91",
                "label": "Bagram",
                "labelpos": "right"
            },
            {
                "id": "05",
                "shapeid": "newCustomShape",
                "x": "434.74",
                "y": "216.6",
                "label": "Jalalabad",
                "labelpos": "left"
            },
            {
                "id": "06",
                "shapeid": "newCustomShape",
                "x": "321.33",
                "y": "263.6",
                "label": "Ghazni",
                "labelpos": "right"
            },
            {
                "id": "07",
                "shapeid": "newCustomShape",
                "x": "228.35",
                "y": "390.3",
                "label": "Kandahar",
                "labelpos": "top"
            },
            {
                "id": "08",
                "shapeid": "newCustomShape",
                "x": "62.83",
                "y": "379.06",
                "label": "Zaranj",
                "labelpos": "left"
            },
            {
                "id": "11",
                "shapeid": "newCustomShape",
                "x": "87.35",
                "y": "165.52",
                "label": "Towraghondi",
                "labelpos": "left"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape",
                "x": "80.2",
                "y": "242.15",
                "label": "Shindand",
                "labelpos": "left"
            },
            {
                "id": "10",
                "shapeid": "newCustomShape",
                "x": "81.22",
                "y": "199.23",
                "label": "Herat",
                "labelpos": "left"
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
                "id": "KA",
                "x": "388.77",
                "y": "207.41",
                "label": "Kabul",
                "labelpos": "left"
            },
            {
                "id": "01",
                "x": "358.11",
                "y": "72.54",
                "label": "Shir Khan"
            },
            {
                "id": "02",
                "x": "364.24",
                "y": "92.97",
                "label": "Kondoz",
                "labelpos": "left"
            },
            {
                "id": "03",
                "x": "280.46",
                "y": "95.02",
                "label": "Mazar-e-Sharif",
                "labelpos": "left"
            },
            {
                "id": "04",
                "x": "403.07",
                "y": "183.91",
                "label": "Bagram",
                "labelpos": "right"
            },
            {
                "id": "05",
                "x": "434.74",
                "y": "216.6",
                "label": "Jalalabad",
                "labelpos": "left"
            },
            {
                "id": "06",
                "x": "321.33",
                "y": "263.6",
                "label": "Ghazni",
                "labelpos": "right"
            },
            {
                "id": "07",
                "x": "228.35",
                "y": "390.3",
                "label": "Kandahar",
                "labelpos": "top"
            },
            {
                "id": "08",
                "x": "62.83",
                "y": "379.06",
                "label": "Zaranj",
                "labelpos": "left"
            },
            {
                "id": "11",
                "x": "87.35",
                "y": "165.52",
                "label": "Towraghondi",
                "labelpos": "left"
            },
            {
                "id": "09",
                "x": "80.2",
                "y": "242.15",
                "label": "Shindand",
                "labelpos": "left"
            },
            {
                "id": "10",
                "x": "81.22",
                "y": "199.23",
                "label": "Herat",
                "labelpos": "left"
            }
        ],
        "application": [
            {
                "id": "KA",
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
                "id": "05",
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
            },
            {
                "id": "11",
                "shapeid": "newCustomShape"
            },
            {
                "id": "09",
                "shapeid": "newCustomShape"
            },
            {
                "id": "10",
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

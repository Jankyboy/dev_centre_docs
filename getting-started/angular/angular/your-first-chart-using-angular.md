---
title: Create a Chart in Angular Using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the angular-fusioncharts component.
heading: Create Your First Angular Chart Using FusionCharts
---

FusionCharts is a JavaScript charting library for building interactive charts, gauges, maps, and dashboards. The `angular-fusioncharts` package provides Angular bindings that let you add FusionCharts visualizations to Angular applications as reusable components.

In this tutorial, you will create a new Angular application using standalone components and render an interactive column chart.

## Prerequisites

Before getting started, make sure you have the following installed:

- Node.js 20.19.0 or later
- npm
- A code editor such as Visual Studio Code
- A terminal or command prompt

Check your installed Node.js and npm versions by running:

```javascript
node -v
npm -v
```

Visit the [official Node.js website](https://nodejs.org/) if Node.js is not installed on your system.

> This tutorial uses Angular 20, which is within the officially supported Angular version range for `angular-fusioncharts` 4.2.

## Create a New Angular Project

Run the following command to create a new Angular 20 project:

```javascript
npx @angular/cli@20 new first-fusioncharts-project
```

The Angular CLI will ask you to select several project configuration options.

You can use the following options for this tutorial:

```javascript
Which stylesheet format would you like to use? CSS
Do you want to enable Server-Side Rendering and Static Site Generation? No
Do you want to create a zoneless application? No
Which AI tools do you want to configure? None
```

The exact prompts may vary depending on the Angular CLI version.

Angular creates standalone components by default. Therefore, the generated application does not require an `app.module.ts` file.

Navigate to the project directory:

```javascript
cd first-fusioncharts-project
```

Start the development server:

```javascript
npm start
```

Open the following address in your browser:

```javascript
http://localhost:4200/
```

You should now see the default Angular application.

## Install FusionCharts and the Angular Wrapper

Stop the development server by pressing `Ctrl + C`.

Install the FusionCharts library and its Angular wrapper:

```javascript
npm install fusioncharts angular-fusioncharts
```

The command installs:

- `fusioncharts`: The core JavaScript charting library.
- `angular-fusioncharts`: The Angular component used to render FusionCharts.

The `--save` option is not required because current npm versions automatically add installed packages to the dependencies section of `package.json`.

## Data Preparation

For this example, we will visualize monthly online sales from January to June 2026 using a column chart.

The dataset contains two fields:

- **Month:** The label displayed on the x-axis.
- **Sales:** The sales value represented by each column.

| Country   | No. of Oil Reserves |
| --------- | ------------------- |
| January   | 42,000              |
| February  | 51,000              |
| March     | 48,000              |
| April     | 61,000              |
| May       | 58,000              |
| June      | 67,000              |

FusionCharts expects each data point to contain a `label` and a `value`. The table above will therefore be represented in the chart configuration as:

```javascript
data: [
  { label: 'January', value: '42000' },
  { label: 'February', value: '51000' },
  { label: 'March', value: '48000' },
  { label: 'April', value: '61000' },
  { label: 'May', value: '58000' },
  { label: 'June', value: '67000' }
];
```

The `label` property defines the month displayed along the x-axis, while the value property determines the height of each column.

## Add FusionCharts to the Standalone Component

Open the following file:

```javascript
src/app/app.ts
```

Replace its existing content with the following code:

```javascript
import { Component } from '@angular/core';
import { FusionChartsModule } from 'angular-fusioncharts';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Register the FusionCharts library, chart modules, and Fusion theme.
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

interface ChartDataPoint {
  label: string;
  value: string;
}

interface ChartDataSource {
  chart: {
    caption: string;
    subCaption: string;
    xAxisName: string;
    yAxisName: string;
    numberPrefix: string;
    theme: string;
  };
  data: ChartDataPoint[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FusionChartsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  chartType = 'column2d';
  chartWidth = '100%';
  chartHeight = '450';
  dataFormat = 'json';

  dataSource: ChartDataSource = {
    chart: {
      caption: 'Monthly Online Sales',
      subCaption: 'January to June 2026',
      xAxisName: 'Month',
      yAxisName: 'Sales',
      numberPrefix: '$',
      theme: 'fusion'
    },
    data: [
      {
        label: 'January',
        value: '42000'
      },
      {
        label: 'February',
        value: '51000'
      },
      {
        label: 'March',
        value: '48000'
      },
      {
        label: 'April',
        value: '61000'
      },
      {
        label: 'May',
        value: '58000'
      },
      {
        label: 'June',
        value: '67000'
      }
    ]
  };
}
```

## How the FusionCharts Imports Work

The component imports three FusionCharts resources:

```javascript
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
```

- `FusionCharts` loads the core FusionCharts library.
- `Charts` loads the standard chart types, including column, bar, line, area, and pie charts.
- `FusionTheme` loads the Fusion visual theme.

These resources are registered using:

```javascript
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);
```

Because this application uses standalone components, `FusionChartsModule` is added directly to the component’s `imports` array:

```javascript
imports: [FusionChartsModule]
```

You do not need to create or update an `Angular NgModule`.

## Understand the Chart Configuration

The component defines the chart properties separately:

```javascript
chartType = 'column2d';
chartWidth = '100%';
chartHeight = '450';
dataFormat = 'json';
```

### `chartType`
Specifies the chart type to render:

```javascript
chartType = 'column2d';
```

In this example, FusionCharts renders a two-dimensional column chart.

See all the [chart types supported by FusionCharts](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

### `chartWidth`
Sets the width of the chart:

```javascript
chartWidth = '100%';
```

Using a percentage allows the chart to adjust to the width of its container.

### `chartHeight`
Sets the chart height in pixels:

```javascript
chartHeight = '450';
```

### `dataFormat`
Specifies the format used for the chart data:

```javascript
dataFormat = 'json';
```

FusionCharts supports JSON data for configuring chart properties and supplying data points.

## Preparing the Chart Data

The `dataSource` object contains two main sections:

```javascript
dataSource = {
  chart: {
    // Chart configuration
  },
  data: [
    // Chart data points
  ]
};
```

The `chart` object controls the chart title, axis names, number formatting, and theme:

```javascript
chart: {
  caption: 'Monthly Online Sales',
  subCaption: 'January to June 2026',
  xAxisName: 'Month',
  yAxisName: 'Sales',
  numberPrefix: '$',
  theme: 'fusion'
}
```

The data array contains the values displayed in the chart:

```javascript
data: [
  {
    label: 'January',
    value: '42000'
  },
  {
    label: 'February',
    value: '51000'
  }
]
```

Each data point contains:

- `label`: The label shown along the x-axis.
- `value`: The numerical value represented by the column.

## Add the Chart to the Template

To add the Chart to the Template, first open:

```javascript
src/app/app.html
```

Remove the default Angular welcome-page markup and replace it with:

```javascript
<main class="chart-container">
  <h1>Angular FusionCharts Example</h1>

  <fusioncharts
    [type]="chartType"
    [width]="chartWidth"
    [height]="chartHeight"
    [dataFormat]="dataFormat"
    [dataSource]="dataSource"
  >
  </fusioncharts>
</main>
```

The `<fusioncharts>` component receives the chart configuration through Angular property binding.

The following binding passes the selected chart type:

```javascript
[type]="chartType"
```

The chart data and configuration are supplied through:

```javascript
[dataSource]="dataSource"
```

## Style the Chart Container

To change the style of the chart container, open:

```javascript
src/app/app.css
```

Replace its content with:

```javascript
:host {
  display: block;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  background: #f5f7fb;
}

.chart-container {
  width: min(100% - 32px, 1000px);
  margin: 0 auto;
  padding: 40px 0;
}

h1 {
  margin: 0 0 24px;
  color: #242424;
  font-size: 28px;
  text-align: center;
}
```

The chart uses `width="100%"`, so it responds to the available width of the `.chart-container` element.

## Run the Angular Application

Start the development server:

```javascript
npm start
```

Then open:

```javascript
http://localhost:4200/
```

## See Your Chart

You should now see an interactive column chart displaying monthly online sales from January to June 2026.

Angular automatically reloads the page when you modify and save the application files.

{% embed_chart getting-started-your-first-chart-angular.js %}

## Complete Component Code

The complete `src/app/app.ts` file should look like this:

```javascript
import { Component } from '@angular/core';
import { FusionChartsModule } from 'angular-fusioncharts';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Register the FusionCharts library, chart modules, and Fusion theme.
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

interface ChartDataPoint {
  label: string;
  value: string;
}

interface ChartDataSource {
  chart: {
    caption: string;
    subCaption: string;
    xAxisName: string;
    yAxisName: string;
    numberPrefix: string;
    theme: string;
  };
  data: ChartDataPoint[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FusionChartsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  chartType = 'column2d';
  chartWidth = '100%';
  chartHeight = '450';
  dataFormat = 'json';

  dataSource: ChartDataSource = {
    chart: {
      caption: 'Monthly Online Sales',
      subCaption: 'January to June 2026',
      xAxisName: 'Month',
      yAxisName: 'Sales',
      numberPrefix: '$',
      theme: 'fusion'
    },
    data: [
      {
        label: 'January',
        value: '42000'
      },
      {
        label: 'February',
        value: '51000'
      },
      {
        label: 'March',
        value: '48000'
      },
      {
        label: 'April',
        value: '61000'
      },
      {
        label: 'May',
        value: '58000'
      },
      {
        label: 'June',
        value: '67000'
      }
    ]
  };
}
```

Your first FusionCharts visualization using an Angular standalone component is now ready.

You can continue by exploring additional FusionCharts [chart types](https://www.fusioncharts.com/dev/chart-guide/list-of-charts), [chart attributes](https://www.fusioncharts.com/dev/chart-attributes/area2d), [events](https://www.fusioncharts.com/dev/fusioncharts-aspnet-visualization/api-reference-net/events-net), [themes](https://www.fusioncharts.com/dev/fusioncharts-aspnet-visualization/getting-started/change-theme-using-fusioncharts-net), [maps](https://www.fusioncharts.com/maps), [gauges](https://www.fusioncharts.com/dev/chart-guide/gauges-and-widgets/angular-gauge), and [dashboards](https://www.fusioncharts.com/dashboards/).

## Troubleshotting

### `fusioncharts` is Not a Known Element
Make sure `FusionChartsModule` is included in the component’s imports array:

```javascript
imports: [FusionChartsModule]
```

### The Chart Area Is Empty
Confirm that the FusionCharts library, chart modules, and theme have been registered:

```javascript
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);
```

Also check the browser console for JavaScript errors.

### The Chart Does Not Fill the Available Width
Make sure the chart width is set to `100%`:

```javascript
chartWidth = '100%';
```

The chart’s parent container must also have an available width.

### Angular Reports Package Compatibility Errors
Check your Angular version:

```javascript
ng version
```

This tutorial uses Angular 20 because it is within the version range officially supported by `angular-fusioncharts` 4.2.

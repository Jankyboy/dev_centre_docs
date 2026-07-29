---
title: Create a Chart in Svelte Using FusionCharts | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the svelte-fusioncharts component.
heading: Create a Chart in SvelteJS Using FusionCharts
---

FusionCharts is a JavaScript charting library that lets you create interactive charts, gauges, maps, and dashboards for web applications. 

The `svelte-fusioncharts` component provides bindings for FusionCharts, allowing you to integrate FusionCharts visualizations into Svelte applications.

In this tutorial, you will learn how to create a Svelte 4 application, install FusionCharts and the Svelte FusionCharts component, prepare chart data, configure a chart, and render your first interactive chart.

## Prerequisite

Before you begin, ensure the following is installed:
* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)

You can check the installed version by running the following command:

```javascript
node -v
npm -v
```
This tutorial uses the following versions:

```javascript
Svelte: 4.0.0
FusionCharts: 4.2.2 
svelte-fusioncharts: 1.1.0
Vite: 4.5.14
@sveltejs/vite-plugin-svelte: 2.4.6
```

> **Note:**
> Svelte 4.0.0 is the latest version of Svelte currently supported by FusionCharts.

## Create a Svelte Project

Create a Svelte application using Vite, see the command below as an example:

```javascript
npm create vite@4 my-first-svelte-project -- --template svelte
```
Navigate to the project directory using the following command:

```javascript
cd my-first-svelte-project
```
The latest Svelte project templates may use dependencies or application code designed for newer versions of Svelte. Since this tutorial uses Svelte 4.0.0, update the project dependencies to versions compatible with it.

Open `package.json` and update the `devDependencies` section as follows:

```javascript
"devDependencies": {
  "@sveltejs/vite-plugin-svelte": "2.4.6",
  "svelte": "4.0.0",
  "vite": "4.5.14"
}
```
The complete `package.json` should look as follows:

```javascript
{
  "name": "my-first-svelte-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "2.4.6",
    "svelte": "4.0.0",
    "vite": "4.5.14"
  }
}
```
Remove the existing dependencies and lock file:

```javascript
rm -rf node_modules package-lock.json
```
Then install the dependencies as follows:

```javascript
npm install
```

## Configure the Svelte 4 Entry Point

Newer Svelte templates may use the Svelte 5 `mount()` API. Svelte 4 uses the component constructor instead.

Open the file:

```javascript
src/main.js
```

and replace its content with the one below:

```javascript
import './app.css'
import App from './App.svelte'

const target = document.getElementById('app')

if (!target) {
  throw new Error('App target element not found')
}

const app = new App({
  target,
})

export default app
```
This mounts the Svelte application to the element with the `app` ID in `index.html`.

## Remove the Default Svelte 5 Example Component

Some Vite Svelte templates may include example components that use Svelte 5 syntax. It is necessary to remove them.

Open:

```javascript
src/App.svelte
```
and remove any default imports or components such as:

```javascript
import Counter from './lib/Counter.svelte'
```
You may also remove the default `Counter.svelte` file if it exists. 

Before continuing, verify that Svelte 4 is working by temporarily using:

```javascript
<script>
  let message = 'Svelte 4 is working'
</script>

<main>
  <h1>{message}</h1>
</main>
```
Start the development server:

```javascript
npm run dev
```
Open the local URL displayed in your terminal, most likely:

```javascript
http://localhost:5173
```
And you should see the following message:

```javascript
Svelte 4 is working
```

## Install FusionCharts

After confirming that the Svelte 4 application works, install FusionCharts and the Svelte FusionCharts component:

```javascript
npm install fusioncharts svelte-fusioncharts
```
You can verify the installed versions using the following command:

```javascript
npm list svelte fusioncharts svelte-fusioncharts
```
The tested configuration should show the following:

```javascript
svelte@4.0.0
fusioncharts@4.2.2
svelte-fusioncharts@1.1.0
```

## Import FusionCharts

To import FusionCharts, first open:

```javascript
src/App.svelte
```
Using the following command import FusionCharts, the charts module, the Fusion theme, and the Svelte FusionCharts component:

```javascript
<script>
  import FusionCharts from 'fusioncharts'
  import Charts from 'fusioncharts/fusioncharts.charts'
  import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
  import SvelteFC, { fcRoot } from 'svelte-fusioncharts'

  fcRoot(FusionCharts, Charts, FusionTheme)
</script>
```
The `fcRoot()` function registers FusionCharts, the chart module, and the Fusion theme with the Svelte component.

## Preparing the Data

In this example, you will create a Column 2D chart showing revenue by product category. The data used in the chart is shown below:

| Product Category | Revenue |
| ---------------- | ------- |
| Electronics      | 85      |
| Apparel          | 72      |
| Home Appliances  | 64      |
| Books            | 48      |
| Sports           | 55      |
| Beauty           | 42      |

FusionCharts accepts chart data in JSON format.

Next, add the following data inside the `<script>` block:

```javascript
// Preparing the chart data
const chartData = [
  { label: 'Electronics', value: '85' },
  { label: 'Apparel', value: '72' },
  { label: 'Home Appliances', value: '64' },
  { label: 'Books', value: '48' },
  { label: 'Sports', value: '55' },
  { label: 'Beauty', value: '42' }
];
```
Each data object contains:
* `label`: The category displayed on the X-axis.
* `value`: The corresponding value displayed on the Y-axis.

## Configure the Chart

Next, create the chart configuration object as follows:

```javascript
//Create your configuration object
const chartConfigs = {
  type: 'column2d',
  width: '100%',
  height: '400',
  dataFormat: 'json',
  dataSource: {
    chart: {
      caption: 'Revenue by Product Category',
      subCaption: 'Current Sales Performance',
      xAxisName: 'Product Category',
      yAxisName: 'Revenue (USD)',
      numberPrefix: '$',
      numberSuffix: 'K',
      theme: 'fusion'
    },
    data: chartData
  }
};
```
The configuration contains the following properties:
* `type`: Specifies the chart type. This example uses `column2d`.
* `width`: Sets the chart width to 100% of its container.
* `height`: Sets the chart height.
* `dataFormat`: Defines the data format as JSON.
* `dataSource`: Contains the chart configuration and chart data.
* `caption`: Defines the chart title.
* `subCaption`: Defines the chart subtitle.
* `xAxisName`: Defines the X-axis title.
* `yAxisName`: Defines the Y-axis title.
* `theme`: Applies the Fusion theme.

## Render the Chart

Finally, the complete `src/App.svelte` file should look as follows: 

```javascript
<script>
  import FusionCharts from 'fusioncharts'
  import Charts from 'fusioncharts/fusioncharts.charts'
  import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
  import SvelteFC, { fcRoot } from 'svelte-fusioncharts'

  fcRoot(FusionCharts, Charts, FusionTheme)

  const chartData = [
    { label: 'Electronics', value: '85' },
    { label: 'Apparel', value: '72' },
    { label: 'Home Appliances', value: '64' },
    { label: 'Books', value: '48' },
    { label: 'Sports', value: '55' },
    { label: 'Beauty', value: '42' }
  ]

  const chartConfigs = {
    type: 'column2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
      chart: {
        caption: 'Revenue by Product Category',
        subCaption: 'Current Sales Performance',
        xAxisName: 'Product Category',
        yAxisName: 'Revenue (USD)',
        numberPrefix: '$',
        numberSuffix: 'K',
        theme: 'fusion'
      },
      data: chartData
    }
  }
</script>

<main>
  <div class="chart-container">
    <SvelteFC {...chartConfigs} />
  </div>
</main>

<style>
  main {
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
  }

  .chart-container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
  }
</style>
```

The `SvelteFC`component receives the chart properties using the following command: 

```javascript
<SvelteFC {...chartConfigs} />
```

and renders the FusionCharts visualization.

## Run the Application

Start the development server, as follows:

```javascript
npm run dev
```
Open the local URL shown in the terminal, most likely:

```javascript
http://localhost:5173
```
An interactive Column 2D chart should be visible and display the revenue by product category.

## See Your Chart

Your Svelte application is now successfully rendering a FusionCharts visualization.

{% embed_chart getting-started-your-first-chart-svelte.js %}

The chart displays revenue for six product categories using a responsive Column 2D chart.

Customize the chart by changing any of the following:
* Chart type
* Chart dimensions
* Data
* Captions
* Axis titles
* Theme
* Styling
* Events and interactions


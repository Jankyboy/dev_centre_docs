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

> Note: Svelte 4.0.0 is the latest version of Svelte currently supported by FusionCharts.

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
This mounts the Svelte application to the element with the `app` ID in the `index.html` file.

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

Now that the data is ready, let's work on the styling, positioning and giving your chart a context.

Store the chart configurations in a JSON object. In this JSON object:

```javascript
//Create your configuration object
const chartConfigs = {
  type: "column2d", //Select the chart type
  width: 600, //Set the width of the chart
  height: 400, //Set the height of the chart
  dataFormat: "json", //Set the input dataFormat to json
  dataSource: {
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]", //Set the caption to your chart
      subCaption: "In MMbbl = One Million Barrels", //Set a sub-caption to your chart
      xAxisName: "Country", //Assign a relevant name to your x-axis
      yAxisName: "Reserves (MMbbl)", //Assign a relevant name to your y-axis
      numberSuffix: "K",
      theme: "fusion" //Apply a theme to your chart
    },
    //Include chartData from STEP 2
    data: chartData
  }
};
```

## Render the Chart

Finally, get ready to render your first chart. Follow the steps mentioned below:

**Step 1**: In `App.svelte` include the necessary files and import the `fusioncharts` dependency.

Store the chart configurations in a JSON object.

The consolidated code is shown below:

```html
<script>
  import FusionCharts from "fusioncharts";
  import Charts from "fusioncharts/fusioncharts.charts";
  import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
  import SvelteFC, { fcRoot } from "svelte-fusioncharts";

  // Always set FusionCharts as the first parameter
  fcRoot(FusionCharts, Charts, FusionTheme);
  //STEP 2 : preparing the chart Data
  const chartData = [
    { label: "Venezuela", value: "290" },
    { label: "Saudi", value: "260" },
    { label: "Canada", value: "180" },
    { label: "Iran", value: "140" },
    { label: "Russia", value: "115" },
    { label: "UAE", value: "100" },
    { label: "US", value: "30" },
    { label: "China", value: "30" }
  ];

  //STEP 3: Create your configuration object
  const chartConfigs = {
    type: "column2d", //Select the chart type
    width: 600, //Set the width of the chart
    height: 400, //Set the height of the chart
    dataFormat: "json", //Set the input dataFormat to json
    dataSource: {
      chart: {
        caption: "Countries With Most Oil Reserves [2017-18]",
        subCaption: "In MMbbl = One Million barrels",
        xAxisName: "Country", //Assign a relevant name to your x-axis
        yAxisName: "Reserves (MMbbl)", //Assign a relevant name to your y-axis
        numberSuffix: "K",
        theme: "fusion" //Apply a theme to your chart
      },
      //Include chartData from STEP 2
      data: chartData
    }
  };
</script>

<SvelteFC {...chartConfigs} />
```

**Step 2**: Export the **app** from `main.js`.

```javascript
import App from "./App.svelte";
var app = new App({
  target: document.body
});

export default app;
```

**Step 3**: Run `npm run dev` command in the terminal. Once the build is successful, open the `localhost` file to see your chart.

## See Your Chart

You should be able to see the chart as shown below.

{% embed_chart getting-started-your-first-chart.js %}

If you are getting a JavaScript error on your page, check your browser console for the exact error and fix accordingly. If you're unable to solve it, click [here](mailto:support@fusioncharts.com) to get in touch with our support team.

That's it! Your first chart using `svelte-fusioncharts` is ready.

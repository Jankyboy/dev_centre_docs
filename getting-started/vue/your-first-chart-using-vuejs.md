---
title: Create a Chart in Vue | FusionCharts
description: This article outlines the steps to be executed for creating your first chart using the vue-fusioncharts component.
heading: Create a Chart in Vue 3 Using FusionCharts
---

FusionCharts is a JavaScript charting library for creating interactive charts, gauges, maps, and dashboards. The `vue-fusioncharts` component provides Vue bindings that make it easier to add FusionCharts visualizations to Vue applications.

In this tutorial, you will create a Vue 3 application with Vite and render an interactive column chart using FusionCharts.

## Prerequisites

Before you begin, make sure you have the following installed:

- A current Node.js version
- npm
- A code editor such as Visual Studio Code
- Basic knowledge of Vue components and JavaScript

You can check your installed Node.js and npm versions by running:

```javascript
node --version
npm --version
```

## Create a Vue 3 Project with Vite

Vue recommends using its official create-vue scaffolding tool to create new Vue applications. The generated project uses Vite as its development and build tool.

Open a terminal and run:

```javascript
npm create vue@latest
```

When prompted for a project name, enter:

```javascript
fusioncharts-vue-demo
```

You can accept the default options for this tutorial. TypeScript, Vue Router, Pinia, testing tools, ESLint, and Prettier are optional and are not required for this example. 

When prompted to skip the example code and start with a blank Vue project, select Yes. This creates a cleaner project structure for the chart example.

Move into the project directory:

```javascript
cd fusioncharts-vue-demo
```

Install the project dependencies:

```javascript
npm install
```

Start the Vite development server:

```javascript
npm run dev
```

Vite will display a local development URL, usually:

```javascript
http://localhost:5173/
```

```javascript
npm install -g @vue/cli
```

Open the URL in your browser to view the Vue application.

For more details about creating a Vue application with Vite, refer to the official [Vue 3 Quick Start Guide](https://vuejs.org/guide/quick-start.html).

## Install FusionCharts and the Vue Wrapper

Stop the development server if it is running, and install the `fusioncharts` and `vue-fusioncharts` packages:

```javascript
npm install fusioncharts vue-fusioncharts
```

The packages serve different purposes:

- `fusioncharts` provides the charting library, chart types, themes, maps, and widgets.
- `vue-fusioncharts` provides the Vue component used to render FusionCharts in a Vue application.

## Register FusionCharts in the Vue Application

Open `src/main.js` and replace its contents with the following code:


```javascript
import { createApp } from 'vue';
import App from './App.vue';

import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import './assets/main.css';

const app = createApp(App);

app.use(
  VueFusionCharts,
  FusionCharts,
  Charts,
  FusionTheme
);

app.mount('#app');
```

This code performs the following steps:
1. Imports Vue’s `createApp` function.
2. Imports the root `App` component.
3. Imports the Vue FusionCharts wrapper.
4. Imports the FusionCharts core library.
5. Imports the standard FusionCharts chart module.
6. Imports the Fusion theme.
7. Registers the FusionCharts Vue component globally.
8. Mounts the Vue application to the page.

After global registration, you can use the `<fusioncharts>` component anywhere in the application.

## Preparing the Chart Data

In this example, you will create a column chart showing monthly website traffic.

The chart will contain the following data:

| Country   | No. of Oil Reserves |
| --------- | ------------------- |
| January   | 42,000              |
| February  | 48,500              |
| March     | 53,000              |
| April     | 61,500              |
| May       | 68,000              |
| June      | 76,500              |


A FusionCharts data source normally contains two main sections:

- `chart`: Defines chart captions, axes, number formatting, appearance, and other settings.
- `data`: Contains the labels and values displayed in the chart.

## Create the Chart Component

Open `src/App.vue` and replace its contents with the following code:

```javascript
<script setup>
const chartType = 'column2d';
const chartWidth = '100%';
const chartHeight = '420';
const dataFormat = 'json';

const dataSource = {
  chart: {
    caption: 'Monthly Website Traffic',
    subCaption: 'January to June 2026',
    xAxisName: 'Month',
    yAxisName: 'Website visits',
    numberSuffix: '',
    formatNumberScale: '0',
    showValues: '1',
    usePlotGradientColor: '0',
    showPlotBorder: '0',
    animation: '1',
    theme: 'fusion'
  },
  data: [
    {
      label: 'January',
      value: '42000'
    },
    {
      label: 'February',
      value: '48500'
    },
    {
      label: 'March',
      value: '53000'
    },
    {
      label: 'April',
      value: '61500'
    },
    {
      label: 'May',
      value: '68000'
    },
    {
      label: 'June',
      value: '76500'
    }
  ]
};
</script>

<template>
  <main class="chart-page">
    <section class="chart-container">
      <h1>Vue 3 FusionCharts Example</h1>

      <p>
        This column chart displays monthly website traffic for the first six
        months of 2026.
      </p>

      <fusioncharts
        :type="chartType"
        :width="chartWidth"
        :height="chartHeight"
        :data-format="dataFormat"
        :data-source="dataSource"
      />
    </section>
  </main>
</template>

<style scoped>
.chart-page {
  min-height: 100vh;
  padding: 40px 20px;
  background: #f5f7fa;
}

.chart-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 28px;
  background: #ffffff;
  box-shadow: 0 8px 24px rgb(0 0 0 / 8%);
}

h1 {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 2rem;
}

p {
  margin-bottom: 28px;
  color: #4b5563;
}
</style>
```

This example uses Vue 3’s `<script setup>` syntax. Variables declared in the `<script setup>` block are automatically available in the component template.

## Update the Global CSS

The default Vue starter styles may restrict the width of the application. Open src/assets/main.css and replace its contents with the following styles.


> **Note:**
> If the `src/assets/main.css` file does not exist in your project, create it and add the following styles. Then import it in `main.js` if it’s not done (`import './assets/main.css';`).

```javascript
* {
  box-sizing: border-box;
}

html,
body,
#app {
  width: 100%;
  min-height: 100%;
  margin: 0;
}

body {
  min-width: 320px;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;
}
```

This ensures that the chart can use the available width of its container.

## Run the Vue Application

Start the development server:

```javascript
npm run dev
```

Open the local URL displayed in the terminal, usually:

```javascript
http://localhost:5173/
```

You should now see an interactive column chart showing monthly website traffic.

{% embed_chart getting-started-your-first-chart-vue3.js %}

## How the FusionCharts Component Works

The chart is rendered through the `<fusioncharts>` Vue component:

```javascript
<fusioncharts
  :type="chartType"
  :width="chartWidth"
  :height="chartHeight"
  :data-format="dataFormat"
  :data-source="dataSource"
/>
```

The component receives the following properties:

### `type`
Specifies the chart type to render.

```javascript
const chartType = 'column2d';
```

For a complete list of available chart types, see the [FusionCharts Chart Gallery](https://www.fusioncharts.com/dev/chart-guide/list-of-charts).

The required FusionCharts modules must be registered before their corresponding chart types can be used.

### `width`
Controls the chart width.

```javascript
const chartWidth = '100%';
```

Using `100%` makes the chart adapt to the width of its parent container.

### `height`
Controls the chart height.

```javascript
const chartHeight = '420';
```

### `data-format`
Defines the format of the chart data.

```javascript
const dataFormat = 'json';
```

This example uses JSON data.


### `data-source`
Provides the chart configuration and data:

```javascript
const dataSource = {
  chart: {
    caption: 'Monthly Website Traffic',
    theme: 'fusion'
  },
  data: [
    {
      label: 'January',
      value: '42000'
    }
  ]
};
```

Because `dataSource` is bound with Vue’s: syntax, updates to reactive chart data can also update the rendered chart.

## Project Structure

After completing the tutorial, the relevant project files should look like this:

```javascript
fusioncharts-vue-demo/
├── src/
│   ├── assets/
│   │   └── main.css
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
└── vite.config.js
```

## Build the Application for Production

To create a production build, run:

```javascript
npm run build
```

Vite will generate the optimized application files in the `dist` directory.

You can preview the production build locally by running:

```javascript
npm run preview
```

## Troubleshooting

### The fusioncharts component cannot be resolved
An error similar to the following means the Vue FusionCharts plugin has not been registered correctly:

```javascript
Failed to resolve component: fusioncharts
```

Check that src/main.js contains:

```javascript
app.use(
  VueFusionCharts,
  FusionCharts,
  Charts,
  FusionTheme
);
```

Also confirm that the application is mounted after plugin registration:

```javascript
app.mount('#app');
```

### The chart container is blank
Check the following:

- `fusioncharts` and `vue-fusioncharts` are installed.
- The chart module has been imported.
- The chart `type` is valid.
- The data source contains a `chart` object and a `data` array.
- Each data item contains valid `label` and `value` properties.
- The chart has a valid height.

You can confirm that the packages are installed by running:

```javascript
npm list fusioncharts vue-fusioncharts
```

### The Fusion theme is not applied
Make sure the Fusion theme is imported:

```javascript
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
```

It must also be passed when registering the plugin:

```javascript
app.use(
  VueFusionCharts,
  FusionCharts,
  Charts,
  FusionTheme
);
```

Finally, include the theme in the chart configuration:

```javascript
chart: {
  theme: 'fusion'
};
```

### The chart does not use the full page width
Set the chart width to `100%`:

```javascript
const chartWidth = '100%';
```

Also check that the chart’s parent container does not have an overly restrictive fixed width.

## Next Steps

You have now created an interactive FusionCharts chart in a Vue 3 application powered by Vite.

You can continue by learning how to:

- Render different chart types
- Update chart data dynamically
- Handle FusionCharts events in Vue
- Add drill-down behavior
- Export charts as images or PDFs
- Create maps, gauges, and dashboards
- Visualize time-series data with FusionTime

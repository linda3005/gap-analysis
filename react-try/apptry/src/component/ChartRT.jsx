import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const chartData = {
  labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'], // Years on the x-axis
  datasets: [
    {
      label: 'Excellent Status', // Label for the first line
      data: [50, 55, 60, 65, 70, 65, 40, 70, 30, 45, 60], // Number of locomotives with excellent status for each year
      borderColor: '#C5DFF8', // Line color for excellent status
      borderWidth: 2, // Line width
      fill: false, // Don't fill the area under the line
    },
    {
      label: 'Good Status', // Label for the second line
      data: [30, 35, 10, 45, 10, 45, 20, 30, 50, 25, 30], // Number of locomotives with good status for each year
      borderColor: '#CDFAD5', // Line color for good status
      borderWidth: 2, // Line width
      fill: false, // Don't fill the area under the line
    },
    {
      label: 'Poor Status', // Label for the third line
      data: [40, 25, 40, 25, 40, 25, 45, 10, 20, 45, 80], // Number of locomotives with poor status for each year
      borderColor: '#FFCF96', // Line color for poor status
      borderWidth: 2, // Line width
      fill: false, // Don't fill the area under the line
    },
  ],
};

const keyToLabel = {
  'Excellent Status': 'Locomotive status: Excellent',
  'Good Status': 'Locomotive status: Good',
  'Poor Status': 'Locomotive status: Poor',
};

const colors = {
  'Excellent Status': '#C5DFF8',
  'Good Status': '#CDFAD5',
  'Poor Status': '#FFCF96',
};

const xTicks = chartData.labels.map((year) => ({ value: year }));

const customize = {
  height: 450,
  width: 900,
  legend: { hidden: true },
};

const ChartRT = () => {
  return (
    <LineChart
      xAxis={[{ dataKey: 'year', min: 2010, max: 2020 }]} // Assuming 'year' is the property name for years in your dataset
      series={chartData.datasets.map((dataset) => ({
        dataKey: dataset.label,
        color: dataset.borderColor,
        label : keyToLabel[dataset.label],
        showMark: false,
        fill:false,
      }))}
      dataset={chartData.labels.map((year, index) => ({
        year,
        ...Object.fromEntries(
          chartData.datasets.map((dataset) => [
            dataset.label,
            dataset.data[index],
          ])
        ),
      }))}
      {...customize}
    />
  );
};

export default ChartRT;
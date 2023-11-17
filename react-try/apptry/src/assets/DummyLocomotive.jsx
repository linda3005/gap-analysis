const chartData = {
    labels: ['2020', '2021', '2022', '2023', '2024'], // Years on the x-axis
    datasets: [
      {
        label: 'Excellent Status', // Label for the first line
        data: [50, 55, 60, 65, 70], // Number of locomotives with excellent status for each year
        borderColor: 'green', // Line color for excellent status
        borderWidth: 2, // Line width
        fill: false, // Don't fill the area under the line
      },
      {
        label: 'Good Status', // Label for the second line
        data: [30, 35, 40, 45, 50], // Number of locomotives with good status for each year
        borderColor: 'blue', // Line color for good status
        borderWidth: 2, // Line width
        fill: false, // Don't fill the area under the line
      },
      {
        label: 'Poor Status', // Label for the third line
        data: [10, 15, 20, 25, 30], // Number of locomotives with poor status for each year
        borderColor: 'red', // Line color for poor status
        borderWidth: 2, // Line width
        fill: false, // Don't fill the area under the line
      },
    ],
  };

export default chartData;
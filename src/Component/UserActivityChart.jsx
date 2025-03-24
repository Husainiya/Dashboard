import React from 'react';
import { Line } from 'react-chartjs-2';
import './userActivitychart.css';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const UserActivityChart = () => {
  const data = {
    labels: ['1 Sep', '2 Sep', '3 Sep', '4 Sep', '5 Sep', '6 Sep'],
    datasets: [
      {
        label: 'User Activity',
        data: [200, 600, 400, 1000, 700, 500],
        borderColor: '#D10000',
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h5>User Activity</h5>
      <Line data={data} />
    </div>
  );
};

export default UserActivityChart;
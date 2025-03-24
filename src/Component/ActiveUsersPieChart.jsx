import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './activeUsersPieChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const ActiveUsersTable = () => {
  const pieData = {
    labels: ['Staff', 'Students', 'Other'],
    datasets: [
      {
        data: [151, 200, 200],
        backgroundColor: ['green', '#000080', '#800000'],
      },
    ],
  };

  return (
    <div className="active-users-container">

      {/* Summary & Pie Chart Side by Side */}
      <div className="top-section">
        <div className="summary">
        <h6>Daily Active Users</h6>
        <h2>1051</h2>   
        <ul className="user-summary-list">
           <li><strong>Staff:</strong> 151</li>
           <li><strong>Students:</strong> 200</li>
           <li><strong>Students:</strong> 200</li>
           <li><strong>Other:</strong> 200</li>
        </ul>      
       </div>
        <div className="chart">
          <Pie data={pieData} />
        </div>
      </div>

      {/* Authentication Methods - Simple List */}
      <div className="auth-section">
      <h6>By Authentication Method</h6>
        <ul className="auth-method-list">
          <li>Microsoft - 100</li>
          <li>Internal - 100</li>
          <li>Samal - 100</li>
        </ul>
      </div>
    </div>
  );
};

export default ActiveUsersTable;

import React from 'react';
import { Card } from 'react-bootstrap';
import './ActivityLog.css';

const ActivityLog = () => {
  const logs = [
    { message: 'User name Permissions changed to admin by admin123', time: '2 hrs ago' },
    { message: 'User name Successfully logged in', time: '2 hrs ago' },
    { message: 'User name Permissions changed to admin by admin123', time: '2 hrs ago' },
    { message: 'User name Permissions changed to admin by admin123', time: '2 hrs ago' },
   
   ];

  return (
    <Card className="activity-log p-3"> 
      <h5>Activity Log</h5>
      {logs.map((log, index) => (
        <p key={index}>
          <strong>{log.message}</strong> <br />
          <small>{log.time}</small>
        </p>
      ))}
    </Card>
  );
};

export default ActivityLog;

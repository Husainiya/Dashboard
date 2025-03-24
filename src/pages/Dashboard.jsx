import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DashboardHeader from '../Component/DashboardHeader';
import UserActivityChart from '../Component/UserActivityChart';
import ActiveUsersPieChart from '../Component/ActiveUsersPieChart';
import ActivityLog from '../Component/ActivityLog';
import Sidebar from '../Component/Sidebar';
import './dashboard.css';


const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <Container fluid className="p-4">
        <DashboardHeader />
        <Row>
          <Col md={8}>
            <UserActivityChart />
          </Col>
          <Col md={4}>
            <ActiveUsersPieChart />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <ActivityLog />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;

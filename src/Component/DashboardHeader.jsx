import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./dashboardHeader.css"; 

const DashboardHeader = () => {
  return (
    <Row className="dashboard-header mb-3">
      <Col>
      <Card className="text-center" style={{ backgroundColor: '#afd5f5ab' }}>
          <h5>Daily Active Users</h5>
          <h3>1051</h3>
          <small>18 May 2025</small>
        </Card>
      </Col>
      <Col>
      <Card className="text-center" style={{ backgroundColor: '#afd5f5ab' }}>
          <h5>Monthly Active Users</h5>
          <h3>1051</h3>
          <small>18 May 2025</small>
        </Card>
      </Col>
      <Col>
      <Card className="text-center" style={{ backgroundColor: '#afd5f5ab' }}>
          <h5>Daily Time Per Active User</h5>
          <h3>1051</h3>
          <small>18 May 2025</small>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardHeader;

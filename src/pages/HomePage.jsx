import React from "react";
import { Row, Col } from "react-bootstrap";
import BlogpostContainer from "../components/BlogpostContainer";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

const HomePage = () => {
  return (
    <>
      <Row>
        <Col>
          <h1>HomePage</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <TopBar />
        </Col>
      </Row>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={8}>
          <BlogpostContainer />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;

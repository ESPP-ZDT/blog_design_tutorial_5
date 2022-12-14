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
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={7}>
          <BlogpostContainer />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;

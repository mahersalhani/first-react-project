import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Informatin = ({ per }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="">
        لديك {per.length} مواعيد اليوم
      </Col>
    </Row>
  );
};

export default Informatin;

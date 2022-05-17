import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Buttens = ({ deleteData, showDelete }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="my-2 d-flex justify-content-between">
        <Button className="p-2" onClick={deleteData}>
          مسح الكل
        </Button>
        <Button className="p-2" onClick={showDelete}>
          عرض البيانات
        </Button>
      </Col>
    </Row>
  );
};

export default Buttens;

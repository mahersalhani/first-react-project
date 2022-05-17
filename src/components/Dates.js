import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Dates = ({ perr }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="py-1">
        <div className="rectangle p-3">
          {perr.length > 0 ? (
            perr.map((el) => {
              return (
                <div key={el.id} className="d-flex border-bottom mx-3 my-2">
                  <img src={el.img} alt="" className="img-avatar" />
                  <div className="px-3">
                    <p className="d-inline fs-5">{el.name}</p>
                    <p className="fs-6">{el.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="text-center">لا يوجد مواعيد</h2>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Dates;

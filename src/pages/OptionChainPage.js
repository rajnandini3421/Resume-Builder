import React from "react";
import { Row, Col, Card, Result, Button } from "antd";
import TableComponent from "../components/TableComponent";

const OptionChainPage = () => {
  return (
    <Row className="h-full">
      <Col flex="1 1 auto" className="apply-scroll-bar">
        welcome in OptionChainPage ....
        <TableComponent></TableComponent>
      </Col>
    </Row>
  );
};

export default OptionChainPage;

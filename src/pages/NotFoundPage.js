import React from "react";
import { Row, Col, Card, Result, Button } from "antd";

const NotFoundPage = ({ history }) => {
  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col>
        <Card>
          <Result
            status="404"
            title="Seems like we are Lost!"
            subTitle="Sorry, the page you are looking for does not exist."
            extra={
              <Button type="primry" onClick={() => history.push("/")}>
                Back Home
              </Button>
            }
          ></Result>
        </Card>
        ,
      </Col>
    </Row>
  );
};

export default NotFoundPage;

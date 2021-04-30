import React, { useEffect, useState } from "react";
import { Row, Col, Select, Form, Button, Input, Space, Layout } from "antd";
import GraphComponent from "../components/GraphComponent";

const { Header, Footer, Sider, Content } = Layout;

const { Option } = Select;
const { Item } = Form;

const strikeList = [
  {
    id: "1",
    value: "30000",
  },
  {
    id: "2",
    value: "30200",
  },
  {
    id: "3",
    value: "30400",
  },
  {
    id: "4",
    value: "30600",
  },
  {
    id: "5",
    value: "30800",
  },
  {
    id: "6",
    value: "31000",
  },
];

const expiryDate = [
  {
    id: "1",
    value: "22 April 2021",
  },
  {
    id: "2",
    value: "06 May 2021",
  },
  {
    id: "3",
    value: "27 May 2021",
  },
  {
    id: "3",
    value: "07 June 2021",
  },
];

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const StraddleChartPage = () => {
  const [form] = Form.useForm();
  const [currentTime, setCurrentTime] = useState(0);
  const [currentDate, setCurrentDate] = useState("");
  const [currentNifty, setCurrentNifty] = useState("BANKNIFTY 31,230.0");
  const getCurrentDateTime = () => {
    var currentDate = new Date();
    var dd = String(currentDate.getDate()).padStart(2, "0");
    var mm = String(currentDate.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = currentDate.getFullYear();
    var HH = String(currentDate.getHours()).padStart(2, "0");
    var MM = String(currentDate.getMinutes()).padStart(2, "0");
    var SS = String(currentDate.getSeconds()).padStart(2, "0");
    var date = dd + "/" + mm + "/" + yyyy;
    var time = `${HH} : ${MM} : ${SS}`;
    setCurrentTime(time);
    setCurrentDate(date);
  };

  setTimeout(getCurrentDateTime, 1000);

  // useEffect(setCurrentTime(time))
  return (
    <Content style={{ backgroundColor: "white" }}>
      <Form
        initialValues={{
          strike: "",
        }}
        form={form}
      >
        {/* <Row className="h-full px-2 py-2 mt-2 bg-white"> */}
        <Col flex="1 1 auto" className="h-full apply-scroll-bar m-3">
          <Row>
            <Col span={5}>
              <Item name="strike" label="Select Strike">
                <Select
                  // defaultValue="lucy"
                  style={{ width: 120 }}
                  onChange={handleChange}
                >
                  {strikeList.map((item) => (
                    <Option key={item.id} value={item.value}>
                      {item.value}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col>

            <Col span={5}>
              <Item name="date" label="Select Expiry">
                <Select
                  // defaultValue="lucy"
                  style={{ width: 120 }}
                  onChange={handleChange}
                >
                  {expiryDate.map((item) => (
                    <Option key={item.id} value={item.value}>
                      {item.value}
                    </Option>
                  ))}
                </Select>
              </Item>
            </Col>
            <Col>
              {/* <button class="bg-blue-800 hover:bg-blue-100 text-white font-bold py-2 px-4  ml-4 mt-4">
              Submit
              </button> */}
              <Button type="primary" className="px-2 py-2 font-bold">
                Submit
              </Button>
            </Col>
          </Row>

          <Row className='-mt-5'>
            <Col className="flex-end">
              <Row>
                <Col>Underlying Index :</Col>
                <Space>
                  <Col className="font-bold">{currentNifty}</Col>
                  <Col className="text-xs text-gray-500	">
                    {`  `}As on {`${currentDate} ${currentTime}`} IST
                  </Col>
                </Space>
              </Row>
            </Col>
          </Row>

          <Row>
          <Content style={{ backgroundColor:'#FFFF' }}>
            <div
              // className="site-layout-background" 
              style={{ padding: 24, minHeight: 360 }}
            >
              <GraphComponent/>
            </div>
          </Content>
          </Row>
        </Col>
        {/* </Row> */}
      </Form>
    </Content>
  );
};

export default StraddleChartPage;

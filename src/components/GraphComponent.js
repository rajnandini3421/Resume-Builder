import React from "react";
import { Container, Row, Col } from "antd";
import {
  LineChart,
  CartesianGrid,
  PieChart,
  Pie,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
  Bar,
} from "recharts";

const COLORS = [
  "#7DB3FF",
  "#49457B",
  "#FF7C78",
  "#FED3D0",
  "#6F76D9",
  "#9ADFB4",
  "#2E7987",
];

const data = [
    {
      time : 1,
      price : 2300
    },
    {
        time : 5,
        price : 2900
    },
    {
        time : 7.5,
        price : 3000
    },
    {
        time : 9,
        price : 2300
    },
    {
        time : 15,
        price : 1700
    },
    {
        time : 20,
        price : 2300
    },
    {
        time : 25,
        price : 4300
    },
    {
        time : 30,
        price : 1300
    }
  ];
  

const GraphComponent = () => {
  return (
    <Col span={24}>
      <Row>
        <Col span={16}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart width={500} height={300} data={data}>
                  <XAxis dataKey="time" />
                  <YAxis />
                  <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                  <Line type="monotone" dataKey="price" stroke="#82ca9d" />
                  <Tooltip/>
                </LineChart>
              </ResponsiveContainer>
           
        </Col>
      </Row>
    </Col>
  );
};

export default GraphComponent;

import React from "react";
import { Row, Col, Card, Result, Button, Table } from "antd";

const columns = [
  {
    title: "CALLS",
    children: [
      {
        title: "",
        dataIndex: "graph_c",
        key: "graph_c",
        width: 40,
      },

      {
        title: "OI",
        dataIndex: "oi_c",
        key: "oi_c",
        width: 70,
      },
      {
        title: "CHANGE IN OI",
        dataIndex: "oi_change_c",
        key: "oi_change_c",
        width: 70,
      },
      {
        title: "VOLUME",
        dataIndex: "volume_c",
        key: "volume_c",
        width: 70,
      },
      {
        title: "IV",
        dataIndex: "iv_c",
        key: "iv_c",
        width: 70,
      },
      {
        title: "LTP",
        dataIndex: "ltp_c",
        key: "ltp_c",
        width: 70,
      },
      {
        title: "CHNG",
        dataIndex: "chng_c",
        key: "chng_c",
        width: 70,
      },
      {
        title: "BID QTY",
        dataIndex: "bid_qty_c",
        key: "bid_qty_c",
        width: 70,
      },
      {
        title: "BID PRICE",
        dataIndex: "bid_price_c",
        key: "bid_price_c",
        width: 70,
      },
      {
        title: "ASK PRICE",
        dataIndex: "ask_price_c",
        key: "ask_price_c",
        width: 70,
      },
      {
        title: "ASK QTY",
        dataIndex: "ask_qty_c",
        key: "ask_qty_c",
        width: 70,
      },
    ],
  },
  {
    title: "PUTS",
    children: [
      {
        title: "STRIKE PRICE",
        dataIndex: "strike_price_p",
        key: "strike_price_p",
        width: 70,
      },
      {
        title: "BID QTY",
        dataIndex: "bid_qty_p",
        key: "bid_qty_p",
        width: 70,
      },
      {
        title: "BID PRICE",
        dataIndex: "bid_price_p",
        key: "bid_price_p",
        width: 70,
      },
      {
        title: "ASK PRICE",
        dataIndex: "ask_price_p",
        key: "ask_price_p",
        width: 70,
      },
      {
        title: "ASK QTY",
        dataIndex: "ask_qty_p",
        key: "ask_qty_p",
        width: 70,
      },
      {
        title: "CHNG",
        dataIndex: "chng_p",
        key: "chng_p",
        width: 70,
      },
      {
        title: "LTP",
        dataIndex: "ltp_p",
        key: "ltp_p",
        width: 70,
      },
      {
        title: "IV",
        dataIndex: "iv_p",
        key: "iv_p",
        width: 70,
      },
      {
        title: "VOLUME",
        dataIndex: "volume_p",
        key: "volume_p",
        width: 70,
      },
      {
        title: "CHANGE IN OI",
        dataIndex: "oi_change_p",
        key: "oi_change_p",
        width: 70,
      },
      {
        title: "OI",
        dataIndex: "oi_p",
        key: "oi_p",
        width: 70,
      },
      {
        title: "",
        dataIndex: "graph_p",
        key: "graph_p",
        width: 40,
      },
    ],
  },
];

const data = [];
for (let i = 0; i < 50; i++) {
  data.push({
    key: i,
    graph_c: "",
    oi_c: "12,356.456",
    oi_change_c: "1356.456",
    volume_c: "12,356.456",
    iv_c: "10,356.456",
    ltp_c: "2,356.456",
    chng_c: "1,356.456",
    bid_qty_c: "12,356.456",
    bid_price_c: "12,356.456",
    ask_price_c: "12,356.456",
    ask_qty_c: "12,356.456",
    oi_p: "12,356.456",
    oi_change_p: "1356.456",
    volume_p: "12,356.456",
    iv_p: "10,356.456",
    ltp_p: "2,356.456",
    chng_p: "1,356.456",
    bid_qty_p: "12,356.456",
    bid_price_p: "12,356.456",
    ask_price_p: "12,356.456",
    ask_qty_p: "12,356.456",
    strike_price_p: "78,859.00",
  });
}

const TableComponent = () => {
  return (
    <Row justify="center" align="middle">
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 1000, y: 1000 }}
        className="test"
        pagination={false}
      />
      ,
    </Row>
  );
};

export default TableComponent;

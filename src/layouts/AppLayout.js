import { Layout, Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import AppHeaderLayout from "./AppHeaderLayout";
import SideBarItemsLayout from "./SideBarItemsLayout";
const { Sider, Content } = Layout;

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <AppHeaderLayout />
      <Layout>
        <SideBarItemsLayout />
        <Content className="bg-white">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;

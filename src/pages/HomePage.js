import { Layout, Menu, Button, Col, Row } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import {Link} from 'react'
import GraphComponent from "../components/GraphComponent";
const { Header, Footer, Sider, Content } = Layout;

const HomePage = () => {
  return (
    <Layout>
      <Header type="primary" style={{ backgroundColor: "#0000" }}>
        <Row>
          <Col span={8}>
            <Row>
            <div style={{marginLeft :'5px', color:'#03a1fc'}}>Home</div>
            <div style={{marginLeft :'5px', color:'#03a1fc'}}>Template</div>
            <div style={{marginLeft :'5px', color:'#03a1fc'}}>Tips</div>
            <div style={{marginLeft :'5px', color:'#03a1fc'}}>SignIn</div>
            </Row>  
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          theme="light"
        >
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              nav 4
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0, backgroundColor: "#0000" }}
          >
            Welcome in Component
          </Header>

          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <GraphComponent/>
            </div>
          </Content>
        </Layout>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default HomePage;

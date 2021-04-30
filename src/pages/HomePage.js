import { Layout, Menu, Button, Col, Row } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { Link } from "react";
import GraphComponent from "../components/GraphComponent";
const { Header, Footer, Sider, Content } = Layout;

const HomePage = () => {
  return (
    <Layout
    //  className='site-layout'
      >
      {/* <Header type="primary" style={{ backgroundColor: "#0000" }}>
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
      </Header> */}
      <Content  >
        {/* //className="site-layout-background" */}
        <Layout >
          {/* <Header
            // className="site-layout-sub-header-background"
            style={{ padding: 0,
               backgroundColor: "#FFFF" }}
          >
            Welcome in Component
          </Header> */}

          <Content style={{ backgroundColor:'#FFFF' }}>
            <div
              // className="site-layout-background" 
              style={{ padding: 24, minHeight: 360 }}
            >
              <GraphComponent />
            </div>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default HomePage;

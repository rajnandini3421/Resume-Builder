import { Button, Layout, Menu, Tooltip, Row, Col, Divider } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import Icon from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header } = Layout;

const AppHeaderLayout = () => {
  return (
    // <Header className='bg-white shadow border-secondary px-10 w-full h-10 flex items-center mt-100' style={{backgroundColor:'#008080'}}>
    // <Header
    //   class="flex items-center px-0 w-full h-10"
    //   // style={{ backgroundColor: "#008080" }}
    // >
      <div class="flex items-center px-0 w-full h-10 bg-gradient-to-r from-green-400 to-blue-500 ...">

      <Col span="16">
        <Row>
          <Col span="3">
            <Button type="text" className="absolute">
              <Row>
                <img className="h-7 w-7 ml-2" src="/icons/logo.svg" />
                <div class="text-white ml-1.5">Logo</div>
              </Row>
            </Button>
          </Col>
          <Col className=" mt-2">
            <Link style={{ color: "#ffff" }}>NIFTY</Link>
          </Col>
          <Col className="mt-2 ">
            <Divider className="bg-white " type="vertical"></Divider>
          </Col>
          <Col className=" mt-2">
            <Link style={{ color: "#ffff" }}>BANKNIFTY</Link>
          </Col>
          <Col className="mt-2 ">
            <Divider className="bg-white " type="vertical"></Divider>
          </Col>
          <Col className=" mt-2">
            <Link style={{ color: "#ffff" }}>USDINR</Link>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>

        <Col className=" mt-2">
            <Link style={{ color: "#ffff" }}>Users Manual</Link>
          </Col>
          <Col className="mt-2 ">
            <Divider className="bg-white " type="vertical"></Divider>
          </Col>
          <Col className=" mt-2">
            <Link style={{ color: "#ffff" }}>Pricing</Link>
          </Col>
          <Col className="mt-2 ">
            <Divider className="bg-white " type="vertical"></Divider>
          </Col>
          <Col className="">
            <div className='text-purple text-sm'>Contact : 8956897820</div>
            <div className='-mt-1 text-pink text-xs'>Email : tailcom@helpdesk.com</div>

          </Col>
          <Col>
          <Button type="text" className="absolute">
            <Row>
              <img className="h-5 w-6 ml-2" src="/icons/user1.svg" />
              <div class="text-white ml-1.5">Login</div>
            </Row>
          </Button>
          </Col>
        </Row>
      </Col>
    {/* </Header> */}
    </div>
  );
};

export default AppHeaderLayout;

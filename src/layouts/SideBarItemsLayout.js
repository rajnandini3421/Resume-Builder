import { Layout, Menu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SideBarItems } from "../assets/constants/SideBarItems";
const { Sider, Content } = Layout;

const SideBarItemsLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  let defaultItemKey = ["Home"];

  return (
    <Sider
      // className="transform top-0 left-0 w-2 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
      width={200}
      breakpoint="sm"
      collapsed={collapsed}
      onBreakpoint={(broken) => {
        broken ? setCollapsed(true) : setCollapsed(false);
      }}
      collapsedWidth={60}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={defaultItemKey}
        style={{ height: "100%", borderWidth: 0 , backgroundColor:'	 #b3d9ff' }}
      >
        {SideBarItems.map((item) => (
          <Menu.Item
            className="flex-items-center"
            icon={item.icon}
            key={item.title}
          >
            <Content style={{ margin: "0 25px" }}>
              <Link
                id={`sidebar-menu-link-${item.title}`}
                to={item.path}
              >
                {item.title}
              </Link>
            </Content>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default SideBarItemsLayout;

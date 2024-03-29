import {Layout, Menu, type MenuProps} from "antd";
import Sider from "antd/es/layout/Sider";
import {useNavigate} from "react-router-dom";
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
import React from "react";

const items: MenuProps['items'] = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));

const SidebarComp = () => {

  

    return (
        <Sider
            style={{ overflow: 'auto',
             height: '100vh', 
             position: 'fixed',
             left: 0, top: 0,
             bottom: 0 
            }}
            >
            <div className="demo-logo-vertical" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
        </Sider>
    )
}

export default SidebarComp
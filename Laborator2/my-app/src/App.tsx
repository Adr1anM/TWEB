import React, { useState } from 'react';
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
import type { MenuProps } from 'antd';
import { Button,Form,Layout, Menu, Row, theme } from 'antd';
import ModalForm from './ModalForm';
import CardModel from './Model';
import CardComponent from './CardComponent';

const { Header, Content, Footer, Sider } = Layout;

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

const initialData:CardModel[] = [
  {
    data: {
      
      prenume: "Manchester",
      descriere: "Student",
      dataNasterii: "12.12.2002",
      nrGroup: 2
    }
  },
  {
    data: {
    
      prenume: "Vieru",
      descriere: "Scriitor",
      dataNasterii: "12.12.2002",
      nrGroup: 3
    }
  }
]; 


const App: React.FC = () => {
 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cardData, setCardData] = useState<CardModel[]>(initialData);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    
    setIsModalVisible(false);
   
  };

  const handleFormSubmit = (data: CardModel) => {
    console.log("Handle submit")
    console.log(data)
    setCardData([...cardData, data]);
    console.log("final card data");
    console.log(cardData);

    setIsModalVisible(false);
  };

  const CardObj:CardModel = {
        data:{

          prenume: "string",
          descriere: "string",
          dataNasterii: "string",
          nrGroup: 2
        }
  } 


  const emptyCard:CardModel = {
    data:{
      prenume: "",
      descriere: "",
      dataNasterii: "",
      nrGroup: 0
    }

  }
   
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  console.log(cardData);

  return (
    
    
    <Layout hasSider>
      <Sider
        style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
         <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Button type="primary" onClick={showModal} style={{ marginBottom: 16 }}>
            Add Card
          </Button>
          <ModalForm visible={isModalVisible} onCancel={handleCancel} onSubmit={handleFormSubmit} card = {emptyCard} />
         <div style={{display:'flex',flexDirection:'row',gap:10 }}>{cardData.map((card , index) => (
        <CardComponent key={index} value={card} />
      ))}</div>
      {/* <CardComponent value = {CardObj}/> */}
          </Content> 
        <Footer style={{ textAlign: 'center', position: 'fixed', bottom: 0, right:10 }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>

  );
};

export default App;


{/* <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Button type="primary" onClick={showModal} style={{ marginBottom: 16 }}>
            Add Card
          </Button>
          <ModalForm visible={isModalVisible} onCancel={handleCancel} onSubmit={handleFormSubmit} />
          <CardManager cardData={cardData} />
        </Content> */}

// const [isModalVisible, setIsModalVisible] = useState(false);
//   const [cardData, setCardData] = useState<any[]>([]);

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   const handleFormSubmit = (data: any) => {
//     setCardData([...cardData, data]);
//     setIsModalVisible(false);
//   };
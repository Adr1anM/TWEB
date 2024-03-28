import React from 'react';
import {Layout} from 'antd';
import ContentComp from './Layouts/ContentComp';
import SidebarComp from './Layouts/SideBarComp';
import HeaderComp from './Layouts/HeaderComp';
import FooterComp from './Layouts/FooterComp';




const App: React.FC = () => {
  return (
    <> 
      <Layout hasSider>
         <SidebarComp/>

         <Layout style={{marginLeft: 200}}>

              <HeaderComp />

              <ContentComp />
              <FooterComp />
          </Layout>
      </Layout>
    </>
  );
};

export default App;


// <Sider
// style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
// >
// <div className="demo-logo-vertical" />
// <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
// </Sider>
// <Layout style={{ marginLeft: 200 }}>
// <Header style={{ padding: 0, background: colorBgContainer }} />
//  <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
//   <Button type="primary" onClick={showModal} style={{ marginBottom: 16 }}>
//     Add Card
//   </Button>
//   <ModalForm visible={isModalVisible} onCancel={handleCancel} onSubmit={handleFormSubmit} card = {emptyCard} />
//  <div style={{display:'flex', flexDirection:'row',gap:10 }}>{cardData.map((card , index) => (
// <CardComponent key={index} value={card} />
// ))}</div>

//   </Content> 
// <Footer style={{ textAlign: 'center', position: 'fixed', bottom: 0, right:10 }}>
//   Ant Design ©{new Date().getFullYear()} Created by Ant UED
// </Footer>
// </Layout>
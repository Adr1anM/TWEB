import {Outlet} from "react-router-dom";
import  { useState } from 'react';
import { Button,Layout, theme } from 'antd';
import ModalForm from '../ModalForm';
import CardModel from '../Model';
import CardComponent from "../CardComponent";

const {Content} = Layout;

const initialData:CardModel[] = [
  {
    data: {
      nume : "United",
      prenume: "Manchester",
      descriere: "Student",
      dataNasterii: "12.12.2002",
      nrGroup: 2
    }
  },
  {
    data: {
      nume : "Igor",
      prenume: "Vieru",
      descriere: "Scriitor",
      dataNasterii: "12.12.2002",
      nrGroup: 3
    }
  }
]; 

const ContentComp = () => {


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
     
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
  
    console.log(cardData);

    return (
        <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
            <div
                style={{
                    padding: 24,
                    textAlign: 'center',
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Outlet />
            </div>

            <Button type="primary" onClick={showModal} style={{ marginBottom: 16 }}>
                     Add Card
            </Button>
            <ModalForm visible={isModalVisible} onCancel={handleCancel} onSubmit={handleFormSubmit}  />
            <div style={{display:'flex', flexDirection:'row',gap:10 }}>{cardData.map((card , index) => (
            <CardComponent key={index} value={card} />
            ))}</div>

        </Content>

    )
}




export default ContentComp;


/* const [isModalVisible, setIsModalVisible] = useState(false);
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

  console.log(cardData); */
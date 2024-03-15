import React, { useEffect, useState } from 'react';

import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Modal,

  } from 'antd';
import CardModel from './Model';

const { RangePicker } = DatePicker;

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };
  


interface ModalFormProps {
  visible: boolean;
  onSubmit: (data: CardModel) => void;
  onCancel:() => void;
  card : CardModel;
}

const ModalForm: React.FC<ModalFormProps> = ({ visible, onCancel ,onSubmit, card }) => {
  const [form] = Form.useForm();

 

  const onFinish = (values: any) => {
    const data:CardModel = {
      data: {
        prenume : values.prenume,
        descriere : values.descriere,
        dataNasterii : values.dataNasterii.toString(),
        nrGroup : values.nrGroup
      }
    }
    console.log("OnFinishMethod values")
    console.log(values);
    alert(values);
    onSubmit(data); 
    form.resetFields();
  };
  
  
  useEffect(() =>{
    form.resetFields();
  },[onCancel])



  return (
    <Modal title="Add Card" open={visible} onCancel={onCancel} footer={null}>
        <Form form={form} {...formItemLayout} onFinish={onFinish} initialValues={{}}>
 

          <Form.Item label="Prenume" name="prenume" rules={[{ required: true, message: 'Please input your surname!' }]}>
           <Input />
          </Form.Item>

         <Form.Item label="Descriere" name="descriere" rules={[{ required: true, message: 'Please input a description!' }]}>
            <Input.TextArea />
          </Form.Item>

           <Form.Item label="Data Nasterii" name="dataNasterii" rules={[{ required: true, message: 'Please select your date of birth!' }]}>
            <DatePicker />
           </Form.Item>

          <Form.Item label="Nr group" name="nrGroup" rules={[{ required: true, message: 'Please input your surname!' }]}>            
           <InputNumber />
           </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
             <Button type="primary" htmlType="submit">
               Submit
             </Button>
           </Form.Item>
         </Form>
       </Modal>
  );
};

export default ModalForm;




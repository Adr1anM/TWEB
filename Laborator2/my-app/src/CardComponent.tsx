import React from 'react';
import { Card as AntCard } from 'antd';
import CardModel from './Model'

const CardComponent:React.FC<{value:CardModel | undefined}> = ({value}) => {
 

      if(!value ){
        console.log("card component")
        console.log(value);
        return null;
      }
   
      const { prenume, descriere, dataNasterii, nrGroup } = value.data;

      return (
        <AntCard style={{ marginBottom: '10px',borderColor: 'black' }}>
          <p>Prenume: {prenume}</p>
          <p>Descriere: {descriere}</p>
          <p>Data Nasterii: {dataNasterii}</p>
          <p>Anii de studii: {nrGroup}</p>
        </AntCard>
      );


  };

  export default CardComponent;
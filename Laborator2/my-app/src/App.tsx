import React ,{ ChangeEvent } from 'react';
import {Count} from './Test'
import { log } from 'console';
import { useState } from 'react';


console.log(Count(4,5));  

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const handleChangeInput1 = (event: ChangeEvent<HTMLInputElement>) => {
    setInput1(event.target.value);
  };

  const handleChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInput2(event.target.value);
  };

  const handleChangeInput3 = (event: ChangeEvent<HTMLInputElement>) => {
    setInput3(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Valori formular:', { input1, input2, input3 });
    alert('Valori trimise cu succes!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input1} onChange={handleChangeInput1} />
      <input type="text" value={input2} onChange={handleChangeInput2} />
      <input type="text" value={input3} onChange={handleChangeInput3} />
      <button type="submit">Trimite</button>
    </form>
  );
}

export default App;




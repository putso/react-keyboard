import { text } from 'node:stream/consumers';
import React, { useEffect, useState } from 'react';
import MyKeyboard from './MyKeyboard';
import MyTextArea from './MyTextArea';
import {itsLetter} from './data/data_key';
interface KeyData {
  value: string;
  code: string;
}
interface KeyEvent {
  'keyup': KeyboardEvent;
  'keydown': KeyboardEvent;
}
function App() {
  let [keyPressed, setKeyPressed] = useState<KeyData[]>([]);
  function handleKey(keyData:KeyData, typeEvent:keyof KeyEvent = 'keydown') {
    // console.log('handleKey');
    // setTextAreaValue((textAreaValue) => {
    //   if(itsLetter(keyData.code) && typeEvent === 'keydown') return [...textAreaValue,keyData.value];
      
    //   return textAreaValue;
    // }) 
    setKeyPressed((keyPressed)=> {
      //console.log(typeEvent) ;
      let t = [...keyPressed,keyData.code];
      if(typeEvent === 'keydown' && !keyPressed.map(el => el.code).includes(keyData.code) ) return [...keyPressed,keyData];
      if(typeEvent === 'keyup') return keyPressed.filter(el => el.code!== keyData.code);
      return keyPressed;
    });
    
  }
  let [test, setTest] = useState(1);
  useEffect(() => {
      setInterval(() => {
    
    setTest((prevValue) => {
      console.log('setInterval');
      return prevValue+1;
    });
  },1000);
  },[])





  return (
    <div className="App">
      <MyTextArea ></MyTextArea>
      <MyKeyboard  handleKey= {handleKey} keyPressed = {keyPressed.map(el => el.code)}></MyKeyboard>
    </div>
  );
}

export default App;

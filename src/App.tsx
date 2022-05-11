import { text } from 'node:stream/consumers';
import React, { useState } from 'react';
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
  let [keyPressed, setKeyPressed] = useState<string[]>([]);
  let [textAreaValue,setTextAreaValue] = useState<string[]>([]);
  function handleKey(keyData:KeyData, typeEvent:keyof KeyEvent = 'keydown') {
    console.log('handleKey');
    setTextAreaValue((textAreaValue) => {
      if(itsLetter(keyData.code)) return [...textAreaValue,keyData.value];
      
      return textAreaValue;
    }) 
    setKeyPressed((keyPressed)=> {
      //console.log(typeEvent) ;
      if(typeEvent === 'keydown' && !keyPressed.includes(keyData.code) ) return [...keyPressed,keyData.code];
      if(typeEvent === 'keyup') return keyPressed.filter(el => el!== keyData.code);
      return keyPressed;
    });
    
  }






  return (
    <div className="App">
      <MyTextArea text = {textAreaValue}></MyTextArea>
      <MyKeyboard  handleKey= {handleKey} keyPressed = {keyPressed}></MyKeyboard>
    </div>
  );
}

export default App;

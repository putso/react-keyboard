import React, { useState } from 'react';
import MyKeyboard from './MyKeyboard';
import MyTextArea from './MyTextArea';

function App() {
  let [keyPressed, setKeyPressed] = useState<string[]>([]);
  function handleKey(keyValue:string) {
    setKeyPressed( [...keyPressed,keyValue]);
    console.log(keyPressed);
  }






  return (
    <div className="App">
      <MyTextArea></MyTextArea>
      <MyKeyboard  handleKey= {handleKey}></MyKeyboard>
    </div>
  );
}

export default App;

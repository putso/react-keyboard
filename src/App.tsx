import React, { useEffect, useState } from 'react';
import MyKeyboard from './MyKeyboard';
import MyTextArea from './MyTextArea';
import {KeyData} from './type/index';

function App() {
  let [key, setKey] = useState<KeyData>();




  return (
    <div className="App">
      <MyTextArea keyData = {key} ></MyTextArea>
      <MyKeyboard setKey = {setKey} ></MyKeyboard>
    </div>
  );
}

export default App;

import React, {useState} from 'react'
import MyKey from './MyKey';
import './styles/App.css';
import {keyValue, keyCodes,wideKeys} from './data/data_key';

function wideKeysClass(keyCode:string):string {
  let index: keyof typeof wideKeys; 
  for( index in wideKeys) {
    if(wideKeys[index].includes(keyCode)) return index;
  }
  return ' ';
}
const  MyKeyboard:React.FC = () => {
    let [currentKeys, setCurrentKeys] = useState(keyValue.ru);
    let listKey:JSX.Element[] = keyCodes.map((row,i) => {
       return (
        <div className = 'keyboard__row' key = {i}>
            { 
                row.map( (keyCode,j) => <div key = {keyCode} className = {'keyboard__key ' + keyCode + wideKeysClass(keyCode)} > {currentKeys[i][j] }</div>)
            }
        </div>
        )
    });
  return (
    <div className= 'keyboard'>
        {listKey}
    </div>
  )
}

export default MyKeyboard
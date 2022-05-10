import React, {useState} from 'react'
import MyKey from './MyKey';
import './styles/App.css';
import {keyValue, keyCodes,wideKeys} from './data/data_key';

interface KeyBoardProps {
  handleKey: (letter:string) => void; 
}

function wideKeysClass(keyCode:string):string {
  let index: keyof typeof wideKeys; 
  for( index in wideKeys) {
    if(wideKeys[index].includes(keyCode)) return index;
  }
  return ' ';
}
const  MyKeyboard:React.FC<KeyBoardProps> = ({handleKey}) => {
    let [currentKeys, setCurrentKeys] = useState(keyValue.ru);
    let listKey:JSX.Element[] = keyCodes.map((row,i) => {
       return (
        <div className = 'keyboard__row' key = {i}>
            { 
                row.map( (keyCode,j) => 
                <MyKey 
                  key = {keyCode}
                  keyCode = {keyCode} 
                  className = {'keyboard__key ' + keyCode + ' ' +  wideKeysClass(keyCode)} 
                  handleKey = {handleKey}
                > 
                  {currentKeys[i][j] }

                </MyKey>)
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
import React, {useState, useEffect, useRef} from 'react'
import MyKey from './MyKey';
import './styles/App.css';
import {keyValue, keyCodes,wideKeys,createMap} from './data/data_key';

interface  Keys {
  ru: string[][],
  en: string[][]
}
interface KeyData {
  value: string;
  code: string;
}
interface KeyEvent {
  'keyup': KeyboardEvent;
  'keydown': KeyboardEvent;
}
interface KeyBoardProps {
  handleKey: (keyData:KeyData, typeEvent:keyof KeyEvent) => void; 
  keyPressed: string[];
}

function wideKeysClass(keyCode:string):string {
  let index: keyof typeof wideKeys; 
  for( index in wideKeys) {
    if(wideKeys[index].includes(keyCode)) return index;
  }
  return ' ';
}
let countRender = 0;
function getCurrenKeys(keyPressed:string[], current:string[][]) {
  // console.log('getCurrenKeys',keyPressed);
  let changeLanguageKeys = ['ControlLeft','AltLeft'];
  let checkLast =  changeLanguageKeys.includes( keyPressed[keyPressed.length-1]);
  let checkIncludes = changeLanguageKeys.reduce( (a,b) => a && keyPressed.includes(b), true);
  let nextLanguage = (Object.keys(keyValue) as Array<keyof typeof keyValue>).filter(el => keyValue[el]!== current)[0];
  // console.log('checks',checkLast, checkIncludes);
  if(checkLast && checkIncludes) {
    // console.log('check ad');
    // console.log(keyValue[nextLanguage],nextLanguage);
    return keyValue[nextLanguage];
  } 
  return current;
}
const  MyKeyboard:React.FC<KeyBoardProps> = React.memo(({handleKey,keyPressed}) => {
    console.log(countRender++);
    let currentKeysRef = useRef(keyValue.ru);
    currentKeysRef.current = getCurrenKeys(keyPressed, currentKeysRef.current)
    useEffect( ()=> {

      console.log('useEffect');
      let keysMap = createMap(keyCodes,currentKeysRef.current);
      let keyboardEvents:Array<keyof KeyEvent> = ['keyup', 'keydown'];
      keyboardEvents.forEach( keyboardEvent => {
         document.body.addEventListener<keyof KeyEvent>( keyboardEvent, (e) => {
          handleKey({
            value: keysMap.get(e.code) || '',
            code: e.code
          }, keyboardEvent );
         })
      });





    },[])





    let listKey = keyCodes.map((row,i) => {
       return (
        <div className = 'keyboard__row' key = {i}>
            { 
                row.map( (keyCode,j) => {
                let keyValue = currentKeysRef.current[i][j];
                let keyData:KeyData = {value:keyValue, code: keyCode};
                return (
                  <MyKey 
                    key = {keyCode}
                    keyCode = {keyCode} 
                    className = {'keyboard__key ' + keyCode + ' ' +  wideKeysClass(keyCode) + (keyPressed.includes(keyCode)? ' key__pressed ': '') } 
                    onMouseDown ={() => handleKey(keyData, 'keydown')}
                    onMouseUp ={() => handleKey(keyData, 'keyup')}

                  > 
                  {keyValue }

                  </MyKey>)
                })
            }
        </div>
        )
    });
  return (
    <div className= 'keyboard'>
        {listKey}
    </div>
  )
},() => true);

export default MyKeyboard


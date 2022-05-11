import React, {useState, useEffect} from 'react'
import MyKey from './MyKey';
import './styles/App.css';
import {keyValue, keyCodes,wideKeys,createMap} from './data/data_key';


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

const  MyKeyboard:React.FC<KeyBoardProps> = ({handleKey,keyPressed}) => {

    let [currentKeys, setCurrentKeys] = useState(keyValue.ru);
    let keysMap = createMap(keyCodes,currentKeys);
    useEffect( ()=> {
      console.log('useEffect');
     
      //document.body.addEventListener('keydown', keydownHandler);
      let keyboardEvents:Array<keyof KeyEvent> = ['keyup', 'keydown'];
      keyboardEvents.forEach( keyboardEvent => {
         document.body.addEventListener<keyof KeyEvent>( keyboardEvent, (e) => {
          console.log('BeforeHandleKeys')
          handleKey({
            value: keysMap.get(e.code) || '',
            code: e.code
          }, keyboardEvent );
         })
      });





    },[]) 






    let listKey:JSX.Element[] = keyCodes.map((row,i) => {
       return (
        <div className = 'keyboard__row' key = {i}>
            { 
                row.map( (keyCode,j) => {
                let keyValue = currentKeys[i][j];
                let keyData = {value:keyValue, code: keyCode};
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
}

export default MyKeyboard
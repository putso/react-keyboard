import React, {useState, useEffect} from 'react'
import MyKey from './MyKey';
import './styles/App.css';
import {keyValue, keyCodes,wideKeys,createMap} from './data/data_key';


interface KeyData {
  value: string;
  code: string;
}
interface KeyBoardProps {
  handleKey: (letter:KeyData, Eventtype?: string) => void; 
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
      let keydownHandler = (e:KeyboardEvent) => {     
        handleKey({
          value: keysMap.get(e.code) || '',
          code: e.code
        });

      } 
      document.body.addEventListener('keydown', keydownHandler);


      interface KeyEvent {
        'keydown': KeyboardEvent;
        'keyup': KeyboardEvent;
      }

      let keyEvents:Array<keyof KeyEvent> = ['keyup', 'keydown'];
      keyEvents.forEach(keyEvent => {
        document.body.addEventListener<keyof KeyEvent>(keyEvent, (e)=> {console.log(e.code)});
      } )





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
                    onMouseDown ={() => handleKey(keyData)}
                    onMouseUp ={() => handleKey(keyData, 'keyUp')}

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
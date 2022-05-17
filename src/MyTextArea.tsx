import React, { useRef } from 'react'
import { FC } from 'react';
import { text } from 'stream/consumers';
import {itsLetter} from './data/data_key';
import {KeyData} from './type/index';

interface Props {
  keyData: KeyData | undefined;
}


function getNodeText(text:string[]) {
  let node_list:any = [[]];
  let [line,world] = [0,0];
  text.forEach(el => {
    if(el === '\n') line++;
    node_list[ line ][ world ] = <div className='world'>el</div>; world++;
  })
}








const MyTextArea:FC<Props> = ({keyData}) => {
  let textAreaValue = useRef<string[]>([]);
  let cursor = useRef<number>(-1);
  const limit = 60;
  if(keyData) {
    switch(keyData.code) {
      case 'Enter':
        textAreaValue.current.push('\n');
        break;
      case 'Backspace':
        textAreaValue.current=textAreaValue.current.filter((_,i) =>  i!== cursor.current);
        cursor.current--;
        break;
      default: 
        if(keyData.value.length === 1) {
          cursor.current++;
          textAreaValue.current.push(keyData.value);
        }
    }
  }
  // let text = textAreaValue.current.map(el => el.value.length>1? ' '+el.value+' ': el.value).map(el => {

  //   return (<div className='world'>{el.split('').map( letter => (<div className='letter'>{letter}</div>))}</div>);
  // })
  let index = 0;
  let text = textAreaValue.current.join('').split('\n').map(el => el.split(' ')).map( (line,i) => {
  console.log(cursor.current);
    return (<div className='line' key={i} >{
      line.map((world,j) => {
        return (<div className='world' key={j}  >{
          world.split('').map((letter,k) => {
            let cursorId = index;
            index++;
            return  <div className={'letter '} > {letter} {cursorId === cursor.current? <div className='cursor'>|</div>: ''}</div>
          }) 
        }</div>);
      })
    }</div>)
  });
  //console.log(text);
  return (
    <div className='myTextArea'>
      {text}
    </div>
  )
}

export default MyTextArea
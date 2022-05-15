import React, { useRef } from 'react'
import { FC } from 'react';
interface Props {
  text?: string[];
}
const MyTextArea:FC<Props> = ({text = []}) => {
  // let textAreaValue = text.join(' ').split(' ').map(word => {
  //   let wordChildrens = (word.split('').map( letter => {
  //     return (<div className='letter'>{letter}</div>)
  //   } ) );
  //   return <div className='world'>{wordChildrens}</div>
  // })
  let textAreaValue = useRef()
  return (
    <div className='myTextArea'>
      {text}
    </div>
  )
}

export default MyTextArea
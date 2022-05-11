import React, {  ReactElement, useEffect } from 'react'
import { useState } from 'react';

interface KeyProps {
  children: string;
  className: string;
  keyCode: string;
  onMouseDown: () => void;
  onMouseUp: () => void;
}


const MyKey:React.FC<KeyProps> = ({children, className,keyCode,onMouseDown,onMouseUp}) => {
  // useEffect( ()=> {
  //   console.log('adddeventListerner');
  //   let keydownHandler = (e:KeyboardEvent) => {
  //     console.log('123');
  //     if(e.code === keyCode) handleKey(children);

  //   }
  //   document.body.addEventListener('keydown', keydownHandler);
  //   return () => 
  //   {
  //     document.body.removeEventListener('keydown', keydownHandler);
  //   }
  // }) 
  return (
    <div className={className } onMouseDown= {onMouseDown} onMouseUp= {onMouseUp}  >{children}</div>
  )
}

export default MyKey
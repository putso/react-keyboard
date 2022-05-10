import React, {  ReactElement } from 'react'
import { useState } from 'react';

interface KeyProps {
  children: string;
  className: string;
  keyCode: string;
  handleKey: (letter:string) => void;  
}


const MyKey:React.FC<KeyProps> = ({children, className,keyCode, handleKey}) => {
  let [onClick,setOnClick] = useState(false); 
  return (
    <div className={className } onClick={() => handleKey(children)} >{children}</div>
  )
}

export default MyKey
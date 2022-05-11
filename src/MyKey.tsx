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
  return (
    <div className={className } onMouseDown= {onMouseDown} onMouseUp= {onMouseUp}  >{children}</div>
  )
}

export default MyKey
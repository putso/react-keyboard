import React, {  ReactElement, useEffect } from 'react'
import { useState } from 'react';

interface MyKeyProps {
  children: string;
  className: string;
  onMouseDown: () => void;
  onMouseUp: () => void;
}


const MyKey:React.FC<MyKeyProps> = ({children, className,onMouseDown,onMouseUp}) => {
  return (
    <div className={className } onMouseDown= {onMouseDown} onMouseUp= {onMouseUp}  >{children}</div>
  )
}

export default MyKey
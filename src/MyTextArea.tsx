import React from 'react'
interface textAreaProps {
  text: string[];
}
const MyTextArea:React.FC<textAreaProps> = ({text}) => {
  return (
    <div>MyTextArea</div>
  )
}

export default MyTextArea
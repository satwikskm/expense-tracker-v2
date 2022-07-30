import React from 'react'

const Item = (prop) => {
  const {header , type,amount,id}=prop
  
  
  
  
  return (
    <div>

      <li className={type}>{header} 
      <span>{amount}</span> 
      <span onClick={()=>prop.deleteItems(id)}>X</span>
      </li>
     
      
    </div>
  )
}

export default Item
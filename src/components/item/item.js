import React from 'react'
import './item.css'
const Item = (prop) => {
  const {header ,amount,id}=prop
  
  
  const gettype = (amount) =>{
    if(amount > 0){
      return 'plus'

    }
    else{
      return 'minus'
    }

  }
  
  
  return (
    <div className='items'>
      {console.log(prop)}
      <ul>
      <li className={gettype(amount)}>
        <div className="wrapper">
        <div className='head'>{header}</div> <div className='amt'>{amount}</div>

        </div>
        <button onClick={()=>prop.deleteItems(id)} className="delete">X</button>
      </li>


      </ul>
      


      
      
     
      
    </div>
  )
}

export default Item
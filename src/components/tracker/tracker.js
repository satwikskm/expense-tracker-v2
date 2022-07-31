import React from 'react'
import './tracker.css'
const Tracker = (props) => {
  // console.log(props,"trk")
  return (
    <div className='tracker-container'>
      <div className="income">
        <h2 className="title">Income </h2>
        <span className='inc'>{props.inc}</span>
        
      </div>
      <div className="expense">
      <h2 className="title">Expense</h2>
      <span className='exp'>{props.exp}</span>
       
      </div>
    </div>
  )
}

export default Tracker
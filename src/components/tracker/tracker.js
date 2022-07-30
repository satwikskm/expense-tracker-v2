import React from 'react'

const Tracker = (props) => {
  // console.log(props,"trk")
  return (
    <div className='container'>
      <div className="expense">
        Income : {props.inc}
      </div>
      <div className="income">
        Expense:{props.exp}
      </div>
    </div>
  )
}

export default Tracker
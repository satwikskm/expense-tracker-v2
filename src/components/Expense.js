import React, { useEffect } from 'react'
import { useReducer,useState } from 'react'
import Tracker from './tracker/tracker'
import Item from './item/item'
import './expense.css'

const getLocalData = () =>{
    const lists = localStorage.getItem("key")
    
    if(lists){
       
        return(JSON.parse(lists))
    }
    else{
        return ([])
    }

}

const initialState = 
{
    amount:0,
    text:'',
    transaction:getLocalData(),
    type:'',
    expense:10,
    income:10

}

const reducer = (state,action) =>{
    console.log("Working",initialState.amount,state)
    switch(action.type){
        case 'TEXT' :
            return {
                ...state,
                text:action.payload

            }
        case 'AMOUNT':{
            console.log("Working",state.amount)
            
            return{
                ...state,
                amount:action.payload

            }

        }
        case 'TYPE':{
            console.log("Working",state.type)
            
            return{
                ...state,
                type:action.payload

            }

        }
        case 'TRANSACTION':{

            
            
            return{
               
                ...state,
                transaction:action.payload
                

            }

        }
        case 'EXPENSE':{

            console.log("expense")
            
            return{
                ...state,
                expense:action.payload

            }

        }
        case 'INCOME':{

            
            
            return{
                ...state,
                income:action.payload

            }

        }


            // console.log("added",initialState.amount)
            // return 
        default:
            console.log("error")

    }


    

    

}


const Expense = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    // const [header,setHeader]=useState('')
    // const[amount,setAmount]=useState('')
    //const [transaction,setTransaction]=useState(getLocalData())
    //const [type,setType]=useState('')
    // const[income,setIncome]=useState(0)
    // const[expense,setExpense]=useState(0)
    

    const submitHandler =(e) =>{
        e.preventDefault()
        console.log("Submitted")
    
        if(state.amount > 0){
            
            dispatch({type:"TYPE",payload:'plus'})
            

        }
        else{
            dispatch({type:"TYPE",payload:'minus'})
        }
        // console.log(type)

        
        const newRecords = {
            id: new Date().getTime().toString(),
            header:state.text,
            type:state.type,
            amount:state.amount

        }
        // setTransaction([...transaction,newRecords])
        dispatch({type:'TRANSACTION',payload:[...state.transaction,newRecords]})

        
        
        // setHeader('')
        // setAmount('')
        // setType('')
        dispatch({type:'AMOUNT',payload:''})
        dispatch({type:'TEXT',payload:''})
        // dispatch({type:'TYPE',payload:''})
        // const plusTransaction = state.transaction.filter((a)=>a.amount > 0).reduce((a,b)=>a.amount+b.amount)
        // const minusTransaction = state.transaction.filter((a)=>a.amount < 0).reduce((a,b)=>a.amount+b.amount)
        // console.log(plusTransaction,minusTransaction,"val")
        
        //dispatch({type:'EXPENSE',payload:state.transaction.filter((item)=>item.amount < 0).reduce((a,b)=>a+Number(b.amount),0)})
        //dispatch({type:'INCOME',payload:state.transaction.filter((item)=>item.amount > 0).reduce((a,b)=>a+Number(b.amount),0)})

        // console.log("exp",state.transaction.filter((a)=>Number(a.amount) > 0).forEach((x)=>Number(sum+x.amount)),state.expense)
        // dispatch({type:'INCOME',payload:plusTransaction})

        // console.log(plusTransaction,minusTransaction)
        
        
        // console.log(transaction)

    }
    // useEffect(()=>{
    //     
    // })
    // console.log(transaction.filter((a)=>a.amount < 0))

    const deleteItems=(id)=>{
        console.log("in")
        
        const updatedTransacation = state.transaction.filter((t)=>t.id !== id)
        console.log(updatedTransacation,"1")
        dispatch({type:'TRANSACTION',payload:updatedTransacation})
        
        console.log(state.transaction,"2")
    }

    useEffect(()=>{
        console.log(state)
        localStorage.setItem("key",JSON.stringify(state.transaction))
        dispatch({type:'EXPENSE',payload:state.transaction.filter((item)=>item.amount < 0).reduce((a,b)=>a+Number(b.amount),0)})
        dispatch({type:'INCOME',payload:state.transaction.filter((item)=>item.amount > 0).reduce((a,b)=>a+Number(b.amount),0)})


    },[state.transaction])

    //const plusTransaction = state.transaction.filter((a)=>a.amount > 0).reduce((a,b)=>a.amount+b.amount)
    // const minusTransaction = state.transaction.filter((a)=>a.amount < 0).reduce((a,b)=>a.amount+b.amount)
    // console.log(plusTransaction,minusTransaction,"val")
    
    
    
    
    
  return (
    <>
    
        <h1>Expense Tracker</h1>
        
       {console.log(state.transaction.filter((item)=>item.amount < 0).reduce((a,b)=>a+Number(b.amount),0))}
        <h1>{state.income + state.expense}</h1>
   
        <Tracker inc={state.income} exp={state.expense} />
        <h4>History</h4>
       
        {
        state.transaction.map((unit)=>{
            return(
               
             <Item {...unit} key={unit.id} deleteItems=
             {(deleteItems)}/>)
            //  console.log(unit)
        })}
        
       
        <section onSubmit={submitHandler}>
            <h4>Add Transaction</h4>
            <h5>Text</h5>
            <form >
            <input 
            type="text"
            placeholder='Enter Text'
            value={state.text}
            onChange={(e)=>{
                dispatch({type:'TEXT',payload:e.target.value})
            }}
            
             />
            <h5>Amount(Negative - expense, Positive +expense) </h5>
            <div className="amount">
            <input 
            type="text"
            placeholder='Enter Amount' 
            value= {state.amount}
            onChange={(e)=>{
                dispatch({type:'AMOUNT',payload:e.target.value})
            }}
            
            
            />

            <button className="btn" type='submit' onClick={(e)=>console.log("hi")}>Add Transaction</button>
            </div>
            </form>
            

            
            


        </section>
        
    </>
  )
}

export default Expense
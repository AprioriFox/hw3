import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Count from '../../components/count/Count'
import { addNumberAction, changeValueAction, clearNumberAction,  } from '../../redux/actions'



const CountPage = () => {

  const dispatch = useDispatch()
  const {value, numbers} = useSelector(state=> state.countReducer)



  const changeValue = (e)=>{
    dispatch(changeValueAction(e.target.value))
  }


  const addNumber = () =>{
    dispatch(addNumberAction())
  }


  const clearNumber = () =>{
    dispatch(clearNumberAction())
  }


  return (
    <>
        <input type="number" onChange={changeValue} value={value} placeholder="Input number"/>
        <button onClick={addNumber}>Add</button>
        <button onClick={clearNumber}>Clear</button>
        <ul>
          {numbers.map((number, index)=>
            <Count key ={index} count={number}/>)}
        </ul>
    </>
  )
}

export default CountPage
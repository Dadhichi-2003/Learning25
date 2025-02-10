import React, { useState } from 'react'

const UseStateDemo1 = () => {

    const [count,setCount]=useState(0);


    const handelCount=()=>{
        setCount(count+1);
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO 1</h1> 
        <h2> COUNT = {count}</h2>
        <button onClick={()=>{handelCount()}}>INCREASE</button>      
    </div>
  )
}

export default UseStateDemo1

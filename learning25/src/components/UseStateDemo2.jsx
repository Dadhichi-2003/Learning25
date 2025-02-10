import React, { useState } from 'react'

const UseStateDemo2 = () => {

    const[isLoading,setIsLoading]=useState(true);
    

    const handleLoading=()=>{
        setIsLoading(false);
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1> USE STATE DEMO2</h1> 
        <h2>{isLoading==true ? "LOADING....":"" }</h2>
        <button onClick={()=>{handleLoading()}}>STOP</button>      
    </div>
  )
}

export default UseStateDemo2

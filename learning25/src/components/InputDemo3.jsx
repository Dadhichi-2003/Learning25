import React, { useState } from 'react'

const InputDemo3 = () => {

        const [id,setId]=useState("");
        const [name,setName]=useState("");
        const [marks,setMarks]=useState("");
        const [age,setAge]=useState("");
        const [fees,setFees]=useState("");

  return (
    <div style={{textAlign:"center"}}>
         <h1> INPUT DEMO 3</h1>

    <input type='text' placeholder='Enter your ID' onChange={(e)=>{setId(e.target.value)}}/>
    <h1>{id}</h1>
    <input type='text' placeholder='Enter your name' onChange={(e)=>{setName(e.target.value)}}/>
    <h1>{name}</h1>
    <input type='text' placeholder='Enter your marks' onChange={(e)=>{setMarks(e.target.value)}}/>
    <h1>{marks}</h1>
    <input type='number' placeholder='Enter your age' onChange={(e)=>{setAge(e.target.value)}}/>
    <h1>{age}</h1>
    <input type='text' placeholder='Enter your fees' onChange={(e)=>{setFees(e.target.value)}}/>
    <h1>{fees}</h1>
</div>
  )
}

export default InputDemo3

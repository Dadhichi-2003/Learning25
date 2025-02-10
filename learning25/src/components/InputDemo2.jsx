import React, { useState } from 'react'

const InputDemo2 = () => {
    const [fisrtName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [middleName,setMiddleName]=useState("");
    const [age,setAge]=useState("");
    const [salary,setSalary]=useState("");

  return (
    <div style={{textAlign:"center"}}>
        <h1> INPUT DEMO 2</h1>
        <input type='text' placeholder='Enter your First name' onChange={(e)=>{setFirstName(e.target.value)}}/>
        <h1>{fisrtName}</h1>
        <input type='text' placeholder='Enter your Last name' onChange={(e)=>{setLastName(e.target.value)}}/>
        <h1>{lastName}</h1>
        <input type='text' placeholder='Enter your Middle name' onChange={(e)=>{setMiddleName(e.target.value)}}/>
        <h1>{middleName}</h1>
        <input type='number' placeholder='Enter your age' onChange={(e)=>{setAge(e.target.value)}}/>
        <h1>{age}</h1>
        <input type='text' placeholder='Enter your salary' onChange={(e)=>{setSalary(e.target.value)}}/>
        <h1>{salary}</h1>
    </div>
  )
}

export default InputDemo2

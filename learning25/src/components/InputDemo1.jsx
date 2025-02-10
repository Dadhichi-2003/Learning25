import React, { useState } from 'react'

const InputDemo1 = () => {

    const [name , setName] = useState("");
    const [email,setEmail] = useState("")

    const nameHandler =(e)=>{
        setName(e.target.value);
    }

  return (
    <div>
      <h1>INPUT DEMO 1</h1>

        <input type='text' placeholder='enter your name' onChange={(e)=>{nameHandler(e)}}/>
        <h2>{name}</h2>
        <input type='email' placeholder='Enter your email' onChange={(e)=>{setEmail(e.target.value)}}/>
        <h2>{email}</h2>

    </div>
  )
}

export default InputDemo1

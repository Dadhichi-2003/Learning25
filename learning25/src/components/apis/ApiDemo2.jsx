import axios from 'axios'
import React from 'react'

const ApiDemo2 = () => {

    const postData = async() =>{
        
        var Obj = {
            name : "daksh",
            age : 22,
            email:"daksh@gmail.com",
            isActive:true,
        }
        const res = await axios.post("https://node5.onrender.com/user/user",Obj)
        console.log(res.data)
        if(res.status==201){
            alert("USer added ...")
        }
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 2</h1>
        <button onClick={postData}> CLICK</button>
    </div>
  )
}

export default ApiDemo2

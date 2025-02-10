import React from 'react'

export const ArrayDemo1 = () => {

   var users = ["amit","bharat","camel","horse"]
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:"blue"}}>Array demo -1</h1>
        {
        users.map((user)=>{
            return <li> {user}</li>
        })
        }

      
    </div>
  )
}
 

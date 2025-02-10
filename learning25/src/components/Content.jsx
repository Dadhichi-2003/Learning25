import React from 'react'

const Content = () => {
    var name = " bjharar";
    var age = 19;
    var isActive = false;
  return (
    <div style={{ backgroundColor:"GrayText",color:"azure",width:"100%" ,height:"800px" ,padding:"200px",overflow:"hidden" ,position:"fixed"}}>
          <h1>name :{name}</h1>
      <h2>age:{age}</h2>
      <h3> Active = {isActive==true ? "Active":"Not Active"}</h3>

     <h1>hello world</h1>
    </div>
  )
}

export default Content

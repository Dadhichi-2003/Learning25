import React from 'react'

const ArrayDemo2 = () => {

    var Students = [
        {
            name:"bharat",
            age:15,
            marks:87,

        },
        {
            name:"bharat",
            age:15,
            marks:87,

        },{
            name:"bharat",
            age:15,
            marks:87,

        },
    ]    
    


  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:"red"}}> array demo 2</h1>
       {
        Students.map((student)=>{
            return <div>
                <li>name = {student.name}</li>
                <li>age= {student.age}</li>
                <li>marks = {student.marks}</li>
                

            </div>
        })       }
            
    </div>
  )
}

export default ArrayDemo2

import React, { useEffect } from 'react'

const UseEffectDemo = () => {

    useEffect(()=>{
        console.log("use effect called ...");
    },[]);

  return (
    <div>
            
    </div>
  )
}

export default UseEffectDemo

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const FormDemo5 = () => {

    const {register , handleSubmit} = useForm();
 

    const submitHandler= (data) => {
       console.log(data)
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>GYM MEMBERSHIP</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name</label>
                <input type='text' placeholder='Enter your name'{...register("name")}/> 
            </div>
            <div>
                <label>Age</label>
                <input type='text' placeholder='Enter your Age'{...register("age")}/> 
            </div>
            <div>
                <label>weigth</label>
                <input type='number' placeholder='Enter your weigth in KG'{...register("weigth")}/> 
            </div>
            
            <div>
                <label>hieght</label>
                <input type='number' placeholder='Enter your weigth in Foot'{...register("hieght")}/> 
            </div>
           
          
            
            <div>
                <label>Goal</label>
                <select {...register("goal")}>
                    <option >Shredded</option>
                    <option>normal fitness</option>
                    <option>Powerlifiting</option>
                    <option>Bodybuilding</option>
                </select>
            </div>
            <div>
                <button type='submit'> submit </button>
            
            </div>
        </form>
      
    </div>
  )
}

export default FormDemo5

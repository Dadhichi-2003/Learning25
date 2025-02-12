import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo1 = () => {

    const {register,handleSubmit}=useForm();

    const submitHandler=(data)=>{
        console.log(data)
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1> Form Demo 1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label> Name</label>
                <input type='text' placeholder='name' {...register("name")}/>
            </div>
            <div>
                <label> age</label>
                <input type='number' placeholder='age' {...register("number")}/>
            </div>
            <div>
                <label> fees</label>
                <input type='text' placeholder='fees' {...register("fees")}/>
            </div>
            <div>
               <button type='submit'> Submit</button>
            </div>
        </form>
    </div>
  )
}

export default FormDemo1

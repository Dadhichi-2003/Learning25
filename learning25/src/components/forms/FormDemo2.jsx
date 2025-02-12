import React from 'react'
import { useForm } from 'react-hook-form';

const FormDemo2 = () => {
      const {register,handleSubmit}=useForm();
    
        const submitHandler=(data)=>{
            console.log(data)
        }
    
  return (
    <div style={{textAlign:"center"}}>
    <h1> Form Demo 2 (trip to gova)</h1>
    <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>Name</label>
            <input type='text' placeholder='name' {...register("name")}/>
        </div>
        <div>
            <label> age</label>
            <input type='number' placeholder='age' {...register("number")}/>
        </div>
        <div>
            <label> GENDER :</label>
            male : <input type='radio' name='gender' value="male" {...register("gender")}/>
            female : <input type='radio' name='gender' value="female" {...register("gender")}/>
        
        </div>
        <div>
           <button type='submit'> Submit</button>
        </div>
    </form>
</div>
  )
}

export default FormDemo2

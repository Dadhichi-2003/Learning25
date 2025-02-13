import React from 'react'
import { useForm } from 'react-hook-form';

const FormDemo8 = () => {
    const {register,handleSubmit} = useForm();
    
       const submitHandler= (data)=>{
            console.log(data)
        }
  return (
    <div style={{textAlign:"center"}}>
    <h1>EMPLOYE</h1>
    <form onSubmit={handleSubmit(submitHandler)}>
        <div>
        <label>Name</label>
        <input type='text' placeholder='Enter your name'{...register("name")}/>
        </div>
        <div>
        <label>AGE?</label>
        <input type='text'placeholder='Enter your age'{...register("age")}/>
        </div>
        <div>
        <label>SALAry</label>
        <input type='text' {...register("salary")}/>;
        </div>
       
        <div>
        <label>period time</label>
        <input type='text' {...register("ptime")}/>;
        </div>
       
        <div>

        <button type='submit'>submit</button>
        </div>
    </form>
  
</div>
  )
}

export default FormDemo8

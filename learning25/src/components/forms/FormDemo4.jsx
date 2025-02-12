import React from 'react'
import { useForm } from 'react-hook-form';

const FormDemo4 = () => {
         const {register,handleSubmit}=useForm();
            
                const submitHandler=(data)=>{
                    console.log(data)
                }
  return (
    <div style={{textAlign:"center"}}>
    <h1> Form Demo 4 (FOOD)</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div>
            <label>FOOD Name</label>
            <input type='text' placeholder='name' {...register("fname")}/>
        </div>
       
        <div>
            <label> food-preferrence :</label>
            chhese: <input type='radio' name='food-preferrence' value="male" {...register("food-preference")}/>
            butter : <input type='radio' name='food-preferrence' value="female" {...register("food-prefernce")}/>
        
        </div>
        <div>
            <label> TIME </label>
            <input type='text' {...register("time")}></input>
        
        </div>
    
           <button type='submit' >submit</button>
      
     </form>
</div>
  )
}

export default FormDemo4

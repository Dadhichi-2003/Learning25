import React from 'react'
import { useForm } from 'react-hook-form';

const FormDemo3 = () => {
     const {register,handleSubmit}=useForm();
        
            const submitHandler=(data)=>{
                console.log(data)
            }
  return (
    <div style={{textAlign:"center"}}>
    <h1> Form Demo 3 (trip to parayagraj)</h1>
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
            <label> Terms & conditions</label>
            
            2o km walk: <input type='checkbox'  {...register("Terms & conditions")}/>
            swiming : <input type='checkbox' {...register("Terms & conditions")}/>
            Ghar wapsi: <input type='checkbox'  {...register("Terms & conditions")}/>
        
        </div>
        <div>
            <label>CITY</label>
            <select {...register("city")}>
                <option> Ahmedabad</option>
                <option> mimbai</option>
                <option> pune</option>
            </select>
        </div>
        <div>
           <button type='submit'> Submit</button>
        </div>
    </form>
</div>
  )
}

export default FormDemo3

import React from 'react'
import { useForm } from 'react-hook-form'

const FormDemo7 = () => {
    const {register,handleSubmit} = useForm();

   const submitHandler= (data)=>{
        console.log(data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>CHOICES</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
            <label>Name</label>
            <input type='text' placeholder='Enter your name'{...register("name")}/>
            </div>
            <div>
            <label>What Do you want to be?</label>
            <input type='text'placeholder='Enter your Dream'{...register("dream")}/>
            </div>
            <div>
            <label>Pick your Favourite color</label>
            <input type='color' {...register("color")}/>;
            </div>
            <div>
            <label>Hobby</label>
            <select name='hobby' {...register("hobby")}> 
                <option>Sports</option>
                <option>Games</option>
                <option>Arts</option>
                <option>Sci-fi</option>
            </select>
            </div>
            <div>

            <button type='submit'>submit</button>
            </div>
        </form>
      
    </div>
  )
}

export default FormDemo7

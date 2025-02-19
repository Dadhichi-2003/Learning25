import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { data } from 'react-router-dom';

const ApiDemo3 = () => {

    const { register, handleSubmit} = useForm();

    const submitHandler = async(data) => {
        const res = await axios.post("https://node5.onrender.com/user/user",data)
        console.log(res.data);
        if(res.status==201){
            alert("USer added ...")
        }
    }

  return (
    <div style={{textAlign:"center"}}>

        <h1>API DEMO 3</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>name</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>age</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <label>email</label>
                <input type='text' {...register("email")}></input>
            </div>
            <div>
                <label>status</label>
                <input type='checkbox' {...register("isActive")}></input>
            </div>
            <div>
                <button type='submit'> Submit</button>
            </div>
        </form>
        
    </div>
  )
}

export default ApiDemo3

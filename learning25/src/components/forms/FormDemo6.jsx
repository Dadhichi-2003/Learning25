import React from "react";
import { useForm } from "react-hook-form";

const FormDemo6 = () => {
  const { register, handleSubmit, formState:{errors} } = useForm();
  console.log("errors",errors)
  const submitHandler = (data) => {
    console.log(data);
  };

  const validationSchema ={
        nameValidator:{
            required : {
                value:true,
                message :"name is required",    
            },


        },
        ageValidator:{
            required:{
                value:true,
                message:"age is required",
            },
            min:{
                value:18,
                message:"minimun age is 18"
            },
            max:{
                value:30,
                message:"maximum age 30"
            }
        },
        passwordValidator:{
            required:{
                value:true,
                message:"age is required",
            },
            maxLength:{
                value:16,
                message:"maximum leghth is 16 character"
            },
            minLength:{
                value:8,
                message:"minimum length is 8 character",
            }
        }


  }
  
  return (
    <div style={{ textAlign: "center", height: "100%" }}>
      <h1>Hiring</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name</label>
          <input type="text" placeholder="name" {...register("name",validationSchema.nameValidator)} />
        </div>
        <span style={{color:"red"}}>
            {errors.name && errors.name.message}
        </span>
        <div>
          <label>Age</label>
          <input type="number" placeholder="age" {...register("age",validationSchema.ageValidator)} />
          <span style={{color:"red"}}>
            {errors.age?.message}
        </span>
        </div>
        <div>
          <label>PassWord</label>
          <input type="text" placeholder="PAssword" {...register("password",validationSchema.passwordValidator )} />
          <span style={{color:"red"}}>
            {errors.password?.message}
        </span>
        </div>
        <div>
          <label>Skills</label>
          <br />
          <label>
            <input type="checkbox" value="React" {...register("skills")} /> React
          </label>
          <label>
            <input type="checkbox" value="MongoDB" {...register("skills")} /> MongoDB
          </label>
          <label>
            <input type="checkbox" value="Express" {...register("skills")} /> Express
          </label>
        </div>
        <div>
          <label>GENDER :</label>
          <br />                                                    
          <label>
            <input type="radio" value="male" {...register("gender")} /> Male
          </label>
          <label>
            <input type="radio" value="female" {...register("gender")} /> Female
          </label>
        </div>
        <div>
          <label>Ready for bond?</label>
          <br />
          <label>
            <input type="radio" value="yes" {...register("bond")} /> Yes
          </label>
          <label>
            <input type="radio" value="no" {...register("bond")} /> No
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormDemo6;

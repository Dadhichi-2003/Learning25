import React from 'react'
import { useForm } from 'react-hook-form';
import "../../assets/StudentDetailForm.css"
// form with validation
const StudentDetailForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    console.log(errors)

    const submitHandler = (data) => {
        console.log(data);
    }

    const ValidationSchema = {
        nameValidator :{
            required : {
                value:true,
                message : "name is required"
            }
        },
        ageValidator:{
            required:{
                value:true,
                message:"age is required"
            },
            min:{
                value:6,
                message:"minimun age should be 6 years",
            },
            max:{
                value:18,
                message:"maximum age should be 18 years"
            },
        },
        BirthDateValidator:{
            required:{
                value:true,
                message:"Birthdate is required"
            }
        },
        contactValidator:{
            required:{
                value:true,
                message:"contact is required"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"contact number is invalid"
            },
            
        },
        introValidator :{
            required:{
                value:true,
                message:"Introduction is required"
            },
            maxLength:{
                value:100,
                message:"only upto 200 words"
            },
            minLength :{
                value:50,
                message:"minimum 50 words required"
            }
        }

    }

    return (
        <div className='Stud-form'>
            <h1>Student Detail Form</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Name:</label>
                    <input type='text' placeholder='Enter Your Name' {...register("name",ValidationSchema.nameValidator)} />
                    <span> {errors.name?.message}</span>
                </div>
                <div>
                    <label>Age :</label>
                    <input type='number' placeholder='Enter your age' {...register("age",ValidationSchema.ageValidator)}/>
                     <span> {errors.age?.message}</span>
                </div>
                <div>
                    <label>Date of Birth</label>
                    <input type='date' {...register("DOB",ValidationSchema.BirthDateValidator)}/>
                     <span> {errors.DOB?.message}</span>
                </div>
                <div>
                    <label>Contact</label>
                    <input type='text'  placeholder='Enter your contact number'{...register("contact",ValidationSchema.contactValidator)}/>
                    <span> {errors.contact?.message}</span>
                </div>
                <div>
                    <label>Percentage:</label>
                    <input type='number' placeholder='Enter your percentage' {...register("percentage")}/>
                </div>
                <div>
                    <label>Hobbies:</label>
                    Acting    <input type='checkbox' {...register("hobbies")}/> 
                    Dancing    <input type='checkbox' {...register("hobbies")}/> 
                    Gaming   <input type='checkbox' {...register("hobbies")}/> 
                </div>
                <div>
                    <label>City :</label>
                    <select {...register("City")}>
                        <option>Ahmedabad</option>
                        <option>Surat</option>
                        <option>Bhavnagar</option>
                        <option>Rajkot</option>
                    </select>
                </div>
                <div>
                    <label>Interested In scholarship?</label>
                    Yes :<input type='radio' {...register("Scholership")}/>
                    No :<input type='radio' {...register("Scholership")}/>

                </div>
                <div>
                    <label>Tell about your self </label>
                    <textarea {...register("introduction",ValidationSchema.introValidator)} />
                    <span> {errors.introduction?.message}</span>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default StudentDetailForm

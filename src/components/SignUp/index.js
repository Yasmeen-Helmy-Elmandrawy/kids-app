import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import './style.css';
const SignUp = () => {
    const {register, handleSubmit, formState: { errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    console.log(errors);

    const [passwordEye, setPasswordEye] = useState(false);
    const handlePasswordClick = () => {
        setPasswordEye(!passwordEye)
    }

    const history = useHistory();
    const handleClick = () =>{
        const name = document.getElementById("input1").value;
        const age = document.getElementById("input2").value;
        const email = document.getElementById("input3").value;
        const password = document.getElementById("input4").value;
        if(name === '' || age === '' || email === '' || password === ''){
            alert("Fill Input");
        }
        else if(age < 9){
            return <span>Minimum required age is 9</span>
        }
        else if(age > 13){
            return <span>Maximum required age is 13</span>
        }
        else{
            history.push("/objects");
        }
    }
    return ( 
        <div className="sign">
            <img className="mascot-doc" src="./images/mascot-doc.png" alt="mascot-doc-image" />
            <form className="input-group signup" onSubmit={handleSubmit(onSubmit)}>
                <label className="label">Your Name</label>
                <input type="text" className="input-field"
                placeholder="Enter Your Name" id="input1" required/>
                <label className="label">Your Age</label>
                <input type="text" className="input-field"
                placeholder="Enter Your Age"
                {...register("age", {
                    reqired: "Age is required",
                    min: {
                        value: 9,
                        message: "Minimum required age is 9" 
                    },
                    max: {
                        value: 13,
                        message: "Maximum required age is 13"
                    },
                    pattern: {
                        value: /^[0-9]*$/,
                        message: "Only numbers are allowed"
                    }
                })} id="input2" />
                <div className='error'>
                    {errors.age && (<small>{errors.age.message}</small>)}
                </div><br />
                <label className="label">Your Email</label>
                <input type="email" className="input-field"
                placeholder="Enter Your Email" id="input3" required />
                <label className="label">Your Password</label>
                <input type={passwordEye === false ? "password": "text"}
                className="input-field"
                placeholder="Enter Password" id="input4" required />
                <div className="icon-eye">
                    {
                        (passwordEye === false)?<AiFillEyeInvisible onClick={handlePasswordClick} />:
                        <AiFillEye onClick={handlePasswordClick} />
                    }  
                </div>
                <button type="submit" className="submit-btn btn2" onClick={handleClick}>Sign Up</button>
                <p>Already have an account?<Link to="/signin" className="link">Sign In</Link></p>
            </form>
        </div>
     );
}
export default SignUp;
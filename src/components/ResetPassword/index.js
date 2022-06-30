import React from "react";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const ResetPassword = () => {
    // handle form events
    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        mode:"onTouched"
    });
    // handle submit
    const onSubmit = data => alert(JSON.stringify(data));
    //handle password eye
    const [passwordEye, setPasswordEye] = useState(false);
    const handlePasswordClick = () => {
        setPasswordEye(!passwordEye)
    }
    //handle confirm password eye
    const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);
    const handleConfirmPasswordClick = () => {
        setConfirmPasswordEye(!confirmPasswordEye)
    }
    // Check password event
    const password = watch("password")
    return ( 
        <div className="reset">
            <form className="form-reset" onSubmit={handleSubmit(onSubmit)}>
                <h3>Reset Password</h3>
                <div className="form-group">
                    <label>Password</label>
                    <input type={passwordEye === false ? "password": "text"}
                        className="form-control" placeholder="Password"
                        {...register("password", {required: "Password is required",
                        minLength:{
                            value: 6,
                            message:"Minimum required length is 6"
                        },
                        maxLength:{
                            value:15,
                            message:"Maximum required length is 15"
                        }
                    })} />
                    <div className="icon-eye">
                        {
                            (passwordEye === false)?<AiFillEyeInvisible onClick={handlePasswordClick} />:
                            <AiFillEye onClick={handlePasswordClick} />
                        }  
                    </div>
                    {errors.password && <span>{errors.password.message}</span>}
                </div><br />
                <div className="form-group">
                    <label>Password Confirm</label>
                    <input type={confirmPasswordEye === false ? "password": "text"}
                        className="form-control" placeholder="Password Confirm"
                        onPaste={(e)=>{
                            e.preventDefault()
                            return false;
                        }}
                        {...register("confirmPassword", {required: "Confirm password is required",
                        validate: (value) => 
                        value === password || "The passwords do not match",
                    })} />
                    <div className="icon-eye">
                        {
                            (confirmPasswordEye === false)?<AiFillEyeInvisible onClick={handleConfirmPasswordClick} />:
                            <AiFillEye onClick={handleConfirmPasswordClick} />
                        }  
                    </div>
                    {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                </div>
                <button className="submit">Submit</button>
                <p className="para-back">
                    <Link to="/signin">Back SignIn?</Link>
                </p>  
            </form>
            <img className="mascot-doc" src="./images/mascot-doc.png" alt="mascot-doc-image" />
        </div>
    );
}
 
export default ResetPassword;
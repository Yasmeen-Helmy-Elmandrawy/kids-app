import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import './style.css';
const SignIn = () => {
    const [passwordEye, setPasswordEye] = useState(false);
    const handlePasswordClick = () => {
        setPasswordEye(!passwordEye)
    }

    const history = useHistory();
    const handleClick = () =>{
        history.push("/objects");
    }
    return ( 
        <div className="login">
            <img className="mascot-doc" src="./images/mascot-doc.png" alt="mascot-doc-image" />
            <form className="input-group2 signin">
                <label className="label2">Username</label>
                <input type="text" className="input-field2" placeholder="Enter Username" required id="input_1" />
                <label className="label2">Password</label>
                <input type={passwordEye === false ? "password": "text"}
                className="input-field2"
                placeholder="Enter Password" required id="input_2" />
                <div className="icon-eye">
                    {
                        (passwordEye === false)?<AiFillEyeInvisible onClick={handlePasswordClick} />:
                        <AiFillEye onClick={handlePasswordClick} />
                    }  
                </div>
                <input type="checkbox" className="check-box" /><span>Remember Me</span>
                <Link to="/forget">Forget Password?</Link>
                <button type="submit" className="submit-button btn2" onClick={handleClick}>Sign In</button>
                <p>Don’t have account?<Link to="/signup" className="link">Sign Up</Link></p>   
            </form>
        </div>
     );
}
 
export default SignIn;
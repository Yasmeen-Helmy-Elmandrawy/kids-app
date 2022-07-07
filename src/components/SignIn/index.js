import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import './style.css';
const SignIn = () => {
    const [t, i18n] = useTranslation();
    const [passwordEye, setPasswordEye] = useState(false);
    const handlePasswordClick = () => {
        setPasswordEye(!passwordEye)
    }

    const history = useHistory();
    const handleClick = () =>{
        history.push("/profile");
    }
    return ( 
        <div className="login">
            <img className="mascot-doc" src="./images/mascot-doc.png" alt="mascot-doc" />
            <form className="input-group2 signin">
                <label className="label2">{t('username')}</label>
                <input type="text" className="input-field2" placeholder={t('enter-username')} required id="input_1" />
                <label className="label2">{t('password')}</label>
                <input type={passwordEye === false ? "password": "text"}
                className="input-field2"
                placeholder={t('enter-password')} required id="input_2" />
                <div className="icon-eye">
                    {
                        (passwordEye === false)?<AiFillEyeInvisible onClick={handlePasswordClick} />:
                        <AiFillEye onClick={handlePasswordClick} />
                    }  
                </div>
                <input type="checkbox" className="check-box" /><span>{t('remember')}</span>
                <Link to="/forget">{t('forget')}</Link>
                <button type="submit" className="submit-button btn2" onClick={handleClick}>{t('signin')}</button>
                <p>{t('account')}<Link to="/signup" className="link">{t('signup')}</Link></p>   
            </form>
        </div>
     );
}
 
export default SignIn;
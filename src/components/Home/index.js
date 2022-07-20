import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './style.css';
const Home = () => {
    const [t, i18n] = useTranslation();
    return ( 
        <div className="home">
            <div className="container">
                <div className="image">
                    <img src="./images/kids.png" alt="img-kids" />
                </div>
                <div className="right">
                    {i18n.language === 'en' && <button className="language" onClick={() => {
                        i18n.changeLanguage('ar');
                    }}>AR</button>}
                    {i18n.language === 'ar' && <button className="language" onClick={() => {
                        i18n.changeLanguage('en');
                    }}>EN</button>}
                    <div className="para">
                        <img src="./images/logo.jpeg" alt="logo" />
                        <p className="p1">{t('title')}</p>
                        <p className="p2">{t('paragraph')}</p>
                    </div>
                    <Link to="/signin">
                        <button className="start-btn">{t('button')}</button>
                    </Link> 
                </div>
            </div>
        </div>
     );
}
 
export default Home;
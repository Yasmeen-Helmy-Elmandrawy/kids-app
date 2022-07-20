import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import "./style.css";
const SignIn = () => {
  const [t, i18n] = useTranslation();
  const [passwordEye, setPasswordEye] = useState(false);
  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  const [emaill, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(emaill);
    console.log(password);
    const data = await fetch("https://kidcoder.herokuapp.com/logIn", {
      method: "POST",
      body: JSON.stringify({
        email: emaill,
        pwd: password,
      }),
      headers: {
        ACCESS_TOKEN_SECRET:
          "0f5cce9faab589e2e5819c498262907ed7a9729953eee56e0d32645693c2d4df0a61314b7d2f1fe354827e4c8b1984b19bb1c7fd8558e67aa2b2a74353b59ef0",
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    console.log(data);
    if (res.status === "success") {
      console.log("success");
      history.push("/profile");
    }
    if (res.status === "error") {
      console.log("error");
    }
  };

  return (
    <div className="login">
      <img
        className="mascot-doc"
        src="./images/mascot-doc.png"
        alt="mascot-doc"
      />
      <form className="input-group2 signin">
        <label className="label2">{t("username")}</label>
        <input
          type="text"
          className="input-field2"
          placeholder={t("enter-username")}
          onChange={(e) => setEmail(e.target.value)}
          value={emaill}
          id="input_1"
          required
        />
        <label className="label2">{t("password")}</label>
        <input
          type={passwordEye === false ? "password" : "text"}
          className="input-field2"
          placeholder={t("enter-password")}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          id="input_2"
          required
        />
        <div className="icon-eye">
          {passwordEye === false ? (
            <AiFillEyeInvisible onClick={handlePasswordClick} />
          ) : (
            <AiFillEye onClick={handlePasswordClick} />
          )}
        </div>
        <input type="checkbox" className="check-box" />
        <span>{t("remember")}</span>
        <Link to="/forget">{t("forget")}</Link>
        <button
          type="submit"
          className="submit-button btn2"
          onClick={handleLogin}
        >
          {t("signin")}
        </button>
        <p>
          {t("account")}
          <Link to="/signup" className="link">
            {t("signup")}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
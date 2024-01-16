import React from "react";
import { useNavigate } from "react-router-dom";

import "./OnBordingPage.css";
import assetsImage from "../../assets";

const OnbordingPage = () => {
  const navigate = useNavigate();

  const signUpPage = () => {
    navigate("/signup");
  };
  const loginPage = () => {
    navigate("/loginPage");
  };
  return (
    <div className="onBording-page-main-container">
      <div className="onBording-page-left-container">
        <img
          className="onBording-page-left-image"
          src={assetsImage.Loginpageimage}
          alt="onBording-page-img"
        />
      </div>
      <div className="onBording-page-right-container">
        <span>
          <img src={assetsImage.musterIcon} alt="musterIcon" />
        </span>
        <span id="onBording-page-heading"> Welcome to Muster</span>
        <span id="onBording-page-text"> Your web, your way</span>
        <button id="onBording-page-button" onClick={signUpPage}>
          {" "}
          Setup your account
        </button>
        <span id="onBording-page-underline-text" onClick={loginPage}>
          I already have an account
        </span>
        <div className="onbording-Ellipses"></div>
      </div>
    </div>
  );
};

export default OnbordingPage;

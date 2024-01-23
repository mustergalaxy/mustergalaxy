import React from "react";
import { useNavigate } from "react-router-dom";

import assetsImage from "../../assets";
import "./SignUpPage.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  const signUpEmail = () => {
    navigate("/signupEmail");
  };

  const signUpOrbit = () => {
    navigate("/signupUrbit");
  };

  return (
    <div className="signUp-page-main-container">
      <div className="signUp-page-left-container">
        <img
          className="signUp-page-left-image"
          src={assetsImage.Loginpageimage}
          alt=""
        />
      </div>
      <div className="signUp-page-right-container">
        <div className="signUp-page-right-">
          <span>
            <img src={assetsImage.musterIcon} alt="mustericon" />
          </span>
          <span id="signUp-page-main-heading">Login using an Urbit ID</span>

          <span id="signUp-page-text">
            To access Muster’s unique features you'll need an Urbit ID.
          </span>
          <span id="signUp-page-text">
            If you don’t own one yet, you can try Muster for free and
          </span>
          <span id="signUp-page-text">
            we’ll provide you a temporary Urbit ID, or you can get one
          </span>
          <span id="signUp-page-text">from top Urbit ID providers.</span>
          <div id="signUp-page-button">
            <button id="signup-page-signup-button" onClick={signUpOrbit}>
              Sign up with Urbit iD
            </button>
            <button id="signup-page-try-must" onClick={signUpEmail}>
              Try Muster
            </button>
          </div>
          <span
            id="signUp-page-underLine-text"
            onClick={() => {
              navigate("/provider");
            }}
          >
            Get an Urbit ID
          </span>
        </div>
        <div id="signUp-page-bottom-text">Why do I need an Urbit ID ?</div>
        <div className="singnup-page-ellipsis"></div>
      </div>
    </div>
  );
};

export default SignUpPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import assetsImage from "../../assets";

import "./CreateWalletSuccessful.css";

const CreateWalletSuccessful = () => {
  const navigate = useNavigate();
  return (
    <div className="createWalletSuccessful-main-comntainer">
      <div className="createWalletSuccessful-side-ellipse"></div>
      <div>
        <Sidebar />
      </div>
      <div className="createWalletSuccessful-text-container-wrapper">
        <div>
          <img src={assetsImage.musterIcon} alt="icon" />
        </div>
        <div className="createWalletSuccessful-main-heading">
          All set, you’re wallet was successfully created!
        </div>
        <div>
          <button
            onClick={() => navigate("/defaultbrowser")}
            className="createWalletSuccessful-button"
          >
            Continue
          </button>
        </div>
      </div>
      <div className="createWalletSuccessful-rightbottom-side-ellipse"></div>
    </div>
  );
};

export default CreateWalletSuccessful;

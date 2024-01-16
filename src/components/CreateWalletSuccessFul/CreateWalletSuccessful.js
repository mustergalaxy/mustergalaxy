import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import assetsImage from "../../assets";

import "./CreateWalletSuccessful.css";

const CreateWalletSuccessful = () => {
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
          <button className="createWalletSuccessful-button">Continue</button>
        </div>
      </div>
      <div className="createWalletSuccessful-rightbottom-side-ellipse"></div>
    </div>
  );
};

export default CreateWalletSuccessful;

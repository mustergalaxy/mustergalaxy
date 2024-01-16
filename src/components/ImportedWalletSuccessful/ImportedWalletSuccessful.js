import React from "react";
import { useNavigate } from "react-router-dom";
import assetsImage from "../../assets";
import Sidebar from "../Sidebar/Sidebar";

import "./ImportedWalletSuccessful.css";

const ImportedWalletSuccessful = () => {
  const navigate = useNavigate();
  return (
    <div className="ImportedWalletSuccessfull-main-comntainer">
      <div className="ImportedWalletSuccessfull-side-ellipse"></div>
      <div>
        <Sidebar />
      </div>
      <div className="ImportedWalletSuccessfull-text-container-wrapper">
        <div>
          <img src={assetsImage.musterIcon} alt="icon" />
        </div>
        <div className="ImportedWalletSuccessfull-main-heading">
          All set, you successfully imported your wallet!
        </div>
        <div>
          <button
            onClick={() => navigate("/defaultbrowser")}
            className="ImportedWalletSuccessfull-button"
          >
            Continue
          </button>
        </div>
      </div>
      <div className="ImportedWalletSuccessfull-rightbottom-side-ellipse"></div>
    </div>
  );
};

export default ImportedWalletSuccessful;

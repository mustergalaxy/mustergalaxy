import React from "react";
import assetsImage from "../../assets";
import Sidebar from "../Sidebar/Sidebar";
import "./UrbitIDCreted.css";

import { useNavigate } from "react-router-dom";

const UrbitIDCreated = () => {
  const navigate = useNavigate();
  return (
    <div className="UrbitIDCreated-main-container">
      <div>
        <Sidebar />
      </div>
      <div className="UrbitIDCreated-text-main-container">
        <div className="UrbitIDCreated-text-container">
          <div>
            <img src={assetsImage.musterIcon} alt="muster icon" />
          </div>
          <div className="UrbitIDCreated-main-heading">
            Urbit ID successfully created
          </div>
          <div className="UrbitIDCreated-text">Explain how it works here</div>
          <div className="UrbitIDCreated-button-container">
            <button
              className="UrbitIDCreated-button"
              onClick={() => navigate("/setupwallet")}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrbitIDCreated;

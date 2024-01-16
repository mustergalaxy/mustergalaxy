import React from "react";
import assetsImage from "../../assets";
import Sidebar from "../Sidebar/Sidebar";
import "./AccountSuccessfullyConnected.css";

const AccountSuccessfullyConnected = () => {
  return (
    <div className="accountconnected-main-container">
      <div>
        <Sidebar />
      </div>
      <div className="accountconnected-text-main-container">
        <div className="accountconnected-text-container">
          <div>
            <img src={assetsImage.musterIcon} alt="muster icon" />
          </div>
          <div className="accountconnected-main-heading">
            Urbit ID successfully created
          </div>
          <div className="accountconnected-text">Explain how it works here</div>
          <div className="accountconnected-button-container">
            <button className="accountconnected-button">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSuccessfullyConnected;

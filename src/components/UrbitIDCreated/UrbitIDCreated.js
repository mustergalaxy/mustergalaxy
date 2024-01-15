import React from "react";
import assetsImage from "../../assets";
import Sidebar from "../Sidebar/Sidebar";
import "./UrbitIDCreted.css";

const UrbitIDCreated = () => {
  return (
    <div className="UrbitIDCreated-main-container">
      <div>
        <Sidebar />
      </div>
      <div style={{ paddingLeft: "298px" }}>
        <div className="UrbitIDCreated-text-container">
          <div>
            <img src={assetsImage.musterIcon} alt="muster icon" />
          </div>
          <div className="UrbitIDCreated-main-heading">
            Urbit ID successfully created
          </div>
          <div className="UrbitIDCreated-text">Explain how it works here</div>
          <div className="UrbitIDCreated-button-container">
            <button className="UrbitIDCreated-button">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrbitIDCreated;

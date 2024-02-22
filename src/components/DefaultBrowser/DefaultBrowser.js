import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import assetsImage from "../../assets";

import "./DefaultBrowser.css";

const DefaultBrowser = () => {
  // Using 'null' as the initial value to indicate that neither option is selected
  const [selectedOption, setSelectedOption] = useState(null);

  // A handler function to update the selected option
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  console.log("Selected Option ===>", selectedOption);

  return (
    <div className="defaultBrowser-main-comntainer">
      <div className="defaultBrowser-side-ellipse"></div>
      <div>
        <Sidebar />
      </div>
      <div className="defaultBrowser-text-container-wrapper">
        <div>
          <img src={assetsImage.musterIcon} alt="icon" />
        </div>
        <div className="defaultBrowser-main-heading">
          Make Muster your default browser!
        </div>
        <div className="defaultBrowser-text">
          Elevate Your Browsing Experience with Muster
        </div>

        <div
          style={{
            display: "flex",
            gap: "8px",
            width: "600px",
            paddingTop: "40px",
            paddingBottom: "40px",
          }}
        >
          <div className="defaultDrowser-checkbox-container">
            <img
              onClick={() => handleOptionChange("yes")}
              style={{ cursor: "pointer" }}
              src={
                selectedOption === "yes"
                  ? assetsImage.filledCheckBox
                  : assetsImage.outlinedCheckBox
              }
              alt="check box"
            />
            <div className="defaultbrowser-checbox-text">Yes, let’s do it.</div>
          </div>
          <div className="defaultDrowser-checkbox-container">
            <img
              onClick={() => handleOptionChange("no")}
              style={{ cursor: "pointer" }}
              src={
                selectedOption === "no"
                  ? assetsImage.filledCheckBox
                  : assetsImage.outlinedCheckBox
              }
              alt="check box"
            />
            <div className="defaultbrowser-checbox-text">Not ready yet</div>
          </div>
        </div>
        <div>
          {/* <button className="defuaultbrowser-button">Start using Muster</button> */}
          <button
            className={
              selectedOption
                ? "defuaultbrowser-button"
                : "defuaultbrowser-button-unchecked"
            }
            type="submit"
            disabled={!selectedOption}
            // onClick={() => navigate("/setupwallet")}
          >
            Start using Muster
          </button>
        </div>
      </div>
      <div className="defaultBrowser-rightbottom-side-ellipse"></div>
    </div>
  );
};

export default DefaultBrowser;

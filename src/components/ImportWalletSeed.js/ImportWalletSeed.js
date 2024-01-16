import React, { useState } from "react";
import assetsImage from "../../assets";
import Sidebar from "../Sidebar/Sidebar";
import CustomInput from "../customInput/CustomInput";
import { styles } from "./ImportwalletSeedsStyle";

import "./ImportWalletSeed.css";

const ImportedWalletSeed = () => {
  const [isToggled, setIsToggled] = useState(true);
  const [numOfInputs, setNumOfInputs] = useState(12);
  // const [isHidden, setIsHidden] = useState(true);

  // Function to turn the toggle on
  const handle12Words = () => {
    setIsToggled(true);
    setNumOfInputs(12);
  };

  // Function to turn the toggle off
  const handle24Words = () => {
    setIsToggled(false);
    setNumOfInputs(24);
  };

  const inputElements = [...Array(numOfInputs)].map((_, index) => (
    <div key={index}>
      {/* <input
        style={{ border: "2px solid red" }}
        type="text"
        className="ImportWalletSeed-input"
        placeholder={`Word #${index + 1}`}
      /> */}
      <CustomInput
        index={index + 1}
        // placeholder="Access key"
        style={{ ...styles.inputfield }}
        // type={isHidden ? "password" : "text"}
        // password
      />
    </div>
  ));

  return (
    <div className="ImportWalletSeed-main-comntainer">
      <div className="ImportWalletSeed-side-ellipse"></div>
      <div>
        <Sidebar />
      </div>
      <div className="ImportWalletSeed-text-container-wrapper">
        <div>
          <img src={assetsImage.musterIcon} alt="icon" />
        </div>
        <div className="ImportWalletSeed-main-heading">
          Import your wallet with a seed phrase
        </div>
        <div className="ImportWalletSeed-text">
          Import your wallet with a seed phrase
        </div>
        <div>
          <div className="ImportedWalletSeedToggleMainContainer">
            <button
              className="ImportedWalletSeedToggle"
              onClick={handle12Words}
              disabled={isToggled}
              style={{
                backgroundColor: isToggled
                  ? "var(--text-01, #FFFFF5)"
                  : "var(--background, #121212)",
                color: !isToggled ? "white" : "black",
              }}
            >
              12 words
            </button>
            <button
              className="ImportedWalletSeedToggle"
              onClick={handle24Words}
              disabled={!isToggled}
              style={{
                backgroundColor: !isToggled
                  ? "var(--text-01, #FFFFF5)"
                  : "var(--background, #121212)",
                color: !isToggled ? "black" : "white",
              }}
            >
              24 words
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "650px",
            height: "auto",
            flexWrap: "wrap",
            gap: "16px",
            padding: "24px 0px",
          }}
          className="ImportWalletSeed-inputs-container"
        >
          {inputElements}
        </div>
        <div>
          <button className="ImportWalletSeed-button">Continue</button>
        </div>
        <div className="ImportWalletSeedButtonUnderText">
          Dismiss, I’ll create a Muster wallet
        </div>
      </div>
      <div className="ImportWalletSeed-rightbottom-side-ellipse"></div>
    </div>
  );
};

export default ImportedWalletSeed;

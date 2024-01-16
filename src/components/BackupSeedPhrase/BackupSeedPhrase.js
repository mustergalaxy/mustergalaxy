import React, { useState } from "react";
import assetsImage from "../../assets";
import Sidebar from "../Sidebar/Sidebar";
import CustomInput from "../customInput/CustomInput";
import "./BackupSeedPhrase.css";
import { styles } from "./BackupSeedPhraseStyle";

// import "./ImportWalletSeed.css";

const BackupSeedPhrase = () => {
  //   const [isToggled, setIsToggled] = useState(true);
  //   const [numOfInputs, setNumOfInputs] = useState(12);
  const [isHidden, setIsHidden] = useState(true);

  const [selectedInputs, setSelectedInputs] = useState([]);

  console.log("selectedInput==>", selectedInputs);

  const handleInputClick = (index) => {
    console.log("handleinput");
    setSelectedInputs((prevSelected) => {
      // If the index is already selected, remove it from the array, otherwise add it
      return prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index];
    });
  };

  // Function to turn the toggle on

  // Function to turn the toggle off

  const inputElements = [...Array(12)].map((_, index) => (
    <div key={index}>
      <CustomInput
        index={index + 1}
        style={{
          ...styles.inputfield,
          ...(selectedInputs.includes(index)
            ? {
                backgroundColor: "var(--Card-fills-02, #1E1E1E)",
                borderRadius: "16px",
              }
            : {}),
        }}
        type={isHidden ? "password" : "text"}
        onClick={() => handleInputClick(index)}
        selected={selectedInputs.includes(index)}
      />
    </div>
  ));

  const handleToggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="backupSeedPhrase-main-comntainer">
      <div className="backupSeedPhrase-side-ellipse"></div>
      <div>
        <Sidebar />
      </div>
      <div className="backupSeedPhrase-text-container-wrapper">
        <div>
          <img src={assetsImage.musterIcon} alt="icon" />
        </div>
        <div className="backupSeedPhrase-main-heading">
          Backup your seed phrase
        </div>
        <div className="backupSeedPhrase-text">
          Treasure your 12-word seed phrase like gold – it's your ticket to
          unlocking your wallet's wealth in the future. Keep it safe and secure.
          If you loose it, you’ll loose access to your wallet.
        </div>
        <div>
          <div className="backupSeedPhraseToggleMainContainer">
            <div
              style={{ background: isHidden ? "white" : "" }}
              className="backupSeedPhraseToggle"
              onClick={handleToggleVisibility}
            >
              <img
                style={{ width: "16px", height: "16px" }}
                src={isHidden ? assetsImage.openEye : assetsImage.closeEye}
                alt="eye"
              />
              <div style={{ color: isHidden ? "black" : "white" }}>
                {isHidden ? "Show seed phrase" : "Hide seed phrase"}
              </div>
            </div>
            <div className="backupSeedCopyContainer">
              <img src={assetsImage.copy} alt="copy" />
              <div className="backupSeedCopytext">Copy</div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "650px",
            height: "auto",
            flexWrap: "wrap",
            gap: "16px",
            padding: "40px 0px",
          }}
          className="backupSeedPhrase-inputs-container"
        >
          {inputElements}
        </div>
        <div>
          <button className="backupSeedPhrase-button">Continue</button>
        </div>
      </div>
      <div className="backupSeedPhrase-rightbottom-side-ellipse"></div>
    </div>
  );
};

export default BackupSeedPhrase;

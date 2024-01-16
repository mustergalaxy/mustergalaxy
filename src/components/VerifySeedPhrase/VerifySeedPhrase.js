import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import assetsImage from "../../assets";
import Sidebar from "../Sidebar/Sidebar";
import CustomInput from "../customInput/CustomInput";

import "./VerifySeedPhrase.css";
import { styles } from "./VerifySeedPhraseStyle";

const VerifySeedPhrase = () => {
  const [selectedInputs, setSelectedInputs] = useState([]);

  const navigate = useNavigate();

  const handleInputClick = (index) => {
    console.log("handleinput");
    setSelectedInputs((prevSelected) => {
      return prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index];
    });
  };

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
        // type={isHidden ? "password" : "text"}
        onClick={() => handleInputClick(index)}
        selected={selectedInputs.includes(index)}
      />
    </div>
  ));

  return (
    <div className="verifySeedPhrase-main-comntainer">
      <div className="verifySeedPhrase-side-ellipse"></div>
      <div>
        <Sidebar />
      </div>
      <div className="verifySeedPhrase-text-container-wrapper">
        <div>
          <img src={assetsImage.musterIcon} alt="icon" />
        </div>
        <div className="verifySeedPhrase-main-heading">
          Last but not least, verify your seed phrase
        </div>
        <div className="verifySeedPhrase-text">
          Click the fourth (4th), seventh (7th) and eleventh (11th) words of
          your seed phrase
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
          className="verifySeedPhrase-inputs-container"
        >
          {inputElements}
        </div>
        <div>
          <button
            onClick={() => navigate("/createwalletSuccessful")}
            className="verifySeedPhrase-button"
          >
            Continue
          </button>
        </div>
      </div>
      <div className="verifySeedPhrase-rightbottom-side-ellipse"></div>
    </div>
  );
};

export default VerifySeedPhrase;

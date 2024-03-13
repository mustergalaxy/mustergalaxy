// LeftComponent.js
import React, { useState } from "react";
// import { FaMapMarkerAlt } from "react-icons/fa";

import "./LeftComponent.css";
import CustomCopyTooltip from "../CustomCopyToolTip/CustomCopyToolTip";
import { logDOM } from "@testing-library/react";

function LeftComponent() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState("");

  console.log("window.loction.host", window.location.host);

  const copy = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M5 9.16602C5 6.80935 5 5.63018 5.7325 4.89852C6.46417 4.16602 7.64333 4.16602 10 4.16602H12.5C14.8567 4.16602 16.0358 4.16602 16.7675 4.89852C17.5 5.63018 17.5 6.80935 17.5 9.16602V13.3327C17.5 15.6893 17.5 16.8685 16.7675 17.6002C16.0358 18.3327 14.8567 18.3327 12.5 18.3327H10C7.64333 18.3327 6.46417 18.3327 5.7325 17.6002C5 16.8685 5 15.6893 5 13.3327V9.16602Z"
        stroke="#121212"
      />
      <path
        d="M5 15.8327C4.33696 15.8327 3.70107 15.5693 3.23223 15.1005C2.76339 14.6316 2.5 13.9957 2.5 13.3327V8.33268C2.5 5.19018 2.5 3.61852 3.47667 2.64268C4.4525 1.66602 6.02417 1.66602 9.16667 1.66602H12.5C13.163 1.66602 13.7989 1.92941 14.2678 2.39825C14.7366 2.86709 15 3.50297 15 4.16602"
        stroke="#121212"
      />
    </svg>
  );

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setTooltipText("Copied!");
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
      })
      .catch((err) => {
        setTooltipText("Failed to copy!");
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
      });
  };

  const handleCopyClick = () => {
    const textToCopy = document.querySelector(".copy-text").innerText;
    copyToClipboard(textToCopy);
  };

  const data = "0x5F56b486559ea89b8f2835184cD2Ef59EF971f4C";

  function handleBlockScanner() {
    window.open(
      `https://etherscan.io/address/${data}`,
      "_blank",
      "noopener,noreferrer"
    );
  }
  // window.location.href = "http://www.w3schools.com";

  return (
    <div className="Left-component-container">
      <div className="left-container-ellipse"></div>
      <div style={{ position: "relative" }}>
        <div className="left-container-banner">
          <img
            src="https://picsum.photos/200/200"
            alt="banner"
            className="left-container-banner-image"
          />
        </div>
        <span className="left-container-banner-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M7.9987 3.33268V8.99935M9.9987 4.66602L7.9987 2.66602L5.9987 4.66602M3.33203 7.99935V11.3327C3.33203 11.6863 3.47251 12.0254 3.72256 12.2755C3.9726 12.5255 4.31174 12.666 4.66536 12.666H11.332C11.6857 12.666 12.0248 12.5255 12.2748 12.2755C12.5249 12.0254 12.6654 11.6863 12.6654 11.3327V7.99935"
              stroke="#F4F85A"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="left-container-profile-image">
            <img
              src="https://picsum.photos/100/300"
              alt="profile"
              className="left-container-profile-image"
            />
          </div>
        </div>
      </div>

      <div className="text-container">
        <div className="center-content">
          <div className="leftcomponent-heaading">
            <span className="left-component-svgbackground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M10.4993 1.45898L5.29102 10.209L10.4993 13.334L15.7077 10.209L10.4993 1.45898ZM5.29102 11.2507L10.4993 18.5423L15.7077 11.2507L10.4993 14.3757L5.29102 11.2507Z"
                  fill="#FFFFF5"
                />
              </svg>
            </span>{" "}
            <span
              className="left-container-heading"
              // style={{
              //   fontFamily: "Aeonik TRIAL",
              //   fontSize: "39px",
              //   fontWeight: "700",
              //   color: "white",
              // }}
            >
              xajcnjkcjkcjn
            </span>
          </div>
        </div>

        <div className="center-content">
          <CustomCopyTooltip
            title={tooltipText}
            placement="top"
            open={showTooltip}
          >
            <div className=" copy-text-container">
              <div className="copy-text">jnndajkwdnajdnajn</div>
              <div className="right">
                <span className="icon" onClick={handleCopyClick}>
                  {copy}
                </span>
              </div>
            </div>
          </CustomCopyTooltip>
        </div>
        <div className="text-line">
          Text dcsd dcdc dcdc dcdc jncsjdjnjcnjdcd
        </div>
        <div className="text-line">cdcds dcdcsdc d c dc dc sdc d</div>
        <div className="text-line">cddcdcdcd cdcdc c d cdcd cd cd cd </div>

        <div className="button-leftComponent-row">
          <button className="button1">Send tokens</button>
          <button className="button2" onClick={handleBlockScanner}>
            See on blockscanner
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeftComponent;

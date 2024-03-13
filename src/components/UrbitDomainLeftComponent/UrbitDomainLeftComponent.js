// LeftComponent.js
import React, { useState } from "react";
// import { FaMapMarkerAlt } from "react-icons/fa";

import "./UrbitDomainLeftComponent.css";
import CustomCopyTooltip from "../CustomCopyToolTip/CustomCopyToolTip";
import CustomTooltip from "../CustomToolTip/CustomToolTip";

function UrbitDomainLeftComponent() {
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
    <div className="UrbitDomain-Left-component-container">
      <div className="UrbitDomain-left-container-ellipse"></div>
      <div style={{ position: "relative" }}>
        <div className="UrbitDomain-left-container-banner">
          <img
            src="https://picsum.photos/200/200"
            alt="banner"
            className="UrbitDomain-left-container-banner-image"
          />
        </div>
        <span className="UrbitDomain-left-container-banner-icon">
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
        <span
          className="UrbitDomain-left-container-banner-icon"
          style={{ right: "80px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6.66699 2.66602H4.00033C3.6467 2.66602 3.30756 2.80649 3.05752 3.05654C2.80747 3.30659 2.66699 3.64573 2.66699 3.99935V11.9993C2.66699 12.353 2.80747 12.6921 3.05752 12.9422C3.30756 13.1922 3.6467 13.3327 4.00033 13.3327H12.0003C12.3539 13.3327 12.6931 13.1922 12.9431 12.9422C13.1932 12.6921 13.3337 12.353 13.3337 11.9993V9.33268M8.00033 7.99935L13.3337 2.66602M13.3337 2.66602V5.99935M13.3337 2.66602H10.0003"
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
          <div className="UrbitDomain-left-container-profile-image">
            <img
              src="https://picsum.photos/100/300"
              alt="profile"
              className="UrbitDomain-left-container-profile-image"
            />
          </div>
        </div>
      </div>

      <div className="UrbitDomain-text-container">
        <div className="UrbitDomain-center-content">
          <div className="UrbitDomain-leftcomponent-heaading">
            <span
              className="UrbitDomain-left-container-heading"
              // style={{
              //   fontFamily: "Aeonik TRIAL",
              //   fontSize: "39px",
              //   fontWeight: "700",
              //   color: "white",
              // }}
            >
              ~davwyd-sordem
            </span>
            <span className="UrbitDomain-left-component-svgbackground">
              {/* <svg
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

              </svg> */}
              <CustomTooltip title="Sponsor chain: ~dem > ~dondem > ~davwyd-sordem">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17C11.45 17 11 16.55 11 16V12C11 11.45 11.45 11 12 11C12.55 11 13 11.45 13 12V16C13 16.55 12.55 17 12 17ZM13 9H11V7H13V9Z"
                    fill="#A3A393"
                  />
                </svg>
              </CustomTooltip>
            </span>{" "}
          </div>
        </div>

        <div className="UrbitDomain-center-content">
          <div className=" UrbitDomain-copy-text-container">
            <div className="UrbitDomain-copy-text">jnndajkwdnajdnajn</div>
            <div className="right">
              {/* <span className="icon" onClick={handleCopyClick}>
                  {copy}
                </span> */}
            </div>
          </div>
        </div>
        <div className="UrbitDomain-text-line">
          Text dcsd dcdc dcdc dcdc jncsjdjnjcnjdcd
        </div>
        <div className="UrbitDomain-text-line">
          cdcds dcdcsdc d c dc dc sdc d
        </div>
        <div className="UrbitDomain-text-line">
          cddcdcdcd cdcdc c d cdcd cd cd cd{" "}
        </div>

        <div className="UrbitDomain-button-leftComponent-row">
          <button className="UrbitDomain-button1">Add pal</button>
          <button className="UrbitDomain-button2">Send DM via Talk</button>
        </div>
      </div>
    </div>
  );
}

export default UrbitDomainLeftComponent;

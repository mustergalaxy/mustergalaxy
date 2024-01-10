// LeftComponent.js
import React from "react";
// import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCopy } from "react-icons/bs";

import "./LeftComponent.css";

function LeftComponent() {
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
       <div style={{display: "flex", justifyContent:'center', alignItems:'center'}}>
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
          <div className=" copy-text-container">
            <div className="copy-text">jnndajkwdnajdnajn</div>
            <div className="right">
              <span className="icon">
                <BsCopy />
              </span>
            </div>
          </div>
        </div>
        <div className="text-line">
          Text dcsd dcdc dcdc dcdc jncsjdjnjcnjdcd
        </div>
        <div className="text-line">cdcds dcdcsdc d c dc dc sdc d</div>
        <div className="text-line">cddcdcdcd cdcdc c d cdcd cd cd cd </div>

        <div className="button-leftComponent-row">
          <button className="button1">Send tokens</button>
          <button className="button2">See on blockscanner</button>
        </div>
      </div>
    </div>
  );
}

export default LeftComponent;

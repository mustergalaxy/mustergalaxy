import React, { useContext } from "react";
import assetsImage from "../../assets";
import Sidebar from "../Sidebar/Sidebar";
import { SidebarListingContext } from "../../globalContext/SideBarListingContext/SidebarListingProvider";
import { setListingCountValue } from "../../globalContext/SideBarListingContext/SidebarListingAction";
import "./UrbitIDCreted.css";

import { useNavigate } from "react-router-dom";

const UrbitIDCreated = () => {
  const navigate = useNavigate();
  const [sidebarListingState, sidebarListingDispatch] = useContext(
    SidebarListingContext
  );

  const handleClick = () => {
    sidebarListingDispatch(setListingCountValue(sidebarListingState.count + 1));
    navigate("/setupwallet");
  };

  return (
    <div className="UrbitIDCreated-main-container">
      <div>
        <Sidebar />
      </div>
      <div className="UrbitIDCreated-text-main-container">
        <div className="UrbitIDCreated-text-container">
          <div>
            <img
              width={40}
              height={40}
              src={assetsImage.CheckedCreatedIcon}
              alt="muster icon"
            />
          </div>
          <div className="UrbitIDCreated-main-heading">
            Urbit ID successfully created
          </div>
          <div className="UrbitIDCreated-text">Explain how it works here</div>
          <div className="UrbitIDCreated-button-container">
            <button className="UrbitIDCreated-button" onClick={handleClick}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrbitIDCreated;

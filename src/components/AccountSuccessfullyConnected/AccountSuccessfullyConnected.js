import React, { useContext } from "react";
import assetsImage from "../../assets";
import Sidebar from "../Sidebar/Sidebar";
import { SidebarListingContext } from "../../globalContext/SideBarListingContext/SidebarListingProvider";
import { setListingCountValue } from "../../globalContext/SideBarListingContext/SidebarListingAction";
import { useNavigate } from "react-router-dom";

import "./AccountSuccessfullyConnected.css";

const AccountSuccessfullyConnected = () => {
  const navigate = useNavigate();

  const [sidebarListingState, sidebarListingDispatch] = useContext(
    SidebarListingContext
  );

  const handleClick = () => {
    sidebarListingDispatch(setListingCountValue(sidebarListingState.count + 1));
    navigate("/setupwallet");
  };

  return (
    <div className="accountconnected-main-container">
      <div>
        <Sidebar />
      </div>
      <div className="accountconnected-text-main-container">
        <div className="accountconnected-text-container">
          <div>
            <img
              width={40}
              height={40}
              src={assetsImage.CheckedCreatedIcon}
              alt="muster icon"
            />
          </div>
          <div className="accountconnected-main-heading">
            Account successfully connected
          </div>
          <div className="accountconnected-text">Explain how it works here</div>
          <div className="accountconnected-button-container">
            <button className="accountconnected-button" onClick={handleClick}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSuccessfullyConnected;

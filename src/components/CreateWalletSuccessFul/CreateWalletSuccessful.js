import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { SidebarListingContext } from "../../globalContext/SideBarListingContext/SidebarListingProvider";
import { setListingCountValue } from "../../globalContext/SideBarListingContext/SidebarListingAction";
import assetsImage from "../../assets";

import "./CreateWalletSuccessful.css";

const CreateWalletSuccessful = () => {
  const [sidebarListingState, sidebarListingDispatch] = useContext(
    SidebarListingContext
  );
  const navigate = useNavigate();
  function handleSubmit() {
    navigate("/defaultbrowser");
    sidebarListingDispatch(setListingCountValue(sidebarListingState.count + 1));
  }
  return (
    <div className="createWalletSuccessful-main-comntainer">
      <div className="createWalletSuccessful-side-ellipse"></div>
      <div>
        <Sidebar />
      </div>
      <div className="createWalletSuccessful-text-container-wrapper">
        <div>
          <img src={assetsImage.musterIcon} alt="icon" />
        </div>
        <div className="createWalletSuccessful-main-heading">
          All set, you’re wallet was successfully created!
        </div>
        <div>
          <button
            onClick={handleSubmit}
            className="createWalletSuccessful-button"
          >
            Continue
          </button>
        </div>
      </div>
      <div className="createWalletSuccessful-rightbottom-side-ellipse"></div>
    </div>
  );
};

export default CreateWalletSuccessful;

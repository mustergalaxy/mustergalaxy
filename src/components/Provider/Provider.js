import React from "react";
import "./Provider.css";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

import assetsImage from "../../assets";

const metadata = [
  {
    icon: "holium",
    heading: "Holium",
    about: "Seamless solutions to power your digital world",
    link: "https://docs.holium.com/main/notifications-and-settings/adding-an-urbit-id",
  },
  {
    icon: "tlon",
    heading: "Tlon",
    about: "Ecosystem pioneers with a history of innovation.",
    link: "https://tlon.network/login",
  },
];

const Provider = () => {
  const navigate = useNavigate();

  const handleProviderClick = (providerData) => {
    console.log(providerData.link);
    navigate("/providerIframe", { state: { link: providerData.link } });
  };

  console.log(metadata[0].heading);
  return (
    <div className="provider-main-comntainer">
      <div className="provider-side-ellipse"></div>
      <div>
        <Sidebar />
      </div>
      <div className="provider-text-container-wrapper">
        <div>
          <img src={assetsImage.musterIcon} alt="muster icon" />
        </div>
        <div className="provider-main-heading">Choose a provider</div>
        <div className="provider-text">
          Muster offers two Urbit ID provider options:
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          {metadata.map((item, index) => (
            <div
              key={index}
              className="provider-data-container"
              onClick={() => handleProviderClick(item)}
            >
              <div>
                {/* <item.icon/> */}
                <img src={assetsImage[item.icon]} alt="asset" />
              </div>
              <div>
                <div className="provider-data-container-heading">
                  {item.heading}
                </div>
                <div className="provider-data-container-about">
                  {item.about}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="provider-rightbottom-side-ellipse"></div>
    </div>
  );
};

export default Provider;

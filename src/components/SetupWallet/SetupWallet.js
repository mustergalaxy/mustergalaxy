import React, { useContext } from "react";
import "./SetupWallet.css";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { SidebarContext } from "../../globalContext/SidebarContext/SidebarProvider";
import { setCountValue } from "../../globalContext/SidebarContext/SidebarAction";
import assetsImage from "../../assets";

const metadata = [
  {
    icon: "musterIcon",
    heading: "Muster wallet",
    about1: "Muster’s current supports covers",
    about2: "Ethereum, Solana, Hedera, Concodium, Sui, and Aptos",
    link: "/musterCreatewalletpassword",
  },
  {
    icon: "wallet",
    heading: "Import wallet",
    about1:
      "Connect your existing wallet, all you need is to provide your recovery phrase.",
    about2: "",
    link: "/importwalletseed",
  },
];

const SetupWallet = () => {
  const navigate = useNavigate();
  const [sidebarState, sidebarDispatch] = useContext(SidebarContext);

  console.log("inside setup wallet=>", sidebarState);

  //   const signUpPage = () => {
  //     navigate('/signup'); // Replace '/path-to-redirect' with your desired path
  //   };

  const handleProviderClick = (providerData) => {
    sidebarDispatch(setCountValue(sidebarState.count + 1));
    // Navigate to the desired route and pass the providerData as state
    // { state: { link: providerData.link } }
    navigate(`${providerData.link}`, { state: { icon: providerData.icon } });
  };

  return (
    <div className="setupwallet-main-comntainer">
      <div className="setupwallet-side-ellipse"></div>
      <div>
        <Sidebar />
      </div>
      <div className="setupwallet-text-container-wrapper">
        <div>
          <img src={assetsImage.musterIcon} alt="icon" />
        </div>
        <div className="setupwallet-main-heading">
          Now let’s set you up with a Web3 wallet
        </div>
        <div className="setupwallet-text">
          Connect your wallet or create a new one with Muster's native wallet,
          supporting multiple chains and token types without extensions.
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          {metadata.map((item, index) => (
            <div
              key={index}
              className="setupwallet-data-container"
              onClick={() => handleProviderClick(item)}
            >
              <div style={{ paddingTop: "5px" }}>
                <img
                  style={{ width: "26px", height: "26px" }}
                  src={assetsImage[item.icon]}
                  alt="icon"
                />
              </div>
              <div>
                <div className="setupwallet-data-container-heading">
                  {item.heading}
                </div>
                <div className="setupwallet-data-container-about">
                  {item.about1}
                </div>
                <div className="setupwallet-data-container-about2">
                  {item.about2}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="setupwallet-rightbottom-side-ellipse"></div>
    </div>
  );
};

export default SetupWallet;

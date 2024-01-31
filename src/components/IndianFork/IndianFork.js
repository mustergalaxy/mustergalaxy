import React from "react";
import "./IndianFork.css";
import assetsImage from "../../assets";

const metadata = [
  {
    name: "facebook",
    icon: "facebookIndianFork",
  },
  {
    name: "facebook",
    icon: "facebookIndianFork",
  },
  {
    name: "facebook",
    icon: "facebookIndianFork",
  },
  {
    name: "facebook",
    icon: "facebookIndianFork",
  },
  {
    name: "facebook",
    icon: "facebookIndianFork",
  },
];

const metadata2 = [
  {
    time: "10:22AM",
    siteName: "Work Out | Listen on NTS",
    siteUrl: "www.nts.live",
    icon: "musterIcon",
  },
  {
    time: "10:22AM",
    siteName: "Work Out | Listen on NTS",
    siteUrl: "www.nts.live",
    icon: "musterIcon",
  },
  {
    time: "10:22AM",
    siteName: "Work Out | Listen on NTS",
    siteUrl: "www.nts.live",
    icon: "musterIcon",
  },
  {
    time: "10:22AM",
    siteName: "Work Out | Listen on NTS",
    siteUrl: "www.nts.live",
    icon: "musterIcon",
  },
  {
    time: "10:22AM",
    siteName: "Work Out | Listen on NTS",
    siteUrl: "www.nts.live",
    icon: "musterIcon",
  },
];

const IndianFork = () => {
  return (
    <div className="indianForkMainComponent">
      <div
        style={{
          position: "relative",
          top: "10px",
          left: "10px",
          display: "flex",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <img
            style={{ paddingLeftL: "10px" }}
            src={assetsImage.musterIcon}
            alt="icon"
          />
        </div>
        <div>
          <img
            style={{ paddingLeftL: "10px" }}
            src={assetsImage.muterText}
            alt="icon"
          />
        </div>
      </div>
      <div className="indianForkSideEllipse" style={{ color: "wheat" }}></div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "80px 0px",
        }}
      >
        <div className="indianForkcontentContainer">
          {/* booMarks */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px 0px",
              }}
            >
              <div className="indianForkContentHeading">Bookmarks</div>
              <div>
                <img src={assetsImage.editPencile} alt="img" />
              </div>
            </div>
            <div style={{ display: "flex", gap: "20px", textAlign: "center" }}>
              {metadata.map((item) => (
                // <div>{assetsImage[item.icon]}</div>
                <div>
                  <img
                    width={141}
                    height={141}
                    src={assetsImage[item.icon]}
                    alt="icon"
                  />
                  <div className="indianForkImageBottomText">{item.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* frequently visited */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px 0px",
              }}
            >
              <div className="indianForkContentHeading">Frequently visited</div>
              <div>
                <img src={assetsImage.editPencile} alt="img" />
              </div>
            </div>
            <div style={{ display: "flex", gap: "20px", textAlign: "center" }}>
              {metadata.map((item) => (
                // <div>{assetsImage[item.icon]}</div>
                <div>
                  <img
                    width={141}
                    height={141}
                    src={assetsImage[item.icon]}
                    alt="icon"
                  />
                  <div className="indianForkImageBottomText">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
          {/* recently closed app */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <div className="indianForkContentHeading">Recently Closed Tabs</div>
            <div
              className="indianForkContentHeading"
              style={{ fontSize: "24px" }}
            >
              Tuesday, January 23
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {metadata2.map((item) => (
                <div
                  style={{
                    border: "1px solid var(--Borders-01, #2D2D2D)",
                    borderRadius: "24px",
                    height: "56px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 16px",
                  }}
                >
                  {/* This div should contain the item details */}
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <div className="indianForkClosedTime">{item.time}</div>
                    <div className="indianForkClosedIcon">
                      <img
                        width={16}
                        height={16}
                        src={assetsImage.siteIcon}
                        alt="icos"
                      />
                    </div>
                    <div className="indianForkClosedSiteName">
                      {item.siteName}
                    </div>
                    <div className="indianForkClosedTime">{item.siteUrl}</div>
                  </div>
                  <div>
                    <img src={assetsImage.copy} alt="copy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          // width: "100%",
          right: "15px",
        }}
      >
        <img src={assetsImage.urbitIndianForkbottomIcon} alt="img" />
      </div>
    </div>
  );
};

export default IndianFork;

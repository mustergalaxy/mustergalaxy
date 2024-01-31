import React from "react";
import "./UrbitFork.css";
import assetsImage from "../../assets";

const metadata = [
  {
    name: "facebook",
    icon: "facebookIcon",
  },
  {
    name: "facebook",
    icon: "facebookIcon",
  },
  {
    name: "facebook",
    icon: "facebookIcon",
  },
  {
    name: "facebook",
    icon: "facebookIcon",
  },
  {
    name: "facebook",
    icon: "facebookIcon",
  },
];

const metadata3 = [
  {
    icon: "urbitforkGroup",
  },
  {
    icon: "urbitforkGroup",
  },
  {
    icon: "urbitforkGroup",
  },
  {
    icon: "urbitforkGroup",
  },

  {
    icon: "urbitforkGroup",
  },
];

const metadata2 = [
  {
    palText: "~davwyd-sordem",
    image: "sigilGenerator",
    icon: "messageIcon",
  },
  {
    palText: "~davwyd-sordem",
    image: "sigilGenerator",
    icon: "messageIcon",
  },
  {
    palText: "~davwyd-sordem",
    image: "sigilGenerator",
    icon: "messageIcon",
  },
  {
    palText: "~davwyd-sordem",
    image: "sigilGenerator",
    icon: "messageIcon",
  },
  {
    palText: "~davwyd-sordem",
    image: "sigilGenerator",
    icon: "messageIcon",
  },
  {
    palText: "~davwyd-sordem",
    image: "sigilGenerator",
    icon: "messageIcon",
  },
];

const UrbitFork = () => {
  return (
    <div className="urbitForkMainComponent">
      <div
        style={{
          position: "relative",
          top: "10px",
          left: "10px",
          color: "wheat",
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
      <div>
        <div
          style={{
            position: "absolute",
            right: "15px",
            top: "15px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={assetsImage.sigilGenerator} alt="img" />
          <div className="urbitForkRightTopText">~davwyd-sordem</div>
        </div>
      </div>
      <div className="urbitForkSideEllipse" style={{ color: "wheat" }}></div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "80px 0px",
        }}
      >
        <div className="urbitForkcontentContainer">
          {/* bookmarks */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px 0px 25px 0px",
              }}
            >
              <div className="urbitForkContentHeading">Bookmarks</div>
              <div>
                <img src={assetsImage.editPencile} alt="img" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "12px",
                textAlign: "center",
                flexWrap: "wrap",
              }}
            >
              {metadata.map((item) => (
                // <div>{assetsImage[item.icon]}</div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "11px",
                    border: "1px solid var(--Borders-01, #2D2D2D)",
                    borderRadius: "24px",
                    padding: "8px 24px 8px 8px",
                  }}
                >
                  <img
                    width={41}
                    height={41}
                    src={assetsImage[item.icon]}
                    alt="icon"
                  />
                  <div className="urbitForkImageBottomText">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Favourite apps */}
          <div>
            <div
              style={{
                padding: "20px 0px 25px 0px",
              }}
            >
              <div className="urbitForkContentHeading">Favourite apps</div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "20px",
                textAlign: "center",
                flexWrap: "wrap",
              }}
            >
              {metadata3.map((item) => (
                // <div>{assetsImage[item.icon]}</div>
                <div>
                  <img
                    width={141}
                    height={141}
                    src={assetsImage[item.icon]}
                    alt="icon"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Favourite groups */}
          <div>
            <div
              style={{
                padding: "20px 0px 25px 0px",
              }}
            >
              <div className="urbitForkContentHeading">Favourite groups</div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "20px",
                textAlign: "center",
                flexWrap: "wrap",
              }}
            >
              {metadata3.map((item) => (
                // <div>{assetsImage[item.icon]}</div>
                <div>
                  <img
                    width={141}
                    height={141}
                    src={assetsImage[item.icon]}
                    alt="icon"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Hosted groups */}
          <div>
            <div
              style={{
                padding: "20px 0px 25px 0px",
              }}
            >
              <div className="urbitForkContentHeading">Hosted groups</div>
            </div>
            <div
              style={{
                display: "flex",
                gap: "20px",
                textAlign: "center",
                flexWrap: "wrap",
              }}
            >
              {metadata3.map((item) => (
                // <div>{assetsImage[item.icon]}</div>
                <div>
                  <img
                    width={141}
                    height={141}
                    src={assetsImage[item.icon]}
                    alt="icon"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* recently closed app */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "25px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="urbitForkContentHeading">
                Recently Closed Tabs
              </div>
              <div
                style={{
                  display: "flex",
                  width: "30px",
                  height: "30px",
                  padding: "5px",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid var(--Button-Primary, #F4F85A)",
                  borderRadius: "8px",
                }}
              >
                <img src={assetsImage.expandIcon} alt="icon" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {metadata2.map((item) => (
                <div
                  style={{
                    border: "1px solid var(--Borders-01, #2D2D2D)",
                    borderRadius: "24px",
                    width: "45%",
                    height: "40px",
                    flexDirection: "row",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between", // This should spread out the child elements across the full width
                    padding: "8px 24px 8px 8px", // Add some padding to the left and right
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
                    <div className="urbitForkCloedIcon">
                      <img
                        width={40}
                        height={40}
                        src={assetsImage[item.image]}
                        alt="icos"
                      />
                    </div>
                    <div
                      className="urbitForkClosedSiteName"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      {item.palText}
                    </div>
                  </div>
                  {/* This div should contain the image and be automatically pushed to the right by justifyContent: "space-between" */}
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      width={24}
                      height={24}
                      src={assetsImage[item.icon]}
                      alt="copy"
                    />
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

export default UrbitFork;

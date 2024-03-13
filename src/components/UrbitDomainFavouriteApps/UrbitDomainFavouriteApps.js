import React from "react";

import "./UrbitDomainFavouriteApps.css";

function UrbitDomainFavouriteApps(props) {
  const { images, heading } = props;
  console.log("images===>", images);
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
            paddingTop: "32px",
            paddingBottom: "24px",
          }}
        >
          <div className="urbitFavouriteApps-heading">{heading}</div>
        </div>
        <div className=" urbitFavouriteApps-image-container">
          {images?.map((img, index) => (
            <div key={index}>
              <img
                src={img.url}
                alt={img.metadata}
                className="urbitFavouriteApps-rounded-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UrbitDomainFavouriteApps;

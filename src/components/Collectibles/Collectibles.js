import React, { useEffect, useRef, useState } from "react";

import "./Collectibles.css";
import CustomTooltip from "../CustomToolTip/CustomToolTip";

export default function Collectibles() {
  const [collected, setCollectable] = useState(true);

  const [imageData, setImageData] = useState(null);

  const fetchCollectableImage = async () => {
    const url = `https://testapi.websiteprotector.in/nft/bname/eth/address/0xFcB6BC97B09e01caF88C0738E0E25943C8Bc8a51`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setImageData(data);
      console.log("Fetched data:", data);
    } catch (error) {
      console.error("There was a problem fetching or logging the data:", error);
    }
  };

  useEffect(() => {
    fetchCollectableImage();
  }, []);

  const bottomImageContainerRef = useRef(null);
  console.log("collected===>", collected);

  const imageUrls = imageData?.eth.result.map((item) => {
    return {
      imageUrl: item.metadata.image,
      name: item.name,
    };
  });

  console.log("imageUrls==>", imageUrls);

  const handleImageClick = (index) => {
    // Find the corresponding image in the bottom container
    const bottomImages = bottomImageContainerRef.current.children;
    const targetImage = bottomImages[index];

    // Scroll into the target image
    if (targetImage) {
      targetImage.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };
  return (
    <div>
      {collected && (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "32px",
              paddingBottom: "24px",
            }}
          >
            <div className="collectible-heading">Collectibles</div>
            <span
              className="collectible-right collectible-svg-background"
              onClick={() => setCollectable(!collected)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M16.6654 4.16732C16.6654 3.9463 16.5776 3.73434 16.4213 3.57806C16.265 3.42178 16.053 3.33398 15.832 3.33398H11.6654C11.4444 3.33398 11.2324 3.42178 11.0761 3.57806C10.9198 3.73434 10.832 3.9463 10.832 4.16732C10.832 4.38833 10.9198 4.60029 11.0761 4.75657C11.2324 4.91285 11.4444 5.00065 11.6654 5.00065H13.807L11.0737 7.74232C10.9956 7.81979 10.9336 7.91195 10.8913 8.0135C10.849 8.11505 10.8272 8.22397 10.8272 8.33398C10.8272 8.44399 10.849 8.55292 10.8913 8.65447C10.9336 8.75601 10.9956 8.84818 11.0737 8.92565C11.1512 9.00376 11.2433 9.06575 11.3449 9.10806C11.4464 9.15037 11.5554 9.17215 11.6654 9.17215C11.7754 9.17215 11.8843 9.15037 11.9858 9.10806C12.0874 9.06575 12.1796 9.00376 12.257 8.92565L14.9987 6.18398V8.33398C14.9987 8.555 15.0865 8.76696 15.2428 8.92324C15.3991 9.07952 15.611 9.16732 15.832 9.16732C16.053 9.16732 16.265 9.07952 16.4213 8.92324C16.5776 8.76696 16.6654 8.555 16.6654 8.33398V4.16732ZM8.9237 11.0757C8.84623 10.9975 8.75406 10.9355 8.65251 10.8932C8.55096 10.8509 8.44204 10.8292 8.33203 10.8292C8.22202 10.8292 8.1131 10.8509 8.01155 10.8932C7.91 10.9355 7.81783 10.9975 7.74036 11.0757L4.9987 13.809V11.6673C4.9987 11.4463 4.9109 11.2343 4.75462 11.0781C4.59834 10.9218 4.38638 10.834 4.16536 10.834C3.94435 10.834 3.73239 10.9218 3.57611 11.0781C3.41983 11.2343 3.33203 11.4463 3.33203 11.6673V15.834C3.33203 16.055 3.41983 16.267 3.57611 16.4232C3.73239 16.5795 3.94435 16.6673 4.16536 16.6673H8.33203C8.55305 16.6673 8.76501 16.5795 8.92129 16.4232C9.07757 16.267 9.16536 16.055 9.16536 15.834C9.16536 15.613 9.07757 15.401 8.92129 15.2447C8.76501 15.0884 8.55305 15.0007 8.33203 15.0007H6.18203L8.9237 12.259C9.00181 12.1815 9.0638 12.0893 9.10611 11.9878C9.14841 11.8862 9.1702 11.7773 9.1702 11.6673C9.1702 11.5573 9.14841 11.4484 9.10611 11.3468C9.0638 11.2453 9.00181 11.1531 8.9237 11.0757Z"
                  fill="#F4F85A"
                />
              </svg>
            </span>
          </div>
          <div className=" collectibles-image-container ">
            {imageUrls?.slice(0, 5).map((img, index) => (
              <div key={index}>
                <CustomTooltip title={img.name}>
                  <img
                    src={img.imageUrl}
                    alt={index}
                    className="collectibles-rounded-image"
                  />
                </CustomTooltip>
              </div>
            ))}
          </div>
        </div>
      )}
      {!collected && (
        <div style={{ paddingTop: "32px" }}>
          <div
            style={{
              background: "black",
              padding: "24px",
              borderRadius: "24px",
              width: "95%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "40px",
              }}
            >
              <div style={{ color: "white" }} className="collectible-heading">
                Collectibles
              </div>
              <span
                onClick={() => setCollectable(!collected)}
                className="collectible-right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="39"
                    height="39"
                    rx="7.5"
                    stroke="#F4F85A"
                  />
                  <path
                    d="M14 13L27 26M14 26L27 13"
                    stroke="#F4F85A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div>
              <div className="collectibles-scroll-container">
                {imageUrls.map((img, index) => (
                  <div className="collectibles-image-container" key={index}>
                    <CustomTooltip title={img.name}>
                      <img
                        src={img.imageUrl}
                        alt={index}
                        className="collectableScrollImage"
                        onClick={() => {
                          handleImageClick(index);
                          console.log("clicked");
                        }}
                      />
                    </CustomTooltip>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="collectibles-container"
              style={{ paddingTop: "48px" }}
              ref={bottomImageContainerRef}
            >
              {imageUrls.map((img, index) => (
                <div
                  key={index}
                  className="collectibles-bottom-image-container"
                >
                  <CustomTooltip title={img.name}>
                    <img
                      style={{
                        marginRight: "15px",
                      }}
                      src={img.imageUrl}
                      alt={index}
                      className="collectableScrollBottomImage"
                    />
                  </CustomTooltip>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

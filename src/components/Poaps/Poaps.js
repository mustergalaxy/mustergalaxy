import React from "react";

import "./Poaps.css";

const images = [
  { url: "https://picsum.photos/200/300", metadata: "Image 1 Metadata" },
  { url: "https://picsum.photos/200/300", metadata: "Image 2 Metadata" },
  { url: "https://picsum.photos/200/300", metadata: "Image 3 Metadata" },
  { url: "https://picsum.photos/200/300", metadata: "Image 4 Metadata" },
];

function Poaps() {
  return (
    <>
      <div style={{ display: "flex", justifyContent:'center', alignItems:'center',paddingTop:'32px', paddingBottom:'24px' }}>
        <div className="Poaps-heading">POAPs</div>
        <span className="poaps-right Poaps-svg-background">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M8.33398 3.33203H5.00065C4.55862 3.33203 4.1347 3.50763 3.82214 3.82019C3.50958 4.13275 3.33398 4.55667 3.33398 4.9987V14.9987C3.33398 15.4407 3.50958 15.8646 3.82214 16.1772C4.1347 16.4898 4.55862 16.6654 5.00065 16.6654H15.0007C15.4427 16.6654 15.8666 16.4898 16.1792 16.1772C16.4917 15.8646 16.6673 15.4407 16.6673 14.9987V11.6654M10.0007 9.9987L16.6673 3.33203M16.6673 3.33203V7.4987M16.6673 3.33203H12.5007"
              stroke="#F4F85A"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="Poaps-container">
        {images.map((img) => (
          <div className="Poaps-image-container">
            <img
              src={img.url}
              alt={img.metadata}
              className="Poaps-rounded-image"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Poaps;

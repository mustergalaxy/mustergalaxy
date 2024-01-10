import React from "react";

import "./Addresses.css";

const addresses = [
  {
    id: 1,
    leftIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M9.99935 1.45898L4.79102 10.209L9.99935 13.334L15.2077 10.209L9.99935 1.45898ZM4.79102 11.2507L9.99935 18.5423L15.2077 11.2507L9.99935 14.3757L4.79102 11.2507Z" fill="#FFFFF5"/></svg>',
    rightIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M9.99935 1.45898L4.79102 10.209L9.99935 13.334L15.2077 10.209L9.99935 1.45898ZM4.79102 11.2507L9.99935 18.5423L15.2077 11.2507L9.99935 14.3757L4.79102 11.2507Z" fill="#FFFFF5"/></svg>',
    address: "123 Main St, City A, Country",
  },
  {
    id: 2,
    leftIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M9.99935 1.45898L4.79102 10.209L9.99935 13.334L15.2077 10.209L9.99935 1.45898ZM4.79102 11.2507L9.99935 18.5423L15.2077 11.2507L9.99935 14.3757L4.79102 11.2507Z" fill="#FFFFF5"/></svg>',
    rightIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M9.99935 1.45898L4.79102 10.209L9.99935 13.334L15.2077 10.209L9.99935 1.45898ZM4.79102 11.2507L9.99935 18.5423L15.2077 11.2507L9.99935 14.3757L4.79102 11.2507Z" fill="#FFFFF5"/></svg>',
    address: "456 Second St, City B, Country",
  },
];

function Addresses() {
  return (
    <>
      <div className="Addresses-heading">Addresses</div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {addresses.map((address) => (
          <div key={address.id} className="address-container">
            <div
              className="address-left"
              dangerouslySetInnerHTML={{ __html: address.leftIcon }}
            ></div>
            <div className="address-text">{address.address}</div>
            <div
              className="address-right"
              dangerouslySetInnerHTML={{ __html: address.rightIcon }}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Addresses;

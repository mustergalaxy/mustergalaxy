import React, { useState } from "react";

import "./Addresses.css";
import CustomCopyTooltip from "../CustomCopyToolTip/CustomCopyToolTip";

const addresses = [
  {
    id: 1,
    leftIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M9.99935 1.45898L4.79102 10.209L9.99935 13.334L15.2077 10.209L9.99935 1.45898ZM4.79102 11.2507L9.99935 18.5423L15.2077 11.2507L9.99935 14.3757L4.79102 11.2507Z" fill="#FFFFF5"/></svg>',
    rightIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 11C6 8.172 6 6.757 6.879 5.879C7.757 5 9.172 5 12 5H15C17.828 5 19.243 5 20.121 5.879C21 6.757 21 8.172 21 11V16C21 18.828 21 20.243 20.121 21.121C19.243 22 17.828 22 15 22H12C9.172 22 7.757 22 6.879 21.121C6 20.243 6 18.828 6 16V11Z" stroke="#A3A393"/><path d="M6 19C5.20435 19 4.44129 18.6839 3.87868 18.1213C3.31607 17.5587 3 16.7956 3 16V10C3 6.229 3 4.343 4.172 3.172C5.343 2 7.229 2 11 2H15C15.7956 2 16.5587 2.31607 17.1213 2.87868C17.6839 3.44129 18 4.20435 18 5" stroke="#A3A393"/></svg>',
    address: "123 Main St, City A, Country",
  },
  {
    id: 2,
    leftIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M9.99935 1.45898L4.79102 10.209L9.99935 13.334L15.2077 10.209L9.99935 1.45898ZM4.79102 11.2507L9.99935 18.5423L15.2077 11.2507L9.99935 14.3757L4.79102 11.2507Z" fill="#FFFFF5"/></svg>',
    rightIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 11C6 8.172 6 6.757 6.879 5.879C7.757 5 9.172 5 12 5H15C17.828 5 19.243 5 20.121 5.879C21 6.757 21 8.172 21 11V16C21 18.828 21 20.243 20.121 21.121C19.243 22 17.828 22 15 22H12C9.172 22 7.757 22 6.879 21.121C6 20.243 6 18.828 6 16V11Z" stroke="#A3A393"/><path d="M6 19C5.20435 19 4.44129 18.6839 3.87868 18.1213C3.31607 17.5587 3 16.7956 3 16V10C3 6.229 3 4.343 4.172 3.172C5.343 2 7.229 2 11 2H15C15.7956 2 16.5587 2.31607 17.1213 2.87868C17.6839 3.44129 18 4.20435 18 5" stroke="#A3A393"/></svg>',
    address: "456 Second St, City B, Country",
  },
];

function Addresses() {
  const [tooltips, setTooltips] = useState({});

  const copyToClipboard = (text, id) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setTooltips((prevTooltips) => ({ ...prevTooltips, [id]: "Copied!" }));
        setTimeout(() => {
          setTooltips((prevTooltips) => ({ ...prevTooltips, [id]: "" }));
        }, 2000);
      })
      .catch((err) => {
        setTimeout(() => {
          setTooltips((prevTooltips) => ({ ...prevTooltips, [id]: "" }));
        }, 2000);
      });
  };

  const handleCopyClick = (address, id) => {
    copyToClipboard(address, id);
  };
  return (
    <>
      <div className="Addresses-heading">Addresses</div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {addresses.map((address) => (
          <CustomCopyTooltip
            title={tooltips[address.id] || ""}
            placement="top"
            open={Boolean(tooltips[address.id])}
          >
            <div key={address.id} className="address-container">
              <div
                className="address-left"
                dangerouslySetInnerHTML={{ __html: address.leftIcon }}
              />
              <div className="address-text">{address.address}</div>

              <div
                onClick={() => handleCopyClick(address.address, address.id)}
                className="address-right"
                dangerouslySetInnerHTML={{ __html: address.rightIcon }}
              />
            </div>
          </CustomCopyTooltip>
        ))}
      </div>
    </>
  );
}

export default Addresses;

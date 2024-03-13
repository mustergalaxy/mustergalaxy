import React from "react";

import "./Subnames.css";

const addresses = [
  {
    id: 1,
    leftIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M9.99935 1.45898L4.79102 10.209L9.99935 13.334L15.2077 10.209L9.99935 1.45898ZM4.79102 11.2507L9.99935 18.5423L15.2077 11.2507L9.99935 14.3757L4.79102 11.2507Z" fill="#FFFFF5"/></svg>',
    rightIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M10 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V14M12 12L20 4M20 4V9M20 4H15"
          stroke="#A3A393"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    address: "123 Main St, City A, Country",
  },
  {
    id: 2,
    leftIcon:
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M9.99935 1.45898L4.79102 10.209L9.99935 13.334L15.2077 10.209L9.99935 1.45898ZM4.79102 11.2507L9.99935 18.5423L15.2077 11.2507L9.99935 14.3757L4.79102 11.2507Z" fill="#FFFFF5"/></svg>',
    rightIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M10 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V14M12 12L20 4M20 4V9M20 4H15"
          stroke="#A3A393"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    address: "456 Second St, City B, Country",
  },
];
function Subnames() {
  return (
    <>
      <div className="Subnames-heading">Subnames</div>
      <div>
        {addresses.map((address) => (
          <div key={address.id} className="Subnames-container">
            <div
              className="subnames-left"
              dangerouslySetInnerHTML={{ __html: address.leftIcon }}
            ></div>
            <div className="Subnames-text">{address.address}</div>
            <div className="subnames-right">
              <span className="icon">{address.rightIcon}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Subnames;

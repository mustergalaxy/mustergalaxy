import React from "react";

import "./Link.css";

const links = [
  {
    id: 1,
    leftIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
      >
        <g clip-path="url(#clip0_586_6390)">
          <path
            d="M8.00084 15.4294C12.1035 15.4294 15.4294 12.1035 15.4294 8.00084C15.4294 3.89815 12.1035 0.572266 8.00084 0.572266C3.89815 0.572266 0.572266 3.89815 0.572266 8.00084C0.572266 12.1035 3.89815 15.4294 8.00084 15.4294Z"
            stroke="#FFFFF5"
            stroke-width="1.14286"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M0.572266 8.00084H15.4294M10.858 8.00084C10.7176 10.7174 9.71704 13.3189 8.00084 15.4294C6.28463 13.3189 5.28404 10.7174 5.14369 8.00084C5.28404 5.28428 6.28463 2.68272 8.00084 0.572266C9.71704 2.68272 10.7176 5.28428 10.858 8.00084Z"
            stroke="#FFFFF5"
            stroke-width="1.14286"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_586_6390">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
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
    link: "https://hdeddwdw.com",
  },
];

function Links() {
  return (
    <>
      <h2 className="links-heading">Links</h2>
      <div>
        {links.map((link) => (
          <div key={link.id} className="links-container">
            <div className="links-left">
              <span className="link-icon1">{link.leftIcon}</span>
            </div>
            <div className="links-text">{link.link}</div>
            <div className="links-right">
              <span className="icon">{link.rightIcon}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Links;

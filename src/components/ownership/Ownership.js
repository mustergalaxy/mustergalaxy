import React from "react";

import "./Ownership.css";

const data = [
  {
    id: 1,
    label1: "manager",
    data: "Omaxxx",
  },
  {
    id: 2,
    label1: "owner",
    data: "Omaxxx",
  },
  {
    id: 3,
    label1: "expiry",
    data: "10 March 2024",
  },
];
function Ownership() {
  return (
    <>
      <h2 className="owner-heading">Ownership</h2>
      <div className="owner-main-container">
        {data.map((owner) => (
          <div key={owner.id} className="owner-container">
            <span className="owner-text">
              {owner.label1}: {owner.data}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Ownership;

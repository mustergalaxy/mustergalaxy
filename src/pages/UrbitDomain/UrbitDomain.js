import React from "react";

// import Collectibles from "../../components/Collectibles/Collectibles";
import Social from "../../components/Social/Social";
// import LeftComponent from "../../components/leftComponent/LeftComponent";
import UrbitDomainLeftComponent from "../../components/UrbitDomainLeftComponent/UrbitDomainLeftComponent";
import UrbitDomainFavouriteGroup from "../../components/UrbitDomainFavouriteGroup/UrbitDomainFavouriteGroup";
import Links from "../../components/links/Links";
import Subnames from "../../components/subnames/Subnames";
import UrbitDomainFavouriteApps from "../../components/UrbitDomainFavouriteApps/UrbitDomainFavouriteApps";
import { useLocation } from "react-router-dom";

import "./UrbitDomain.css";

const images = [
  { url: "https://picsum.photos/200/300", metadata: "Image 1 Metadata" },
  { url: "https://picsum.photos/200/300", metadata: "Image 2 Metadata" },
  { url: "https://picsum.photos/200/300", metadata: "Image 3 Metadata" },
  { url: "https://picsum.photos/200/300", metadata: "Image 4 Metadata" },
  { url: "https://picsum.photos/200/300", metadata: "Image 1 Metadata" },
  { url: "https://picsum.photos/200/300", metadata: "Image 2 Metadata" },
  { url: "https://picsum.photos/210/300", metadata: "Image 3 Metadata" },
];

const images2 = [
  { url: "https://picsum.photos/210/300", metadata: "Image 1 Metadata" },
  { url: "https://picsum.photos/210/300", metadata: "Image 2 Metadata" },
  { url: "https://picsum.photos/210/300", metadata: "Image 3 Metadata" },
  { url: "https://picsum.photos/210/300", metadata: "Image 4 Metadata" },
  { url: "https://picsum.photos/210/300", metadata: "Image 1 Metadata" },
  { url: "https://picsum.photos/210/300", metadata: "Image 2 Metadata" },
  { url: "https://picsum.photos/210/300", metadata: "Image 3 Metadata" },
];

const UrbitDomain = () => {
  const location = useLocation();
  console.log(location.pathname);
  // console.log(window.location.origin);

  return (
    <div className="Urbit-Domain-container">
      <div className="urbitDomainleftcontainer">
        <UrbitDomainLeftComponent />
      </div>
      <div className="urbitDomainRightcontainer">
        <Social />
        <UrbitDomainFavouriteGroup />
        <UrbitDomainFavouriteApps images={images} heading="Hosted Groups" />
        <UrbitDomainFavouriteApps images={images2} heading="Favourite Apps" />
        <Subnames />
        <Links />
      </div>
    </div>
  );
};

export default UrbitDomain;

const metadata = [
  {
    name: "facebook",
    icon: "assets/facebookIcon.svg",
  },
  {
    name: "facebook",
    icon: "assets/facebookIcon.svg",
  },
  {
    name: "facebook",
    icon: "assets/facebookIcon.svg",
  },
  {
    name: "facebook",
    icon: "assets/facebookIcon.svg",
  },
  {
    name: "facebook",
    icon: "assets/facebookIcon.svg",
  },
];

const metadata3 = [
  {
    icon: "assets/urbitforkGroup.png",
    name: "facebook",
  },
  {
    icon: "assets/urbitforkGroup.png",
    name: "facebook",
  },

  {
    icon: "assets/urbitforkGroup.png",
    name: "facebook",
  },
  {
    icon: "assets/urbitforkGroup.png",
    name: "facebook",
  },

  {
    icon: "assets/urbitforkGroup.png",
    name: "facebook",
  },

  {
    icon: "assets/urbitforkGroup.png",
    name: "facebook",
  },
];

const metadata2 = [
  {
    time: "10:22AM",
    siteName: "Work Out | Listen on NTS",
    siteUrl: "www.nts.live",
    icon: "musterIcon",
  },
  {
    time: "10:22AM",
    siteName: "Work Out | Listen on NTS",
    siteUrl: "www.nts.live",
    icon: "musterIcon",
  },
  {
    time: "10:22AM",
    siteName: "Work Out | Listen on NTS",
    siteUrl: "www.nts.live",
    icon: "musterIcon",
  },

  {
    time: "10:22AM",
    siteName: "Work Out | Listen on NTS",
    siteUrl: "www.nts.live",
    icon: "musterIcon",
  },
  {
    time: "10:22AM",
    siteName: "Work Out | Listen on NTS",
    siteUrl: "www.nts.live",
    icon: "musterIcon",
  },
  {
    time: "10:22AM",
    siteName: "Work Out | Listen on NTS",
    siteUrl: "www.nts.live",
    icon: "musterIcon",
  },
  {
    time: "10:22AM",
    siteName: "Work Out | Listen on NTS",
    siteUrl: "www.nts.live",
    icon: "musterIcon",
  },
  {
    time: "10:22AM",
    siteName: "Work Out | Listen on NTS",
    siteUrl: "www.nts.live",
    icon: "musterIcon",
  },
  {
    time: "10:22AM",
    siteName: "Work Out | Listen on NTS",
    siteUrl: "www.nts.live",
    icon: "musterIcon",
  },
  {
    time: "10:22AM",
    siteName: "Work Out | Listen on NTS",
    siteUrl: "www.nts.live",
    icon: "musterIcon",
  },
  {
    time: "10:22AM",
    siteName: "Work Out | Listen on NTS",
    siteUrl: "www.nts.live",
    icon: "musterIcon",
  },
  {
    time: "10:22AM",
    siteName: "Work Out | Listen on NTS",
    siteUrl: "www.nts.live",
    icon: "musterIcon",
  },
];

function createMetadataSections() {
  const bookmark = document.getElementById("bookmark");

  function createItemDiv(item) {
    const itemDiv = document.createElement("div");
    itemDiv.style.display = "flex";
    itemDiv.style.alignItems = "center";
    itemDiv.style.gap = "11px";
    itemDiv.style.border = "1px solid var(--Borders-01, #2D2D2D)";
    itemDiv.style.borderRadius = "24px";
    itemDiv.style.padding = "10px 16px";

    // Create an image element for the icon
    const img = document.createElement("img");
    img.src = item.icon; // Assuming assetsImage is an object with key-value pairs
    img.alt = item.name || "Icon";
    img.width = 25;
    img.height = 24;
    itemDiv.appendChild(img);

    // Create a div for the item name
    const nameDiv = document.createElement("div");
    nameDiv.className = "indianForkImageBottomText";
    nameDiv.textContent = item.name;
    itemDiv.appendChild(nameDiv);

    return itemDiv;
  }

  // Append items from metadata
  metadata.forEach((item) => {
    const itemDiv = createItemDiv(item);
    bookmark.appendChild(itemDiv);
  });
}

//*************************************************** */

function frequentlyVisited() {
  const frequentlyVisit = document.getElementById("frequentlyVisit");

  function createItemDiv(item) {
    const itemDiv = document.createElement("div");

    // Create an image element for the icon
    const img = document.createElement("img");
    img.setAttribute("src", item.icon); // Assuming the icon is a valid image path
    img.setAttribute("alt", item.name || "Icon");
    img.width = 98;
    img.height = 94;
    itemDiv.appendChild(img);

    if (item.name) {
      const nameDiv = document.createElement("div");
      nameDiv.className = "indianForkImageBottomText";
      nameDiv.textContent = item.name;
      itemDiv.appendChild(nameDiv);
    }

    return itemDiv;
  }

  metadata3.forEach((item) => {
    const itemDiv = createItemDiv(item);
    itemDiv.style.display = "flex";
    itemDiv.style.flexDirection = "column";
    itemDiv.style.gap = "8px";
    frequentlyVisit.appendChild(itemDiv);
  });
}

// recently closed tabs 8888888888888888
function createRecentlyClosed() {
  const createRecentlyClose = document.getElementById("createRecentlyClose");

  function createItemDiv(item) {
    const itemDiv = document.createElement("div");
    itemDiv.style.border = "1px solid var(--Borders-01, #2D2D2D)";
    itemDiv.style.borderRadius = "24px";
    itemDiv.style.height = "40px";
    itemDiv.style.display = "flex";
    itemDiv.style.alignItems = "center";
    itemDiv.style.justifyContent = "space-between";
    itemDiv.style.padding = "0px 25px 0px 16px";

    const detailsDiv = document.createElement("div");
    detailsDiv.style.display = "flex";
    detailsDiv.style.gap = "10px";
    detailsDiv.style.alignItems = "center";

    const timeDiv = document.createElement("div");
    timeDiv.className = "indianForkClosedTime";
    timeDiv.textContent = item.time;
    detailsDiv.appendChild(timeDiv);

    const iconDiv = document.createElement("div");
    iconDiv.className = "indianForkClosedIcon";
    const iconImg = document.createElement("img");
    iconImg.width = 16;
    iconImg.height = 16;
    iconImg.src = "assets/siteIcon.svg"; //icon
    iconImg.alt = "icos";
    iconDiv.appendChild(iconImg);
    detailsDiv.appendChild(iconDiv);

    const siteNameDiv = document.createElement("div");
    siteNameDiv.className = "indianForkClosedSiteName";
    siteNameDiv.textContent = item.siteName;
    detailsDiv.appendChild(siteNameDiv);

    const siteUrlDiv = document.createElement("div");
    siteUrlDiv.className = "indianForkClosedTime";
    siteUrlDiv.textContent = item.siteUrl;
    detailsDiv.appendChild(siteUrlDiv);

    itemDiv.appendChild(detailsDiv);

    const copyDiv = document.createElement("div");
    const copyImg = document.createElement("img");
    copyImg.style.width = "3px";
    copyImg.style.height = "16px";

    // copyImg.style.paddingLeft="10px";

    copyImg.src = "assets/3dots.svg"; //icon
    copyImg.alt = "copy";
    copyDiv.appendChild(copyImg);

    itemDiv.appendChild(copyDiv);

    return itemDiv;
  }

  metadata2.forEach((item) => {
    const itemDiv = createItemDiv(item);
    createRecentlyClose.appendChild(itemDiv);
  });
}

// Call the function to create and append the metadata sections
createMetadataSections();
frequentlyVisited();
createRecentlyClosed();

// Call the function to create and append the metadata sections

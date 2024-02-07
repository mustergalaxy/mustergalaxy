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
  },
  {
    icon: "assets/urbitforkGroup.png",
  },
  {
    icon: "assets/urbitforkGroup.png",
  },
  {
    icon: "assets/urbitforkGroup.png",
  },

  {
    icon: "assets/urbitforkGroup.png",
  },
];

const metadata2 = [
  {
    palText: "~davwyd-sordem",
    image: "assets/sigilGenerator.png",
    icon: "assets/messageIcon.svg",
  },
  {
    palText: "~davwyd-sordem",
    image: "assets/sigilGenerator.png",
    icon: "assets/messageIcon.svg",
  },
  {
    palText: "~davwyd-sordem",
    image: "assets/sigilGenerator.png",
    icon: "assets/messageIcon.svg",
  },
  {
    palText: "~davwyd-sordem",
    image: "assets/sigilGenerator.png",
    icon: "assets/messageIcon.svg",
  },
  {
    palText: "~davwyd-sordem",
    image: "assets/sigilGenerator.png",
    icon: "assets/messageIcon.svg",
  },
  {
    palText: "~davwyd-sordem",
    image: "assets/sigilGenerator.png",
    icon: "assets/messageIcon.svg",
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
    img.width = 24;
    img.height = 24;
    itemDiv.appendChild(img);

    // Create a div for the item name
    const nameDiv = document.createElement("div");
    nameDiv.className = "urbitForkImageBottomText";
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

function favorateApps() {
  const favorateApp = document.getElementById("favorateApp");

  function createItemDiv(item) {
    const itemDiv = document.createElement("div");

    // Create an image element for the icon
    const img = document.createElement("img");
    img.setAttribute("src", item.icon); // Assuming the icon is a valid image path
    img.setAttribute("alt", item.name || "Icon");
    img.width = 99;
    img.height = 99;
    itemDiv.appendChild(img);

    return itemDiv;
  }

  metadata3.forEach((item) => {
    const itemDiv = createItemDiv(item);
    favorateApp.appendChild(itemDiv);
  });
}

// favorateGroups

function favorateGroups() {
  const favorateGroup = document.getElementById("favorateGroup");

  function createItemDiv(item) {
    const itemDiv = document.createElement("div");

    // Create an image element for the icon
    const img = document.createElement("img");
    img.setAttribute("src", item.icon); // Assuming the icon is a valid image path
    img.setAttribute("alt", item.name || "Icon");
    img.width = 99;
    img.height = 99;
    itemDiv.appendChild(img);

    return itemDiv;
  }

  metadata3.forEach((item) => {
    const itemDiv = createItemDiv(item);
    favorateGroup.appendChild(itemDiv);
  });
}

function hostedGroups() {
  const hostedGroup = document.getElementById("hostedGroup");

  function createItemDiv(item) {
    const itemDiv = document.createElement("div");

    // Create an image element for the icon
    const img = document.createElement("img");
    img.setAttribute("src", item.icon); // Assuming the icon is a valid image path
    img.setAttribute("alt", item.name || "Icon");
    img.width = 99;
    img.height = 99;
    itemDiv.appendChild(img);

    return itemDiv;
  }

  metadata3.forEach((item) => {
    const itemDiv = createItemDiv(item);
    hostedGroup.appendChild(itemDiv);
  });
}

// recently closed tabs 8888888888888888
function createRecentlyClosed() {
  const createRecentlyClose = document.getElementById("createRecentlyClose");

  function createItemDiv(item) {
    const itemDiv = document.createElement("div");
    itemDiv.style.border = "1px solid var(--Borders-01, #2D2D2D)";
    itemDiv.style.borderRadius = "24px";
    itemDiv.style.width = "45%";
    itemDiv.style.height = "40px";
    itemDiv.style.flexDirection = "row";
    itemDiv.style.display = "flex";
    itemDiv.style.alignItems = "center";
    itemDiv.style.justifyContent = "space-between";
    itemDiv.style.padding = "6px 16px";

    const detailsDiv = document.createElement("div");
    detailsDiv.style.display = "flex";
    detailsDiv.style.gap = "10px";
    detailsDiv.style.alignItems = "center";

    const iconDiv = document.createElement("div");
    const iconImg = document.createElement("img");
    // iconImg.setAttribute("src", assetsImage[item.image]);
    iconImg.setAttribute("src", item.image);
    iconImg.setAttribute("alt", "icos");
    iconImg.width = 32;
    iconImg.height = 32;
    iconDiv.appendChild(iconImg);

    const textDiv = document.createElement("div");
    textDiv.textContent = item.palText;
    textDiv.className = "palText";
    textDiv.style.display = "flex";
    textDiv.style.alignItems = "center";

    detailsDiv.appendChild(iconDiv);
    detailsDiv.appendChild(textDiv);

    const copyDiv = document.createElement("div");
    copyDiv.style.display = "flex";
    copyDiv.style.alignItems = "center";

    const copyImg = document.createElement("img");
    copyImg.setAttribute("src", item.icon);
    copyImg.setAttribute("alt", "copy");
    copyImg.width = 20;
    copyImg.height = 20;
    copyDiv.appendChild(copyImg);

    itemDiv.appendChild(detailsDiv);
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
favorateApps();
createRecentlyClosed();
hostedGroups();
favorateGroups();
// Call the function to create and append the metadata sections

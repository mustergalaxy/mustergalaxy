const manageData = [
  {
    index: 1,
    organisation: "[Organization] ",
    validity: "24 august",
    icon: "../../assets/3dot.svg",
  },
  {
    index: 2,
    organisation: "[Organization] ",
    validity: "24 august",
    icon: "../../assets/3dot.svg",
  },
  {
    index: 3,
    organisation: "[Organization] ",
    validity: "24 august",
    icon: "../../assets/3dot.svg",
  },
  {
    index: 4,
    organisation: "[Organization] ",
    validity: "24 august",
    icon: "../../assets/3dot.svg",
  },
  {
    index: 5,
    organisation: "[Organization] ",
    validity: "24 august",
    icon: "../../assets/3dot.svg",
  },
];

let currentlyOpenedBox = null;

const container = document.getElementById("setDocument");

function createCertificateViewModal() {
  function resetButtonStyles() {
    const buttons = document.querySelectorAll(".certificateViewManageButton");
    buttons.forEach((button) => {
      button.classList.remove("button-selected");
      button.classList.add("button-unselected");
    });
  }

  // Function to set a button as selected
  function setSelectedButton(button) {
    resetButtonStyles();
    button.classList.add("button-selected");
    button.classList.remove("button-unselected");
  }

  const modal = document.createElement("div");
  modal.id = "certificateViewModal";
  modal.className = "certificateViewManageModal";

  const modalContent = document.createElement("div");
  modalContent.className = "certificateViewManageContent";

  const closeButton = document.createElement("span");
  closeButton.className = "certificateViewManageClose";
  closeButton.innerHTML = "&times;";
  closeButton.onclick = function () {
    modal.style.display = "none";
  };

  const modalHeader = document.createElement("div");
  modalHeader.className = "certificateViewManageHeader";

  // Create an image element for the logo
  const modalLeftheading = document.createElement("div");
  modalLeftheading.style.display = "flex";
  const modalLogo = document.createElement("img");
  modalLogo.src = "../../assets/modalLogo.png";
  modalLogo.alt = "Logo";
  modalLogo.className = "CertificateViewModalLogo";
  modalLogo.style.marginRight = "10px";
  const modalTitle = document.createElement("div");
  modalTitle.textContent = "Certificate viewer";
  modalTitle.className = "CertificateViewModalHeading";

  const additionalText = document.createElement("div");
  additionalText.textContent = "Your additional text here"; // Replace with your additional text
  additionalText.className = "additionalModalTextClass";

  const headingContainer = document.createElement("div");

  headingContainer.appendChild(modalTitle);
  headingContainer.appendChild(additionalText);

  modalLeftheading.appendChild(modalLogo);
  modalLeftheading.appendChild(headingContainer);

  modalHeader.appendChild(modalLeftheading);
  modalHeader.appendChild(closeButton);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "certificateViewManageButtonContainer";

  const button1 = document.createElement("button");
  button1.className = "certificateViewManageButton";
  const buttonImage = document.createElement("img");
  buttonImage.src = "../../assets/generalLogo.svg";
  buttonImage.alt = "Button Icon";
  buttonImage.style.width = "24px";
  buttonImage.style.height = "24px";

  button1.appendChild(buttonImage);

  const buttonText = document.createTextNode("General");
  button1.appendChild(buttonText);
  const certificates = [
    {
      heading: "Certificate 1",
      provider: "Provider A",
      issuedDate: "2021-01-01",
      validUntil: "2023-01-01",
    },
    {
      heading: "Certificate 2",
      provider: "Provider B",
      issuedDate: "2021-06-15",
      validUntil: "2023-06-15",
    },
    {
      heading: "Certificate 3",
      provider: "Provider C",
      issuedDate: "2022-03-23",
      validUntil: "2024-03-23",
    },
    {
      heading: "Certificate 4",
      provider: "Provider D",
      issuedDate: "2022-07-30",
      validUntil: "2024-07-30",
    },
  ];

  button1.onclick = function () {
    setSelectedButton(button1);
    const modalBody = document.getElementById("certificateViewModalBody");
    modalBody.innerHTML = "";

    modalBody.style.height = "500px";
    modalBody.style.overflowY = "auto";
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      #certificateViewModalBody::-webkit-scrollbar {
        width: 8px;
        border-radius: 100px;
        background: var(--Card-fills-02, #1E1E1E);
      }
      #certificateViewModalBody::-webkit-scrollbar-thumb {
        width: 8px;
        height: 10px;
        // border-radius: 100px;
        background: var(--Brandscale-Primary, #F4F85A);
        -webkit-border-radius: 100px;
        -webkit-width: 10px;
      }
    `;
    document.head.appendChild(styleSheet);
    // Update the boxData with the certificates information
    const boxData = certificates.map((certificate) => ({
      heading: certificate.heading,
      rows: [
        `<span class="key">Provider:</span> <span class="value">${certificate.provider}</span>`,
        `<span class="key">Issued Date:</span> <span class="value">${certificate.issuedDate}</span>`,
        `<span class="key">Valid Until:</span> <span class="value">${certificate.validUntil}</span>`,
      ],
    }));

    boxData.forEach((box, index) => {
      const dataContainer = document.createElement("div");
      dataContainer.className = "ManagecertificatemodaltextContainer";
      dataContainer.style.marginBottom = "24px";

      const heading = document.createElement("div");
      heading.className = "ManagecertificateSubModalHeading";
      heading.textContent = box.heading;
      heading.style.marginBottom = "16px";

      dataContainer.appendChild(heading);

      box.rows.forEach((rowData, rowIndex) => {
        const row = document.createElement("div");
        row.innerHTML = rowData;
        dataContainer.appendChild(row);
      });

      modalBody.appendChild(dataContainer);
    });
  };

  const button2 = document.createElement("button");

  button2.className = "certificateViewManageButton";
  const buttonImage2 = document.createElement("img");
  buttonImage2.src = "../../assets/detailsunselected.svg";
  buttonImage2.alt = "Button Icon";
  buttonImage2.style.width = "24px";
  buttonImage2.style.height = "24px";

  button2.appendChild(buttonImage2);

  const buttonText2 = document.createTextNode("Details");
  button2.appendChild(buttonText2);

  const button2Data = [
    {
      heading: "Certificate 1",
      provider: "SHUBHAM A",
      issuedDate: "2021-01-01",
      validUntil: "2023-01-01",
    },
    {
      heading: "Certificate 2",
      provider: "Provider B",
      issuedDate: "2021-06-15",
      validUntil: "2023-06-15",
    },
    {
      heading: "Certificate 3",
      provider: "Provider C",
      issuedDate: "2022-03-23",
      validUntil: "2024-03-23",
    },
    {
      heading: "Certificate 4",
      provider: "Provider D",
      issuedDate: "2022-07-30",
      validUntil: "2024-07-30",
    },
  ];
  button2.onclick = function () {
    setSelectedButton(button2);
    const modalBody = document.getElementById("certificateViewModalBody");
    modalBody.innerHTML = "";

    modalBody.style.height = "500px";
    modalBody.style.overflowY = "auto";
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      #certificateViewModalBody::-webkit-scrollbar {
        width: 8px;
        border-radius: 100px;
        background: var(--Card-fills-02, #1E1E1E);
      }
      #certificateViewModalBody::-webkit-scrollbar-thumb {
        width: 8px;
        height: 10px;
        // border-radius: 100px;
        background: var(--Brandscale-Primary, #F4F85A);
        -webkit-border-radius: 100px;
        -webkit-width: 10px;
      }
    `;
    document.head.appendChild(styleSheet);
    const boxData = button2Data.map((certificate) => ({
      heading: certificate.heading,
      rows: [
        `<span class="key">Provider:</span> <span class="value">${certificate.provider}</span>`,
        `<span class="key">Issued Date:</span> <span class="value">${certificate.issuedDate}</span>`,
        `<span class="key">Valid Until:</span> <span class="value">${certificate.validUntil}</span>`,
      ],
    }));

    boxData.forEach((box, index) => {
      const dataContainer = document.createElement("div");
      dataContainer.className = "ManagecertificatemodaltextContainer";
      dataContainer.style.marginBottom = "24px";

      const heading = document.createElement("div");
      heading.className = "ManagecertificateSubModalHeading";
      heading.textContent = box.heading;
      heading.style.marginBottom = "16px";

      dataContainer.appendChild(heading);

      // Create rows with a gap of 8px between them
      box.rows.forEach((rowData, rowIndex) => {
        const row = document.createElement("div");
        row.innerHTML = rowData;
        dataContainer.appendChild(row);
      });

      modalBody.appendChild(dataContainer);
    });
  };

  buttonContainer.appendChild(button1);
  buttonContainer.appendChild(button2);

  const modalBody = document.createElement("div");
  modalBody.id = "certificateViewModalBody";
  modalBody.className = "certificateViewManageBody";

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(buttonContainer);
  modalContent.appendChild(modalBody);

  modal.appendChild(modalContent);

  document.body.appendChild(modal);
  resetButtonStyles();
}

function updateModalContent(data) {
  const modalBody = document.getElementById("certificateViewModalBody");
  modalBody.textContent = data;
}

function createModal() {
  const modal = document.createElement("div");
  modal.id = "myModal";
  modal.className = "modal";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";

  const modalTitle = document.createElement("div");
  modalTitle.className = "mageCertificateModalDeleteHeading";
  modalTitle.textContent =
    "Are you sure you want to delete [cert name] from your OS?";
  modalTitle.style.textAlign = "center";

  const closeButton = document.createElement("span");
  closeButton.className = "close";
  closeButton.style.cursor = "pointer";

  const modalBody = document.createElement("div");
  modalBody.className = "ManageCertificateDeletemodalbody";
  modalBody.textContent = "This action cannot be undune.";
  modalBody.style.textAlign = "center";

  const modalFooter = document.createElement("div");
  modalFooter.className = "modal-footer";
  modalFooter.style.display = "flex";
  modalFooter.style.flexDirection = "column";
  modalFooter.style.gap = "16px";
  modalFooter.style.width = "100%";

  const button1 = document.createElement("button");
  button1.className = "DeleteButtonModal2";
  button1.textContent = "Delete";
  button1.style.width = "100%";
  button1.onclick = function () {
    console.log("Button 1 clicked");
    modal.style.display = "none";
  };

  const button2 = document.createElement("button");
  button2.className = "ManageCertificatemodalCancel2button";
  button2.textContent = "Cancel";
  button2.style.width = "100%";
  button2.onclick = function () {
    console.log("Button 2 clicked");
    modal.style.display = "none";
  };

  modalHeader.appendChild(closeButton);
  modalHeader.appendChild(modalTitle);

  modalFooter.appendChild(button1);
  modalFooter.appendChild(button2);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);

  modal.appendChild(modalContent);

  document.body.appendChild(modal);

  closeButton.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

function createInnerRow(item, rowIndex, text) {
  const innerContainer = document.createElement("div");
  innerContainer.className = "innerContainer innerContainerHover";
  innerContainer.style.width = "280px";
  innerContainer.style.padding = "8px";
  innerContainer.style.display = "flex";
  innerContainer.style.gap = "20px";
  innerContainer.style.justifyContent = "space-between"; // Align items to the left and right

  const leftInnerContainer = document.createElement("div");
  leftInnerContainer.style.display = "flex";
  leftInnerContainer.style.gap = "10px";

  const leftImg = document.createElement("img");
  leftImg.src = "../../assets/lock.svg";
  leftImg.className = "innerIcon";

  const innerText = document.createElement("div");
  innerText.textContent = `${text}`;
  innerText.className = "innerText";

  const innerIconImg = document.createElement("img");
  innerIconImg.src = "../../assets/redirect.svg";
  innerIconImg.width = "24";
  innerIconImg.className = "innerIcon innerIconHidden";

  leftInnerContainer.appendChild(leftImg);
  leftInnerContainer.appendChild(innerText);
  if (rowIndex === 2) {
    innerContainer.addEventListener("click", function () {
      const modal = document.getElementById("myModal");
      modal.style.display = "block";
    });
  }

  if (rowIndex === 1) {
    innerContainer.addEventListener("click", function () {
      const modal = document.getElementById("certificateViewModal");
      document.querySelector(".certificateViewManageButton").click();
      modal.style.display = "block";
    });
  }

  innerContainer.appendChild(leftInnerContainer);
  innerContainer.appendChild(innerIconImg);

  return innerContainer;
}

function createBoxes() {
  container.style.display = "flex";
  container.style.gap = "8px";
  container.style.flexDirection = "column";

  manageData.forEach((item) => {
    const box = document.createElement("div");
    box.className = "manageCertificateBox";

    const organisationDiv = document.createElement("div");
    organisationDiv.className = "ManageCertificateOrganisation";
    organisationDiv.textContent = item.organisation;

    const validityDiv = document.createElement("div");
    validityDiv.className = "manageCertificateValidity";
    validityDiv.textContent = item.validity;

    const iconImgDiv = document.createElement("div");
    iconImgDiv.className = "iconDiv";

    const iconImg = document.createElement("img");
    iconImg.className = "icon";
    iconImg.src = item.icon;

    iconImgDiv.appendChild(iconImg);

    const smallBox = document.createElement("div");
    smallBox.className = "smallBox";
    smallBox.style.display = "none";

    const innerTextDiv = document.createElement("div");
    innerTextDiv.className = "smallBoxHeading";
    innerTextDiv.innerText = "Choose action";

    const firstRow = createInnerRow(item, 1, "View info");
    const secondRow = createInnerRow(item, 2, "Delete");

    smallBox.appendChild(innerTextDiv);
    smallBox.appendChild(firstRow);
    smallBox.appendChild(secondRow);

    iconImgDiv.addEventListener("click", function () {
      if (currentlyOpenedBox && currentlyOpenedBox !== smallBox) {
        currentlyOpenedBox.style.display = "none";
      }

      smallBox.style.display =
        smallBox.style.display === "none" ? "block" : "none";
      smallBox.style.position = "absolute";
      smallBox.style.left = `${iconImgDiv.offsetLeft - 150}px`;
      smallBox.style.top = `${iconImgDiv.offsetTop + 50}px`;

      currentlyOpenedBox = smallBox.style.display === "block" ? smallBox : null;
    });

    const leftDiv = document.createElement("div");
    leftDiv.className = "left";
    leftDiv.appendChild(organisationDiv);
    leftDiv.appendChild(validityDiv);

    box.appendChild(leftDiv);
    box.appendChild(iconImgDiv);
    box.appendChild(smallBox);

    container.appendChild(box);
  });
}

window.onload = () => {
  createBoxes();
  createModal();
  createCertificateViewModal();
};

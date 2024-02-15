function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  var button = dropdown.previousElementSibling;
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
    if (button) {
      button.className = "dropdown-btn";
    }
  } else {
    dropdown.style.display = "block";
    if (button) {
      button.className = "dropdown-btn-active";
    }
  }
}

function loadContent(contentId) {
  var mainContent = document.querySelector(".main-content");

  var fileName = contentId + ".html";

  fetch(fileName)
    .then(function (response) {
      console.log("response==>", response);
      if (response.ok) {
        return response.text();
      } else {
        throw new Error("File not found");
      }
    })
    .then(function (html) {
      mainContent.innerHTML = html;
    })
    .catch(function (error) {
      console.error("Error loading content:", error);
      mainContent.innerHTML = "<p>Error loading content.</p>";
    });
}

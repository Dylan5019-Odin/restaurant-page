import Header from "./banner.jpg";

//Function that generate the Header
const generateHeader = () => {
  let contentContainer = document.getElementById("content");

  //Div that contians the Header Section
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  // Banner Image
  const headerImg = new Image();
  headerImg.src = Header;

  // Banner Text
  const headerText = document.createElement("h1");
  headerText.classList.add("header-text");
  headerText.textContent = "Dylan's Resaurant";

  headerDiv.appendChild(headerImg);
  headerDiv.appendChild(headerText);
  contentContainer.appendChild(headerDiv);
};

export default generateHeader;

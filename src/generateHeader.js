import Header from "./banner.jpg";

//Function that combines the header and review section
const generateHeader = () => {
  let contentContainer = document.getElementById("content");

  //Div that contians the Header
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  // Banner Image
  const headerImg = new Image();
  headerImg.src = Header;

  // Banner Text
  const headerText = document.createElement("h1");
  headerText.classList.add("header-text");
  headerText.textContent = "Dylans Resaurant";

  headerDiv.appendChild(headerImg);
  headerDiv.appendChild(headerText);
  contentContainer.appendChild(headerDiv);
};

export default generateHeader;

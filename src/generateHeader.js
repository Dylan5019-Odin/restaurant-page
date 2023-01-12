import Header from './banner.jpg';

//Function that combines the header and review section
const generateHeader = () => {
  let contentContainer = document.getElementById("content");

  //Function that Loads the Header Section
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  const headerImg = new Image();
  headerImg.src = Header;

  headerDiv.appendChild(headerImg);

  contentContainer.appendChild(headerDiv);
 
};

export default generateHeader;

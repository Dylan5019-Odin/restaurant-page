

//Function that generate the Navbar
const generateNavbar = () => {
  let contentContainer = document.getElementById("content");


  //Div that contians the Navbar
  const navbar = document.createElement("div");
  navbar.classList.add("navbar");

 

  const links = document.createElement("div");
  links.classList.add("links");
  

  const homeButton = document.createElement("button");
  homeButton.innerHTML = "Home";
  const menuButton = document.createElement("button");
   menuButton.innerHTML = "Menu";
  const contactButton = document.createElement("button");
  contactButton.innerHTML = "Contact Us";

  links.append(homeButton);
  links.append(menuButton);
  links.append(contactButton);


navbar.append(links);

  contentContainer.appendChild(navbar);
};

export default generateNavbar;

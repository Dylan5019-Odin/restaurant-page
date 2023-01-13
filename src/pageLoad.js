import generateNavbar from "./generateNavBar";
import generateHeader from "./generateHeader";
import generateBody from "./generateBody";

//Function that combines the header and review section
const pageLoad = () => {
  //Function that Loads the Navbar 
  generateNavbar();
  //Function that Loads the Header Section
  generateHeader();
  //Function that Loads the Reviews Section
  generateBody();
}

export default pageLoad;
import generateNavbar from "./generateNavBar";
import generateHeader from "./generateHeader";
import generateBody from "./generateBody";
import generateContactPage from "./generateContactPage";
import addEventListenerToBtn from "./addEventListenerToBtn";
import {reviews, menu} from './items';

//Function that combines the header and review section
const pageLoad = () => {
  //Function that Loads the Navbar
  generateNavbar();
  //Function that adds event listener to buttons that change content of body
 addEventListenerToBtn();
  //Function that Loads the Header Section
  generateHeader();
  //Function that Loads the Reviews Section
  generateBody(reviews);
};

export default pageLoad;

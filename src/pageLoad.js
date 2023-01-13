import generateNavbar from "./generateNavBar";
import generateHeader from "./generateHeader";
import generateBody from "./generateBody";

//Reviews
// Imports
let reviews = [
  {
    type: "review",
    name: "Tyler Letty",
    rating: "⭐⭐⭐⭐⭐",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus obcaecati praesentium voluptatem, nesciunt sequi ",
  },
  {
    type: "review",
    name: "John Doe",
    rating: "⭐⭐⭐",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus obcaecati praesentium voluptatem, nesciunt sequi ",
  },
  {
    type: "review",
    name: "Christina Adams",
    rating: "⭐⭐⭐⭐",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus obcaecati praesentium voluptatem, nesciunt sequi ",
  },
];

let menu = [
  {
    type: "menu",
    name: "Spaghetti",
    rating: "",
    desc: "an Italian dish consisting largely of spaghetti, typically with a sauce.",
  },
  {
    type: "menu",
    name: "Pizza",
    rating: "",
    desc: " a dish of Italian origin consisting of a flat, round base of dough baked with a topping of tomato sauce and cheese, typically with added meat or vegetables.",
  },
  {
    type: "menu",
    name: "Mac N Cheese",
    rating: "",
    desc: " a dish of pasta and cheese sauce, traditionally using macaroni and cheddar, baked in a casserole or sometimes cooked on a stovetop.",
  },
];

//Function that combines the header and review section
const pageLoad = () => {
  //Function that Loads the Navbar
  generateNavbar();
  //Function that Loads the Header Section
  generateHeader();
  //Function that Loads the Reviews Section
  generateBody(reviews);
};

export default pageLoad;

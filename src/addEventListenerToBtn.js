import generateBody from "./generateBody";
import generateContactPage from "./generateContactPage";
import { reviews, menu } from "./items";

//Function that generate the Contact Page
const addEventListenerToBtn = () => {
  document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById("body-content").innerHTML = "";

      if (btn.id == "home") {
        generateBody(reviews)
      } else if (btn.id == "menu"){
        generateBody(menu);
      } else if (btn.id == 'contact') {
        generateContactPage();
      }

    });
  });
};

export default addEventListenerToBtn;

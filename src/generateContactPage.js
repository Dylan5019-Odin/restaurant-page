//Function that generate the Contact Page
const generateContactPage = () => {
  let contentContainer = document.getElementById("content");

  //Div that contians the Body Section
  const bodyDiv = document.getElementById("body-content");
  bodyDiv.classList.add("body-content");

  const bodyTitle = document.createElement("h2");
  bodyTitle.classList.add("body-title");
  bodyTitle.textContent = `Contact Us`;

bodyDiv.append(bodyTitle);

 const contactDiv = document.createElement("div");
 contactDiv.classList.add("body-contact");

  const contactNumber = document.createElement("p");
  contactNumber.textContent = 'Phone Number: 999-222-****';

  const contactEmail = document.createElement("p");
  contactEmail.textContent = "Email: website@gmail.com";


  contactDiv.append(contactNumber);
    contactDiv.append(contactEmail);

  bodyDiv.append(contactDiv);


  contentContainer.append(bodyDiv);
};

export default generateContactPage;
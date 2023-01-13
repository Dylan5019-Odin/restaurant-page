//Function that generate the Body
const generateBody = (items) => {
  let contentContainer = document.getElementById("content");

  //Div that contians the Body Section
  const bodyDiv = document.createElement("div");
  bodyDiv.classList.add("body-content");

  const bodyTitle = document.createElement("h2");
  bodyTitle.classList.add("body-title");
  bodyTitle.textContent = "Reviews";

  bodyDiv.append(bodyTitle);

  const bodyContentDiv = document.createElement("div");
  bodyContentDiv.classList.add("body-info");

  bodyDiv.append(bodyContentDiv);

  // Creates the Item Cards Depending on the type
  for (let i = 0; i < items.length; i++) {
    const item = document.createElement("div");

    item.classList.add("body-item");

    if (items[i].type == "review") {
      item.innerHTML = `<div>
      <h2>${items[i].rating}</h2>
      <p>${items[i].desc}</p>
      <p class="signiture">-${items[i].name}</p>
    </div>`;
    } else if (items[i].type == "menu") {
      item.innerHTML = `<div>
      <h2>${items[i].name}</h2>
      <p>${items[i].desc}</p>
      
    </div>`;
    }

    bodyContentDiv.append(item);
  }

  contentContainer.append(bodyDiv);
};

export default generateBody;

let reviews = [
  {
    name: "Tyler Letty",
    rating: "⭐⭐⭐⭐⭐",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus obcaecati praesentium voluptatem, nesciunt sequi ",
  },
  {
    name: "John Doe",
    rating: "⭐⭐⭐",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus obcaecati praesentium voluptatem, nesciunt sequi ",
  },
  {
    name: "Christina Adams",
    rating: "⭐⭐⭐⭐",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos delectus obcaecati praesentium voluptatem, nesciunt sequi ",
  },
];

//Function that generate the Body
const generateBody = () => {
  let contentContainer = document.getElementById("content");

  //Div that contians the Body Section
  const bodyDiv = document.createElement("div");
  bodyDiv.classList.add("body-content");

  //Body Title
  const reviewTitle = document.createElement("h1");
  reviewTitle.classList.add("review-title");
  reviewTitle.textContent = "Reviews";
  bodyDiv.append(reviewTitle);

  const reviewDiv = document.createElement("div");
  reviewDiv.classList.add("review-content");

  bodyDiv.append(reviewDiv);

  // Creates the Review Cards
  for (let i = 0; i < reviews.length; i++) {
    const review = document.createElement("div");

    review.classList.add("review");

    review.innerHTML = `<div>
      <h2>${reviews[i].rating}</h2>
      <p>${reviews[i].review}</p>
      <p class="signiture">-${reviews[i].name}</p>
    </div>`;

    reviewDiv.append(review);
  }

  contentContainer.append(bodyDiv);
};

export default generateBody;

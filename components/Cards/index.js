// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.

let cards = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response);
    response.data.articles.bootstrap.forEach(f => {
      cards.appendChild(createCard(f.headline, f.authorPhoto, f.authorName));
    });
    response.data.articles.javascript.forEach(f => {
      cards.appendChild(createCard(f.headline, f.authorPhoto, f.authorName));
    });
    response.data.articles.jquery.forEach(f => {
      cards.appendChild(createCard(f.headline, f.authorPhoto, f.authorName));
    });
    response.data.articles.node.forEach(f => {
      cards.appendChild(createCard(f.headline, f.authorPhoto, f.authorName));
    });
    response.data.articles.technology.forEach(f => {
      cards.appendChild(createCard(f.headline, f.authorPhoto, f.authorName));
    });
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });

// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(hl, imgSrc, name) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgCont = document.createElement("div");
  const img = document.createElement("img");
  const by = document.createElement("span");

  ///Assign classes
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgCont.classList.add("img-container");

  ///Add content
  headline.textContent = hl;
  img.src = imgSrc;
  by.textContent = "By " + name;

  ////Append elements
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgCont);
  imgCont.appendChild(img);
  author.appendChild(by);

  return card;
}

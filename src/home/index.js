import "./home.css";

function createCard(titleText, contentText) {
  const cardDiv = document.createElement("div");
  const title = document.createElement("h2");
  const content = document.createElement("p");

  title.textContent = titleText;
  content.textContent = contentText;

  cardDiv.classList.add("card");
  cardDiv.append(title, content);

  return cardDiv;
}

export default function Home() {
  const homeDiv = document.createElement("div");
  const title = document.createElement("h1");
  const intro = document.createElement("div");
  const cards = document.createElement("div");

  title.textContent = "Welcome to KoftaHut!";
  intro.textContent = `At KoftaHut, we serve the finest, authentic Middle Eastern cuisine.
  Our dishes are prepared with fresh ingredients and traditional recipes
  passed down through generations.`;

  const workingHoursCard = createCard(
    "Working hours:",
    "Monday - Sunday, 11:00 AM - 10:00 PM"
  );
  const locationCard = createCard(
    "Location:",
    "123 Main Street, Suez, Egypt, 12345"
  );

  homeDiv.id = "home";
  title.id = "title";
  intro.id = "intro";
  cards.classList.add("cards");

  cards.append(locationCard, workingHoursCard);
  homeDiv.append(title, intro, cards);

  return homeDiv;
}

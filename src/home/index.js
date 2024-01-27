export default function Home() {
  const homeDiv = document.createElement("div");
  const title = document.createElement("h1");
  const intro = document.createElement("div");
  const cards = document.createElement("div");
  const workingHours = document.createElement("div");
  const location = document.createElement("div");

  title.textContent = "Welcome to KoftaHut";
  intro.textContent = `At KoftaHut, we serve the finest, authentic Middle Eastern cuisine.
  Our dishes are prepared with fresh ingredients and traditional recipes
  passed down through generations.`;
  workingHours.textContent =
    "Working hours: Monday - Sunday, 11:00 AM - 10:00 PM";

  location.textContent = "Location: 123 Main Street, Suez, Egypt, 12345";

  homeDiv.id = "home";
  title.id = "title";
  intro.id = "intro";
  workingHours.classList.add("card");
  location.classList.add("card");

  cards.append(workingHours, location);
  homeDiv.append(title, intro, cards);

  return homeDiv;
}

import Home from "./home";

export default function App() {
  const content = document.querySelector("#content");
  content.appendChild(Home());
}

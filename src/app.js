import Home from "./home";
import Menu from "./menu";

export default function App() {
  const content = document.querySelector("#content");
  content.appendChild(Menu());
}

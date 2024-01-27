import App from "./app";
import Contact from "./contact";
import Home from "./home";
import Menu from "./menu";
import "./global.css";

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const contactBtn = document.querySelector("#contactBtn");

function setListener(button, component) {
  button.addEventListener("click", (_) => {
    content.innerHTML = "";
    content.appendChild(component);
  });
}

setListener(homeBtn, Home());
setListener(menuBtn, Menu());
setListener(contactBtn, Contact());

App();

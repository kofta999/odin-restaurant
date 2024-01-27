import App from "./app";
import Home from "./home";
import Menu from "./menu";
const content = document.querySelector("#content");
const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const aboutBtn = document.querySelector("#aboutBtn");

function setListener(button, component) {
  button.addEventListener("click", (e) => {
    content.innerHTML = "";
    content.appendChild(component);
  });
}

setListener(homeBtn, Home());
setListener(menuBtn, Menu());
// setListener(aboutBtn, About());

App();

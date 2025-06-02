import "./styles.css";
import { loadHome } from "./js-modules/load-home.js";
import { loadMenu } from "./js-modules/load-menu.js";
import { loadAbout } from "./js-modules/load-about.js";
import { clearScreen } from "./js-modules/clear-screen.js";

console.log("Here's the JavaScript!");

loadHome();

const header = document.querySelector("#nav");

header.addEventListener("click", (event) => {
    let target = event.target;
    switch(target.id){
        case "home-button":
            console.log("You clicked the home button!");
            clearScreen();
            loadHome();
            break;
        case "menu-button":
            console.log("You clicked the menu button!");
            clearScreen();
            loadMenu();
            break;
        case "about-button":
            clearScreen();
            loadAbout();
            break;
    }
})
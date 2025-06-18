export function loadMenu() {
    console.log("Executing 'loadMenu()")

    const menuDiv = document.createElement("div");

    const menuHeader = document.createElement("h1");
    menuHeader.textContent = "OUR AMAZING MENU";
    
    const menuBreakHead = document.createElement("h2");
    menuBreakHead.textContent = "Breakfast"

    const menuBreak = document.createElement("p");
    menuBreak.textContent = "Pancakes (3), Sausage Links (2)";

    const menuLunchHead = document.createElement("h2");
    menuLunchHead.textContent = "Lunch";

    const menuLunch = document.createElement("p")
    menuLunch.textContent = "BLT Sandwich, Broccoli & Cheddar Soup, PB&J"

    menuDiv.appendChild(menuHeader);
    menuDiv.appendChild(menuBreakHead);
    menuDiv.appendChild(menuBreak);
    menuDiv.appendChild(menuLunchHead);
    menuDiv.appendChild(menuLunch);

    menuDiv.classList.add("menuDiv");

    const content = document.querySelector("#content");
    if (!content){
        console.log("content div not found!")
    } else{
        content.appendChild(menuDiv);
    }
}
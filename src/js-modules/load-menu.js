export function loadMenu() {
    console.log("Executing 'loadMenu()")

    const menuDiv = document.createElement("div");

    const menuHeader = document.createElement("h1");
    menuHeader.textContent = "OUR AMAZING MENU";

    menuDiv.appendChild(menuHeader);

    menuDiv.classList.add("menuDiv");

    const content = document.querySelector("#content");
    if (!content){
        console.log("content div not found!")
    } else{
        content.appendChild(menuDiv);
    }
}
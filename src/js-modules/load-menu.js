export function loadMenu() {
    console.log("Executing 'loadMenu()")
    const homeHeader = document.createElement("h1");
    homeHeader.textContent = "OUR INCREDIBLE MENU";
    const content = document.querySelector("#content");
    if (!content){
        console.log("content div not found!")
    } else{
        content.appendChild(homeHeader);
    }
}
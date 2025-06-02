export function loadAbout() {
    console.log("Executing 'loadMenu()")
    
    const homeHeader = document.createElement("h1");
    homeHeader.textContent = "ABOUT US";

    const homeSubhead = document.createElement("h2");
    homeSubhead.textContent = "The Best Restaurant Story";

    const content = document.querySelector("#content");
    if (!content){
        console.log("content div not found!")
    } else{
        content.appendChild(homeHeader);
        content.appendChild(homeSubhead);
    }
}
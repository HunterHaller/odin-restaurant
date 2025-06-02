export function loadHome() {
    console.log("Executing 'loadHome()")

    const homeDiv = document.createElement("div");

    const homeHeader = document.createElement("h1");
    homeHeader.textContent = "THE BEST FOOD";

    homeDiv.appendChild(homeHeader);

    homeDiv.classList.add("homeDiv");

    const content = document.querySelector("#content");
    if (!content){
        console.log("content div not found!")
    } else{
        content.appendChild(homeDiv);
    }
}
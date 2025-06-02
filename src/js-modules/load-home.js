export function loadHome() {
    console.log("Executing 'loadHome()")
    const homeHeader = document.createElement("h1");
    homeHeader.textContent = "THE BEST FOOD";
    const content = document.querySelector("#content");
    if (!content){
        console.log("content div not found!")
    } else{
        content.appendChild(homeHeader);
    }
}
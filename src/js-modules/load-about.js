export function loadAbout() {
    console.log("Executing 'loadAbout()")
    
    const aboutDiv = document.createElement("div");

    const aboutHeader = document.createElement("h1");
    aboutHeader.textContent = "ABOUT US";

    const aboutSubhead = document.createElement("h2");
    aboutSubhead.textContent = "The Best Restaurant Story";

    aboutDiv.appendChild(aboutHeader);
    aboutDiv.appendChild(aboutSubhead);

    aboutDiv.classList.add("aboutDiv");

    const content = document.querySelector("#content");
    if (!content){
        console.log("content div not found!")
    } else{
        content.appendChild(aboutDiv);
    }
}
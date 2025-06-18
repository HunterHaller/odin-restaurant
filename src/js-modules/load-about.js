import chefImg from "../chef.jpg";

export function loadAbout() {
    console.log("Executing 'loadAbout()")
    
    const aboutDiv = document.createElement("div");

    const aboutHeader = document.createElement("h1");
    aboutHeader.textContent = "ABOUT US";

    const aboutSubhead = document.createElement("h2");
    aboutSubhead.textContent = "The Best Restaurant Story";

    const aboutP = document.createElement("p");
    aboutP.textContent = "In 1999,  our founder, Jimbo Swanson, spent much of his childhood and teenage years learning recipes from his mother and creating new ones on his own. Today, he shares them with you, along with the 30 odd other staff working onsite."

    const aboutImg = document.createElement("img");
    aboutImg.src = chefImg;
    aboutImg.setAttribute("alt", "An image of a chef.");

    const aboutAttributions = document.createElement("p");
    aboutAttributions.textContent = "Pancakes image by Ash Craig, chef image by Tirachard Kumtanom. Both images sources from pexels.com.";

    aboutDiv.appendChild(aboutHeader);
    aboutDiv.appendChild(aboutSubhead);
    aboutDiv.appendChild(aboutImg);
    aboutDiv.appendChild(aboutP);
    aboutDiv.appendChild(aboutAttributions);

    aboutDiv.classList.add("aboutDiv");

    const content = document.querySelector("#content");
    if (!content){
        console.log("content div not found!")
    } else{
        content.appendChild(aboutDiv);
    }
}
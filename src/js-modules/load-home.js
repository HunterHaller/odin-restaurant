import pancakeImg from "../pancakes.jpg";

export function loadHome() {
    console.log("Executing 'loadHome()")

    const homeDiv = document.createElement("div");

    const homeHeader = document.createElement("h1");
    homeHeader.textContent = "THE BEST FOOD";

    const homeP = document.createElement("p");
    homeP.textContent = "Here at the city's newest urban eatery, 'The Best Food', you'll find, quite simply, the best food you can find without driving 300 miles in pretty much any direction.";

    const homeImg = document.createElement("img");
    homeImg.src = pancakeImg;
    homeImg.setAttribute("alt", "An image of a stack of delicious pancakes")

    const homeP2 = document.createElement("p");
    homeP2.textContent = "Give us a call now to make a reservation, or order for home delivery!";

    homeDiv.appendChild(homeHeader);
    homeDiv.appendChild(homeP);
    homeDiv.appendChild(homeImg);
    homeDiv.appendChild(homeP2);

    homeDiv.classList.add("homeDiv");

    const content = document.querySelector("#content");
    if (!content){
        console.log("content div not found!")
    } else{
        content.appendChild(homeDiv);
    }
}
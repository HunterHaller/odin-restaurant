export function clearScreen() {
    console.log("Executing 'clearScreen()")
    const content = document.querySelector("#content");
    if (!content){
        console.log("content div not found!")
    } else{
        content.textContent = "";
    }
}
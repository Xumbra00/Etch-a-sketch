// Add here div  constructor function
function canvas(x){
    let rows = 4; // Isn't set up yet
}


// const grid = document.getElementById("canvas");
// const newGrid = document.createElement("div");
// grid.appendChild(newGrid);


const clickMe = document.querySelectorAll("button");
clickMe.forEach(btn => {
    btn.onclick = () => {
        const grid = document.getElementById("canvas");
        const newGrid = document.createElement("div");
        newGrid.classList.add("newGrid");
        grid.appendChild(newGrid);
   }
});








function displayValue() {
    const input = document.querySelector("input"); // change this for input (think about $)
    const slider = document.getElementById("slider");
    let inputValue = input.value;
    const chosenValue = document.createElement("p");
    chosenValue.textContent = inputValue;
    slider.appendChild(chosenValue);
}

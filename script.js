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

function createBoxes(x) {
    const grid = document.querySelector("#canvas");
    grid.replaceChildren();
    grid.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
}
function addBoxes(x) {
    for (let i = 0; x**2; i++) {
        const grid = document.querySelector("#canvas");
        const box = document.createElement("div");
        box.classList.add("box");
        grid.appendChild(box);
    }
}
function changeCanvas(x) {
    createBoxes(x);
    addBoxes(x);
}
    




function displayValue() {
    const input = document.querySelector("input"); // change this for input (think about $)
    const slider = document.getElementById("slider");
    let inputValue = input.value;
    const chosenValue = document.createElement("p");
    chosenValue.textContent = inputValue;
    slider.appendChild(chosenValue);
}


// createBoxes(4);
function canvas(x){
    let rows = 4; // Isn't set up yet
}
const clickMe = document.querySelectorAll("button"); // Remember to delete this nigga
clickMe.forEach(btn => {
    btn.onclick = () => {
        const grid = document.getElementById("canvas");
        const newGrid = document.createElement("div");
        newGrid.classList.add("newGrid");
        grid.appendChild(newGrid);
   }
});
// function createBoxes(x) {
//     const grid = document.querySelector("#canvas");
//     grid.replaceChildren();
//     grid.style.gridTemplateColumns = `repeat(${x}, 1fr)`;

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
oninput = () => {
    const input = document.querySelector("input"); // change this for input (think about $)
    const menuContainer = document.querySelector(".menuContainer");
    menuContainer.removeChild(menuContainer.lastChild);
    const inputValue = input.value + "x" + input.value;
    const nigga = document.createElement("p");
    nigga.textContent = inputValue;
    menuContainer.appendChild(nigga);
}

function createBoxes(x) {
    let grid = document.querySelector("#canvas");
    grid.replaceChildren();
    for (let i = 0; i < x; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        for (let j = 0; i <= x; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.border = "2px solid black";
            row.innerText = (i*x) + j;
            column.appendChild(row);
        }
        grid.appendChild(column);
    }
}
function getInput() {
    const input = document.querySelector("input"); // change this for input (think about $)
    const menuContainer = document.querySelector(".menuContainer");
    menuContainer.removeChild(menuContainer.lastChild);
    const inputValue = input.value + "x" + input.value;
    const nigga = document.createElement("p");
    nigga.textContent = inputValue;
    menuContainer.appendChild(nigga);
}
oninput = () => {
    getInput();
}
onload = () => {
    getInput();
}
const clickMe = document.querySelectorAll("button"); // Remember to delete this nigga
clickMe.forEach(btn => {
    btn.onclick = () => {
        newBox(1);
   }
});
function newBox(n) {
    for (let i = 0; i < n; i++) {
        const grid = document.getElementById("canvas");
        const newBox = document.createElement("div");
        newBox.classList.add("newBox");
        grid.appendChild(newBox);
    }
}
function changeCanvas(x) {
    const grid = document.querySelector("#canvas");
    grid.replaceChildren();
    for (let i = 0; i < x; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        grid.appendChild(column);
        for (let j = 0; j < x; j++) {
            const row = document.createElement("div");
            row.classList.add("box");
            column.appendChild(row);
        }
    }
}
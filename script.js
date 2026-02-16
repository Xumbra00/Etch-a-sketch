function getInput() {
    const input = document.querySelector("input"); // change this for input (think about $)
    const menuContainer = document.querySelector(".menuContainer");
    menuContainer.removeChild(menuContainer.lastChild);
    const inputValue = input.value + "x" + input.value;
    const nigga = document.createElement("p");
    nigga.textContent = inputValue;
    menuContainer.appendChild(nigga);
    return input.value;
}
oninput = () => {
    changeCanvas(getInput());
}
onload = () => {
    changeCanvas(getInput());
}

function changeCanvas(x) {
    const grid = document.querySelector("#canvas");
    grid.replaceChildren();
    for (let i = 0; i < x; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        grid.appendChild(column);
        for (let j = 0; j < x; j++) {
            const box = document.createElement("div");
            box.classList.add("box");

            box.addEventListener("mouseover", color);

            // grid.addEventListener("dbclick", function() {
            //     box.addEventListener("mouseover", color);
            // });
            column.appendChild(box);
        }
    }
}
// this below changes the color
const app = document.getElementById('app');
function color() {
    this.classList.add("clicked");
}
// Trouver un moyen d'insérer le bbclick sur le canvas pour un listener dans les box
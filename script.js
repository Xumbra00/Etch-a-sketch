function getInput() {
    const gridSizer = document.querySelector("#gridSizer"); // change this for input (think about $)
    const menuContainer = document.querySelector(".menuContainer");
    menuContainer.removeChild(menuContainer.lastChild);
    const inputValue = gridSizer.value + "x" + gridSizer.value;
    const para = document.createElement("p");
    para.textContent = inputValue;
    menuContainer.appendChild(para);
    return gridSizer.value;
}
gridSizer.oninput = () => {
    changeCanvas(getInput());
}
onload = () => {
    changeCanvas(getInput());
}
let color = "#2975D9";
function changeCanvas(x) {
    const canvas = document.querySelector("#canvas");
    canvas.replaceChildren();
    for (let i = 0; i < x; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        canvas.appendChild(column);
        for (let j = 0; j < x; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.opacity = 1;
            // box.addEventListener("mouseover", colored);
            box.addEventListener("mouseover", function () {
                if (rainbowActive === true) {
                    var letters = '0123456789ABCDEF';
                    var choice = '#';
                    for (var i = 0; i < 6; i++) {
                        choice += letters[Math.floor(Math.random() * 16)];
                    }
                    rainbowColor = choice;
                    this.style.backgroundColor = rainbowColor;
                    this.style.opacity -= 0.1;
                    nigga();
                } else {
                    this.style.backgroundColor = color;
                    this.style.opacity -= 0.1;
                    // this.style.opacity = 0;
                    nigga();
                }
            });
            column.appendChild(box);
        }
    }
}
const rainbow = document.querySelector("#rainbow");
rainbow.addEventListener("click", rainbowClick);
let rainbowActive = false;
function rainbowClick() { // This function is the boolean switch button status
    if (rainbowActive === true) {
        rainbowActive = false;
    } else {
        rainbowActive = true;
    }
}
// Use changeCanvas(getInput()); for the clear button.
const wipe = document.querySelector("#clear");
wipe.addEventListener("click", clear);
function clear() {
    changeCanvas(getInput());
}
const picker = document.querySelector("#colorPicker");
const colorInput = document.querySelector("#colorInput");

picker.addEventListener("click", () => {
    colorInput.click();
});
colorInput.addEventListener("input", (e) => {
    color = e.target.value;
});
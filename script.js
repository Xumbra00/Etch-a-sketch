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
    const canvas = document.querySelector("#canvas");
    canvas.replaceChildren();
    for (let i = 0; i < x; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        canvas.appendChild(column);
        for (let j = 0; j < x; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.addEventListener("mouseover", colored);
            column.appendChild(box);
        }
    }
}
function colored() {
    this.classList.add("colored");
}

const rainbow = document.querySelector("#rainbow");
rainbow.addEventListener("click", nigga);

function nigga() {
        // alert("nigga");
        // this function is for rainbow
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        console.log(color);
        return color;y
        // below is an exemple. change it
        // let bool = true

        // const changeValue = () => {
        // bool = !bool
        // console.log(bool)
        // }
}
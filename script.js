// Elements
let colorBox = document.querySelector('.color');
let colorCode = document.querySelector('.color-code');
let btnChangeColor = document.querySelector('.change-color');

// Functions
function showColor() {
    let randomColor = '#' + Math.random().toString(16).substring(2, 8);
    colorBox.style.backgroundColor = randomColor;
    colorCode.innerHTML = randomColor;
}

showColor();

// Event listeners
btnChangeColor.addEventListener('click', showColor);
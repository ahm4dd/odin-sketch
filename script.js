const scratchPad = document.querySelector(".scratchpad");
const boxContainer = document.querySelector(".box-container");
const slider = document.querySelector(".kawaii");
const sliderValueText = document.querySelector("#slider-value-text");
const resetBtn = document.querySelector("#reset-btn");

let gridSize = 16;
generateGrid();

function generateDivs() {
    const div = document.createElement("div");
    div.style.cssText = `border: 1px solid black; 
        background-color: transparent; 
        flex: 1 1 auto;
        width: calc(100% / ${gridSize}); 
        height: calc(100% / ${gridSize});
        box-sizing: border-box;`; 

    boxContainer.appendChild(div);
            
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;
    });
}

function generateGrid() {
    for (let i = 0; i < gridSize; i++) {
        for (let k = 1; k < gridSize; k++) {
            generateDivs();
        }
        generateDivs();
    }
}

function clearGrid() {
    while (boxContainer.firstChild) {
        boxContainer.removeChild(boxContainer.firstChild);
    }
}


function randomColor(max) {
    return Math.floor(Math.random() * (max + 1));
}

slider.addEventListener("input", (e) => {
    sliderValueText.textContent = e.target.value;
    
    gridSize = Number.parseInt(e.target.value);
    clearGrid();
    generateGrid();
    
});

resetBtn.addEventListener("click", () => {
    clearGrid();
    generateGrid();
})
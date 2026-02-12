let x = 16;
let y = 16;

const rowContainer = document.querySelector(".row-container");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
    chosenSize = prompt("Enter the number of rows and columns (max 100):");
    if (chosenSize > 100) {
        alert("Please enter a number less than or equal to 100.");
        return;
    }
    x = chosenSize;
    y = chosenSize;
    rowContainer.innerHTML = "";        
    for (let i = 0; i < x; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.addEventListener("mouseover", colorOn)
        row.addEventListener("mouseout", colorOff)
        rowContainer.appendChild(row);
        for (let j = 0; j < y; j++) {
            const col = document.createElement("div");
            col.classList.add("col");
            row.appendChild(col);
        }
        
    }
});


function colorOn(event) {
  const target = event.target;
    if (target.classList.contains("col")) { 
        target.style.backgroundColor = "black";
    }
}

function colorOff(event) {
  const target = event.target;
    if (target.classList.contains("col")) { 
        target.style.backgroundColor = "white";
    }
}

for (let i = 0; i < x; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.addEventListener("mouseover", colorOn)
    row.addEventListener("mouseout", colorOff)
    rowContainer.appendChild(row);
    for (let j = 0; j < y; j++) {
        const col = document.createElement("div");
        col.classList.add("col");
        row.appendChild(col);
    }
    
}

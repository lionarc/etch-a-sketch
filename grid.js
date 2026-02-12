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
        // Hole aktuellen Dunkelheitswert oder setze auf 0
        let darken = parseInt(target.getAttribute("data-darken") || "0", 10);
        if (darken < 10) darken += 1; // Maximal 10 Schritte
        target.setAttribute("data-darken", darken);

        // Berechne neue Farbe (von hellblau zu schwarz)
        // Startfarbe: rgb(168, 233, 250)
        // Schrittweise Richtung rgb(0,0,0)
        const start = { r: 168, g: 233, b: 250 };
        const factor = 1 - darken * 0.1;
        const r = Math.round(start.r * factor);
        const g = Math.round(start.g * factor);
        const b = Math.round(start.b * factor);
        target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}

function createRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function colorOff(event) {
  const target = event.target;
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

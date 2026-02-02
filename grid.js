let x = 16;
let y = 16;

const rowContainer = document.querySelector(".row-container");

for (let i = 0; i < x; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    rowContainer.appendChild(row);
    
}





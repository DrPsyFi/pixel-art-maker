//Objectives
  //  - make a 2 x 2 grid
  //  scale up from there

//on Screen Need Two squares
var selectedColor = 'white'
let bigBox = document.querySelector('.bigBox')
let currentColor = document.querySelector("#currentColor");
let paletteBox = document.querySelector(".paletteBox");

function createGrid() {
  for(var i = 0; i < 960;i++) {
    let square = document.createElement('div');
    square.className= "square";
    bigBox.appendChild(square)
  }
};

createGrid();

function selectColor(e){
  let target = e.target;
  selectedColor = target.classList[1]
  currentColor.style.background = selectedColor;
  };

paletteBox.addEventListener("click", selectColor);
bigBox.addEventListener("mouseover", gridTarget)
bigBox.addEventListener("dblclick", dblClick)

function gridTarget(e) {
  let gridTarget = e.target;
  gridTarget.style.background = selectedColor;
}
function dblClick(e) {
  let dblClick = e.target;
  dblClick.style.background = "white"
}

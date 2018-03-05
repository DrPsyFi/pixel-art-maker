var selectedColor = 'white'
let canvas = document.querySelector('.canvas')
let currentColor = document.querySelector("#currentColor");
let paletteBox = document.querySelector(".paletteBox");

/////////////////////////////////////////////////
//////////////// Grid Creator ///////////////////
/////////////////////////////////////////////////
function createGrid() {
  for(var i = 0; i < 15360; i++) {
    let gridBox = document.createElement('div')
    gridBox.className ='square'
    canvas.appendChild(gridBox)
  }
}

createGrid()

////////////////////////////////////////////////
///////////// Start Painting ///////////////////
////////////////////////////////////////////////

let paint= false;

function letsPaint(e) {
  let gridTarget = e.target
  if(paint === true) {
    gridTarget.style.background = selectedColor
  }
}

////////////////////////////////////////////////
//////////////// Event Listener ////////////////
////////////////////////////////////////////////


canvas.addEventListener('click' , gridTarget)
canvas.addEventListener('mouseover', letsPaint )


paletteBox.addEventListener('click', selectColor)

function gridTarget(e) {
    let gridTarget = e.target;
    paint = !paint
    gridTarget.style.background = selectedColor
  }

function selectColor(e) {
  let colorTarget= e.target;
  paint= false
  selectedColor = colorTarget.classList[1]

  currentColor.style.background = selectedColor
}
//
// function dblClick(e) {
//   let dblClick = e.target
//   dblClick.style.background = 'white'
// }
// canvas.addEventListener('dblclick', dblClick)

var grid = document.querySelector('.grid'),
    items = Array.from(grid.querySelectorAll('.grid__item'));

function createGrid(config) {
  //here will go JSON parse logic, creating css-string and applying it to grid
  grid.style.gridTemplateAreas = '"a1 a1 a3 a3" "a1 a1 b3 b4" "a1 a1 c3 c4"';
}

function toggleVisibility(elm, action) {
  elm && elm.classList[action]('hidden');
}

createGrid();
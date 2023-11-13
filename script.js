//grid generator
const gridContainer = document.querySelector('.grid-container');

function generateGrid(size){
    //remove old grid
    let sqr = size * size;
    while(gridContainer.childElementCount > sqr){
        gridContainer.lastElementChild.remove();
    }
    while(gridContainer.childElementCount < sqr){
        let element = document.createElement('div');
        element.classList.add('grid-square')
        gridContainer.appendChild(element);
    }
    //update grid width in css
}
function changeGridSize(){
    let input = prompt("Set new grid size");
    parseInt(input);
    if(input == Nan){return;}
    input = Math.max(100, min(1, input));
    generateGrid(100);
}
generateGrid(16);

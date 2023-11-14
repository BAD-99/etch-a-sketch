//grid generator
const gridContainer = document.querySelector('.grid-container');

function generateGrid(size){
    //remove old grid
    gridContainer.textContent = '';
    let sqr = size * size;
    while(gridContainer.childElementCount > sqr){
        gridContainer.lastElementChild.remove();
    }
    for(i = 0; i < sqr; i++){
        let element = document.createElement('div');
        element.classList.add('grid-square')
        element.style.width=`${100/size}%`;
        element.style.height = element.style.height;
        gridContainer.appendChild(element);
    }
    //update grid width in css
}
function changeGridSize(){
    let input = prompt("Set new grid size");
    parseInt(input);
    if(input == NaN){return;}
    input = Math.min(100, Math.max(1, input));
    generateGrid(input);
}
generateGrid(16);
document.querySelector('button').addEventListener('click',
()=>changeGridSize());
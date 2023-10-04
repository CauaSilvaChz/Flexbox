var rect1 = document.querySelector('#div_rect1');

var row = document.querySelector('#flex_direction_row');
var column = document.querySelector('#flex_direction_column');
var rowReverse = document.querySelector('#flex_direction_row_reverse');
var columnReverse = document.querySelector('#flex_direction_column_reverse');

row.addEventListener('click', () => {
    rect1.style.cssText = 'flex-direction: row;';
})

column.addEventListener('click', () => {
    rect1.style.cssText = 'flex-direction: column;';
})

rowReverse.addEventListener('click', () => {
    rect1.style.cssText = 'flex-direction: row-reverse;';
})

columnReverse.addEventListener('click', () => {
    rect1.style.cssText = 'flex-direction: column-reverse;';
})


var rect2 = document.querySelector('#div_rect2');

var justStart = document.querySelector('#justify_content_start');
var justCenter = document.querySelector('#justify_content_center');
var justEnd = document.querySelector('#justify_content_end');
var justBetween = document.querySelector('#justify_content_space_between');
var justAround = document.querySelector('#justify_content_space_around');
var justEnvenly = document.querySelector('#justify_content_space_evenly');

justStart.addEventListener('click', () => {
    rect2.style.cssText = 'justify-content: flex-start;';
})

justCenter.addEventListener('click', () => {
    rect2.style.cssText = 'justify-content: center;';
})

justEnd.addEventListener('click', () => {
    rect2.style.cssText = 'justify-content: flex-end;';
})

justBetween.addEventListener('click', () => {
    rect2.style.cssText = 'justify-content: space-between;';
})

justAround.addEventListener('click', () => {
    rect2.style.cssText = 'justify-content: space-around;';
})

justEnvenly.addEventListener('click', () => {
    rect2.style.cssText = 'justify-content: space-evenly;';
})


var rect3 = document.querySelector('#div_rect3');

var alignStart = document.querySelector('#align_items_start');
var alignCenter = document.querySelector('#align_items_center');
var alignEnd = document.querySelector('#align_items_end');

alignStart.addEventListener('click', () => {
    rect3.style.cssText = 'align-items: flex-start;';
})

alignCenter.addEventListener('click', () => {
    rect3.style.cssText = 'align-items: center;';
})

alignEnd.addEventListener('click', () => {
    rect3.style.cssText = 'align-items: flex-end;';
})
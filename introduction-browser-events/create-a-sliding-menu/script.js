let div = document.querySelector('div');
let title = document.querySelector('span');
title.addEventListener('click', openList);
function openList (event) {
    div.classList.toggle('open');
}
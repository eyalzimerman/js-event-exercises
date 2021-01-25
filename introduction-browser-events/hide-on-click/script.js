let div = document.querySelector('#text');
let button = document.querySelector('#hide');
button.addEventListener('click',hideDiv);
function hideDiv (event) {
    div.hidden = true;
}
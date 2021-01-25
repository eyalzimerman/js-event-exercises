let button = document.querySelector('#hide');
button.addEventListener('click', hideMe);
function hideMe (event) {
    button.hidden = true;
}
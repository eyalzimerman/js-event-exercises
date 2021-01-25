let containerDiv = document.querySelector('#container');
containerDiv.addEventListener('click', findTarget);
function findTarget(event) {
    let target = event.target;
    if (target.tagName === 'BUTTON') {
        target.parentElement.hidden = true;
    } else {
        return;
    }
}


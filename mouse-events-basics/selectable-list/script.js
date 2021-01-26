let list = document.querySelector('ul');
list.addEventListener('click', myFunction);
function myFunction (event) {
    let targetLi = event.target;

    //if the click wasn't on li, do nothing
    
    if (targetLi.tagName != 'LI') {
        return;    
    }

    //check if the click with ctrl or without ctrl
    //true - toggle the classes
    //false - only with click, remove all the classes, add the class to current target
    
    if (targetLi.tagName === 'LI' && (event.ctrlKey || event.metaKey)) {
        targetLi.classList.toggle('selected');
    } else {
        let selectedLi = document.querySelectorAll('.selected');
        for (let li of selectedLi) {
            li.classList.remove('selected');
        }
        targetLi.classList = 'selected';
    }
}

//prevent select text on click
list.onmousedown = function() {
    return false;
};

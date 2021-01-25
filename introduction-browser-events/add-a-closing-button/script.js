let div = document.querySelectorAll('.pane');
for (let pane of div) {
    let button = document.createElement('button');
    button.className = 'remove-button';
    button.textContent = '[x]';
    pane.append(button);
    button.addEventListener('click', removeBtn)
    function removeBtn (event) {
        pane.parentElement.removeChild(button.parentElement);
    }
}
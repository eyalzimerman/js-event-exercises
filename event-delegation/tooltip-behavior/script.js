//when the mouseover, create elem with the tooltip text
document.addEventListener('mouseover', function(event) {
    if (event.target.dataset.tooltip != undefined) {
        let elem = document.createElement('span');
        document.body.append(elem);
        elem.innerHTML = event.target.dataset.tooltip;
        elem.className = 'tooltip';
        
        // styling the elem tooltip position by calculate the button coordinates and the elem coordinates
        
        if (event.target.getBoundingClientRect().y > elem.getBoundingClientRect().height + 5) {
            elem.style.top = `${(event.target.getBoundingClientRect().y - elem.getBoundingClientRect().height - 5)}px`;
        } else {
            elem.style.top = `${(event.target.getBoundingClientRect().y + event.target.getBoundingClientRect().height + 5)}px`;
        }
        if (event.target.getBoundingClientRect().x > elem.getBoundingClientRect().width) {
            elem.style.left = `${event.target.getBoundingClientRect().x + (event.target.getBoundingClientRect().width / 2) - (elem.getBoundingClientRect().width / 2)}px`;
        } else {
            elem.style.left = 0;
        }
    }
});

//when mouseout, remove the elem tooltip
document.addEventListener('mouseout', function(event) {
    if (event.target.dataset.tooltip != undefined) {
        let elem = document.querySelector('.tooltip')
        elem.remove();
    }
});
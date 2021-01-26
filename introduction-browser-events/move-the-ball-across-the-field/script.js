const field = document.querySelector('div');
let ball = document.querySelector('#ball');
field.addEventListener('click', moveTheBall);

let fieldCord = field.getBoundingClientRect();

function moveTheBall (event) {
    
    let left = event.clientX - fieldCord.left - field.clientLeft - ball.clientWidth / 2;
    let top = event.clientY - fieldCord.top - field.clientTop - ball.clientHeight / 2;
    ball.style.left = left + 'px';
    ball.style.top = top + 'px';

    if (top < 0) {
        ball.style.top = 0;
    }
    if (left < 0) {
        ball.style.left = 0;
    }
    if (event.clientY + ball.clientHeight > field.clientHeight) {
        ball.style.top = field.clientHeight - ball.clientHeight + 'px';
    }
    if (event.clientX + ball.clientWidth > field.clientWidth) {
        ball.style.left = field.clientWidth - ball.clientWidth + 'px';
    }
} 
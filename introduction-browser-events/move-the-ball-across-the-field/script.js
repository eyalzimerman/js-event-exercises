const field = document.querySelector('div');
const page = document.body;
field.addEventListener('click', getFieldCord);
page.addEventListener('click', getBodyCord)
let xBall = 0;
let yBall = 0;
let xBody = 0;
let yBody = 0;

function getBodyCord (event) {
    xBody = event.clientX;
    yBody = event.clientY;
}

function getFieldCord (event) {
    let xField = event.clientX;
    let yField = event.clientY;
    xBall = (xBody - xField);
    yBall = (yBody - yField);
    alert(xBall+','+yBall);
}
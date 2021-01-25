let largeImg = document.querySelector('#largeImg')
let linkList = document.querySelectorAll('#thumbs li a');

for (let link of linkList) {
    link.addEventListener('click', change)
    function change (event) {
        largeImg.src = link.href;
        event.preventDefault();
    }
}
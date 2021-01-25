let ulContainer = document.querySelector('#tree');
ulContainer.addEventListener('click', openList)
let listOfLi = document.querySelectorAll('li')

for (let li of listOfLi) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling); 
  }

  function openList (event) {
    if (event.target.tagName != 'SPAN') {
        return;
      }
      let ul = event.target.parentElement.querySelector('ul');
      if (!ul){
        return; 
    } 
      ul.hidden = !ul.hidden;
}

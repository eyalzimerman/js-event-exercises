let contents = document.querySelectorAll('#contents a');
for (const content of contents) {
      content.addEventListener('click', check);
      function check (event) {
          if(confirm(`you want to go to: ${content.href} `)) {
              return true;
          } else {
              event.preventDefault();
          }
      }
}

document.addEventListener("DOMContentLoaded", function(){
  document.body.style.backgroundColor = 'red';
  document.getElementById("greenButton").addEventListener("click", function () {
    document.body.style.backgroundColor = 'green';
  })
  
  document.getElementById("yellowButton").addEventListener("click", function () {
    document.body.style.backgroundColor = 'yellow';
  })
  
  document.getElementById("resetButton").addEventListener("click", function () {
    document.body.style.backgroundColor = '';
  })
  
});
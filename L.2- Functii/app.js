document.addEventListener("DOMContentLoaded", function(){
  document.body.style.backgroundColor = 'red';
  changeBackgroundColor('green')
  changeBackgroundColor('yellow')
  
});

function changeBackgroundColor(color){
  document.getElementById(`${color}_button`).addEventListener("click", function () {
    document.body.style.backgroundColor = color;
  })
}
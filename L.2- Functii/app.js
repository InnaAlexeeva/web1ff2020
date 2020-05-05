document.addEventListener("DOMContentLoaded", function(){
  init();
});

function init(){
  const colors = ["red", "green", "blue", "cyan", "pink"];
  
  for(const color of colors){
    const button = document.createElement("button");
    button.innerText = color;
    button.id = `${color}_button`;
    document.body.appendChild(button);
    changeBackgroundColor(color);
  }
}

function changeBackgroundColor(color){
  document.getElementById(`${color}_button`).addEventListener("click", function () {
    document.body.style.backgroundColor = color;
  })
}
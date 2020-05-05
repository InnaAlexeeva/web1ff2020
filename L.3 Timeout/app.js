document.addEventListener("DOMContentLoaded", function(){
  const maxButtons = 5;
  let count = 0;
  setInterval(() => {
    addButton(count, maxButtons);
  }, 1000);
});

function addButton (count, maxButtons) {
  console.log(count, maxButtons);
  if(count < maxButtons){
    count++;
    const button = document.createElement("button");
    button.innerText = "button";
    document.body.appendChild(button);
  }
}
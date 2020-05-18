$(document).ready(function () {
  $("body").css({
    background: "red"
  });
  
  $("#car").animate({
    "left": "+=1200",
    "height": "+=30"
  }, 2000);
  
  
  $("#start").on("click", function () {
    $("#car").animate({
      "left": "-=1200",
      "height": "-=30"
    }, 2000);
  });
  
  setTimeout(function () {
    $("#car").add("<button>New button</button>").appendTo("#car");
  }, 1500)
});

// var numberOfDrums = document.querySelectorAll(".drum").length;
// for(var i = 0;i<numberOfDrums;i++){
// document.querySelectorAll("button")[i].addEventListener("click",function(){
//   alert("I got Clicked");
//   //Everything can be done
// });
// }

document.querySelectorAll(".drum").forEach(item => {
  item.addEventListener("click",function(){
       var buttonHtml = this.innerHTML;
       soundGenerator(buttonHtml);
       addAnimation(buttonHtml);
  })
});

document.addEventListener("keydown",keyDownEvent);

function keyDownEvent(evt){
  soundGenerator(evt.key);
  addAnimation(evt.key);
}

function addAnimation(button){
  document.querySelector("."+button).classList.add("pressed");
  setTimeout(function(){
      document.querySelector("."+button).classList.remove("pressed");
  },500);
}


function soundGenerator(key){
  switch(key){
    case "w":
     var tom1 = new Audio('sounds/tom-1.mp3');
     tom1.play();
    break;

    case "a":
     var tom2 = new Audio('sounds/tom-2.mp3');
     tom2.play();
    break;

    case "s":
     var tom3 = new Audio('sounds/tom-3.mp3');
     tom3.play();
    break;

    case "d":
     var tom4 = new Audio('sounds/tom-4.mp3');
     tom4.play();
    break;

    case "j":
     var crash = new Audio('sounds/crash.mp3');
     crash.play();
    break;

    case "k":
     var kick = new Audio('sounds/kick-bass.mp3');
     kick.play();
    break;

    case "l":
     var snare = new Audio('sounds/snare.mp3');
     snare.play();
    break;

  }
}



window.onload = function(){
    var img = document.getElementById("popf1");
    var count = document.getElementById("score");
    var score = 0;
    var audio = new Audio("pop.mp3")

    img.addEventListener('mousedown',function(){
        increaseScore();
       img.src = 'https://i.postimg.cc/qqBDQrgs/Untitled-design.png'
       audio.play();
    });
    img.addEventListener('mouseup',function(){
        img.src = 'https://i.postimg.cc/RCcnLfzL/Untitled-design-1.png'
     });
  function increaseScore(){
    score++;
    count.innerHTML = score;
  }

}

window.onload = function(){
  var img = document.getElementById("popf2");
  var countA = document.getElementById("scoreA");
  var scoreA = 0;

  img.addEventListener('mousedown',function(){
      increaseScore();
     img.src = 'https://i.postimg.cc/qqBDQrgs/Untitled-design.png'
     audio.play();
  });
  img.addEventListener('mouseup',function(){
      img.src = 'https://i.postimg.cc/RCcnLfzL/Untitled-design-1.png'
   });
function increaseScore(){
  scoreA++;
  countA.innerHTML = scoreA;
}

}

$(document).ready(function(){
    
    // let currentDroppable = null;
    document.getElementById("ball").style.position = "absolute";
    document.getElementById("ball").style.left = "80px";
    document.getElementById("ball").style.top = "400px";

    ball.onmousedown = function(event) {

      ball.style.position = 'absolute';
      ball.style.zIndex = 1000;

      // document.body.append(ball);

      function moveAt(pageX, pageY) {
        ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
        ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
      }
    
      moveAt(event.pageX, event.pageY);

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener('mousemove', onMouseMove);

      ball.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
      };
      
      ball.ondragstart = function() {
        return false;
      };

    };

  });
  $(document).ready(function(){

  var autoscroll;
  var hash = window.location.hash;

if(!hash.match("shard")) {  
    startScroll();
  }

  function startScroll() {
    autoscroll = setInterval(function(){ 
      $(window).scrollTop($(window).scrollTop() + 1);                
    }, 50);
  }

});
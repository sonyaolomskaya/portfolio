var overlayImages = {
  1: 'assets/1600_1.gif',
  2: 'assets/1600_2.gif',
  3: 'assets/1600_3.gif',
  4: 'assets/1600_4.gif',
  5: 'assets/1600_5.gif',
  6: 'assets/1600_6.gif',
  7: 'assets/1600_7.gif',
  8: 'assets/1600_8.gif',
  9: 'assets/1600_9.gif',
  10: 'assets/1600_10.gif',
  11: 'assets/1600_11.gif',
  12: 'assets/1600_12.gif',
  13: 'assets/1600_13.gif',
  14: 'assets/1600_14.gif',
  15: 'assets/1600_15.gif',
  16: 'assets/1600_16.gif',
  17: 'assets/1600_17.gif',
  18: 'assets/1600_18.gif',
  19: 'assets/1600_19.gif',
  20: 'assets/1600_20.gif',
  21: 'assets/1600_21.gif',
  22: 'assets/1600_22.gif',
  23: 'assets/1600_23.gif',
  24: 'assets/1600_24.gif',
  25: 'assets/1600_25.gif',
  26: 'assets/1600_26.gif',
  27: 'assets/1600_27.gif',
  28: 'assets/1600_28.gif',
}

$(document).ready(function(){

$(".text1").mouseover(function(){
    $(".textone").css("opacity", 1);
})

$(".text1").mouseleave(function(){
    $(".textone").css("opacity", 0);
})

$(".text2").mouseover(function(){
    $(".texttwo").css("opacity", 1);
})

$(".text2").mouseleave(function(){
    $(".texttwo").css("opacity", 0);
})

$(".text3").mouseover(function(){
    $(".textthree").css("opacity", 1);
})

$(".text3").mouseleave(function(){
    $(".textthree").css("opacity", 0);
})

$(".text4").mouseover(function(){
    $(".textfour").css("opacity", 1);
})

$(".text4").mouseleave(function(){
    $(".textfour").css("opacity", 0);
})
// for (const image in images) {
//       $('.image-container').append(`<div class="image"><img src="${images[image]}"></div>`);
//       console.log('image')
//     }

    for (const image in overlayImages) {
      $('.overlay-container').append(`<div class="overlay" id="${image}"><img src="${overlayImages[image]}"></div>`);
      $(`#${image}`).mouseover(function(){
        $(`#${image}`).css("opacity", .5); 
        console.log(`#${image}`)
      })


}

});


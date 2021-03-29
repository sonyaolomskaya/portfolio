
// $(document).ready(function(){

// // $(".one").mouseover(function(){
// //     $(".two").css("opacity", 1);
// //     $(".one").css("opacity", 0);
// // })

// // $(".three").mouseover(function(){
// //     $(".four").css("opacity", 1);
// //     $(".three").css("opacity", 0);
// // })

// // $(".five").mouseover(function(){
// //     $(".six").css("opacity", 1);
// //     $(".five").css("opacity", 0);
// // })

// });


var images = {
	1: 'assets/1900_1.gif',
	2: 'assets/1900_2.gif',
	3: 'assets/1900_3.gif',
	4: 'assets/1900_4.gif',
	5: 'assets/1900_5.gif',
	6: 'assets/1900_6.gif',
	7: 'assets/1900_7.gif',
	8: 'assets/1900_8.gif',
	9: 'assets/1900_9.gif',
	10: 'assets/1900_10.gif',
	11: 'assets/1900_11.gif',
	12: 'assets/1900_12.gif',
	13: 'assets/1900_13.gif',
	14: 'assets/1900_14.gif',
	15: 'assets/1900_15.gif',
	16: 'assets/1900_16.gif',
	17: 'assets/1900_17.gif',
	18: 'assets/1900_18.gif',
	19: 'assets/1900_19.gif',
	20: 'assets/1900_20.gif',
	21: 'assets/1900_8.gif',
	22: 'assets/1900_7.gif',
	23: 'assets/1900_6.gif',
	24: 'assets/1900_1.gif',
	25: 'assets/1900_2.gif',
	26: 'assets/1900_3.gif',
	27: 'assets/1900_4.gif',
	28: 'assets/1900_5.gif',
}

var overlayImages = {
	1: 'assets/1900_1.png',
	2: 'assets/1900_2.png',
	3: 'assets/1900_3.png',
	4: 'assets/1900_4.png',
	5: 'assets/1900_5.png',
	6: 'assets/1900_6.png',
	7: 'assets/1900_7.png',
	8: 'assets/1900_8.png',
	9: 'assets/1900_9.png',
	10: 'assets/1900_10.png',
	11: 'assets/1900_11.png',
	12: 'assets/1900_12.png',
	13: 'assets/1900_13.png',
	14: 'assets/1900_14.png',
	15: 'assets/1900_15.png',
	16: 'assets/1900_16.png',
	17: 'assets/1900_17.png',
	18: 'assets/1900_18.png',
	19: 'assets/1900_19.png',
	20: 'assets/1900_20.png',
	21: 'assets/1900_8.png',
	22: 'assets/1900_7.png',
	23: 'assets/1900_6.png',
	24: 'assets/1900_1.png',
	25: 'assets/1900_2.png',
	26: 'assets/1900_3.png',
	27: 'assets/1900_4.png',
	28: 'assets/1900_5.png',
}

$(document).ready(function() {

	for (const image in images) {
      $('.image-container').append(`<div class="image"><img src="${images[image]}"></div>`);
      console.log('image')
    }

    for (const image in overlayImages) {
    	$('.overlay-container').append(`<div class="overlay" id="${image}"><img src="${overlayImages[image]}"></div>`);
  	 	$(`#${image}`).mouseover(function(){
   			$(`#${image}`).css("opacity", 1); 
   			console.log(`#${image}`)
   		})


}

});







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
	1: 'assets/1800_1.gif',
	2: 'assets/1800_2.gif',
	3: 'assets/1800_3.gif',
	4: 'assets/1800_4.gif',
	5: 'assets/1800_5.gif',
	6: 'assets/1800_6.gif',
	7: 'assets/1800_7.gif',
	8: 'assets/1800_8.gif',
	9: 'assets/1800_9.gif',
	10: 'assets/1800_10.gif',
	11: 'assets/1800_11.gif',
	12: 'assets/1800_12.gif',
	13: 'assets/1800_13.gif',
	14: 'assets/1800_14.gif',
	15: 'assets/1800_15.gif',
	16: 'assets/1800_16.gif',
	17: 'assets/1800_17.gif',
	18: 'assets/1800_18.gif',
	19: 'assets/1800_19.gif',
	20: 'assets/1800_20.gif',
	21: 'assets/1800_21.gif',
	22: 'assets/1800_22.gif',
	23: 'assets/1800_23.gif',
	24: 'assets/1800_24.gif',
	25: 'assets/1800_25.gif',
	26: 'assets/1800_26.gif',
	27: 'assets/1800_27.gif',
	28: 'assets/1800_28.gif',
}

var overlayImages = {
	1: 'assets/1800_1.png',
	2: 'assets/1800_2.png',
	3: 'assets/1800_3.png',
	4: 'assets/1800_4.png',
	5: 'assets/1800_5.png',
	6: 'assets/1800_6.png',
	7: 'assets/1800_7.png',
	8: 'assets/1800_8.png',
	9: 'assets/1800_9.png',
	10: 'assets/1800_10.png',
	11: 'assets/1800_11.png',
	12: 'assets/1800_12.png',
	13: 'assets/1800_13.png',
	14: 'assets/1800_14.png',
	15: 'assets/1800_15.png',
	16: 'assets/1800_16.png',
	17: 'assets/1800_17.png',
	18: 'assets/1800_18.png',
	19: 'assets/1800_19.png',
	20: 'assets/1800_20.png',
	21: 'assets/1800_21.png',
	22: 'assets/1800_22.png',
	23: 'assets/1800_23.png',
	24: 'assets/1800_24.png',
	25: 'assets/1800_25.png',
	26: 'assets/1800_26.png',
	27: 'assets/1800_27.png',
	28: 'assets/1800_28.png',
}

$(document).ready(function() {

	for (const image in images) {
      $('.image-container').append(`<div class="image"><img src="${images[image]}"></div>`);
    }

	// for (const image in overlayImages) {
 //      $('.image-containertwo').append(`<div class="image"><img src="${overlayImages[image]}"></div>`);
 //      console.log('image')
 //    }

    for (const image in overlayImages) {
    	$('.overlay-container').append(`<div class="overlay" id="${image}"><img src="${overlayImages[image]}"></div>`);
  	 	$(`#${image}`).mouseover(function(){
   			$(`#${image}`).css("opacity", 1); 
   		})
	}

	$( ".button" ).click(function() {
  		$( ".image-container" ).empty()
  		$( ".overlay-container" ).empty()
  	
  		var random = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28].sort( () => .5 - Math.random() )

  		for (i = 0; i < random.length; i++) {
  			$('.image-container').append(`<div class="image"><img src="${images[random[i]]}"></div>`);
  			$('.overlay-container').append(`<div class="overlay" id="${random[i]}"><img src="${overlayImages[random[i]]}"></div>`);
  			$(`#${random[i]}`).mouseover(function(){
   				$(`#${random[i]}`).css("opacity", 1); 
   			})

   			
		}

	});

});





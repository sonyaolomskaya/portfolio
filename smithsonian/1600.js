

var images = {
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
	20: 'assets/1600_29.gif',
	21: 'assets/1600_21.gif',
	22: 'assets/1600_22.gif',
	23: 'assets/1600_23.gif',
	24: 'assets/1600_24.gif',
	25: 'assets/1600_25.gif',
	26: 'assets/1600_26.gif',
	27: 'assets/1600_27.gif',
	28: 'assets/1600_28.gif',
}

var overlayImages = {
	1: 'assets/1600_1.png',
	2: 'assets/1600_2.png',
	3: 'assets/1600_3.png',
	4: 'assets/1600_4.png',
	5: 'assets/1600_5.png',
	6: 'assets/1600_6.png',
	7: 'assets/1600_7.png',
	8: 'assets/1600_8.png',
	9: 'assets/1600_9.png',
	10: 'assets/1600_10.png',
	11: 'assets/1600_11.png',
	12: 'assets/1600_12.png',
	13: 'assets/1600_13.png',
	14: 'assets/1600_14.png',
	15: 'assets/1600_15.png',
	16: 'assets/1600_16.png',
	17: 'assets/1600_17.png',
	18: 'assets/1600_18.png',
	19: 'assets/1600_19.png',
	20: 'assets/1600_29.png',
	21: 'assets/1600_21.png',
	22: 'assets/1600_22.png',
	23: 'assets/1600_23.png',
	24: 'assets/1600_24.png',
	25: 'assets/1600_25.png',
	26: 'assets/1600_26.png',
	27: 'assets/1600_27.png',
	28: 'assets/1600_28.png',
}

var links = {
	1: 'https://www.si.edu/object/cushion-cover%3Achndm_1944-91-9',
	2: 'https://www.si.edu/object/fragment%3Achndm_1971-50-59',
	3: 'https://www.si.edu/object/panels-bag%3Achndm_1902-1-496-a_b',
	4: 'https://www.si.edu/object/carpet-fragment%3Achndm_1969-62-12-b',
	5: 'https://www.si.edu/object/fragment-rank-badge%3Achndm_1902-1-506-b',
	6: 'https://www.si.edu/object/mantle%3Achndm_1902-1-783',
	7: 'https://www.si.edu/object/fragment%3Achndm_1943-43-95',
	8: 'https://www.si.edu/object/purse%3Achndm_1962-55-9',
	9: 'https://www.si.edu/object/purse%3Achndm_1962-55-8',
	10: 'https://www.si.edu/object/rank-badge-buzi%3Achndm_1902-1-433',
	11: 'https://www.si.edu/object/cushion-cover%3Achndm_1926-22-318',
	12: 'https://www.si.edu/object/purse%3Achndm_1959-170-6',
	13: 'https://www.si.edu/object/pillow-cover%3Achndm_1972-2-3',
	14: 'https://www.si.edu/object/cushion-cover%3Achndm_a-t-18',
	15: 'https://www.si.edu/object/carpet-fragment%3Achndm_1969-62-12-a',
	16: 'https://www.si.edu/object/carpet-fragment%3Achndm_1955-96-1',
	17: 'https://www.si.edu/object/carpet%3Achndm_1959-13-2-b',
	18: 'https://www.si.edu/object/carpet-fragments%3Achndm_1959-13-1-a_c',
	19: 'https://www.si.edu/object/carpet-fragment%3Achndm_1955-162-1',
	20: 'https://www.si.edu/object/tapestries-ko-ssu%3Afsg_F1918.48a-h',
	21: 'https://www.si.edu/object/tapestry-bowl-two-jars-flowers-and-fruit%3Afsg_F1916.549',
	22: 'https://www.si.edu/object/tapestry-daoist-female-immortal-and-attendant-under-pine%3Afsg_F1917.198',
	23: 'https://www.si.edu/object/tapestry-fruit-trees-and-hollyhocks%3Afsg_F1916.542',
	24: 'https://www.si.edu/object/tapestry-landscape-palace-among-mountains%3Afsg_F1917.119',
	25: 'https://www.si.edu/object/tapestry-birds-peach-tree-rocks-and-flowers-blue-ground%3Afsg_F1916.71',
	26: 'https://www.si.edu/object/phoenix-among-rocks-and-flowers%3Afsg_F1911.163s',
	27: 'https://www.si.edu/object/tapestry-peony-and-butterfly%3Afsg_F1916.571a',
	28: 'https://www.si.edu/object/tapestry-peonies%3Afsg_F1916.571j',
}

$(document).ready(function() {

		for (const image in overlayImages) {
      $('.image-containertwo').append(`<div class="image"><img src="${overlayImages[image]}"></div>`);
    }

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






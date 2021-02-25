$(document).ready(function(){

$('.btn').on('click', function(){
    $('body').css('background-color', 'black')
    $('.textimg').css('filter', 'invert(100%) brightness(90%)')
})

$('.btn1').on('click', function(){
    $('body').css('background-color', 'white')
    $('.textimg').css('filter', 'invert(0%) brightness(100%)')
})

});

// document.getElementById('videoone').onclick = function () { 
//     document.getElementById('two').pause();
//     document.getElementById('three').pause();
//     document.getElementById('four').pause();
//     document.getElementById('five').pause();
//     document.getElementById('six').pause();
//     document.getElementById('seven').pause();
//     document.getElementById('eight').pause();
//     document.getElementById('nine').pause();
//     document.getElementById('ten').pause();
//     document.getElementById('eleven').pause();
//     document.getElementById('twelve').pause();

// };


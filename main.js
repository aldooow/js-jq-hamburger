/* ---> METODO 1*/

$('.header-right > a').click(function(){
  $('.hamburger-menu').addClass('active');
});
$('.hamburger-menu a.close').click(function(){
  $('.hamburger-menu').removeClass('active');
});

/* ---> METODO 2*/
// var variabile = false;
//
// $('a').click(function(){
//   if(variabile == false){
//     $('.hamburger-menu').addClass('active');
//     variabile = true;
//   } else {
//     $('.hamburger-menu').removeClass('active')
//     variabile = false;
//   }
// })

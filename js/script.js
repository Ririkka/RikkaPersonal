$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

function copy1() {
  /* buat variable */
  var copyText = "807614592"
  /* copy variable */
  navigator.clipboard.writeText(copyText);
  alert("You Copied My UID (807614592)");
}
function copy2() {
  /* buat variable */
  var copyText = "SpeedDemonRikka#3000"
  /* copy variable */
  navigator.clipboard.writeText(copyText);
  alert("You Copied My Valorant ID (SpeedDemonRikka #3000)");
}
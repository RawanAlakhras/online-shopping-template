
//add active class to navbar
$( '.navbar-nav' ).find( 'li.active' ) 
.removeClass( 'active' ); 
var url = window.location;
   $('.navbar-nav a[href="'+ url +'"]').parent().addClass('active');
   $('.navbar-nav a').filter(function() {
        return this.href == url;
   }).parent().addClass('active').siblings().removeClass('active');
//end


  //click on scroll to top to move to top 
  $('.scroll-to-top').click(function(event){

    event.preventDefault();
    $('html,body').animate({
      scrollTop:0

    },1000);
  })
  

  $(window).scroll( function() {
    if($(window).scrollTop() >= 100)
    {
      $('.scroll-to-top').fadeIn(400);
    }
    else
    {
      $('.scroll-to-top').fadeOut(400);
    }
    
  });
 
 



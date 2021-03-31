$('#autoWidth').lightSlider({
    item: 3,
    autoWidth:true,
    loop:true,
    onSliderLoad: function() {
        $('#autoWidth').removeClass('cS-hidden');
    } 
  });  
  $('#shop').lightSlider({
    item: 3,
    autoWidth:true,
    loop:true,
    onSliderLoad: function() {
        $('#shop').removeClass('cS-hidden');
    } 
  });  
  new Vue({
      el: '#demo',
      data: {
        show: false
      }
    });
    
    $('.carousel').carousel({
      interval: 5000
    })
    
    $('.header-img').addClass("slideUp");
    //slider 
  
  
    $('.img-card img').hover(function(){
      this.classList.add('overlay');
    },function(){
      this.classList.remove('overlay');
    })
    //calculate height of scroll 
 var card_scroll= document.querySelector(".card-1").offsetHeight,
 
 Featured_Products_scroll = document.querySelector(".header-slider").offsetHeight ,
 category_section_scroll= document.querySelector('.Featured-Products').offsetHeight +Featured_Products_scroll,
 shop_now_scroll = document.querySelector('.category-section').offsetHeight + category_section_scroll;
 console.log(card_scroll);
 $(window).scroll( function() {
    if ($(window).scrollTop() > card_scroll) {
        var card2=document.querySelector('.card-2');
        card2.style.animationName = 'slideUp';
        card2.style.animationDuration= '.93s'; 
        document.querySelector('.card-1').classList.add('slideleft');
        document.querySelector('.card-3').classList.add('slideleft');
      }
      if($(window).scrollTop() > Featured_Products_scroll ){
        var Featured=document.querySelector('.img-card');
        Featured.style.animationName = 'slideleft';
        Featured.style.animationDuration= '5s'; 
        var Featured=document.querySelector('.slider-product');
        Featured.style.animationName = 'slideUp';
        Featured.style.animationDuration= '2s'; 
      }
      
      if($(window).scrollTop() > category_section_scroll ){
        var kids=document.querySelector('.kids');
        kids.style.animationName = 'slideUp';
        kids.style.animationDuration= '3s'; 
        document.querySelector('.women').classList.add('slideleft');
        document.querySelector('.men').classList.add('slideleft');
        
        
      }
      if($(window).scrollTop() > shop_now_scroll )
      {
        var shop1 = document.querySelector('.best-accessories');
        shop1.style.animationName = 'slideleft';
        shop1.style.animationDuration= '5s'; 
        var shop2 = document.querySelector('.slider2');
        shop2.style.animationName = 'slideUp';
        shop2.style.animationDuration= '2s'; 
      }
      

 });

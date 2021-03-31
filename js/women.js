
var Accordion = function(el, multiple) {
this.el = el || {};
this.multiple = multiple || false;

var links = this.el.find('.link');

links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
}

Accordion.prototype.dropdown = function(e) {
var $el = e.data.el;
$this = $(this),
$next = $this.next();

$next.slideToggle();
$this.parent().toggleClass('open');

if (!e.data.multiple) {
$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
};
}

var accordion = new Accordion($('#accordion'), false);
$('#exampleModal').modal('handleUpdate');
//quick view slaider
//calculat width of sub img 
var number_img = $('.sub-img').children().length;
var sub_img_width=100/number_img;
$('.sub-img img').css({
    'width': sub_img_width +'%'

});
//add border to selected img 
$('.sub-img img').on('click',function(){
    
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.master-img img').hide().attr('src',$(this).attr('src')).fadeIn(500);
});
//right and left button in slider
$('.master-img .fa-chevron-right').on('click',function(){
    if($('.sub-img .selected').is(':last-child'))
    {
        $('.sub-img img').eq(0).click();
    }
    else{
        $('.sub-img .selected').next().click();
    }
    

});
$('.master-img .fa-chevron-left').on('click',function(){
    if ($('.sub-img .selected').is(':first-child')){
        $('.sub-img img:last').click();
    }
    else{
        $('.sub-img .selected').prev().click();
    }
    

});

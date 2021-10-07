//----------- carosile product -------------
$(document).ready(function() {
	$("#content-slider").lightSlider({
		loop:true,
		keyPress:true
	});
	$('#image-gallery').lightSlider({
		gallery:true,
		item:1,
		thumbItem:9,
		slideMargin: 0,
		speed:500,
		auto:true,
		loop:true,
		onSliderLoad: function() {
			$('#image-gallery').removeClass('cS-hidden');
		}  
	});
});





//------------ Slider Menu ----------------
$(document).ready(function(){
	//jquery for toggle sub menus
	$('.sub-btn').click(function(){
	$(this).next('.sub-menu').slideToggle();
	$(this).find('.dropdown').toggleClass('rotate');
	});

	//jquery for expand and collapse the sidebar
	$('.menu-btn').click(function(){
	$('.side-bar').addClass('active');
	$('.menu-btn').css("visibility", "hidden");
	});

	$('.close-btn').click(function(){
	$('.side-bar').removeClass('active');
	$('.menu-btn').css("visibility", "visible");
	});
	});




//---------------------broducts 1 ----------------------------

$(".view a").on('click', function(){
    $('.products ul').toggleClass('list');
    return false;
});


//------------------------slider products----------------------------------

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });




//---------------------Add To Cart ----------------------------

var itemCount = 0;

$('.add').click(function (){
  itemCount ++;
  $('#itemCount').html(itemCount).css('display', 'block');
  $(this).siblings('.itemDetails').clone().appendTo( "#cartItems" ).append('<button class="removeItem">Remove Item</button>');
}); 

$('.clear').click(function() {
  itemCount = 0;
  $('#itemCount').html('').css('display', 'none');
  $('#cartItems').html('');
}); 

$('i').click(function(){
  $('#shoppingCart').toggle();
});

$('#shoppingCart').on('click', '.removeItem', function(){
    $(this).parent().remove();  
    itemCount --;
    $('#itemCount').html(itemCount);
  
    if (itemCount === 0) {
      $('#itemCount').html('').css('display', 'none');
      $('#shoppingCart').css('display', 'none');
    }
});


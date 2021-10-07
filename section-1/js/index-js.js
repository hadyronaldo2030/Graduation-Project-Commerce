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



//----------------------------------------
$(function() {
	$(".btn").click(function() {
		$(".form-signin").toggleClass("form-signin-left");
    $(".form-signup").toggleClass("form-signup-left");
    $(".frame").toggleClass("frame-long");
    $(".signup-inactive").toggleClass("signup-active");
    $(".signin-active").toggleClass("signin-inactive");
    $(".forgot").toggleClass("forgot-left");   
    $(this).removeClass("idle").addClass("active");
	});
});

$(function() {
	$(".btn-signup").click(function() {
  $(".login-sign").toggleClass("nav-up");
  $(".form-signup-left").toggleClass("form-signup-down");
  $(".success").toggleClass("success-left"); 
  $(".frame").toggleClass("frame-short");
	});
});

$(function() {
	$(".btn-signin").click(function() {
  $(".btn-animate").toggleClass("btn-animate-grow");
  $(".welcome").toggleClass("welcome-left");
  $(".cover-photo").toggleClass("cover-photo-down");
  $(".frame").toggleClass("frame-short");
  $(".profile-photo").toggleClass("profile-photo-down");
  $(".btn-goback").toggleClass("btn-goback-up");
  $(".forgot").toggleClass("forgot-fade");
	});
});
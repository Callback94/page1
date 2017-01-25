$(function(){
	"use strict";
	var slidbar = $('#slidbar');
	var slidbar_occ = $('#slidbar_occ');
	var mask = $('.mask')
	var backButton =$('.back-to-top')

	function showSlidbar(){

		mask.fadeIn();

		slidbar.css('right',0);
	}

	function hideSlidbar () {

		mask.fadeOut();

		slidbar.css('right',-slidbar.width());

	}

	function scrolltoTop ()  {
 	$('html,body').animate(
 	{
     scrollTop:0
 	},800)
	}

	$(window).on('scroll',function () {
		if ($(window).scrollTop > $(window).height)
		{
			backButton.fadeIn
		}
		else {
			backButton.fadeOut
		}
    })
	$(window).trigger('scroll');
	slidbar_occ.on('click',showSlidbar);

	mask.on("click",hideSlidbar);
	backButton.on("click",scrolltoTop);
});

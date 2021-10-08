/*
	@author: Ilyas karim <ilyas.datoo@gmail.com>
	@date: 5/may/2016

*/
(function ($) {
	setInterval(function(){
		$(".navbar-brand").html($(document).width());
	},10)
	$.fn.jPopup = function (options) {
		var settings = $.extend({
			popupParent : "gee-popup",
			scrollTopPx : 100,
			popupCloseButton : ".popup-close-button",
			heading : "heading - You can change",
			paragraph : "You can change paragraph from options. You can also change the input into your own template",
			userContent : '<div class="input"> <input class="form-control" type="text" placeholder="Your Email" > </div>',
			buttonText : 'Click me',
			buttonClass : "btn btn-info btn-block btn-lg",
			// openPopup : "asd",
			initThrough : function () {
				$(window).on('scroll', function(event) {
					var scrollValue = $(window).scrollTop();
					if (scrollValue == settings.scrollTopPx || scrollValue > settings.scrollTopPx) {
						// call the popup
						if (hasPopuped == false) {
							$.fn.jPopup.openPopup();
						}
					}
				});
			},
			openPopup : function () {
				$("html").addClass('active-poup');
			}
		}, options);
		var hasPopuped = false;
		var scrollValue = $(window).scrollTop();
		settings.initThrough();
		$(".gee-popup .popup-title").html(settings.heading);
		$(".gee-popup .paragraph").html(settings.paragraph);
		$(".gee-popup .user-content").html(settings.userContent);
		$(".gee-popup .btn").html(settings.buttonText);
		$(".gee-popup .btn").addClass(settings.buttonClass);
		$(".popup-close-button").click(function() {
			$('html').toggleClass('active-poup');
			hasPopuped = true;
		});
	}
	$.fn.jPopup.openPopup = function () {
		$("html").addClass('active-poup');
	}

	console.log ("valor scroll:" + $(window).scrollTop());
}(jQuery))
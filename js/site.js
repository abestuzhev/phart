var productScroll, apiProductScroll, jspTimeStamp = 0;

$(document).ready(function(){

	$('.subscribe').click(function(){
		_gaq.push(['_trackPageview', '/subscribe']);
		yaCounter19091020.reachGoal('subscribe'); 
		
	})
	$('.send-faq').click(function(){
		_gaq.push(['_trackPageview', '/send-faq']);
		yaCounter19091020.reachGoal('send-faq'); 
		
	})	
	$('.send-faq').click(function(){
		_gaq.push(['_trackPageview', '/send-faq']);
		yaCounter19091020.reachGoal('send-faq'); 
		
	})	

	$('.feedback-form .send_query').click(function(){
		yaCounter19091020.reachGoal("feedback_"+$(this).parent().attr('id')); 
		
	})
	
	$('.pdf-link').click(function(){
		var str = document.URL;
		var _url = str.substring( str.indexOf("/",7) + 1 , str.lastIndexOf("/")).split("/");
		if(_url[0] == "plants") yaCounter19091020.reachGoal("page_to_pdf"); 
		
	})

	$('.print-link').click(function(){
		var str = document.URL;
		var _url = str.substring( str.indexOf("/",7) + 1 , str.lastIndexOf("/")).split("/");
		if(_url[0] == "plants") yaCounter19091020.reachGoal("page_to_save"); 
		
	})

	$('#vk_groups').click(function(){
		_gaq.push(['_trackPageview', '/vidjet-vk']);
		yaCounter19091020.reachGoal('vidjet-vk'); 
		
	})
	
	
	
	if ($('#visual .right .filter .b-tabs').length > 0)
		$('#visual .right .filter .b-tabs').tabs();
	
	if ($('#product-slider-content').length > 0)
		$('#product-slider-content').tabs();
	if ($('input[placeholder]').length > 0)
		$('input[placeholder]').placeholder();
	if ($('textarea[placeholder]').length > 0)
		$('textarea[placeholder]').placeholder();

	if ($('.video-gallery ul').length > 0)
		$('.video-gallery ul ul').jcarousel();


	if ($('.inner-pages #content .columns .right-column p').length > 0){
		var fontSizeNum = 0, fs = [];
		$('.inner-pages #content .columns .right-column p').each(function(i){
			fs[i] = parseInt($(this).css('font-size'));
		});
	
		$('.fontSetup a').click(function(){
			if (fontSizeNum == 2) fontSizeNum = -1;
			fontSizeNum++;
			$('.inner-pages #content .columns .right-column p').each(function(i){			
				$(this).css({
					'font-size': fs[i] + fontSizeNum*fontSizeNum,
					'font-family': 'Trebuchet MS',
					'line-height': '130%'
				});
				
			});
			return false;
		});
	}

	// for news item
	/*if ($('.b-news-list .key-drop'))
	{ 
		$('.preview .key-drop').click ( function (){
			$(this).parents().children('p.title').toggleClass('title-active');
			$(this).parents().children('.dropblock').slideToggle();
			$(this).toggleClass('key-drop-up');
			return false;
		});
		
		$('.dropblock .key-drop-up').click( function () {
			$(this).parents('.dropblock').slideUp();
			$(this).parents('.preview').children('.key-drop').toggleClass('key-drop-up');
			$(this).parents('.preview').children('p.title').toggleClass('title-active');
			return false;
		});
	}*/

	//show-opt-customers
	$('#show-opt-customers').click( function (){
		$('.slider-box').find('.brd-no').toggleClass('brd');										
		//$('.slider-box').find('.box-hide').slideToggle();
		$('.slider-box').find('.box-hide').slideDown();
		//$('.slider-box .key-drop').children('p.dw, p.up').toggle();
		$('.slider-box .key-drop').children('p.dw').hide();
		$('.slider-box .key-drop').children('p.up').show();
		$('.slider-box .key-drop').toggleClass('key-drop-up');
		
	});
	// for brends
	if ($('.brands-box .key-drop'))
	{ 
		$('.brands-box .key-drop').click ( function (){
			$('.brands-box .brend-more').slideToggle();
			$(this).toggleClass('key-drop-up');
			return false;
		});
	}



	if ($('.prod-box .drop-ul'))
	{
		$('.prod-box .drop-ul').hide();
		$('.prod-box .key-drop').click( function (){
												
			$(this).parents('.prod-box').find('.drop-ul').slideToggle();
			$(this).children('p.dw, p.up').toggle();
			$(this).toggleClass('key-drop-up');
			return false;
		});	
	}

	if ($('.tbl-clr'))
	{
		$('.tbl-clr tr:odd').addClass('clr-odd');
	}


	if ($('.slider-box .box-hide'))
	{
		$('.slider-box .box-hide').hide();	
		$('.slider-box .key-drop').click( function (){
			$(this).parents('.slider-box').find('.brd-no').toggleClass('brd');										
			$(this).parents('.slider-box').find('.box-hide').slideToggle();
			$(this).children('p.dw, p.up').toggle();
			$(this).toggleClass('key-drop-up');
			return false;
		});	
	}





	if($('.box-qa .key-drop'))
	{
		$('.box-qa .key-drop').click ( function (){
			$(this).parents().children('.dropblock').slideToggle();
			$(this).toggleClass('key-drop-up');
			$(this).parents('.item').find('p.q').toggleClass('q-active');
			$(this).children('p.dw, p.up').toggle();
			return false;
		});
		
		
	}

	if($('.box-photo-gallery')) 
	{
		$('.box-photo-gallery .slider ul').jcarousel({
		 scroll:1
		});
	}
	
	if ($('.key-open'))
	{
		$('.key-open').click ( function () {
			$(this).parents('.box').children('.dropblock').slideToggle();
			$(this).toggleClass('key-close');
		});
	}













	// tooltip
	if ($('a.tTip').length > 0){
		$('a.tTip').tooltip({	
		delay: 400,
		track: true
		});
	}
	
	if ($('.brd-b-green-tabs').length > 0){
		var type = window.location.href,
			activeTab = 0;
			if (type.indexOf('?type=') >= 0){
				activeTab = type.substr(type.indexOf('?type=') + '?type='.length)
				if ($('.filter-months').length > 0){
					window.scrollTo(0,$('.brd-b-green-tabs').offset().top - 40)
				}
			}
		
		$('.brd-b-green-tabs')
			.tabs({
				selected: activeTab
			})
			/*.bind("tabsshow", function(e, ui) {
                var hash = ui.tab.hash;
                var div = $(hash);

                div.attr('id', '');
                window.location.hash = ui.tab.hash;
                div.attr('id', hash.substr(1));
            });*/	
			
	}

	if ($('.fancy').length > 0){
		$(".fancy").fancybox({
			prevEffect		: 'none',
			nextEffect		: 'none'
		});
	}
	
	$('.open-photogallery-popup').live('click', function(){
		var link = $(this).attr('href'),
			i = $(this).attr('photoindex');
            g = $(this).parent('.list').attr('gallery');
            csrf = $(this).parent('.list').attr('csrf');
            data = {photoindex: i, gallery: g, csrfmiddlewaretoken: csrf}
			if (link) {
				$.ajax({
					type: 'POST',
					url: link,
					data: data,
					success: function(data){
						$(data).insertAfter('#content');
						$('html,body').animate({scrollTop: 130}, 300);
					}
				});
			}
		return false;
	});
	
	if('msie' in $.browser && $.browser.version <= 8.0) {
		$('table.inner tr').filter(':odd').find('td').css('background', '#e9e9e9');
	}


});

window.onload = function(){
	
	if ($('#product-slider-content .ui-tabs-panel .slider ul').length > 0){
		$('#product-slider-content .ui-tabs-panel .slider ul').each(function(i){
			if ($(this).find('li').length >= 8)
				$(this).jcarousel();
		})
		
	}
	
	/*if ($('.inner-pages .left-column .b-photos .slider ul').length > 0){
		$('.inner-pages .left-column .b-photos .slider').jcarousel({
			scroll: 1,
			wrap: 'circular'
		});
	}*/
	
	if ($('.b-photo-gallery .list').length > 0 && $('.b-photo-gallery li').length > 4){
		$('.b-photo-gallery').elastislide({
			imageW  : 120,
			border: 0
		});
		
		$('.b-photo-gallery .list a').click(function(){
			var load = $('.b-photo-gallery .load'),
			
				self = $(this),
				title = self.attr('title'),
				src = self.attr('href');

				if (self.parent().hasClass('active')) return false;
				
				$('.b-photo-gallery .list li').removeClass('active');
				self.parent().addClass('active');
				
				load.css('opacity', 0);
				load.find('img').on('load', function(){
					load.find('p.title').html(title);
					load.stop().animate({'opacity': 1}, 450);
				}).attr('src', src);
								
			return false;
		});
		
	}
	
	var timer;
	$('#product-slider-content .ui-tabs-panel .slider ul li a img').mouseenter(function(){	
		var self = $(this);
		timer = setTimeout(function(){
			var content = self.parent().next('div.card').html(),
			left = self.offset().left,
			top = self.offset().top,
			width = self.width();
			$('body').append('<div class="card-popup">'+content+'</div>');
			$('.card-popup').css({
				'left': left + width,
				'top': top
			}).fadeIn(150);
		} , 150);
	});
	$('#product-slider-content .ui-tabs-panel .slider ul li a').mouseleave(function(){
		$('.card-popup').fadeOut(150, function(){
			$(this).remove();
		});
		clearTimeout(timer);
	});
	
	var timerInner;
	$('.b-inner-product-list li .prod-img').mouseenter(function(){	
		var self = $(this);
		timerInner = setTimeout(function(){
			var content = self.find('div.prod-name a').html(),
				left = self.offset().left,
				top = self.offset().top,
				width = self.width(),
				cardLeftPos;
				
			$('body').append('<div class="card-popup">'+content+'</div>');
			
			if (left - 270 < $('.right-column .box').eq(0).offset().left + 270){
				cardLeftPos = left + width - 10;				
			} else {
				cardLeftPos = left - 270 + 10;
			}
			
			$('.card-popup').css({
				'left': cardLeftPos,
				'top': top + 17
			}).fadeIn(150);
		} , 150);
	});
	$('.b-inner-product-list li .prod-img').mouseleave(function(){
		$('.card-popup').fadeOut(150, function(){
			$(this).remove();
		});
		clearTimeout(timerInner);
	});
	
	// Top slider
	if ($('.all-products-slider').length){
		
		function initTopSlider(){
			
			var ulWidth,
				windowWidth = $(window).width();
			
			if (apiProductScroll){
				apiProductScroll.destroy();
			}
			// init size
			productScroll = $('.all-products-slider .slider');
			ulWidth = productScroll.find('li').filter(':visible').length * productScroll.find('li').width();
			productScroll.find('ul').width(ulWidth);
			productScroll.width(windowWidth);
			// build slider
			productScroll.jScrollPane({
				horizontalDragMaxWidth: 120,
				showArrows: false
			});
			apiProductScroll = productScroll.data('jsp');
			// mousewheel
			$('.all-products-slider').bind('mousewheel', function (event, delta, deltaX, deltaY){
				if (!jspTimeStamp){
					jspTimeStamp = event.timeStamp;
				} else {
					if (jspTimeStamp == parseInt(event.timeStamp)) return false;
					jspTimeStamp = event.timeStamp;
				}
				apiProductScroll.scrollByX(delta*-50);
				return false;
			});

		}
		initTopSlider();

		$('#all_products .filter span').bind('click', function(){		
			if ($(this).parents('ul').hasClass('service-menu')){
				
			} else {
				if ($(this).parent('li').hasClass('active')) return false;
				if ($('.all-products-slider').is(':hidden')){
					$('#all_products .content .toggle').click();
				}
				
				$('#all_products .filter li').removeClass('active');
				$(this).parents('li').addClass('active');
				$('#all_products .content .all-products-slider ul li').hide();
				$('#all_products .content .all-products-slider ul li.' + $(this).attr('id')).show();
				initTopSlider();
				return false;
			}
		});
		
		$('<p class="show_all_products"><a href="#">( вся продукция )</a></p>').appendTo('body');
		$('.show_all_products').css({
			'left': $('#content').offset().left + $('#content').width() - $('.show_all_products').width()
		});
		
		$('.show_all_products a').live('click', function(){
			$('#all_products .content .all-products-slider ul li').show();
			$('#all_products .filter li').removeClass('active');
			initTopSlider();
			return false;
		});
		
		$('#all_products .content .toggle').click(function(){
			
			if ($('#all_products').hasClass('active')){
				$('#all_products .content .all-products-slider').hide();
				$('.show_all_products').hide();
				$('#all_products .content').animate({'height':21}, 150);
				$('.show_all_products a').click();
			} else {
				$('#all_products .content').animate({'height':165}, 150, function(){
					$('#all_products .content .all-products-slider').fadeIn(150, function(){
						initTopSlider();
						$('.show_all_products').show();
					});
				});
			}
			
			$('#all_products').toggleClass('active');
			
			return false;
		});
		
	}
	////////////////////////
	
	if ($('.b-new-video .video-thumb ul').length > 0){
		$('.b-new-video .video-thumb ul').jcarousel({
			vertical: true,
			scroll: 1,
			wrap: 'circular'
		});
		$('.b-new-video .video-thumb ul li').live('click', function(){
			if ($(this).hasClass('active')) return;
			var html = $(this).find('.load').html();
				$('.b-new-video .video-view').html(html);
				$('.b-new-video .video-thumb ul li').removeClass('active');
				$(this).addClass('active')
		});
	}
	
	if ($('.block-calendar').length > 0){
		var bcLineCount = $('.block-calendar .b-line').length;
			$('.block-calendar .line-1').height(bcLineCount*20 + 20)
			$('.block-calendar .line-1 .block-brd').height(bcLineCount*20 + 20 - 2)
			$('.block-calendar .b-line').each(function(i){
				$(this).css({
					'top': 15 + 20*i,
					'left': ($(this).attr('period-start') - 1)*41,
					'width': ($(this).attr('period-end') - $(this).attr('period-start') + 1)*41
				});
			});
	}
    if ($('#autocomplete').length) {
        $.get('/plants/?autocomplete=1', function(data) {
            var result = [];
            $.each(data, function(i,v) {
                result.push(v.title);       
            });
            if ($("div.search-content").length) var appendTo = "div.search-content";
            //if ($("div.search").length) var appendTo = "div.search";
            $('#autocomplete').autocomplete({
              source: result,
              appendTo: appendTo
            });
        });        
    }
    
    $('img.show_video').click(function(){
        $(".main_show_box").html('<div class="cont">'+$(this).parent("li").children(".video_title").html()+'</div><iframe width="600px" height="360px" src="http://www.youtube.com/embed/' + $(this).attr('rel') + '" frameborder="0" allowfullscreen></iframe>');
		
		
		return false;
	});
	$('img.show_video_frame').click(function(){
		$(this)
			.parents('#videoFrame')
			.find('.video')
			.html('<iframe width="600" height="360" src="http://www.youtube.com/embed/' + $(this).attr('rel') + '" frameborder="0" allowfullscreen></iframe>')
		return false;
	});
}



$(window).resize(function(){
	if ($('.all-products-slider').length){
		if (apiProductScroll){
			apiProductScroll.reinitialise();
		}
		$('.show_all_products').css({
			'left': $('#content').offset().left + $('#content').width() - $('.show_all_products').width()
		});
	}
});

function in_array(needle, haystack, strict) {	// Checks if a value exists in an array
	// 
	// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	var found = false, key, strict = !!strict;
	for (key in haystack) {
		if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
			found = true;
			break;
		}
	}
	return found;
}
function remove_from_array(array, element) {
	var newarray = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i] != element)
			newarray.push(array[i]);
	}
	return newarray;
}

function slidePlay() {
    var _this = $('#custom_player_photo');

    var howSlideBig = _this.find('.main li').length;
    var _width = _this.width();
    _this.find('.main').find('li').eq(0).addClass('active');
    _this.find('.main').css('width', (howSlideBig * _width) +'px');

    _this.append('<ul class="small"></ul>');
    for (i = 0; i < howSlideBig; i++) {
        _this.find('.small').append('<li><a href="javascript:void(0)"></a></li>');
    }
    
    
    function slideChange() {
        var _this2 = _this.find('.main');
    
        var _index = _this2.find('li[class="active"]').index();
         if (_index == (howSlideBig - 1)) {
             _this2.find('li').removeClass('active')
             _this2.find('li').eq(0).addClass('active');
             _this2.animate({'margin-left' : '0px'}, 500);
                         $('.small').find('li').removeClass('active')
             $('.small').find('li').eq(0).addClass('active');
         }
        else {
             _this2.find('li').removeClass('active');
             _this2.find('li').eq(_index+1).addClass('active');
                         $('.small').find('li').removeClass('active')
             $('.small').find('li').eq(_index+1).addClass('active');
             _this2.animate({'margin-left' : '-'+((_index+1) * _width)+'px'}, 500);
         }
    }
    intervalID = window.setInterval(slideChange, 5000);

    $('.small').find('li a').unbind('click');
    $('.small').find('li a').bind('click', function(e) {
        e.stopPropagation();
        var _count = $(this).parent().index();
        _this.find('.main').find('li').removeClass('active');
        _this.find('.main').find('li').eq(_count).addClass('active');
                _this.find('.small').find('li').removeClass('active');
        _this.find('.small').find('li').eq(_count).addClass('active');
        _this.find('.main').animate({'margin-left' : '-'+((_count) * _width)+'px'}, 500);
    });

    $('.small').find('li a').hover(function() {
        clearInterval(intervalID);
    }, function() {
        intervalID = window.setInterval(slideChange, 5000);
    })
}

$(window).load(slidePlay);

function hideOnShow(that) {
    var _this = $(that);
    if (! _this.hasClass('active')) {
        _this.addClass('active').text('Cвернуть');
        _this.prev().slideDown();
    }
    else {
        _this.removeClass('active').text('Подробнее');
        _this.prev().slideUp();
    }


}

$(document).ready(function () {
    $('.hide + a').on('click', function(){
        $(this).prev('.hide').slideToggle(150);
        $(this).remove();
    });
});

$(document).ready(function(){
    var $isVisible = 0;
	if ($.cookie('SOCIALWIDGET')!=1){
		$(window).scroll(function(){
			if ($(document).height() / 2 < $(document).scrollTop() + $(window).height() / 2) {
				if (!$isVisible) {
					$("#socWidgetBox").animate({right: 0, duration: 500});
					$isVisible = 1;
				}
			} else {
				if ($isVisible) {
					$("#socWidgetBox").animate({right: -260, duration: 500});
					$isVisible = 0;
				}
			}
		});
    }
    $('#closeSocWidget').click(function(){
        $.cookie('SOCIALWIDGET', 1, {expires: 7});
        $("#socWidgetBox").remove();
    })
	
	

	
	
	
});





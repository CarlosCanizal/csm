 //$('article').show();


$(window).load(function(){
	show_index();
	$('#loading').hide();
});


function show_index(){
	var position = 9;
	var time = 100;
	$('.first-line').each(function(){
		var object = this;
		time+=200;
		window.setTimeout(function(){
			if($(object).is('.largerBox')){
				position-=4;
			}else if($(object).is('.horizontalBox')){
				position-=2;
			}else{
				position--;
			}
			$(object).animate({left:position+"em"});
		},time);
		
	});

	var position2 = 9;
	var time2 = 200;
	$('.second-line').each(function(){
		var object = this;
		time2+=200;
		window.setTimeout(function(){
			if($(object).is('.largerBox')){
				position2-=4;
			}else if($(object).is('.horizontalBox')){
				position2-=2;
			}else{
				position2--;
			}
			$(object).animate({left:position2+"em"});
		},time2);
		
	});

	var position3 = 9;
	var time3 = 300;
	$('.third-line').each(function(index){
		var object = this;
		time3+=200;
		window.setTimeout(function(){
			if (index==1){
				position3-=2;
			}
			else if (index==2){
				position3-=5;
			}else{
				position3--;
			}
			$(object).animate({left:position3+"em"});
		},time3);
		
	});

	var position4 = 9;
	var time4 = 400;
	$('.fourth-line').each(function(){
		var object = this;
		time4+=200;
		window.setTimeout(function(){
			if($(object).is('.largerBox')){
				position4-=4;
			}else if($(object).is('.horizontalBox')){
				position4-=2;
			}else{
				position4--;
			}
			$(object).animate({left:position4+"em"});
		},time4);
	});
}
 
$(document).ready(function(){

	$('.navs').click(function(){
		$('.active-nav').removeClass('active-nav');
		$(this).addClass('active-nav');
		var index = $(this).index();
		$('.carousel-active').fadeOut('slow',function(){
			$('.carousel-active').removeClass('carousel-active');
		});
		$('.carousel-box:eq('+index+')').fadeIn('slow',function(){
			$('.carousel-box:eq('+index+')').addClass('carousel-active');
		});
	});
	
	$('.galleryBox').live('click',function(){
		var image = "<img alt='' src='"+$(this).attr('img-large')+"' />";
		
		$('#sectionContent').animate({top:'31em'},1000);
		$('#imageSection').height($(window).height());
		$("#imageSection").find('.body').html(image);
		$('#imageSection').animate({top:'0%'},1000,function(){
		$('body').addClass('disableScroll').scrollTop(0);
		});
	});

	$('#portafolio').click(function(event){
		event.preventDefault();
		$('.main-section').fadeOut('slow');
		window.setTimeout('show_index()',500);
	});

	$('.contacto').click(function(event){
		event.preventDefault();
		$('a.active').removeClass('active');
		$('.main-section').hide();
		$(this).addClass('active');
		animate_index('contacto');
		$('#contacto').fadeIn();
	});

	$('.nosotros').click(function(event){
		event.preventDefault();
		$('a.active').removeClass('active');
		$('.main-section').hide();
		$(this).addClass('active');
		animate_index('nosotros');
		$('#nosotros').fadeIn();
	});
	
	$('.da-animate').click(function(){
		animate_index($(this).attr('section'));
	});

 	$('.plus').click(function(){
 		var portafolio = $(this).attr('portafolio');
 		plus(true,portafolio);
 	});




 	function animate_index(section){
 		var position;
		var total = $('.first-line').length-1
		var time = 50;
		$('.first-line').each(function(index){
			var object = $('.first-line').eq(total-index);
			time+=50;
			window.setTimeout(function(){
				if($(object).is('.largerBox')){
					position=-4;
				}else if($(object).is('.horizontalBox')){
					position=-2;
				}else{
					position=-1;
				}
				$(object).animate({left:position+"em"});
			},time);
			
		});

		var position2;
		var total2 = $('.second-line').length-1
		var time2 = 100;
		$('.second-line').each(function(index){
			var object = $('.second-line').eq(total2-index);
			time2+=50;
			window.setTimeout(function(){
				if($(object).is('.largerBox')){
					position2=-4;
				}else if($(object).is('.horizontalBox')){
					position2=-2;
				}else{
					position2=-1;
				}
				$(object).animate({left:position2+"em"});
			},time2);
			
		});

		var position3;
		var total3 = $('.third-line').length-1
		var time3 = 150;
		$('.third-line').each(function(index){
			var object = $('.third-line').eq(total3-index);
			time3+=50;
			window.setTimeout(function(){
				if($(object).is('.largerBox')){
					position3=-4;
				}else if($(object).is('.horizontalBox')){
					position3=-2;
				}else{
					position3=-1;
				}
				$(object).animate({left:position3+"em"});
			},time3);
			
		});

		var position4;
		var total4 = $('.fourth-line').length-1
		var time4 = 200;
		$('.fourth-line').each(function(index){
			var object = $('.fourth-line').eq(total4-index);
			time4+=50;
			window.setTimeout(function(){
				if($(object).is('.largerBox')){
					position4=-4;
				}else if($(object).is('.horizontalBox')){
					position4=-2;
				}else{
					position4=-1;
				}
				$(object).animate({left:position4+"em"});
			},time4);
			
		});

	if (section != 'contacto' && section != 'nosotros'){
		$.ajax({
		  url: "sections.php",
		  type: 'POST',
		  data: {section:section}
		}).done(function(data) {
			$('#sectionContent').find('.body').html(data);
		  	window.setTimeout(function(){
				$("#section").show();
				$('#sectionContent').animate({left:"0%"},500,function(){

					$('.footer').animate({'bottom':0},'slow');
					/*$('.gallery').animate({'top':"0em"},'slow');
					$('.section-text').fadeIn('slow');*/

				});
			},1000);
		});
	}

		
 	}

 	function plus(animate,portafolio){
 		$('.da-animate').hide();
 		$('.imageContainer').addClass('active');
 		$('.main-image').each(function(index){
 			var object = this;
			if(animate){
	 			window.setTimeout(function(){
		 			$(object).fadeOut(function(){
		 				$(object).siblings('.'+portafolio).fadeIn();
		 			});
	 			},100*index);
 			}else{
 				$('.main-image').hide();
 				$('.'+portafolio).show();
 			}
 		});
 	}

 	$('#logo').click(function(){
 		back(true);
 	});

 	$('.portafolio-image').click(function(){
 		animate_index($(this).attr('section'));
 	})

 	function back(animate){
 		$('.imageContainer').removeClass('active');
 		$('.portafolio-image').each(function(index){
 			var object = this;
			if(animate){
	 			window.setTimeout(function(){
		 			$(object).fadeOut(function(){
		 				$(object).siblings('.main-image').fadeIn();
		 			});
	 			},50*index);
 			}else{
 				$('.portafolio-image').hide();
 				$('.main-image').show();
 			}
 		});
 	}
	
	$('.closeButton').click(function(){
		$('body').removeClass('disableScroll');
		var parent = $(this).attr('parent');
		
		if (parent == 'sectionContent'){
			window.setTimeout('show_index()',500);
			$(this).parents('#'+parent).animate({left:'100%'},1000,function(){
				$(this).find('.body').html('');
					$("#section").hide();
			});
		}
		else{
			$(this).parents('#'+parent).animate({top:"-100%"},1000,function(){
				$(this).find('.body').html('');
			});
			$('#sectionContent').animate({top:0},1000);
		}
		
	});

	$('.plusButton').click(function(event){
		event.preventDefault();
		$('body').removeClass('disableScroll');
		var parent = $(this).attr('parent');
		plus(false,false);
		if (parent == 'sectionContent'){
			window.setTimeout('show_index()',100);
			$(this).parents('#'+parent).animate({left:'100%'},500,function(){
				$(this).find('.body').html('');
					$("#section").hide();
			});
		}
		else{
			$(this).parents('#'+parent).animate({top:"-100%"},1000,function(){
				$(this).find('.body').html('');
			});
			$('#sectionContent').animate({top:0},1000);
		}
	});
	
	Resize();
	
	$('.box').hoverdir();
	
	window.onresize=Resize;
	
function truncateDecimals(num, precision) {
  var numS = num.toString(),
      decPos = numS.indexOf('.'),
      result = numS.substr(0, 1 + decPos + precision);

  return parseFloat(result);
}

function Resize(){
	var width=$(window).width();
	var height= $(window).height();
	var fontSize = width/54;
	fontSizeTemp = fontSize.toFixed(1)*6
	//document.body.style.fontSize=fontSize+'px';
	$('#container').css({'font-size':fontSizeTemp+"px"});
	expected = fontSize*6*4;
	real = $('#container').height();
	if(real >= expected){
		fontSizeTemp = fontSize.toFixed(0)*6
		$('#container').css({'font-size':fontSizeTemp+"px"});
	}
	$('#header, .section').css({'font-size':fontSize});
}

});
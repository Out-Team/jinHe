$(function(){
	$('.pages ul li').hover(function(){
		$(this).addClass('thisclass');
		$('.pages ul .thisclass a').css('color','#fff');
	},function(){
		$(this).removeClass('thisclass');
		$('.pages ul a').css('color','#999');
	})
})

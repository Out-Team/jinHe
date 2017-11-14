$(function(){
	// 点击地图展开
	var btn = $('.mapA');
	var map = $('footer .map');
	var close = $('footer .map .close');
	btn.click(function(){
		map.css("display","block");
		btn.css('display', "none");
	})
	close.click(function(){
		map.css("display","none");
		btn.css('display', "block");
	})

})
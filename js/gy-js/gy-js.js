$(function(){

		// 我们的服务
	var servLise = $('.serveBox .serveCon a');
	var imgs = $('.serveBox .serveCon a .iconBox .show');

	var imgsHid = $('.serveBox .serveCon a .iconBox .hid');
	
	var tit = $('.serveBox .serveCon .desBox h3');
	var con = $('.serveBox .serveCon .desBox p');


	for(let i=0; i<servLise.length; i++){
		servLise.eq(i).hover(function(){
			imgs.eq(i).css({opacity: 0})
			imgsHid.eq(i).css("top",'0')
			tit.eq(i).css("color","#e4392a")
			con.eq(i).css("color","#002")
		},function(){
			imgs.eq(i).css({opacity: 1})
			imgsHid.eq(i).css("top",'-100%')
			tit.eq(i).css("color","#999")
			con.eq(i).css("color","#999")

		})
	}
	

// 成功案例

	var examList = $('.caseList li');
	var examHid = $('.caseList li .hid');
	for (let j=0; j<examHid.length; j++){
		examList.eq(j).hover(function(){
			examHid.eq(j).css("top","0");
		},function(){
			examHid.eq(j).css("top","-100%");

		})
	}

// 最新动态
	
	var newsList = $('.newsDes li');
	var newsT = $('.newsDes li .topHid');
	var newsB = $('.newsDes li .botHid');

	for(let k=0; k<newsList.length; k++){
		newsList.eq(k).hover(function(){
			newsT.eq(k).css("top","0");
			newsB.eq(k).css("bottom","0");
		},function(){
			newsT.eq(k).css("top","-165px");
			newsB.eq(k).css("bottom","-130px");
		})
	}
	



})
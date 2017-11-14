$(function(){
	$('.neikuang .logoteam').each(function(index,val){
		if(index!=0){
			val.style.left='100%';
		}
	})
	var now=0;
	var next=0;
	var n=$('.neikuang .logoteam').length-1;
	function change(type='l'){
		if(type=='l'){
			next++;
			if(next>n){
				next=n;
			}
		$('.neikuang .logoteam').eq(now).css('left','-100%');
		$('.neikuang .logoteam').eq(next).css('left','100%');

		}
		if(type=='r'){
			next--;
			if(next<0){
				next=0;
			}
			$('.neikuang .logoteam').eq(now).css('left','100%');
			$('.neikuang .logoteam').eq(next).css('left','-100%');
		}
		$('.neikuang .logoteam').eq(next).css('left','0');
		now=next;
	}
	$('.waikuang .leftimg').click(function(){
		change();
		$('.leftimg img').attr({'src':'img/lh-img/Left1.png'});
		$('.rightimg img').attr({'src':'img/lh-img/Right.png'});
		
	})
	$('.waikuang .rightimg').click(function(){
		change('r');
		$('.leftimg img').attr({'src':'img/lh-img/Left.png'});
		$('.rightimg img').attr({'src':'img/lh-img/Right1.png'});
	})



	$('.lh-slide .view ul li').each(function(i,val){
		if(i!=0){
			val.style.left='100%';
		}
	})
	var now1=0;
	var next1=0;
	var n1=$('.lh-slide .view ul li').length-1;
	function changes(type1='l'){
		if(type1=='l'){
			next1++;
			if(next1>n1){
				next1=n1;
			}
		$('.lh-slide .view ul li').eq(now1).css({'transition':'all 0.5s','left':'-100%'});
		$('.lh-slide .view ul li').eq(next1).css({'transition':'all 0.5s','left':'100%'});

		}
		if(type1=='r'){
			next1--;
			if(next1<0){
				next1=0;
			}
			$('.lh-slide .view ul li').eq(now1).css({'transition':'all 0.5s','left':'100%'});
			$('.lh-slide .view ul li').eq(next1).css({'transition':'all 0.5s','left':'-100%'});
		}
		$('.lh-slide .view ul li').eq(next1).css({'transition':'all 0.5s','left':'0'});
		now1=next1;
	}
	$('.flex-nav-prev').click(function(){
		changes();	
	})
	$('.flex-nav-next').click(function(){
		changes('r');
	})
})

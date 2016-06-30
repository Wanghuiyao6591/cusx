$(function(){
	var inner=$(".inner1");
	var main=$(".main");
	// console.log(main[1])
	
	var xuanxiangka=function(i){
		inner[i].onmouseover=function(){
			main[i].style.display="block";
		}
		main[i].onmouseout=function(){
			main[i].style.display="none";
		}
		main[i].onmouseover=function(){
			main[i].style.display="block";
		}
		inner[i].onmouseout=function(){
			main[i].style.display="none";
		}
		
	}
	for(var i=0;i<inner.length;i++){
		xuanxiangka(i);
	}



	var box=$(".banner")[0];
	var imgs=$("img",box);
	var num=0;

	var t=setInterval(move,2000);
	function move(){
		num++;
		if(num==imgs.length){
			num=0;
		}
		for(var i=0;i<imgs.length;i++){
			animate(imgs[i],{opacity:0});
		}
		animate(imgs[num],{opacity:1});
	}
})
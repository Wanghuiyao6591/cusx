window.onload=function(){

// 许多选项卡
 // 第一个
  var tab=$(".tab1")[0]
  var li1=$('.li1',tab) 
  var main1=$('.main1',tab)[0]  
  main1.style.display="none"
  li1.onmouseover=function(){
  main1.style.display="block"
  // inner1.style.background="#fff"
  }
  li1.onmouseout=function(){
  main1.style.display="none"
  // inner1.style.background="#F6F6F6"
  }
// 第二个
  var bannerw=$(".banner-w")[0]
  var inner2=$('#banner-w-inner2',bannerw) 
  var ka2=$('.ka2',bannerw)[0]  
  ka2.style.display="none"
  inner2.onmouseover=function(){
  ka2.style.display="block"
  // inner2.style.background="#fff"
  }
  inner2.onmouseout=function(){
  ka2.style.display="none"
  // inner1.style.background="#F6F6F6"
  }

  var bannerw=$(".banner-w")[0]
  var inner3=$('#banner-w-inner3',bannerw) 
  var ka3=$('.ka3',bannerw)[0]  
  ka3.style.display="none"
  inner3.onmouseover=function(){
  ka3.style.display="block"
  // inner3.style.background="#fff"
  }
  inner3.onmouseout=function(){
  ka3.style.display="none"
  // inner1.style.background="#F6F6F6"
  } 


   var bannerw=$(".banner-w")[0]
  var inner4=$('#banner-w-inner4',bannerw) 
  var ka4=$('.ka4',bannerw)[0]  
  ka4.style.display="none"
  inner4.onmouseover=function(){
  ka4.style.display="block"
  // inner4.style.background="#fff"
  }
  inner4.onmouseout=function(){
  ka4.style.display="none"
  // inner1.style.background="#F6F6F6"
  } 


 var bannerw=$(".banner-w")[0]
  var inner5=$('#banner-w-inner5',bannerw) 
  var ka5=$('.ka5',bannerw)[0]  
  ka5.style.display="none"
  inner5.onmouseover=function(){
  ka5.style.display="block"
  // inner5.style.background="#fff"
  }
  inner5.onmouseout=function(){
  ka5.style.display="none"
  // inner1.style.background="#F6F6F6"
  } 


  var bannerw=$(".banner-w")[0]
  var inner6=$('#banner-w-inner6',bannerw) 
  var ka6=$('.ka6',bannerw)[0]  
  ka6.style.display="none"
  inner6.onmouseover=function(){
  ka6.style.display="block"
  // inner6.style.background="#fff"
  }
  inner6.onmouseout=function(){
  ka6.style.display="none"
  // inner1.style.background="#F6F6F6"
  } 


   var bannerw=$(".banner-w")[0]
  var inner7=$('#banner-w-inner7',bannerw) 
  var ka7=$('.ka7',bannerw)[0]  
  ka7.style.display="none"
  inner7.onmouseover=function(){
  ka7.style.display="block"
  // inner7.style.background="#fff"
  }
  inner7.onmouseout=function(){
  ka7.style.display="none"
  // inner1.style.background="#F6F6F6"
  } 

   var bannerw=$(".banner-w")[0]
  var inner8=$('#banner-w-inner8',bannerw) 
  var ka8=$('.ka8',bannerw)[0]  
  ka8.style.display="none"
  inner8.onmouseover=function(){
  ka8.style.display="block"
  // inner8.style.background="#fff"
  }
  inner8.onmouseout=function(){
  ka8.style.display="none"
  // inner1.style.background="#F6F6F6"
  } 

   var bannerw=$(".banner-w")[0]
  var inner9=$('#banner-w-inner9',bannerw) 
  var ka9=$('.ka9',bannerw)[0]  
  ka9.style.display="none"
  inner9.onmouseover=function(){
  ka9.style.display="block"
  // inner9.style.background="#fff"
  }
  inner9.onmouseout=function(){
  ka9.style.display="none"
  // inner1.style.background="#F6F6F6"
  } 

   var bannerw=$(".banner-w")[0]
  var inner10=$('#banner-w-inner10',bannerw) 
  var ka10=$('.ka10',bannerw)[0]  
  ka10.style.display="none"
  inner10.onmouseover=function(){
  ka10.style.display="block"
  // inner10.style.background="#fff"
  }
  inner10.onmouseout=function(){
  ka10.style.display="none"
  // inner1.style.background="#F6F6F6"
  } 
//选中效果条
			var one=$(".pic2");
			line(one);
			var pic33=$(".pic33");
			line(pic33);
			
			function line(obj){
				for(var i=0;i<obj.length;i++){
					obj[i].index=i;
					var widths=obj[i].offsetWidth;
					var heights=obj[i].offsetHeight;
					obj[i].onmouseover=function(){
						var top=$(".top",obj[this.index])[0];
			            var bottom=$(".bottom",obj[this.index])[0];
			            var left=$(".left",obj[this.index])[0];
			            var right=$(".right",obj[this.index])[0];
				            animate(top,{width:widths});
							animate(bottom,{width:widths});
							animate(left,{height:heights});
							animate(right,{height:heights});
					}
					obj[i].onmouseout=function(){
						var top=$(".top",obj[this.index])[0];
			            var bottom=$(".bottom",obj[this.index])[0];
			            var left=$(".left",obj[this.index])[0];
			            var right=$(".right",obj[this.index])[0];
							animate(top,{width:0});
				            animate(bottom,{width:0});
							animate(left,{height:0});
							animate(right,{height:0});
					}
				}
			}
//选项卡
				var wxh=$('#wxh')
				var wx=$('.wx')[0]
					wx.style.display='none'
				  wxh.onmouseover=function(){
			          wx.style.display='block'             
			          }
				  wxh.onmouseout=function(){
			          wx.style.display='none'             
			          }

			    var sjh=$('#sjh')
				var sj=$('.sj')[0]
					sj.style.display='none'
				  sjh.onmouseover=function(){
			          sj.style.display='block'             
			          }
				  sjh.onmouseout=function(){
			          sj.style.display='none'             
			          }

 				var my=$('#myyintai')
				var me=$('.my')[0]
					me.style.display='none'
				  my.onmouseover=function(){
			          me.style.display='block'             
			          }
				  my.onmouseout=function(){
			          me.style.display='none'             
			          }



			    var b=$('#box2');
			    var box=$('#box22');
			     	box.style.display='none'
				  b.onmouseover=function(){
			          box.style.display='block'             
			          }
				  b.onmouseout=function(){
			          box.style.display='none'             
			          }


//轮播图
	var bannerAA=$('#bannerAA');
	var ban=$('#bannersmall');
	var as=$('a',ban);
	var lis=$('li',ban);
	var len=as.length;
	var num=0;
	var lf=$('#lf');
	var btnf=$('.zz1')[0];
	var btnr=$('.zz2')[0];
	var flag=true;
	var arr=['url(img/bg1.jpg)','url(img/bg2.jpg)','url(img/bg3.jpg)','url(img/bg4.jpg)','url(img/bg5.jpg)']
//首次加载出现的情况(图的位置是相对于Html,不是相对于js)
	for (var i = 0; i < len; i++) {
			if (i==0) {
				lis[0].style.background='#E5004F';
				animate(lf,{opacity:0})
				continue;
			} 
			animate(as[i],{opacity:0});
			lis[i].style.background='#211616'
		}
//鼠标悬停
	var t=setInterval(move1,1500);
	bannerAA.onmouseover=function(){
		
		clearInterval(t);
		animate(lf,{opacity:1})	
	}
	bannerAA.onmouseout=function(){
		animate(lf,{opacity:0})
		t=setInterval(move1,1500)
	}
	btnr.onclick=function(){
			if(flag){
			move1();
			flag=false;
			}
	}
	btnf.onclick=function(){	
		if(flag){
			move2();
			flag=false;
		}
	}



function move1(){
		num++;
		if (num==len) {
				num=0
			}
		for (var i=0;i<len;i++) {
				animate(as[i],{opacity:0})
				lis[i].style.background='#211616';
				bannerAA.style.backgroundImage='none';
			}
				animate(as[num],{opacity:1},function(){flag=true;})
				lis[num].style.background='#E5004F';
				//animate(bannerAA,{backgroundImage:arr[num],opacity:1},Tween.Quad.easeIn,function(){flag=true;})
				bannerAA.style.backgroundImage=arr[num];
				
}
function move2(){
		num--;
		if (num<0) {
				num=len-1
			}
		for (var i=0;i<len;i++) {
				animate(as[i],{opacity:0},Tween.Quad.easeIn)
				lis[i].style.background='#211616';
				// animate(bannerAA,{opacity:0})
				bannerAA.style.backgroundImage='none';
			}
				animate(as[num],{opacity:1},function(){flag=true;})
				lis[num].style.background='#E5004F';
				bannerAA.style.backgroundImage=arr[um];
				//animate(bannerAA,{backgroundImage:arr[num],opacity:1},Tween.Quad.easeIn,function(){flag=true;})
				// bannerAA.style.backgroundImage=arr[num];
		}
//点击时效果
	for(var i=0;i<len;i++){
			lis[i].index=i;
			lis[i].onclick=function(){
				for(var j=0;j<len;j++){
					animate(as[j],{opacity:0});
					lis[j].style.background='#211616';
				}
					animate(as[this.index],{opacity:1});
					lis[this.index].style.background='#E5004F'
			}
		}
//楼层加载
//获取浏览器可视高
	var obj=document.body.scrollTop?document.body:document.documentElement;//兼容性调试
	var scrollTop=obj.scrollTop;
	var ch=document.documentElement.clientHeight;
	var back=$('.back')[0];
		back.style.display='none';
	//各个楼层距页面顶端的距离
	var floor=$('.floor');
	var backbox=$('#floor-box');
		backbox.style.opacity=0;
	var floorArr=[];
	for (var i = 0; i < floor.length; i++) {
		floorArr.push(floor[i].offsetTop)
	}
//点击楼层跳转
	var flag=true;//控制window.onscroll
	var item=$('.item');
	for (var i = 0; i < item.length; i++) {
		item[i].index=i;
		item[i].onclick=function(){
			flag=false;
			for (var i = 0; i < item.length; i++) {
				item[i].style.opacity=0;
			}
			item[this.index].style.opacity=1;
			// animate(obj,{scrollTop:floorArr[this.index]},function(){flag=true;})
			//这是一个bug因为浏览器返回值是false;第三行
			animate(document.body,{scrollTop:floorArr[this.index]},function(){flag=true;})
			animate(document.documentElement,{scrollTop:floorArr[this.index]},function(){flag=true;})
		}
	

	item[i].onmouseover=function(){
		for (var i = 0; i < item.length; i++) {
				item[i].style.opacity=0;
			}
			item[this.index].style.opacity=1;
	}
	item[i].onmouseout=function(){
		for (var i = 0; i < item.length; i++) {
				item[i].style.opacity=0;
			}
			item[this.index].style.opacity=0;
	}

	};
//按需加载
	window.onscroll=function(){//按需加载
		if (!flag) {return};
		// if(!flag1){return}//搜索栏的开关
		//获取当前滚动条滚动的距离
		var obj=document.body.scrollTop?document.body:document.documentElement;
		var scrollTop=obj.scrollTop;
		//临界条件 可视窗口的宽高+滚动条滚动的距离>=某个楼层的offsetTop(原理)
		for (var i = 0; i <floor.length; i++) {
			if (ch+scrollTop>=floorArr[i]) {
				//获取当前楼层下的图片，追加路径
				var imgs=$('img',floor[i]);
				for (var j = 0; j < imgs.length;j++) {
					imgs[j].src=imgs[j].getAttribute('aa');
				}
			}
		}

//楼层跳转滚动时按钮变色
			for (var i = 0; i <floor.length; i++) {
			if (ch+scrollTop>=floorArr[i]+300) {
				//获取当前楼层下的图片，追加路径
				for (var j = 0; j < item.length;j++) {
					item[j].style.opacity=0;
				}
				item[i].style.opacity=1;
			}
		}

//返回顶部


	 back.onclick=function(){
	 	animate(document.body,{scrollTop:0},function(){flag=true;})
		animate(document.documentElement,{scrollTop:0},function(){flag=true;})

	 }
	 back.onmouseover=function(){
	 	back.style.opacity=1;
	 }
	 
	if (scrollTop>=floorArr[0]-800) {
		back.style.display='block';
		backbox.style.opacity=1;
	} else{
		back.style.display='none';
		backbox.style.opacity=0;
	};


// //出现搜索栏
// 	var foud=$('.found')[0];
// 	if (scrollTop>=floorArr[1]) {
// 		animate(foud,{top:0})
// 			// animate(foud,{top:0},function(){flag1=false});
// 		} else{
// 			animate(foud,{top:-200})
// 		};

	}









}



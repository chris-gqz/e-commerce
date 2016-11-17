window.onload=function(){
	mv.app.change();
	mv.app.torun();
	mv.app.Option('tabNav1','tabCon1');
	mv.app.Option('tabNav2','tabCon2');
	mv.app.Option('tabNav3','tabCon3');
	mv.app.Option('tabNav4','tabCon4');
	mv.app.calendar();
	mv.app.tobanner();
	mv.app.BBS();
	mv.app.tip();
}
var mv={};
 mv.tools={};
mv.tools.getStyle=function(){
	return obj.currentStyle ? obj.currentStyle[attr]:getcomputestyle(obj)[attr];
}

mv.ui={};
mv.app={};
mv.app.change=function(){
	var oUl=document.getElementById("menu")
	var aLi=oUl.getElementsByTagName('li');
	var oText=document.getElementById("searchformtext");
        	var arrText = [
			'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609室',
			'例如：万达影院双人情侣券',
			'例如：东莞出事了，大老虎是谁？',
			'例如：北京初春降雪，天气变幻莫测'
		    ];

    var iNow=0;
    oText.value=arrText[iNow];
    for (var i=0;i<aLi.length;i++) {
    	aLi[i].index=i;
    	aLi[i].onclick=function(){
    		for (var i=0;i<aLi.length;i<i++) {
    			aLi[i].className='gradient';
    		}
    		this.className='active';
    		oText.value=arrText[this.index];
    		iNow=this.index;
    	}
    }
    oText.onfocus=function(){
         if (oText.value==arrText[iNow]) {
         	oText.value='';
         }
    }
    oText.onblur=function(){
    	if (oText.value=='') {
    		oText.value=arrText[iNow];
    	}
    }
    
}


mv.app.tip=function(){
	var arr = [
			'',
			'用户1<br />人气1',
			'用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
			'用户3<br />人气3',
			'用户4<br />人气4',
			'用户5<br />人气5',
			'用户6<br />人气6',
			'用户7<br />人气7',
			'用户8<br />人气8',
			'用户9<br />人气9',
			'用户10<br />人气10'
		];
		var oUl=document.getElementById("hotarea");
		var aLi=oUl.getElementsByTagName('li');
		for (var i=1;i<aLi.length;i++) {
			aLi[i].index=i;
			aLi[i].onmouseover=function(){
                 for (var i=1;i<aLi.length;i++) {
                 	if (aLi[i].getElementsByTagName('p')[0]) {
                 		aLi[i].removeChild(aLi[i].getElementsByTagName('p')[0]);
                 	}                	
                 }
                 this.innerHTML+='<p style="width:'+(this.offsetWidth-12)+'px;height:'+(this.offsetHeight-2)+'px;">'+arr[this.index]+'</p>'
                 
			}
		}
}

mv.app.BBS=function(){
      var oL=document.getElementById("bbsol");
      var aLi=oL.getElementsByTagName('li');
      for (var i=0;i<aLi.length;i++) {
      	aLi[i].onmouseover=function(){
      		for (var i=0;i<aLi.length;i++) {
      			aLi[i].classList.remove('active');
      		}
      		this.classList.add('active');
      	}
      }
}

mv.app.torun=function(){
	var oDiv=document.getElementsByClassName('update')[0];
	var oUl=document.getElementById("searchupdate");
	var oBtnUp=document.getElementById("updateUpBtn");
	var oBtnDown=document.getElementById("updateDownBtn");
	var timer=null;
	var iNow=0;
	var str='';
	var arrData = [
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' }
		];
			for (var i=0;i<arrData.length;i++) {
			str+='<li><a href="'+arrData[i].url+'"><strong>'+arrData[i].name+'</strong> <span>'+arrData[i].time+'分钟前</span> 写了一篇新文章：'+arrData[i].title+'…</a></li>';
		}
		oUl.innerHTML=str;
		
	var iH=oUl.getElementsByTagName('li')[0].offsetHeight;
	oBtnUp.onclick=function(){
		iNow++;

		if (iNow==arrData.length) {
			iNow=0;
		}
		oUl.style.top= -iH*iNow+'px';
		
	}
		oBtnDown.onclick=function(){
		iNow--;
		if (iNow==  -1) {
			iNow=arrData.length-1;
		}
		oUl.style.top= -iH*iNow+'px';
	}
		autoplay();
		
	function autoplay(){
		clearInterval(timer);
		timer=setInterval(function(){
	    iNow++;

        iNow%=arrData.length;
		timer2=setInterval(function(){
			if (iNow==0) {
				oUl.style.top=0+'px';
			}else{
						   var ispeed= -1;
		   var icur=oUl.offsetTop;
		   if (icur== -iH*iNow) {
		   	clearInterval(timer2)
		   } else{
		   	oUl.style.top= icur+ispeed+'px';
		   }
			}

		},30)	
		},7000)
    oUl.onmouseover=function(){
    	clearInterval(timer);
    }
    oUl.onmouseout=function(){
    	autoplay();
    }
	}
	
}

mv.app.Option=function(oNav,aC){
	var oNavUi=document.getElementsByClassName(oNav)[0];
	var aCon=document.getElementsByClassName(aC);
	var aElem=oNavUi.getElementsByTagName('li');
	var aA=oNavUi.getElementsByTagName('a');
	
	for (var i=0;i<aCon.length;i++) {
		aCon[i].style.display='none';
	}
	aElem[0].className='active';
	aCon[0].style.display='block';
	for (var i=0;i<aElem.length;i++) {
		aElem[i].index=i;
		aElem[i].onclick=function(){
		for (var i=0;i<aElem.length;i++) {
			aElem[i].classList.remove('active');
			aElem[i].classList.add('gradient');
			aA[i].classList.remove('triangle_down_red');
			aA[i].classList.add('triangle_down_gray');
		}
		

		this.classList.add('active');
	    aA[this.index].classList.remove('triangle_down_gray');
	    aA[this.index].classList.add('triangle_down_red');
		
			for (var i=0;i<aCon.length;i++) {
		aCon[i].style.display='none';
	}
	aCon[this.index].style.display='block';  
}

mv.app.tobanner=function(){
	var oPic=document.getElementById("fade");
	var oUl=oPic.getElementsByTagName('ul')[0];
	var oOl=oPic.getElementsByTagName('ol')[0];
	var aUlli=oUl.getElementsByTagName('li');
	var aOlli=oOl.getElementsByTagName('li');
	var iNow=0;
	var timer=null;
	var oP=oPic.getElementsByTagName('p')[0];
    var arr=['爸爸去哪儿啦~','人像摄影中的光影感','娇柔妩媚、美艳大方' ];
    oP.innerHTML=arr[2];
	for (var i=0;i<aOlli.length;i++) {
		aOlli[i].index=i;
		aOlli[i].onclick=function(){
			clearInterval(timer);
			oP.innerHTML=arr[this.index];
			iNow=this.index;
			fnFade();
		}
		aOlli[i].onmouseover=function(){
			clearInterval(timer);
		}
		aOlli[i].onmouseout=function(){
			autoplaybanner();
		}
	}
	autoplaybanner();
	function  autoplaybanner(){
		clearInterval(timer);
		    timer=setInterval(function(){
    	iNow++;
    	iNow%=arr.length;
    	fnFade();
	oP.innerHTML=arr[iNow];
    	
    },2000)
	}


    function fnFade(){
    	for (var i=0;i<aUlli.length;i++) {
    		if (i!=iNow) {
    			aUlli[i].style.zIndex=1;
    			aOlli[i].className='';
    		}else{
    			aUlli[i].style.zIndex=2;
    			aOlli[i].className='active';
    		}
    	}
  }
   }
	mv.app.calendar=function(){
	var oCalendar=document.getElementsByClassName('calendar')[0];
	var aImg=oCalendar.getElementsByClassName('img');
	var oToday=document.getElementsByClassName('today_info')[0];
	var oImg=oToday.getElementsByTagName('img')[0];
	var oP=oToday.getElementsByTagName('p')[0];
//	alert(oCalendar.style.width);
	for (var i=0;i<aImg.length;i++) {
		aImg[i].onmouseover=function(){
			oToday.style.visibility='visible';
			oToday.style.top=this.parentNode.offsetTop-30+'px';
			oToday.style.left=this.parentNode.offsetLeft+55+'px';
			oImg.src=this.src;
			oP.innerHTML=this.attributes.info.value;
		}
		aImg[i].onmouseout=function(){
			oToday.style.visibility='hidden';
		}
	}
	
	
	};
	
}
}
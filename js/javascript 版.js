function $(id){
	return document.getElementById(id);
}
window.onload=function(){
	app.change.init();  //导航栏
	app.torun.init();   //滚动条
	app.tip.init();    //滑入遮罩
	app.BBS.init();    //BBS啦！
	app.calendar.init(); //日历浮片
	app.tobanner.init(); //轮播图
    app.tab('tabNav1','tabCon1'); //选项卡
    app.tab('tabNav2','tabCon2');
    app.tab('tabNav3','tabCon3');
    app.tab('tabNav4','tabCon4');
}

var app={};

app.change ={
	iNow:0,
	arrText:[
			'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609室',
			'例如：万达影院双人情侣券',
			'例如：东莞出事了，大老虎是谁？',
			'例如：北京初春降雪，天气变幻莫测'
		    ],
    init: function(){
    	 $('searchformtext').value=this.arrText[this.iNow];
    	 this.clickevent();
    	 $('searchformtext').onfocus=this.getfocus;
    	 $('searchformtext').onblur=this.lostfocus;
    },
    clickevent:function(){
               var aLi=$('menu').getElementsByTagName('li');
               var oText=$('searchformtext');
	           for (var i=0;i<aLi.length;i++) {
    	       aLi[i].index=i;
    	       aLi[i].onclick=function(){
    		   for (var i=0;i<aLi.length;i<i++) {
    			aLi[i].className='gradient';
    		   }
    		   this.className='active';
    		   oText.value=app.change.arrText[this.index];
    		   app.change.iNow=this.index;
    	}
    }	 
    },
	getfocus:function(){
            if (this.value==app.change.arrText[app.change.iNow]) {
         	  this.value='';
              }
	},
	lostfocus:function(){
	          if (this.value=='') {
    		  this.value=app.change.arrText[app.change.iNow];
    	     }
	}
}


app.tip = {
	aLi:[],
	arr:[
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
		],
	init:function(){
		 this.aLi=$("hotarea").getElementsByTagName('li');
		for (var i=1;i<this.aLi.length;i++) {
			this.aLi[i].index=i;
			this.aLi[i].onmouseover=this.show;
		}
	},
	show:function(){
         for(var i = 1; i < app.tip.aLi.length; i++) {
            if(app.tip.aLi[i].getElementsByTagName('p')[0]) {
                 		app.tip.aLi[i].removeChild(app.tip.aLi[i].getElementsByTagName('p')[0]);
            }
        }
        this.innerHTML += '<p style="width:' + (this.offsetWidth - 12) + 'px;height:' + (this.offsetHeight - 2) + 'px;">' + app.tip.arr[this.index] + '</p>'	
	}
}


app.BBS={
	aLi:[],
	init:function(){
		this.aLi=$('bbsol').getElementsByTagName('li');
       for (var i=0;i<this.aLi.length;i++) {
      	this.aLi[i].onmouseover=this.show;
       }		
	},
	show:function(){
        for (var i=0;i<app.BBS.aLi.length;i++) {
      		app.BBS.aLi[i].classList.remove('active');
      	}
      	this.classList.add('active');		
	}
}


app.torun = {
	timer:null,
	timer2:null,
	iNow:0,
	str:'',
	iH:0,
	arrData:[
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.baidu.com' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.baidu.com' },
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.baidu.com' },
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.baidu.com' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.baidu.com' },
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.baidu.com' },
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.baidu.com' },
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.baidu.com' }
		],
	init:function(){
		this.render();
		$("updateUpBtn").onclick=this.clickUp;  
		$("updateDownBtn").onclick=this.clickDown;
		$('searchupdate').onmouseover=this.stop;
		$('searchupdate').onmouseout=this.run;
		this.autoplay();
	},
	render:function(){
			for (var i=0;i<this.arrData.length;i++) {
			this.str+='<li><a href="'+this.arrData[i].url+'"><strong>'+this.arrData[i].name+'</strong> <span>'+this.arrData[i].time+'分钟前</span> 写了一篇新文章：'+this.arrData[i].title+'…</a></li>';
		    }
		    $('searchupdate').innerHTML=this.str;
		    this.iH=$('searchupdate').getElementsByTagName('li')[0].offsetHeight;
	},
	clickUp:function(){
		app.torun.iNow++;
		if (app.torun.iNow==app.torun.arrData.length) {
			app.torun.iNow=0;
		}
		 $('searchupdate').style.top= -app.torun.iH*app.torun.iNow+'px';		
	},
	clickDown:function(){
		app.torun.iNow--;
		if (app.torun.iNow==  -1) {
			app.torun.iNow=app.torun.arrData.length-1;
		}
		$('searchupdate').style.top= -app.torun.iH*app.torun.iNow+'px';		
	},
	autoplay:function(){
		clearInterval(app.torun.timer);
		app.torun.timer=setInterval(function(){
	    app.torun.iNow++;
        app.torun.iNow%=app.torun.arrData.length;
		app.torun.timer2=setInterval(function(){
			if (app.torun.iNow==0) {
				$('searchupdate').style.top=0+'px';
			}else{
		        var ispeed= -1;
		        var icur=$('searchupdate').offsetTop;
		       if (icur== -app.torun.iH*app.torun.iNow) {
		   	   clearInterval(app.torun.timer2)
		       } else{
		   	   $('searchupdate').style.top= icur+ispeed+'px';
		       }
			}
		},60)	
		},7000)		
	},
    stop:function(){
    	clearInterval(app.torun.timer);
    },
    run:function(){
    	app.torun.autoplay();
    }
}


  app.tab = function(oNav, aC) {
  	var oNavUi = document.getElementsByClassName(oNav)[0];
  	var aCon = document.getElementsByClassName(aC);
  	var aElem = oNavUi.getElementsByTagName('li');
  	var aA = oNavUi.getElementsByTagName('a');
  	for(var i = 0; i < aCon.length; i++) {
  		aCon[i].style.display = 'none';
  	}
  	aElem[0].className = 'active';
  	aCon[0].style.display = 'block';
  	for(var i = 0; i < aElem.length; i++) {
  		aElem[i].index = i;
  		aElem[i].onclick = function() {
  			for(var i = 0; i < aElem.length; i++) {
  				aElem[i].classList.remove('active');
  				aElem[i].classList.add('gradient');
  				aA[i].classList.remove('triangle_down_red');
  				aA[i].classList.add('triangle_down_gray');
  			}
  			this.classList.add('active');
  			aA[this.index].classList.remove('triangle_down_gray');
  			aA[this.index].classList.add('triangle_down_red');

  			for(var i = 0; i < aCon.length; i++) {
  				aCon[i].style.display = 'none';
  			}
  			aCon[this.index].style.display = 'block';
  		};
  	};
 };
  

app.tobanner = {
	aUlli:[],
	aOlli:[],
	iNow:0,
	timer:null,
	arr:['爸爸去哪儿啦~','人像摄影中的光影感','娇柔妩媚、美艳大方' ],
	init:function(){
		this.aUlli=$('fadeUl').getElementsByTagName('li');
		this.aOlli=$('fadeOl').getElementsByTagName('li');
		$('wordlist').innerHTML=this.arr[2];
		for (var i=0;i<this.aOlli.length;i++) {
		this.aOlli[i].index=i;
		this.aOlli[i].onclick=this.click;
		this.aOlli[i].onmouseover=this.stop;
		this.aOlli[i].onmouseout=this.run;
	   };
	   this.autoplaybanner();
	},
	click:function(){
		clearInterval(app.tobanner.timer);
		$('wordlist').innerHTML=app.tobanner.arr[this.index];
		app.tobanner.iNow=this.index;
		app.tobanner.fnFade();		
	},
	stop:function(){
		clearInterval(app.tobanner.timer);
	},
	run:function(){
		app.tobanner.autoplaybanner();
	},
	autoplaybanner:function	(){
		clearInterval(app.tobanner.timer);
		    app.tobanner.timer=setInterval(function(){
    	app.tobanner.iNow++;
    	app.tobanner.iNow%=app.tobanner.arr.length;
    	app.tobanner.fnFade();
	$('wordlist').innerHTML=app.tobanner.arr[app.tobanner.iNow];
    },2500)
	},
	fnFade:function(){
    	for (var i=0;i<app.tobanner.aUlli.length;i++) {
    		if (i!=app.tobanner.iNow) {
    			app.tobanner.aUlli[i].style.zIndex=1;
    			app.tobanner.aOlli[i].className='';
    		}else{
    			app.tobanner.aUlli[i].style.zIndex=2;
    			app.tobanner.aOlli[i].className='active';
    		}
    	}
  }
}


app.calendar={
	aImg:[],
	init:function(){
		this.aImg=$('calendar').getElementsByClassName('img')
	for (var i=0;i<this.aImg.length;i++) {
		this.aImg[i].onmouseover=this.hidden;
		this.aImg[i].onmouseout=function(){
			$('today_info').style.visibility='hidden';
		}
	}		
	},
	hidden:function(){
			$('today_info').style.visibility='visible';
			$('today_info').style.top=this.parentNode.offsetTop-30+'px';
			$('today_info').style.left=this.parentNode.offsetLeft+55+'px';
			$('today_info_img').src=this.src;
			$('today_info_p').innerHTML=this.attributes.info.value;
	},
	show:function(){
		$('today_info').style.visibility='hidden';
	}
}

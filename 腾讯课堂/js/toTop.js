window.onload = function (){
    var scrollEle = clientEle = document.documentElement,  
    toTopBtn = document.getElementById("toTop"),  
    compatMode = document.compatMode,  
    isChrome = window.navigator.userAgent.indexOf("Chrome") === -1 ? false : true;  
    //不同渲染模式以及Chrome的预处理  
    if(compatMode === "BackCompat" || isChrome){  
        scrollEle = document.body;  
    }
    if(compatMode === "BackCompat"){  
        clientEle = document.body;  
    }
    //返回顶部按钮的点击响应（注册函数），时间间隔和高度缩减率可以调节  
    toTopBtn.onclick = function(){  
        var moveInterval = setInterval(moveScroll, 10);  
        function moveScroll() {  
            setScrollTop(getScrollTop() / 1.2);  
            if(getScrollTop() === 0) {  
                clearInterval(moveInterval);  
            }
        }  
    }  
    //滚动时判断是否显示返回顶部按钮（注册函数）  
    window.onscroll = function() {  
        var display = toTopBtn.style.display;  
        if(getScrollTop() > getClientHeight()) {  
            if(display === "none" || display === ""){  
            	document.getElementById("fix_scroll").style.display="block";  
                toTopBtn.style.display = "block";
               
				document.getElementById("toTop2").style.display="block";  
				document.getElementById("toTop3").style.display="block";  
            }
        } else{  
          if(display === "block" || display === ""){  
          	    document.getElementById("fix_scroll").style.display="none";  
                toTopBtn.style.display = "none";
				document.getElementById("toTop2").style.display="none";  
				document.getElementById("toTop3").style.display="none";  
          }  
        }  
    }  
    //获取和设置scrollTop  
    function getScrollTop() {  
        return scrollEle.scrollTop;  
    }  
    function setScrollTop(value){  
        scrollEle.scrollTop = value;  
    }
    //获取当前网页的展示高度（第一屏高度），此处Chrome正常  
    function getClientHeight(){  
        return clientEle.clientHeight;  
    }
}	

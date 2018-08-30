/*互联产品导航栏*/

$(function(){
	$("#nav_main .nav_VideoPlay ul li:eq(0)").find("div").addClass("lengthBar");
	$("#nav_main .nav_VideoPlay ul li:eq(0)").css('color','#188EEE');
	$("#nav_main .nav_VideoPlay ul li").click(function(){
		$(this).find("div").addClass("lengthBar");
		$(this).siblings().find("div").removeClass("lengthBar");
		$(this).css('color','#188EEE');
		$(this).siblings().css('color','#666');
	})
	
	/*课程移动上去添加边框*/
	
	
})

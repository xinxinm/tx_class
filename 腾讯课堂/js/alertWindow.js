$(function(){
	/*
	 *这个是扫码的时候移动特效
	 * */
	$(".sm").mouseover(function(){
		$(this).stop().animate({left:'-50px'},500);
		$(this).find(".sm_move").show();
	})
	
	$(".sm").mouseout(function(){
		$(this).stop().animate({left:'0px'},500);
		$(this).find(".sm_move").hide();
	})
	
	/*
	 *点击导航栏时候两种界面切换
	 * */
	
	$("#check_view ul li:eq(0)").click(function(){
		$(this).css('background','#31A4F6');
		$(this).find("p").css('color','#fff');
		$("#check_view ul li:eq(1)").css('background','#F1F1F1');
		$("#check_view ul li:eq(1)").find("p").css('color','#666');
		$("#QQ_Icon").css('color','#fff');
		$("#weChat_Icon").css('color','#666');
		$(".show_view").show();
		$(".show_view2").hide();
		$(".show_view3").hide();
	})
	
	$("#check_view ul li:eq(1)").click(function(){
		$(this).css('background','#4AB218');
		$(this).find("p").css('color','#fff');
		$("#check_view ul li:eq(0)").css('background','#F1F1F1');
		$("#check_view ul li:eq(0)").find("p").css('color','#666');
		$("#weChat_Icon").css('color','#fff');
		$("#QQ_Icon").css('color','#666');
		$(".show_view").hide();
		$(".show_view2").show();
		$(".show_view3").hide();
	})
	
	/*关闭弹窗按钮*/
	$("#fix_submit").hide();
	$("#close_Btn").click(function(){
		$("#fix_submit").hide();
		
	})
	
	$(".sub_Btn").click(function(){
		$("#fix_submit").show();
		
	})
	/*使用账号登陆*/
	$(".view_click ul li:eq(0)").click(function(){
		$(".show_view").hide();
		$(".show_view3").show();
		
	})
	
	/*设置右边浮框特效*/
	$("#fix_scroll #toTop").mouseover(function(){
		$(this).find("i").hide();
		$(this).find(".hide").stop().animate({top:'-10px'},300).show();
	})
	
	$("#fix_scroll #toTop").mouseout(function(){
		$(this).find("i").show();
		$(this).find(".hide").stop().animate({top:'15px'},0).hide();
	})
	
	$("#fix_scroll #toTop").click(function(){
		$(this).find(".hide").stop().animate({top:'-600px'},300).show();
		
	})
	
	
	$("#fix_scroll #appSm").mouseover(function(){
		$(this).find("i").hide();
		$(this).find("p").show();
	})
	
	$("#fix_scroll #appSm").mouseout(function(){
		$(this).find("i").show();
		$(this).find("p").hide();
	})
	
	$("#fix_scroll #write").mouseover(function(){
		$(this).find("i").hide();
		$(this).find("p").show();
	})
	
	$("#fix_scroll #write").mouseout(function(){
		$(this).find("i").show();
		$(this).find("p").hide();
	})
	
	/*返回顶部js代码*/
	
	
})

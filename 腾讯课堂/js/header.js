/*
 * 这个JQ代码是写腾讯课堂的头部的特效
 * */
$(function(){
	var x = 1  //这个是写出点击课程的下拉表切换
	$(".header_main_class").click(function(){
			if(x == 1){
				$(this).addClass("white");
				$(this).find(".hide").show();
				$("#iconfont1").hide();
				$("#iconfont2").show();
				x = 0;
			}else if(x == 0){
				$(this).removeClass("white");
				$(this).find(".hide").hide();
				$("#iconfont1").show();
				$("#iconfont2").hide();
				x = 1;
			}
		})
		//这个是写课堂和机构的切换
		var y = 1;
		$(".header_main_class").find(".hide").click(function(){
			if(y == 1){
				$(this).parent().find("p:eq(0)").text("机构");
				$(this).parent().find("p:eq(1)").text("课程");
				$(".head_serch_text").attr('placeholder','搜索机构');
				
				y = 0;
			}else if(y == 0)
			{
				$(this).parent().find("p:eq(0)").text("课程");
				$(this).parent().find("p:eq(1)").text("机构");
				$(".head_serch_text").attr('placeholder','搜索课程');
				
				y = 1;
			}	
		});
	
	
	/*写出课程笔记*/
		var a = 1  //这个是写出点击课程的下拉表切换
		$(".swith_class").click(function(){
			if(a == 1){
				$(this).find(".hide").show();
				a = 0;
			}else if(a == 0){
				$(this).find(".hide").hide();
				a = 1;
			}
		})
		//这个是写课堂和机构的切换
		var b = 1;
		$(".swith_class").find(".hide").click(function(){
			if(b == 1){
				$(this).parent().find("span:eq(0)").text("机构");
				$(this).parent().find("span:eq(1)").text("课程");
				$(".serch-text").attr('placeholder','搜索机构');
				
				b = 0;
			}else if(b == 0)
			{
				$(this).parent().find("span:eq(0)").text("课程");
				$(this).parent().find("span:eq(1)").text("机构");
				$(".serch-text").attr('placeholder','搜索课程');
				
				b = 1;
			}	
		});
	
	
	
})



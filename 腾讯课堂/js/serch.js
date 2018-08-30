$(function(){
	var x = 1  //这个是写出点击课程的下拉表切换
	$(".swith_course").click(function(){
			if(x == 1){
				$(this).find(".hide").show();
				x = 0;
			}else if(x == 0){
				$(this).find(".hide").hide();
				x = 1;
			}
		})
	
	var y = 1;
	$(".swith_course").find(".hide").click(function(){
		if(y == 1){
			$(this).parent().find("span:eq(0)").text("机构");
			$(this).parent().find("span:eq(1)").text("课程");
			$(".serch-text").attr('placeholder','搜索机构');
			
			y = 0;
		}else if(y == 0)
		{
			$(this).parent().find("p:eq(0)").text("课程");
			$(this).parent().find("p:eq(1)").text("机构");
			$(".head_serch_text").attr('placeholder','搜索课程');
			
			y = 1;
		}
		});

})

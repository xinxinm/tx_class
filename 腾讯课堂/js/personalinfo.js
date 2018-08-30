$(function(){
	$("#personal_middle_main .nav ul li:eq(0)").find("div:eq(1)").addClass("add_bluebar");
	$("#personal_middle_main .nav ul li:eq(0)").find(".hide").show();
	$("#personal_middle_main .nav ul li").click(function(){
		$(this).find("div:eq(1)").addClass("add_bluebar");
		$(this).siblings().find("div:eq(1)").removeClass("add_bluebar");
		$(this).find(".hide").show();
		$(this).siblings().find(".hide").hide();
	})
})

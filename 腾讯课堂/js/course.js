$(document).ready(function(){
    var text=$("textarea").val();	//获取文本域内容
    var counter=text.length;					//获取文本域内容长度
    $("#numtj var").text(300-counter);			//提示还能输入多少字符s
    $(document).keyup(function() {				//按键弹起时触发
        var text=$("textarea").val();	//重新获取文本域内容
        var counter=text.length;					//重新获取文本域内容长度
		if(counter>=300)							
		{
			$("#numtj var").text("0");//文本域长度大于100时提示
			$("textarea").attr("readonly",true);//设置文本域为只读
		}
		else
        	$("#numtj var").text(300-counter);
    });
});
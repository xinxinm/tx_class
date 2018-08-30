/*用户名的验证*/

	function checkNickName()
	{
		var nickname = "";
		nickname = document.getElementById("nickname").value;
	   
		if(nickname == "")
			{
				document.getElementById("nicknameId").innerHTML='<img src="img/error.png" style="float:left"><font color="red" size="-1" style="float:left;margin-left:5px">昵称不能为空</font>';
				return false;
			}
			else
			{
				document.getElementById("nicknameId").innerHTML='<font color="green" size="-1"></font>';
				return true;
		}
	}


/*手机号码的验证*/
	function checkTel()
	{
		var tel="";
		tel=document.getElementById("tel").value;
		var reg=/^1\d{10}$/;
		if(reg.test(tel)==false)
			{
				document.getElementById("telId").innerHTML='<img src="img/error.png" style="float:left"><font color="red" size="-1" style="float:left;margin-left:5px">输入的手机号码有误</font>';
				return false;
			}
			else
			{
				document.getElementById("telId").innerHTML='<font color="green" size="-1"></font>';
				return true;
			}
	}
	/*设置密码验证*/
	 function checkPassword()
	{
		var password="";
		password=document.getElementById("pwd").value;
		var reg=/^[a-zA-Z0-9]{8,16}$/;
		if(reg.test(password)==false)
			{
				document.getElementById("pwdId").innerHTML='<img src="img/green.png" style="float:left"><font color="red" size="-1" style="float:left;margin-left:5px">不能包括空格</font><br/><img src="img/info.png" style="float:left"><font color="red" size="-1" style="float:left;margin-left:5px">长度为8-16个字符</font><br/><img src="img/info.png" style="float:left"><font color="red" size="-1" style="float:left;margin-left:5px;margin-bottom:20px">必须包含字母、数字至少两种</font>';
				return false;
			}
			else
			{
				document.getElementById("pwdId").innerHTML='';
				return true;
			}
	}


/*需要补充验证效果。*/
//alert("aaa");
function checkchx(){
	var chx = document.getElementById("chx");
	if(chx.checked){
		
		return true;
	}else {
		return false;
	}
}

function checkchx2(){
	var chx2 = document.getElementById("chx2");
	if(chx2.checked){
	
		return true;
	}else {
		return false;
	}
}


function checkAll()
{	 
	checkNickName();
	checkTel();
	checkPassword();
	checkchx();
	checkchx2();
	if(checkTel()&&checkNickName()&&checkPassword()&&checkchx()&&checkchx2())
	{
		alert("注册成功,您将进入主页面");
		return true;	
	}
	else {
		return false;	
	}
	
}





function showcity()
{	 //var option1,option2;
//	 var province=document.getElementById("province").value;
//	 
//	 switch(province)
//	 {
//		case "湖北省":
//		option1=new Option("武汉市","武汉市");	
//	    option2=new Option("孝感市","孝感市");
//		break;
//		
//		case "湖南省":
//		option1=new Option("长沙市","长沙市");	
//	    option2=new Option("株洲市","株洲市");
//		break;
//		
//		case "四川省" :
//		option1=new Option("成都市","成都市");	
//	    option2=new Option("自贡市","自贡市");
//		break;
//		
//		 
//	 }
//	 document.getElementById("city").length=0;
//	 document.getElementById("city").add(option1,null);
//	 document.getElementById("city").add(option2,null);

	 var option;
	// var index=document.getElementById("province").selectedIndex-1;
	   var province=document.getElementById("province").value;
	 var arry=new Array();
	 arry['北京']=['东城','西城','崇文','宣武','朝阳','海淀','丰台','石景山','通州','昌平','房山','大兴','顺义','密云','怀柔','延庆','平谷','门头沟'];
	 arry['上海']=['黄埔','卢湾','徐汇','长林','静安','普陀','闸北','虹口','杨浦','浦东','闵行','宝山','嘉定','青浦','奉贤','南汇','崇明','青山','松江'];
	 arry['广州']=['天河','荔湾','海珠','越秀','白云','范鸥','黄埔','花都','增城','萝岗','东莞','佛山'];
	 arry['深圳']=['福田','罗湖','南山','宝安','龙岗','盐田','布吉','光明新区','坪山新区'];
   arry['杭州']=['西湖','上城','下城','江干','滨江','余杭','萧山','建德','富阳','临安','桐庐','淳安'];
	arry['南京']=['玄武','鼓楼','建业','白下','秦淮','下关','西峡','江林','雨花台','浦口','六合','溧水','高淳','大厂'];
	arry['天津']=['和平','城东','城西','南开','河北','塘沽','大港','红桥','东丽','西青','北辰','津南','开发区'];
	arry['武汉']=['江岸','武昌','汉口','江汉','硚口','汉阳','洪山','东西湖'];
	arry['成都']=['青阳','锦江','金牛','武侯','成华','龙泉驿','新都','温江区','双流','郫县','高新区','高新西区'];
 arry['长沙']=['岳麓','芙蓉','天心','开福','雨花'];
  arry['济南']=['市中','历下','天桥','淮阴','历城','高新'];
  	arry['保定']=['新市','南市','北市','涿州','定州','安国','高碑店','高开'];
	arry['重庆']=['大渡口','江北','渝中','沙坪坝','九龙坡','南岸','贝培','渝北','巴南'];	
	arry['青岛']=['市南','市北','城阳','四方','李沧','黄岛','崂山']
;
   arry['苏州']=['平江','吴中','昆山','长寿','张家港','太仓','吴江','相城'];
   arry['太原']=['杏花岭','小店','迎泽','尖草坪','万柏林','锦苑'];
   arry['厦门']=['集美','海昌','思明','湖里','同安','翔安'];
   arry['西安']=['莲湖','新城','碑林','雁塔','未央','阎良','临潼','长安','高新区','杨陵'];	
   arry['郑州']=['中原','金水','二七','管城回族区','惠极','上街','郑东新区'];
   arry['南昌']=['东湖','西湖','青云谱','青山湖','湾里'];
   arry['福州']=['鼓楼','台江','苍山','马尾','晋安'];							
	 document.getElementById("city").length=0;
	 for(var i in arry[province])
	 {
		option=new Option(arry[province][i],arry[province][i]);	
		
		if(navigator.appName=="Microsoft Internet Explorer")
		document.getElementById("city").add(option);
		
		else
		document.getElementById("city").add(option,null);
		 
	 }
	
}

var sexId=$("sexId");
sexId.innerHTML="";
var j=0;
var sex=document.getElementsByName("sex")





  $(function () {
        $("#obj").mouseover(function () {
            $("#btnleft,#btnright").css("display","block")
        });
        $("#obj").mouseout(function () {
            $("#btnleft,#btnright").css("display","none")
        });
        var $time,index=0;
        var arrLi = $("#oul li");
//        遍历所有的图片
        arrLi.each(function (index) {
//            依照图片的索引为按钮组插入新的li，并附加
//            点击事件
//            $("<li>"+(index+1)+"</li>").appendTo("#btns")
//                    插入带序号的按钮
            $("<li></li>").appendTo("#btns")
//            插入不带序号的按钮
//                    .mouseover(function (){
////                        预先定义的函数
////                        作用是依照转入的索引，切换图片
//                        btn_click(index);
//                    })
                    .click(function (){
                        btn_click(index);
                    })
        });
        $("#btnleft").click(function () {
            if(--index<0){
                index = arrLi.length-1;
            }
            btn_click(index);
        });
        $("#btnright").click(function () {
            //索引值自增，到结尾返回开始
            index = ++index % arrLi.length;
            btn_click(index);
        });
        //预先使第一个按钮变成选中状态
        btn_selected(0);
        $time = setInterval(aa,3000);

        /*
        * 函数名称：aa
        * 函数的作用：自动计算index的变化，调用其它函数
        *             执行图片变化的过程
        * 接受参数：无
        * 返回值：无
        * 编写人：徐海东
        * 编写时间：2016-6-7 上午
        * 修改记录：
        * 2016-6-7 下午 由XXX修改，增加了XX功能
        * */
        function aa() {
            if(++index>arrLi.length-1){
                index=0
            }
            bb();
        }

        /*
        * 函数名称：bb
        * 作用：依据index的值来完成图片的切换
        *
        * */
        function bb() {
            btn_selected(index);
            arrLi.eq(index).css({
                zIndex:2,
                opacity:0
            }).stop(true).animate({
                opacity:1
            }).siblings("li").stop(true).animate({
                opacity:0
            },function () {
                $(this).css({
                    zIndex:1
                })
            })
        }

        /*
        * btn_selected
        * 参数index 数字（索引）
        * 依据传入的索引，改变控制按钮的显示状态
        * */
        function btn_selected(index) {
            $("#btns > li")
                    .eq(index)
                    .addClass("selected")
                    .siblings()
                    .removeClass("selected")
        }

        /*
        * btn_click
        * 控制按钮点击时，切换图片
        * 参数index 是按钮的索引值
        * */
        function btn_click(btn_index) {
            clearInterval($time);
            index = btn_index;
            bb();
            $time = setInterval(aa,3000);
        }
    })
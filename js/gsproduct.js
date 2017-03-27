/**
 * Created by admin on 2017/3/22.
 */
$(function(){
        $(".list>div").on("click",function(){
            var index=$(this).index();
            $(".gc>ul").eq(index).toggleClass("current");
            //console.log(index)
            if(index==0){
                $.ajax({
                    dateType:"json",
                    url:"http://192.168.15.22:3000/api/getgsshop",
                    success:function(date){
                        //console.log(date);
                        var html=template("li1",date);
                        $(".gc>ul").eq(index).html(html);
                        $(".gc>ul").eq(index).children("li").on("click",function(){
                           // $(".gc>ul").eq(index).toggleClass("current");
                            var text=$(this).find("span").eq(0).text();
                            $(".list>div").eq(index).find("span").eq(0).text(text);
                            $(this).children("span").eq(1)
                                .addClass("iconfont icon-gou fr")
                                .parent().siblings("li").children("span").eq(1)                                     .removeClass("iconfont icon-gou fr");



                        })
                    }
                })
            }
            else if(index==1){
                $.ajax({
                    dateType:"json",
                    url:"http://192.168.15.22:3000/api/getgsshoparea",
                    success:function(date){
                        console.log(date);
                        var html=template("li2",date);
                        $(".gc>ul").eq(index).html(html);
                        $(".gc>ul").eq(index).find("li").on("click",function(){
                            //$(".gc>ul").eq(index).toggleClass("current");
                           var text= $(this).text();
                           text=text.slice(0,2);
                            console.log(text);
                            $(".list>div").eq(index).find("span").eq(0).text(text);
                        })

                    }
                })
            }

            if($(".gc>ul").eq(index).attr("class")){
                $(".gc>ul").eq(index).siblings().removeClass("current");
                $(".gc>ul").eq(index).show().siblings().hide();

             }

    })
    $.ajax({
        dateType:"json",
        url:"http://192.168.15.22:3000/api/getgsproduct?shopid=1&areaid=1 ",
        success:function(date){
            console.log(date);

        }
    })
})
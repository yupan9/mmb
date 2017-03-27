/**
 * Created by admin on 2017/3/21.
 */
$(function(){
    var herf=location.search;
    var text=window.sessionStorage.getItem("text");
    $(".mmb-pianyi span").text(text);
    $.ajax({
        type:"get",
        dateType:"json",
        url:"http://192.168.15.22:3000/api/getcouponproduct"+herf,
        success:function(date){
            var html=template("tproduct",date);
            $(".mmb-product").html(html);
            var heights=window.screen.height;

            $(".product").on("click",function(){
                $(".mask").css("height",heights);
                $(".mask").css("display","block");
                var html1=template("text1",date);
                $(".ppt ul").html(html1);
                $(".ppt").on("click",function(even){
                    even.stopPropagation();
                })
                var i=$(this).index();
                console.log(i);
                var widths= $(".ppt ul>li").width();
                console.log(widths);
                $(".ppt ul").css({
                    "transition":"all 0s ",
                    "-webkit-transition":"all 0s ",
                    "transform": "translateX("+(-widths*i) +"px)",

                });
                $(".mask").on("click",function(){
                    $(".mask").css("display","none");
                })
                $(".rights").on("click",function(){
                    i++;
                    console.log(i);
                    var lis=$(".ppt ul>li").length-1
                    if(i>=lis){
                        i=lis;
                    }
                    console.log((-widths*i));
                    $(".ppt ul").css({
                        "transition":"all .5s ",
                        "-webkit-transition":"all .5s ",
                        "transform": "translateX("+(-widths*i)+"px)"
                    });
                    //console.log(date)
                })
                $(".lefts").on("click",function(){
                    i--;
                    if(i<=0){
                        i=0;
                    }
                    $(".ppt ul").css({
                        "transition":"all .5s ",
                        "-webkit-transition":"all .5s ",
                        "transform": "translateX("+(-widths*i) +"px)"
                    })
                })



            })

        }
    })



})

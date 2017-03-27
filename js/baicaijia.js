/**
 * Created by admin on 2017/3/20.
 */
$(function(){

    /**
     *
     */
        $.ajax({
            type:"get",
            dateType:"json",
            url:"http://192.168.15.22:3000/api/getbaicaijiatitle",
            success:function(date){
                var html=template("titles",date);
                $(".ulss").html(html);
                two(0);
                //实现导航栏的滑动
                //1.初始化数据
                var startx=0;
                var distancex=0;
                var movex=0;
                var distance=0;
              var lis=$(".ulss>li").outerWidth();
                console.log(lis);
                var leghts=$(".ulss>li").length
                var widths=lis*leghts
                var width=screen.width;
                console.log(width);
                //console.log(widths);
                $(".ulss").on("touchstart",function(e){
                    startx= e.touches[0].clientX;
                })
                $(".ulss").on("touchmove",function(e){
                    movex= e.touches[0].clientX;
                    distancex=movex-startx;
                    console.log(distance + distancex);
                    if(distance+distancex>=0){
                        distance=0;
                        return;
                    }
                     if(Math.abs(distance+distancex)+width>widths){
                        console.log(widths - width);
                        distance=-widths+width;
                        return ;
                    }
                    $(this).css({
                        "transform":"translateX("+(distance+distancex)+"px)"
                    })

                })
                $(".ulss").on("touchend",function(e){
                     distance+=distancex

                })


                $(".mmb-nav li").on("click",function(){
                    var index=$(this).index();
                    $(this).find("a").css({
                        "borderBottom":"3px solid #e4393c"
                    }).parent("li").siblings("li").find("a").css({
                        "borderBottom":"none"
                    })
                    for(var key in date){
                      var arr=date[key];
                    }
                    var herf=arr[index].titleId;
                    two(herf);
                })
            }
})




    function two(herf){
        $.ajax({
            type:"get",
            dateType:"json",
            url:"http://192.168.15.22:3000/api/getbaicaijiaproduct?titleid="+herf,
            success:function(date){
                var  html1=template("tproduct",date);
                $(".mmb-product").html(html1);

                $(".baifenbi span").each(function(i,v){
                    var text=$(this).text()
                    $(this).html("<s></s>");
                    $(this).find("s").html(text);
                    $(this).find("s").css({
                        "width":text
                    })
                })
            }
        })
    }


})
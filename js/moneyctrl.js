/**
 * Created by admin on 2017/3/16.
 */
$(function(){
    var is=1;
    var im=1;
    $.ajax({
        date:"get",
        getType:"json",
        url:"http://192.168.15.22:3000/api/getmoneyctrl",
        success:function(date){
            console.log(date);
            var html=template('give', date);
            $('.mmb-product').html(html);
            var a=date.totalCount;
            var b=date.pagesize;
            var c=Math.ceil(a/b);
            $(".lis>s").text(c);
            for(var i=1;i<=c;i++){
                var lis="<li>"+i+"</li>";
                $(".uls").append(lis);
            }
            $(".uls").find("li").on("click",function(){
                $(".uls").toggleClass("overu");
                $(".uls").find("li:gt(0)").on("click",function(){
                    var texts=$(this).text();
                    $(".lis>span").text(texts);
                    is=im=$(this).index();
                    $.ajax({
                        date: "get",
                        getType: "json",
                        url: "http://192.168.15.22:3000/api/getmoneyctrl?pageid="+im,
                        success: function (date) {
                            var html=template('give', date);
                            $('.mmb-product').html(html);
                        }
                    })
                })
            })

        }
    })

    $(".las").on("click",function() {
        is++;
        $.ajax({
            date: "get",
            getType: "json",
            url: "http://192.168.15.22:3000/api/getmoneyctrl?pageid="+is,
            success: function (date) {
                var html=template('give', date);
                $('.mmb-product').html(html);
                var a=date.totalCount;
                var b=date.pagesize;
                var c=Math.ceil(a/b);
                if(is<=c){
                    $(".insert").html("");
                }
                if(is>c){
                    $(".insert").html("无更多详情页面");
                    is=c;
                }
                $(".lis>span").html(is);


            }
        })
    })
    $(".fis").on("click",function() {
        is--;
        if(is<1){
            is=1;
        }
        $.ajax({
            date: "get",
            getType: "json",
            url: "http://192.168.15.22:3000/api/getmoneyctrl?pageid="+is,
            success: function (date) {
                var html=template('give', date);
                $('.mmb-product').html(html);
                var a=date.totalCount;
                var b=date.pagesize;
                var c=Math.ceil(a/b);

                if(is<=c){
                    $(".insert").html("");
                }
                $(".lis>span").html(is);

            }
        })
    })
    $(".deletes").on("click",function(){
        $(".mmb-fixt").hide();
    })
})

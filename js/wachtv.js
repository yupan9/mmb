/**
 * Created by admin on 2017/3/16.
 */
$(function(){
    var herf=window.location.search;
    var arr=herf.split('&');
    var is=1;
    var im=1;
    $.ajax({
        date:"get",
        getType:"json",
        url:"http://192.168.15.22:3000/api/getproductlist"+herf,
        success:function(date){
            var html=template('give', date);
            $('.mmb-product').html(html);
            $(".tiaozhuan").on("click",function(){
                console.log(date);
                var text=$(this).find(".media-heading").text();
                var arr=text.split(" ")[0];
                window.sessionStorage.setItem("wachtv",arr);



            })




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
                            url: "http://192.168.15.22:3000/api/getproductlist"+arr[0]+"&pageid="+im,
                            success: function (date) {
                                console.log(date);
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
            url: "http://192.168.15.22:3000/api/getproductlist"+arr[0]+"&pageid="+is,
            success: function (date) {
                console.log("http://192.168.15.22:3000/api/getproductlist" + arr[0] + "&pageid=" + is);
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
            url: "http://192.168.15.22:3000/api/getproductlist"+arr[0]+"&pageid="+is,
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

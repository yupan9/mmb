/**
 * Created by admin on 2017/3/15.
 */
$(function(){
    $.ajax({
        type:"get",
        dateType:"json",
        url:"http://192.168.15.22:3000/api/getindexmenu",
        success:function(date){
            //console.log(date);
            var html = template('test', date);
            $('.mmb-books').html(html);
                $(".qi").eq(7).on("click",function(){
                    $(".qi").eq(7).nextAll().toggleClass("hide");
                })
        }
    })
    $.ajax({
        type:"get",
        dateType:"json",
        url:"http://192.168.15.22:3000/api/getmoneyctrl",
        success:function(date){
            console.log(date);
            var html = template('give', date);
            $('.mmb-product').html(html);
        }
    })
})
/**
 * Created by admin on 2017/3/21.
 */
$(function(){
    $.ajax({
        dateType:"json",
        type:"get",
        url:"http://192.168.15.22:3000/api/getcoupon",
        success:function(date){
            console.log(date);
            var html=template("texts",date);
            $(".mmb-product>ul").html(html)
            $(".mmb-product>ul>li>a").on("click",function(){
                var text=$(this).children("p").text();
                console.log(text);
                window.sessionStorage.setItem("text",text);
            })

        }


    })
})
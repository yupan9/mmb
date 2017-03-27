/**
 * Created by admin on 2017/3/19.
 */
$(function(){
    $.ajax({
        type:"get",
        dateType:"json",
        url:"http://192.168.15.22:3000/api/getinlanddiscount",
        success:function(date){
            console.log(date);
            var html=template("text",date);
            $(".product").html(html);
        }
    })
})

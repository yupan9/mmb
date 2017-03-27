/**
 * Created by admin on 2017/3/19.
 */
$(function(){
    var herf=window.location.search
    console.log(herf);
    var arr=herf.split("=");
    console.log(arr[1]);
    if(arr[1]>=20){
        $.ajax({
            type:"get",
            dateType:"json",
            url:"http://192.168.15.22:3000/api/getmoneyctrlproduct"+herf,
            success:function(date){
                console.log(date);
                for(var value in date){
                    console.log(date[value][0].productComment);
                }
                var html=template("texts",date);
                $(".imt").html(html);
            }
        })
    }else{
        $.ajax({
            type:"get",
            dateType:"json",
            url:"http://192.168.15.22:3000/api/getdiscountproduct"+herf,
            success:function(date){
                console.log(date);
                for(var value in date){
                    console.log(date[value][0].productComment);
                }
                var html=template("texts1",date);
                $(".imt").html(html);
            }
        })
    }

})

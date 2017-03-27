/**
 * Created by admin on 2017/3/18.
 */
$(function(){
    $(".games").on("click",function(){
        window.history.go(-1);
    })
    var names=window.sessionStorage.getItem("names")
    $(".games>span").text(names);
    var wacth=window.sessionStorage.getItem("wachtv");
    $(".games1").text(wacth);

    var herf=window.location.search;
    console.log(herf);
    $.ajax({
        type:"get",
        dateType:"json",
        url:"http://192.168.15.22:3000/api/getproduct"+herf,
        success:function(date){
            console.log(date);
            var html=template("imgs",date);
            $(".mmb-product").html(html);
            var html=template("jd",date);
            $(".jd").html(html);


        }
    })

    $.ajax({
        type:"get",
        dateType:"json",
        url:"http://192.168.15.22:3000/api/getproductcom"+herf,
        success:function(date){
            console.log(date);
            var html1=template("ask",date);
            $(".mmb-ask").html(html1);

        }

    })













    $(".deletes").on("click",function(){
        $(".mmb-fixt").hide();
    })
    $(".deletes1").on("click",function(){
        $(".mmb-middtop").hide();
    })


})
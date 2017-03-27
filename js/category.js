/**
 * Created by admin on 2017/3/15.
 */
$(function(){
    $.ajax({
        type:"get",
        dateType:"json",
        url:"http://192.168.15.22:3000/api/getcategorytitle",
        success:function(date){
            //console.log(date);
            var html1=template("product",date);
            $(".panel-group").html(html1);
            $(".dianji").each(function(i,v){
                $(v).on("click",function(){
                    $.ajax({
                        type:"get",
                        dateType:"json",
                        url:"http://192.168.15.22:3000/api/getcategory?titleid="+i,
                        success:function(date){
                            var html=template("tables",date);
                            $(v).next().find(".tables").html(html);
                            $(".textwenzi").on("click",function(){
                                window.sessionStorage.setItem("names",$(this).text());
                            })
                        }

                    })
                })
            })

        }
    })
    $(".deletes").on("click",function(){
        $(".mmb-fixt").hide();
    })


})

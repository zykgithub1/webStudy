$(function () {
    var flag=true;

    var toolTop=$(".recommend").offset().top;
    function toggleTool() {
        if($(document).scrollTop()>=toolTop){
            $(".fixedtool").fadeIn();
        }else{
            $(".fixedtool").fadeOut();
        }
    }
    toggleTool();

    $(window).scroll(function () {
        toggleTool();
        if(flag){
            $(".floor .w").each(function (i,ele) {
                if($(document).scrollTop()>=$(ele).offset().top){
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current");
                }
            })
        }
    })
    $(".fixedtool li").click(function(){
        flag=false;
        var index=$(this).index();
        var current=$(".floor .w").eq(index).offset().top;
        $("body,html").stop().animate({
            scrollTop:current

        },function () {
            flag=true;
        })
        $(this).addClass("current").siblings().stop().removeClass("current");
        //点击了小li此时页面不需要执行页面滚动时间里面li的scroll的背景选择：
        //截流阀（互斥锁）
    })

})
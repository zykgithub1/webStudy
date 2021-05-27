window.addEventListener('load',function () {


    var circle=0;
    $(".focus ul li").each(function (index,doElem) {
        $(".focus ol").append("<li></li>").children().click(function () {
            $(this).addClass("current").siblings().removeClass("current");
            num=$(this).index();
            circle=num;
        });
    })
    $("ol li").eq(0).addClass("current");
    var first=$(".focus ul li").eq(0).clone(true);
    $(".focus ul").append(first);
    var focusWidth = $(".focus")[0].offsetWidth;
    $(".focus").mouseenter(function () {
        $(".arrow-l").show();
        $(".arrow-r").show();
    }).mouseleave(function () {
        $(".arrow-l").hide();
        $(".arrow-r").hide();
    });
    var num=0;
    $("ol li").click(function () {
        num=$(this).index();
        // console.log(num);
        // console.log(focusWidth);
        $(this).parent().siblings("ul").animate({
            left:-num*focusWidth+"px"
        })
    });

    var flag=true;
    function changeCircle() {
        $(".focus ol li").removeClass("current");
        $(".focus ol li").eq(circle).addClass("current");
    }
    $(".arrow-l").click(function () {
        if(flag){
            flag=false;
            if(num==0){
                num=$(".focus ul li").length-1;
                $(".focus ul")[0].style.left=-num * focusWidth + 'px';
            }
            // console.log(num);
            num--;
            $(".focus ul").animate({
                left:-num*focusWidth
            },function () {
                flag=true;
            })
            circle--;
            circle=circle<0?$(".focus ol li").length-1:circle;
            console.log(circle);
            changeCircle();
        }
    })
    $(".arrow-r").click(function () {
        if(flag){
            flag=false;
            if(num==$(".focus ul li").length-1){
                num=0;
                $(".focus ul")[0].style.left=0 + 'px';
            }
            // console.log(num);
            num++;
            $(".focus ul").animate({
                left:-num*focusWidth
            },function () {
                flag=true;
            })
            circle++;
            circle=circle==4?0:circle;
            console.log(circle);
            changeCircle();
        }
    })
})
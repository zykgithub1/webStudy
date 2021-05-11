$(function () {
    getSum();
    $(".checkall").change(function () {
        $(".j-checkbox, .checkall").prop("checked",$(this).prop("checked"));
        if($(this).prop("checked")){
            $(".cart-item").addClass("check-cart-item");
        }else{
            $(".cart-item").removeClass("check-cart-item");
        }
    });
    $(".j-checkbox").change(function () {
        if($(".j-checkbox:checked").length==$(".j-checkbox").length){
            $(".checkall").prop("checked",true);
        }else{
            $(".checkall").prop("checked",false);
        }
        if($(this).prop("checked")){
            $(this).parents(".cart-item").addClass("check-cart-item");
        }else{
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
    })
    $(".increment").click(function () {
        var n=Number($(this).siblings(".itxt").val());
        n++;
        $(this).siblings(".itxt").val(n);
        var p=$(this).parent().parent().siblings(".p-price").text();
        var price=p.substring(1);
        var pp=(price*n).toFixed(2);
        $(this).parent().parent().siblings(".p-sum").html("￥"+pp);
        getSum();
    })
    $(".decrement").click(function () {
        var n=Number($(this).siblings(".itxt").val());
        if(n>1){
            n--;
            $(this).siblings(".itxt").val(n);
            var p=$(this).parent().parent().siblings(".p-price").text();
            var price=p.substring(1);
            var pp=(price*n).toFixed(2);
            $(this).parent().parent().siblings(".p-sum").html("￥"+pp);
        }else{
            n=1;
        }
        getSum();
    })
    $(".itxt").change(function(){
        var n=$(this).val();
        var p=$(this).parents(".p-num").siblings(".p-price").text();
        p=p.substring(1);
        var price=(n*p).toFixed( 2);
        // alert(price);
        $(this).parents(".p-num").siblings(".p-sum").html(price);
        getSum()
    })
    function getSum() {
        var count=0;
        var money=0;
        $(".itxt").each(function (i,ele) {
            count+=Number($(ele).val());
        })
        $(".amount-sum em").text(count);
        $(".p-sum").each(function (i,ele) {
            var p=$(ele).text();
            p=p.substring(1);
            money+=Number(p);
        })
        $(".price-sum em").text(money.toFixed(2));
    }
    //删除商品模块：
    $(".p-action a").click(function () {
        $(this).parents(".cart-item").remove();
        getSum();
    })
    $(".remove-batch").click(function () {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    })
    $(".clear-all").click(function () {
        $(".cart-item").remove();
        getSum();
    })
})
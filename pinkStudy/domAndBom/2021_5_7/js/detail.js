window.addEventListener("load",function () {
    var preview_img=document.querySelector(".outer");
    var mask=document.querySelector(".mask");
    var big=document.querySelector(".big");
    var bigImg=document.querySelector(".bigImg");
    preview_img.addEventListener("mouseover",function () {
        mask.style.display="block";
        big.style.display="block";
    })
    preview_img.addEventListener("mouseout",function () {
        // console.log("out");
        mask.style.display="none";
        big.style.display="none";
    })
    preview_img.addEventListener("mousemove",function (e) {
        var x=e.pageX-this.offsetLeft;
        var y=e.pageY-this.offsetTop;
        // alert(x+"  "+y);
        // console.log(x+" "+y);
        var maskX=x-mask.offsetWidth/2;
        var maskY=y-mask.offsetHeight/2;
        if(maskX<0){
            maskX=0;
        }else if(maskX>=preview_img.offsetWidth - mask.offsetWidth) {
            maskX = preview_img.offsetWidth - mask.offsetWidth;
        }
        if (maskY<=0){
            maskY=0;
        }else if(maskY>this.offsetHeight-mask.offsetHeight){
            maskY=this.offsetHeight-mask.offsetHeight;
        }
        mask.style.left=maskX+"px";
        mask.style.top=maskY+"px";
        //遮挡曾移动距离/     大图片移动距离
        //-----------------==  ------------
        //遮挡层最大移动距离   大图片最大移动距离
        var maskMax=preview_img.offsetWidth-mask.offsetWidth;
        var bigMax=bigImg.offsetWidth-big.offsetWidth;
        var bigX=maskX*bigMax/maskMax;
        var bigY=maskY*bigMax/maskMax;
        bigImg.style.left=-bigX+"px";
        bigImg.style.top=-bigY+"px";


    })






















})
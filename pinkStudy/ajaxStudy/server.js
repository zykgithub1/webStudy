const express=require("express");
const app=express();
app.get("/server",function (request,response) {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send("hello ajax---2");
});
app.all("/server",function (request,response) {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    response.send("hello ajax json");
});
app.all("/jason-server",function (request,response) {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data={
        name:"zyk",
        age:25
    }
    var str=JSON.stringify(data);
    //设置响应体
    response.send(str);
});
// 针对IE缓存的规则---------------------------------
app.get("/ie",function (request,response) {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send("hello IE-2");
});
// 延时响应-------------------------------
app.all("/delay",function (request,response) {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    setTimeout(function () {
        response.send("延时响应");
    },1000);
});


// JQuery服务-----------------------------------》
app.all("/Jquery-server",function (request,response) {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    const data={name:"曾一开",age:25};
    var str=JSON.stringify(data);
    response.send(str);
});


app.all("/axios-server",function (request,response) {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    const data={name:"曾一开",age:25};
    var str=JSON.stringify(data);
    response.send(str);
});

app.all("/fetch-server",function (request,response) {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    const data={name:"曾一开",age:25};
    var str=JSON.stringify(data);
    response.send(str);
});
// function handle(data) {
//     const result=document.querySelector("#result");
//     result.innerHTML=data.name;
// }
app.all("/jsonp-server",function (request,response) {
    var data={
        name:"增5开1111",
        age:25
    };
    var str=JSON.stringify(data);
    response.end('handle(${str})');
});

app.all("/check-username",function (request,response) {
    const data={
        exist:1,
        msg:"用户名已存在"
    };
    let str=JSON.stringify(data);
    response.end("handle(${str})");
});
app.all("/jquery-jsonp-server",function (request,response) {
    const data={
        name:"曾驿凯",
        city:["北京","上海","重庆","深圳"]
    };
    let str=JSON.stringify(data);
    let cb=request.query.callback;
    response.end("${cd}(${str})");
});

app.listen(8975,function () {
    console.log("服务器已启动，8975端口监听中服务器已启动，8975端口监听中111");
})
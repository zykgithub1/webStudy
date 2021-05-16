const express=require("express");
const app=express();
app.get("/home",function (request,response) {
    response.sendFile(__dirname+"/index.html");
});

app.get("/data",function (request,response) {
    response.send("用户数据");
})

app.listen(9000,function () {
    console.log("服务已启动");
});


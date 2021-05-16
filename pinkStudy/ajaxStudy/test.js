const  express=require('express');
const app=express();
app.get("/",function (request,response) {
    response.send("finally sucess");
})
app.listen(8972,function () {
    console.log("服务已起到,8972端口监听中");
})
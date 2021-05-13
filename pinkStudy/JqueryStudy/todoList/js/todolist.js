$(function () {
    load();
    $("#title").on("keydown",function (event) {
        if(event.keyCode==13){
            //先读取本地存储的数据
            var local=getDate();
            local.push({title:$(this).val(),done:false});
            saveDate(local);
            load();
        }
    });
    $("ol").on("click","a",function () {
        //先获取本地存储，
        var data=getDate();
        //修改数据
        var index=$(this).attr("id");
        //splice(1,1)从哪个位置开始删除，删除几个？
        data.splice(index,1);
        //再把数据存储到本地
        saveDate(data);
        //重新渲染页面
        load();


    })

    function getDate() {
        var data=localStorage.getItem("todolist");
        if(data!=null){
            return JSON.parse(data);
        }else{
            return [];
        }
    }

    function saveDate(local) {
        localStorage.setItem("todolist",JSON.stringify(local));
    }


    function load() {
        var date=getDate();
        var todoCount=0;
        var doneCount=0;
        //每次加载前清空ol
        $("ol").empty();
        $("ul").empty();
        $.each(date,function (i,n) {
            if(n.done){
                $("ul").prepend(("<li><input type='checkbox' " +
                    "checked='checked'><p>"+n.title+"</p><a href='javascript:;' id="+i+"></a></li>"));
                doneCount++;
            }else{
                $("ol").prepend(("<li><input type='checkbox'>" +
                    "<p>"+n.title+"</p><a href='javascript:;' id="+i+"></a></li>"));
                todoCount++;
            }
        })
        $("#todocount").text(todoCount);
        $("#donecount").text(doneCount);
    }

    //4  todolist  正在进行和已完成选项操作：
    $("ol,ul").on("click","input",function () {
        //先获取本地存储的数据
        var data=getDate();
        //修改数据
        var index=$(this).siblings("a").attr("id");
        data[index].done=$(this).prop("checked");
        console.log(data);
        saveDate(data);
        //保存到本地
        //重新渲染页面
        load();
    })

    $("#todocount").text(todoCount);
    $("#donecount").text(doneCount);

})
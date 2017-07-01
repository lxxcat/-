define(["jquery", "template", "util", "form"],function($, template, util){
    // 在id的作用下讲师编辑
    var query = util.getQueryObj();
    if(query.id){
        $.ajax({
            url:"/api/teacher/edit",
            type:"get",
            data:{
                tc_id:query.id,
            },
            success:function(data){
                console.log(data);
                data.result.title = "讲师编辑";
                data.result.btnText = "保存";
                data.result.type = "edit";
                var html = template("teacher-tpl", data.result);
				$(".teacher").html(html);
            }
        })
        // 讲师添加
    }else{
        var html = template("teacher-tpl",{
            title:"讲师添加",
            btnText:"添加",
            type:"add"
        })
        $(".teacher").html(html);
    }
    $(".teacher").on("click","#btnSave",function(){
        var type = $(this).data("type");
        var url = "";
        if(type=="edit"){
            url="/api/teacher/update";
        }else{
            url = "/api/teacher/add";
        }
        $("#teacherform").ajaxSubmit({
            url:url,
            type:"post",
            success:function(data){
                if(data.code==200){
                    location.href="/teacher/list";
                }
            }
        });
        return false;
    })

});
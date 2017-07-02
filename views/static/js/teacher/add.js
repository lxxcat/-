define(["jquery", "template", "util", "form","datepicker","datepicker-zh","validate"],function($, template, util){
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
                $("#aaa").datepicker({
                format:"yyyy-mm-dd",
                 language:"zh-CN"
                });
                
                // 编辑讲师
                $("#teacherform").validate({
                    description:{
                        "tcname":{
                            required:"请输入用户名",
                        },
                        "tcpass":{
                            required:"请输入密码",
                        },
                        "tcjoindate":{
                            required:"请输入入职时间"
                        }
                    },
                    onBlur: true,
			        onKeyup: true,
                    sendForm:false,
                    eachInvalidField:function(){
                        console.log(111);
                        this.parent().parent().addClass("has-error").removeClass("has-success");
                        this.parent().next().removeClass("hide");
                    },
                    eachValidField:function(){
                        console.log(222);
                        this.parent().parent().addClass("has-success").removeClass("has-error");
                    },
                    valid:function(){
                        console.log('valid被触发了,验证通过')
                        var type = $("#btnSave").data("type");
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
                    }
                })
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
        $("#aaa").datepicker({
                format:"yyyy-mm-dd",
                 language:"zh-CN"
                });

                // 添加讲师
                $("#teacherform").validate({
                    description:{
                        "tcname":{
                            required:"请输入用户名",
                        },
                        "tcpass":{
                            required:"请输入密码",
                        },
                        "tcjoindate":{
                            required:"请输入入职时间"
                        }
                    },
                    onBlur: true,
			        onKeyup: true,
                    sendForm:false,
                    eachInvalidField:function(){
                        console.log(111);
                        this.parent().parent().addClass("has-error").removeClass("has-success");
                        this.parent().next().removeClass("hide");
                    },
                    eachValidField:function(){
                        console.log(222);
                        this.parent().parent().addClass("has-success").removeClass("has-error");
                    },
                    valid:function(){
                        console.log('valid被触发了,验证通过')
                        var type = $("#btnSave").data("type");
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
                    }
                })
    }

});
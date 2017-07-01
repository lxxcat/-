define(["jquery","template","nprogress", "bootstrap"],function($,template,NProgress){
    // 列表请求
    $.ajax({
        url:"/api/teacher",
        type:"get",
        success:function(data){
            var tplstr1 = template("tpl1",data);
            $("#tbody").html(tplstr1);
        }
    })
    // 模态框渲染
    $("#tbody").on("click",".ck",function(){
       var id = $(this).parent().data("id");
       $.ajax({
           url:"/api/teacher/view",
           type:"get",
           data:{
               tc_id:id,
           },
           success:function(data){
               var tplstr2 = template("tpl2",data.result);
               $("#teacherModal").html(tplstr2);
               $("#teacherModal").modal("show");
           }
       })
    })

    // 给注销启用按钮注册点击事件
    $("#tbody").on("click",".btn-onoff",function(){
        var id = $(this).parent().data("id");
        var status = $(this).data("status");
        var $that = $(this);
        $.ajax({
            url:"/api/teacher/handle",
            type:"post",
            data:{
                tc_id:id,
                tc_status:status,
            },
            success:function(data){
                $that.data("status", data.result.tc_status);
				if(data.result.tc_status == 1){
						$that.removeClass("btn-warning");
						$that.addClass("btn-success");
						$that.text("启 用");
					}else{
						$that.removeClass("btn-success");
						$that.addClass("btn-warning");
						$that.text("注 销");
					}
            }
        })
    })

})
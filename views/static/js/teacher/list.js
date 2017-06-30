define(["jquery","template","bootstrap"],function($,template){
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
               console.log(data)
               var tplstr2 = template("tpl2",data.result);
               $("#teacherModal").html(tplstr2);
               $("#teacherModal").modal("show");
           }
       })
    })

})
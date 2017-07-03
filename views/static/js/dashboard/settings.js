define(["jquery","ckeditor", "template","datepicker", "datepicker-zh", "region","validate","uploadify","form"],function($,CKEDITOR,template){
    $.ajax({
		url: "/api/teacher/profile",
		success: function(data){
			if(data.code == 200){
				var html = template("setting-tpl", data.result);
				$(".settings").html(html);


                // 出生日期
    $("#a").datepicker({
        format:"yyyy-mm-dd",
        language:"zh-CN"
    })
    // 入职日期
     $("#b").datepicker({
        format:"yyyy-mm-dd",
        language:"zh-CN"
    })
    // 文本框插件
    CKEDITOR.replace("introduce", {
		toolbarGroups: [
	        { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
	        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
	        { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
	        { name: 'styles' },
	        { name: 'colors' },
	        { name: 'about' }
    	]
	});
    $("#region").region({
        url:"/views/assets/jquery-region/region.json"
    });
    // 头像
   $("#upfile").uploadify({
        swf: "/views/assets/uploadify/uploadify.swf",
		uploader: "/api/uploader/avatar",
        width:120,
        height:120,
        buttonText:"",
        fileObjName: "tc_avatar",
        itemTemplate: "<p></p>",
        onUploadStart: function(){
            NProgress.start();
        },
        onUploadSuccess:function(file,data){
            var data = JSON.parse(data);
            if(data.code==200){
                $(".preview>img").attr("src", data.result.path);
            }
        },
        onUploadComplete: function(){
            NProgress.done();
        }
   });
            }
        }
    });
    
    $(".settings").on("submit", "form", function(){
		$(this).ajaxSubmit({
			url: "/api/teacher/modify",
			type: "post",
			success: function(data){
				if(data.code == 200){
					alert("修改资料成功！");
				}
			}
		});

		return false;
	})
    
})
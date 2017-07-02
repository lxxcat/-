define(["jquery","ckeditor", "datepicker", "datepicker-zh", "region","validate"],function($,CKEDITOR){
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
    })
})
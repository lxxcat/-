
	// NProgress.start();

	// NProgress.done();

	// $('.navs ul').prev('a').on('click', function () {
	// 	$(this).next().slideToggle();
	// });
	define(["jquery","template","cookie"],function($,template){
		$(function(){
			if("/dashboard/login"!=location.pathname){
				if(!$.cookie("PHPSESSID")){
					location.href="/dashboard/login";
				}else{
					var userInfo = JSON.parse($.cookie("userinfo"));
					var tplStr = template("tpl",userInfo);
					$("#userinfo").html(tplStr);
				}
				
			}
			$("#logout").on("click",function(){
				$.ajax({
					url:"/api/logout",
					type:"post",
					success:function(data){
						if(data.code==200){
							location.href="/dashboard/login";
						}
					}
				})
			})
			// 点击每一个加背景色
			$(".navs>ul>li").click(function(){
				$(this).children("a").addClass("active");
				$(this).siblings().children("a").removeClass("active");
			})

			

			// 课程管理二级菜单点击事件
			$(".navs>ul>li>ul").parent().click(function(){
				var  $ul = $(this).children("ul");
				$ul.slideToggle();
				if($ul.find("a.active").length>0){
					$(this).children("a").removeClass("active");
				}
			})

			// 让当前页面变背景颜色
			$(".navs a").each(function(i,v){
				if($(v).attr("href")==location.pathname){
					$(v).addClass("active");
					$(v).parent().parent().slideDown();
				}
			})

		})	
	})
	
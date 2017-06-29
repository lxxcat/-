
	// NProgress.start();

	// NProgress.done();

	// $('.navs ul').prev('a').on('click', function () {
	// 	$(this).next().slideToggle();
	// });
	define(["jquery","template","cookie"],function($,template){
		if("/dashboard/login"!=location.pathname){
			var userInfo = JSON.parse($.cookie("userinfo"));
			var tplStr = template("tpl",userInfo);
			$("#userinfo").html(tplStr);
		}
		
	})
	
 define(["jquery","form","cookie"],function($){
  $("#login-form").submit(function(){
           $(this).ajaxSubmit({
                url:"/api/login",
                type:"post",
                success:function(data){
                    $.cookie("userinfo",JSON.stringify(data.result),{path: "/", expires: 20});
                    location.href="/";
                }
           })
           return false;
  })
 })
 
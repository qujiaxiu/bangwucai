$(function(){
	//	login
	var tel = getCookie("username");
	var pwd = getCookie("userpwd");
	console.log(tel);
	console.log(pwd);
	$("#enter").click(function(){
		var call = $("#tel").val();
		var pwds = $("#code").val();
		if( call == tel && pwds == pwd ){
			alert("登录成功");
			location.href = "../html/index.html";
		}else{
			alert("登录失败");
		}
	})
})

$(function(){
	$(".ok").click(function(){
		if( flaga && flagb && flagc && flagd ){
			setCookie("username",$("#oname").val(),15);
			setCookie("userpwd",$("#opwd").val(),15);
			setCookie("userpwds",$("#opwds").val(),15);
			alert("注册成功");
			location.href = "../html/login.html";
		}
	})
	
	//phone
	var flaga = null;
	$("#oname").blur(function(){
		var reg = /^1[3,5,7,8]\d{9}$/;
		var str = $(this).val();
		if( reg.test(str) ){
			flaga = true;
			$("#prompt").hide();
		}else{
			flaga = false;
			$("#prompt").show();
		}
	})
	
	//password
	var  flagb = null;
	$("#opwd").blur(function(){
		var reg = /^\w{6,}$/;
		var str = $(this).val();
		if( reg.test(str) ){
			flagb = true;
			$("#prompt1").hide();
		}else{
			flagb = false;
			$("#prompt1").show();
		}
	})
	
	var flagc = null;
	$("#opwds").blur(function(){
		var str1 = $("#opwd").val();
		var str2 = $(this).val();
		if( str1 == str2 ){
			flagc = true;
			$("#prompt2").hide();
		}else{
			flagc = false;
			$("#prompt2").show();
		}
	})
	
	
	//phone
	var flagd = null;
	var str2 = "";
	$(".Verification").click(function(){
		str2 = getRand();
		alert( "短信验证码为："+str2 );
	})
	$("#ophone").blur(function(){
		if( $(this).val() == str2 ){
			flagd = true;
			$("#prompt3").hide();
		}else{
			flagd = false;
			$("#prompt3").show();
		}
	})
	
	
	function getRand(){
		var str = "";
		for( var i = 0 ; i < 6 ; i++ ){
			str += Math.round(Math.random()*9);
		}
		return str;
	}
})

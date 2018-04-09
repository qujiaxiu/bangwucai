$(function(){
//	var str = "";
//	$.ajax("json/nav.json");
//	.then(function(res){
//		for( var i = 0 ; i < 10 ; i++ ){
//			str += `
//				
//			`;
//		}
//	})

	//导航下的商品列表显示
	for( var i = 1 ; i < 5 ; i++ ){
//		console.log(i);
		$(".nav li").eq(i).hover(function(){
			$(".product").show();
		},function(){
			$(".product").hide();
		})
	}
	$(".product").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	})
})

$(function(){
	//header
	$(".logins").hover(function(){
		$(this).css("color","red");
	},function(){
		$(this).css("color","#666");
	})
	$(".register").hover(function(){
		$(this).css("color","red");
	},function(){
		$(this).css("color","#666");
	})
	$("#top ul").find("li:not(:last) a").hover(function(){
		$(this).css("color","red");
	},function(){
		$(this).css("color","#666");
	})
	//header
	
	//banner
	//自动轮播
	var timer = null;
	var index = 0;
	timer = setInterval(autoPlay,3000);
	function autoPlay(){
		index++;
		$(".dot").eq(index).addClass("active").siblings().removeClass("active");
		if( index == 7 ){
			index = 1;
			$("#banner ul").css("left",0);
		}
		$(".dot").eq(index==6?0:index).addClass("active").siblings().removeClass("active");
		$("#banner ul").stop().animate({"left":-index*1349},1500)
	}
	
	//小圆点划入
	for( let i = 0 ; i < $(".dot").size() ; i++ ){
		$(".dot").eq(i).hover(function(){
			clearInterval(timer);
			index = i-1;
			autoPlay();
		},function(){
			timer = setInterval(autoPlay,3000);
		})
	}
	//banner
	
	//main
	//new brand
	var newBrand = "";
	$.ajax("../json/main.json")
	.then(function(res){
		for( var i = 0 ; i < 6 ; i++ ){
			newBrand += `
				<li class="brand-item">
					<a href="javascript:;">
						<img src="${res[i].img}" alt="" />
						<i class="brand-tit"><span>${res[i].name}</span></i>
					</a>
				</li>
			`;
		}
		$(".brand").html(newBrand);
	})
	//new brand
	//new two
	var newStyle = "";
	$.ajax("../json/main.json")
	.then(function(res){
		for( var i = 6 ; i < 15 ; i++ ){
			newStyle += `
				<li class="g-item">
					<div class="g-img">
						<a href="javascript:;">
							<img src="${res[i].img}" alt="" />
						</a>
					</div>
					<div class="g-brand-name">
						<a href="javascript:;">${res[i].name}</a>
					</div>
					<div class="g-tit">
						<a href="javascript:;">${res[i].tit}</a>
					</div>
				</li>
			`;
		}
		$(".new-style").html(newStyle);
	})
	//new two
	
	//new three
	var hot = "";
	$.ajax("../json/main-hot.json")
	.then(function(res){
		for( var i = 0 ; i < 40 ; i++ ){
			hot += `
				<li class="goods-item">
					<div class="goods-item-wrap">
						<div class="goods-flag-discount" style="background: url('${res[i].imgl}') no-repeat 4px 12px;">${res[i].tit}</div>
						<div class="goods-flag-df" style="background:url('${res[i].imgr}')no-repeat center bottom;"></div>
						<div class="goods-img">
							<a href="javascript">
								<img src="${res[i].img}" alt="" />
							</a>
						</div>
						<div class="goods-tit-buy">
							<span class="goods-tit-pic">
								<i class="country kr">
										<img src="${res[i].guoqi}" alt="" />
									</i>
							</span>
							<span class="goods-tit-name">
								<a href="javascript:;" class="goods-tit">${res[i].name}</a>
							</span>
						</div>
						<div class="goods-price">
							<span class="goods-price-now">${res[i].newprice}</span>
							<span class="goods-price-his">${res[i].oldprice}</span>
						</div>
						<div class="goods-number">
							<span class="goods-min-qty">${res[i].min}</span>
							<span class="goods-tip2">正品</span>
						</div>
					</div>
				</li>
			`;
		}
		$(".hot-goods .goods").html(hot);
	})
	//new three
	
	//new-style
	$(".new-style").on({
		"mouseenter" : function(){
			$(this).find(".g-img img").css("opacity","0.8")
		},
		"mouseleave" : function(){
			$(this).find(".g-img img").css("opacity","1")
		}
	},"li")
	//new-style
	
	//new-hot
	$(".hot-goods .goods").on({
		"mouseenter" : function(){
			/*$(this).animate({
				"border" : "1px solid #f61d4b"
			},200)*/
			$(this).find(".goods-item-wrap").css({"z-index":888,"border":"1px solid #f61d4b","box-shadow":"rgb(204, 204, 204) 0px 1px 29px","width":300,"height":390,"top":-10})
		},
		"mouseleave" : function(){
			$(this).find(".goods-item-wrap").css({"z-index":0,"border":"1px solid #ccc","box-shadow":"none","width":294,"height":373,"top":0})
		}
	},"li")
	//new-hot
	
	//main
	//right fixed
	$(".right_banner_fixed ul").find("li").hover(function(){
		$(this).find("span").show();
	},function(){
		$(this).find("span").hide();
	})
	$(".nav04").hover(function(){
		$(this).find("b").show();
	},function(){
		$(this).find("b").hide();
	})
	
	//返回顶部
	$(".nav06").click(function(){
		$("body,html").animate({"scrollTop":0},1500)
	})
	//right fixed
})

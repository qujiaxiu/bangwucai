$(function(){
	/*//hot-goods
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
	//hot-goods*/
	
	
	//分页
	var index = 1;//页码
	var pageNum = 40;
	var pageTotle = "";
	showData();
	function showData(){
		$.ajax({
			type:"get",
			url:"../json/product.json",
			async:true,
			success : function(res){
				var str = "";
//				console.log(res.length)	
				$(".num").html(res.length);
				for( var i = (index-1)*40 ; i < index*40; i++  ){
						str += `<li class="goods-item">
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
				</li>`
				$(".hot-goods .goods").html(str);
				//总页数
				pageTotle = Math.ceil( res.length / pageNum);
				var page = "";
				for( var j = 1 ; j <= pageTotle ; j++ ){
					page += `<li>
						<a href="javascript:;">${j}</a>
					</li>`;
				}
				$(".oUl").html(page);
				$("#u").find("li").eq(index-1).addClass("active");
			}
		}
	});
}
				$("#u").delegate("li","click",function(){
					index = $(this).find("a").html();
					showData();
				})
				
				$("#left a").click(function(){
					if( index <= 1 ){
						index = 1;
					}else{
						index --;
					}
					console.log(index);
					showData();
				})
				
				$("#right a").click(function(){
					if( index >= pageTotle ){
						index = pageTotle;
					}else{
						index++;
					}
					console.log(index);
					showData();
				})
		//分页
})

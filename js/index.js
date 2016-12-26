//头部banner
var mySwiper = new Swiper ('.fxq-banner', {
    loop: true,
    autoplay:2000,
    speed:1000,
    pagination: '.swiper-pagination',
})

// 底部固定定位选项卡
$(".szh-tab").click(function(){
	$(".szh-tab").removeClass("szh-active").eq($(this).index()).addClass("szh-active");
})
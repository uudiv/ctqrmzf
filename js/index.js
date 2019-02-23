$(function () {
	var body_bg_num = 1
	$('.body_bg').css('height', $(window).height())
	$(window).resize(function () {
		$('.body_bg').css('height', $(window).height())
	})
	$('.body_bg li:nth-child(' + body_bg_num + ')').fadeIn(1000)
	// setInterval(() => {
	// 	if (body_bg_num === 2) {
	// 		body_bg_num = 0
	// 	}
	// 	$('.body_bg li').fadeOut(1000)
	// 	$('.body_bg li:nth-child(' + ++body_bg_num + ')').fadeIn(1000)
	// }, 3500)

	// $('.lbt_news .top ul li').on('mouseover', function () {
	// 	$(this).addClass("now").siblings().removeClass("now");
	// 	$('.lbt_news .top > a').attr('href', $(this).children().attr('href'))
	// 	$('.lbt_news .bottom>div').eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
	// });
	// lbt_wz(".lbt .img li", ".lbt .img", ".lbt .num", ".lbt .num li", ".lbt", "now", 617, ".lbt .hwz > div");
	// jQuery(".picScroll-left").slide({
	// 	titCell: ".hd ul",
	// 	mainCell: ".bd ul",
	// 	autoPage: true,
	// 	effect: "left",
	// 	autoPlay: true,
	// 	scroll: 5,
	// 	vis: 5,
	// 	delayTime: 1000
	// });
	// $('.box3 .left ul li').on('click',function(){
	// 	$(this).addClass("now").siblings().removeClass("now");
	// 	$('.box3 .right > div').eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
	// })
	// $('.zcjd .top ul li').on('mouseover', function () {
	// 	$(this).addClass("now").siblings().removeClass("now");
	// 	$('.zcjd .top > a').attr('href', $(this).children().attr('href'))
	// 	$('.zcjd .bottom>div').eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
	// });
})
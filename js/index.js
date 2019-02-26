$(function () {
	var body_bg_num = 1
	$('.body_bg').css('height', $(window).height())
	$(window).resize(function () {
		$('.body_bg').css('height', $(window).height())
	})
	$('.body_bg li:nth-child(' + body_bg_num + ')').fadeIn(1000)
	setInterval(() => {
		if (body_bg_num === 2) {
			body_bg_num = 0
		}
		$('.body_bg li').fadeOut(1000)
		$('.body_bg li:nth-child(' + ++body_bg_num + ')').fadeIn(1000)
	}, 3500)

	function lbt_wz(ul1_li, ul1, ul2, ul2_li, banner, now, banner_width, wz) {
		var i = 0;
		var clone = $(ul1_li).first().clone();
		$(ul1).append(clone);
		var size = $(ul1_li).size();

		for (var j = 0; j < size - 1; j++) {
			$(ul2).append("<li></li>");
		}

		$(ul2_li).first().addClass(now);

		var t = setInterval(function () {
			i++;
			move();
		}, 3000);

		$(banner).hover(function () {
			clearInterval(t);
		}, function () {
			t = setInterval(function () {
				i++;
				move();
			}, 3000);
		});

		$(ul2_li).hover(function () {
			$(wz).css("display", "none");
			var index = $(this).index();
			i = index;
			$(wz + ":nth-of-type(" + (i + 1) + ")").css("display", "block");
			$(ul1).stop().animate({
				left: -index * banner_width
			}, 500);
			$(this).addClass(now).siblings().removeClass(now);
		});

		function move() {
			$(wz).css("display", "none");
			if (i == size - 1) {
				$(wz + ":nth-of-type(1)").css("display", "block");
			}
			if (i == size) {
				$(ul1).css({
					left: 0
				});
				i = 1;
			}
			if (i == -1) {
				$(ul1).css({
					left: -(size - 1) * banner_width
				});
				i = size - 2;
			}
			$(ul1).stop().animate({
				left: -i * banner_width
			}, 500);

			if (i == size - 1) {
				$(ul2_li).eq(0).addClass(now).siblings().removeClass(now);
			} else {
				$(ul2_li).eq(i).addClass(now).siblings().removeClass(now);
			}
			$(wz + ":nth-of-type(" + (i + 1) + ")").css("display", "block");
		}
		$(wz + ":nth-of-type(1)").css("display", "block");
	}

	lbt_wz(".lbt .img li", ".lbt .img", ".lbt .num", ".lbt .num li", ".lbt", "now", 465, ".lbt .hwz > div");

	$('.news .top ul li').on('mouseover', function () {
		$(this).addClass("active").siblings().removeClass("active");
		$('.news .more > a').attr('href', $(this).children().attr('href'))
		$('.news .bottom>div').eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
	});

	jQuery(".picScroll-left").slide({
		titCell: ".hd ul",
		mainCell: ".bd ul",
		autoPage: true,
		effect: "leftLoop",
		autoPlay: false,
		scroll: 4,
		vis: 4,
		delayTime: 1500
	});

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
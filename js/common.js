$(document).ready(function() {

//адаптивная картинка в header при min-height
// function wResize() {
// $("header").css("height", $(window).height());
// };
// wResize();
// $(window).resize(function() {
// wResize()
// });

// одинаковой высоты разные по длине ашки
$(".our-work h3").equalHeights();


// галерея всплывающая
$(".portfolio-item").each(function(e){
var th = $(this);
th.attr("href", "#portfolio-image-" + e)
.find(".portfolio-popup")
.attr("id", "portfolio-image-" + e);

});
$(".portfolio-item").magnificPopup({
mainClass: 'my-mfp-zoom-in',
removalDelay:300,
type:'inline',

});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
// вверхнее красиво-вращающееся меню
// 1 и 2 строка это анимация крестика
//3 строка - слайдер вниз меню
$(".toggle-mnu").click(function() {
$(this).toggleClass("on");
$(".top-menu").slideToggle();
return false;
});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	

	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms-call").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail-call.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Мы позвоним Вам в рабочее время.");
			setTimeout(function() {
				$.magnificPopup.close();
				$(".forms-call").trigger("reset");
			}, 1000);
		});
		return false;
	});

	
		//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Мы позвоним Вам в рабочее время.");
			setTimeout(function() {
				$.magnificPopup.close();
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});

});
$(document).ready(function() {

//адаптивная картинка в header при min-height

function wResize() {
$("header").css("height", $(window).height());
};
wResize();
$(window).resize(function() {
wResize()
});



// одинаковой высоты разные по длине ашки
$(".our-work h3").equalHeights();

	$(".top-menu ul li a").mPageScroll2id({
		 layout:"auto",
		 offset:".top-line",
		scrollEasing: "linear",
		highlightByNextTarget: true,
		keepHighlightUntilNext: true,
		 autoScrollSpeed: true,
		scrollSpeed : 1000
	});



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





// всплывающие окна позвонить мне

$("a[href='#call-back']").magnificPopup ({
	mainClass:'my-mfp-zoom-in',
	removalDelay:300,
	type:'inline',
}); 
/*чтобы в формах был индивидуальный заголовок */
$("a[href='#call-back']").click(function(){
	var dataForm = $(this).data("form");
	var dataText = $(this).data("text");
	$(".forms-call h4").text(dataText);
	$(".forms-call [name=admin-data]").val(dataForm);

});





//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/

$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".forms-call .success").addClass("active");
			setTimeout(function() {
				// Done Functions
				$(".forms-call .success").removeClass("active");
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});



});
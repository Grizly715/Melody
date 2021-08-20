$(document).ready(function () {
	var currentFloor = 2; // переменная с текущем этажем 
	var floorPath = $(".home-image path"); /* Номер этажа */
	var counterUp = $(".counter-up"); /* Кнопка увеличения этажа */
	var counterDown = $(".counter-down"); /* Кнопка уменьшания этажа */
	var modal = $('.modal');
	var modalCloseButton = $('.modal-close-button');
	var viewFlatsButton = $('.view-flats');

	// Функция подсветки этажа при наведение мышки 
	floorPath.on('mouseover', function () {
		floorPath.removeClass("current-floor");
		currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа 
		$(".counter").text(currentFloor); // Записываем значение этажа в счетчик справа
	});

	floorPath.on('click', toggleModal);
	modalCloseButton.on('click', toggleModal);
	viewFlatsButton.on('click', toggleModal);

	counterUp.on("click", function () { // остеживаем клик по кнопке вверх
		if (currentFloor < 18) {
			currentFloor++;
			usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }); // Форматируем счетчик после увеличения на 1, вместо 2 получем 02
			$(".counter").text(usCurrentFloor);
			floorPath.removeClass("current-floor");
			$(`[data-floor =${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем нужный этаж
		}
	});

	counterDown.on("click", function () { // остеживаем клик по кнопке вниз
		if (currentFloor > 2) {
			currentFloor--;
			usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false });
			$(".counter").text(usCurrentFloor);
			floorPath.removeClass("current-floor");
			$(`[data-floor =${usCurrentFloor}]`).toggleClass("current-floor");
		}
	});
	function toggleModal() {
		modal.toggleClass("is-open");
	}
});
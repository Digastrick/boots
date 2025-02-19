const locations = [
    "Москва",
    "Санкт-Петербург",
    "Белгород",
    "Волгоград",
    "Воронеж",
    "Екатеринбург",
    "Ижевск",
    "Казань",
    "Краснодар",
    "Курск",
    "Липецк",
    "Нижний Новгород",
    "Новороссийск",
    "Новосибирск",
    "Оренбург",
    "Пермь",
    "Ростов-на-Дону",
    "Самара",
    "Ставрополь",
    "Сургут",
    "Тольятти",
    "Тула",
    "Тюмень",
    "Челябинск"
];

$(document).ready(function() {
    // Заполняем список локаций
    function populateLocationList() {
        const locationList = $('#locationList');
        locationList.empty(); // Очищаем список перед заполнением

        // Разбиваем массив на группы по 8 элементов
        const chunkSize = 8;
        for (let i = 0; i < locations.length; i += chunkSize) {
            const chunk = locations.slice(i, i + chunkSize);
            const chunkDiv = $('<div class="location-column"></div>'); // Создаем новый контейнер для колонки

            chunk.forEach(location => {
                chunkDiv.append(`<div class="location-item">${location}</div>`); // Добавляем локацию в колонку
            });

            locationList.append(chunkDiv); // Добавляем колонку в список
        }
    }

    // Показать модальное окно
    $('#locationButton').on('click', function() {
        $('#locationModal').toggle(); // Переключаем видимость модального окна
        populateLocationList(); // Заполняем список локаций при открытии
    });

    // Закрыть модальное окно
    $('#closeModal').on('click', function() {
        $('#locationModal').hide(); 
    });

    // Фильтрация по вводу в поле поиска
    $('#searchInput').on('input', function() {
        const query = $(this).val().toLowerCase(); 
        $('#locationList .location-item').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(query) > -1); 
        });
    });

    // Обработка клика на локацию
    $(document).on('click', '.location-item', function() {
        const selectedLocation = $(this).text(); 
        $('#locationButton').html(`${selectedLocation} <svg width="11" id="locationIcon" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.89836 10.477C6.99887 9.88074 10 7.97244 10 4.89286C10 2.40758 7.98528 0.392857 5.5 0.392857C3.01472 0.392857 1 2.40758 1 4.89286C1 7.97244 4.00113 9.88074 5.10164 10.477C5.3521 10.6127 5.6479 10.6127 5.89836 10.477ZM5.5 6.8215C6.56512 6.8215 7.42857 5.95805 7.42857 4.89293C7.42857 3.82781 6.56512 2.96435 5.5 2.96435C4.43488 2.96435 3.57143 3.82781 3.57143 4.89293C3.57143 5.95805 4.43488 6.8215 5.5 6.8215Z" fill="#F03A3A"/><path d="M9.39711 9.71429C9.79207 10.0075 10 10.34 10 10.6786C10 11.0171 9.79207 11.3497 9.39711 11.6429C9.00216 11.936 8.43409 12.1795 7.75 12.3488C7.06591 12.518 6.28992 12.6071 5.5 12.6071C4.71009 12.6071 3.93409 12.518 3.25 12.3488C2.56591 12.1795 1.99784 11.936  1.60289 11.6429C1.20793 11.3497 1 11.0171 1 10.6786C1 10.34 1.20793 10.0075 1.60289 9.71429" stroke="#F03A3A" stroke-width="2" stroke-linecap="round"/></svg>`); // Обновляем текст кнопки с сохранением SVG
        $('#locationIcon').css('fill', '#F03A3A'); // Меняем цвет иконки на красный
        $('#locationModal').hide(); // Закрываем модальное окно
    });
});


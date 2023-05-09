/* Nav Icon */
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
};

/* Phone Mask */
mask('[data-tel-input]');

// Удаляем "+" если ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll('[data-tel-input]');

phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value === '+') input.value = '';
    });

    input.addEventListener('blur', () => {
        if (input.value === '+') input.value = '';
    });
});

// Яндекс карта

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-деревоs
ymaps.ready(init);

function init() {
    // Создание карты
    const map = new ymaps.Map('map', {
        center: [59.943543, 30.338928],
        zoom: 15,
    });

    // Создание метки
    const myPlacemark = new ymaps.Placemark(
        [59.943543, 30.338928],
        {},
        {
            iconLayout: 'default#image',
            iconImageHref: './../img/map/location-pin.svg',
            iconImageSize: [40, 40],
            iconImageOffset: [-3, -42],
        }
    );

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('ruleControl'); // удаляем контрол правил

    // map.controls.remove('fullscreenControl');  // Удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // Удаляем контрол зумирования
    // map.behavior.disable('scrollZoom'); // Отключаем скролл карты

    // Размещение геообъекта на карте
    map.geoObjects.add(myPlacemark);
}

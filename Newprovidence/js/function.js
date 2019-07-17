// Говорим брузеру что запускать скрипты нужно только после того как загрузится html структура страницы !!! Некоторые библиотеки иначе работать не будут. Не все, но это нужно учитывать.
$(document).ready(function() {
  
    // Инициализируем(запускаем) первый слайдер используя плагин slick. Слайдер в html скрипт найдет по названию класса.
    // Ссылку на плагин с примерами и настройками модно найти в файле slick.min.js. Это общепринятое размещение ссылок на документацию к плагинам.
    $('.screenSlider').slick({
        // Используем дополнительные опции для слайдера. Все опции в данном плагине пишутся через запятую.
        // Вывешивам текущий слайд по центру слайдера (используется только когда единовременно показывается несколько слайдов)
        centerMode: true,
        // Указываем количество видимых слайдов 
        slidesToShow: 5,
        // Включаем автоматическую прокрутку
        // autoplay: true,
        // Отключаем показ стралок прокрутки слайдов
        arrows: false,
        // Включаем возможност переключать ткущий слайд по клику по нему
        focusOnSelect: true,
        // Варимант использования тэгов для отображения стрелок слайдер. В данном случае использован тэг img с путем к изображению относительно html страницы
        // prevArrow: '<img src="img/prev.svg" alt="" />'
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                dots: true,
                centerMode: false,
              }
            }
        ]
    });


    // Инициализируем слайдер с текстом отзывов
    $('.reviewText').slick({
        // Показываем 1 слайд единовременно
        slidesToShow: 1,
        // Прокрутка по одному слайду
        slidesToScroll: 1,
        // Отключаем показ стрелок прокрутки слайдов
        arrows: false,
        // Включаем смену слайдов через изменение прозрачности
        fade: true,
        // Включаем показ количества слайдов
        // dots: true,
        // Связываем текстовый слайдер со сладером с фотографиями использую класс слайдера с фотографиями
        asNavFor: '.reviewImg'
    });
    // Инициализируем слайдер с фотографиями
    $('.reviewImg').slick({
        // Показываем 3 слайда единовременно
        slidesToShow: 3,
        // Прокрутка по одному слайду
        slidesToScroll: 1,
        // Связываем слайдер фотографиями со сладером с тектом использую класс слайдера с текстом
        asNavFor: '.reviewText',
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                centerMode: false,
              }
            }
        ]
    });

    // Пример как сделать из label placeholder
    // При потере фокуса на текстовом поле (input[type=text])
    $('[type=text]').on('blur', function() {
        // Делаем проверку на разные условия 
        if ($(this).val()) {
            // если поле не пустое, добавляем к input класс valid
            $(this).addClass('valid');
        } else {
            // в противном случае, удаляем класс valid
            $(this).removeClass('valid')
        }
    });

    // Для всех тэгов select запускаем стилизацию через плагин select2
    // Не забываем подключить его в html
    $('select').select2();

    $('.price__item').on('mouseenter', function() {
        $('.price__item').removeClass('price__item_lg');
        $(this).addClass('price__item_lg')
    });

    // Stiky menu // Липкое меню. 
    // При прокрутке к элементу #header(можно просто добавить в html) добавляется класс .stiky который и стилизуем для изменения внешнего вида меню после начала прокрутки страницы
    // Задаем переменную в которую записываем положение #header в пикселях при загрузке страницы
    var HeaderTop = $('#header').offset().top;
    
    // При срабатывании события scroll(прокрутка страницы)
    $(window).scroll(function(){
        // Задаем условия
        if( $(window).scrollTop() > HeaderTop ) {
            // Если высота прокрутки больше чем значение в переменной добавляем класс stiky
            $('#header').addClass('stiky');
        } else {
            // Если высота прокрутки меньше чем значение в переменной убираем класс stiky
            $('#header').removeClass('stiky');
        }
    });

    $('.header__mobileToggle').on('click', function(event) {
        event.preventDefault();
        $('.nav').toggleClass('open');
    });

    $('.anim').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInUp',
        offset: 100
    });

    $('.jell').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated jello',
        offset: 100
    });

});

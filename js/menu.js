document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    const menuData = [
        {
        title: "О нас",
        submenu: ["О компании", "Преимущества", "Отзывы","Новости","Наша команда","Вакансии","Ижевск","Казань",]
        },
        {
        title: "Условия работы",
        submenu: ["График работы", "Права и обязанности"]
        },
        {
        title: "Поддержка",
        submenu: ["Сертификаты", "Способы оплаты", "Обмен товара","Способы получения","Программа подбора","Сервисные центры","Гарантийное обращение","Условия гарантии",]
        },
        {
        title: "Контакты",
        submenu: ["Адрес", "Телефон"]
        },
        {
        title: "Акции",
        submenu: ["Скидки", "Специальные предложения"]
        },
        {
        title: "Инженерный подбор",
        submenu: ["Услуги", "Прайс"]
        },
        {
        title: "Новости",
        submenu: ["Последние новости", "Анонсы"]
        },
        {
        title: "Распродажа",
        submenu: ["Товары со скидкой", "Сезонные распродажи"]
        }
        ];

    function createMenu(data) {
        const menuList = document.getElementById('menuList');
        if (!menuList) return; // Проверка на наличие элемента

        data.forEach(item => {
            const menuItem = document.createElement('li');
            menuItem.className = 'menu__item';
            menuItem.textContent = item.title;

            const submenu = document.createElement('ul');
            submenu.className = 'submenu';

            item.submenu.forEach(subItem => {
                const submenuItem = document.createElement('li');
                submenuItem.textContent = subItem;
                submenu.appendChild(submenuItem);
            });

            menuItem.appendChild(submenu);
            menuList.appendChild(menuItem);

            menuItem.addEventListener('click', (event) => {
                event.stopPropagation(); // Остановить всплытие события
                const allMenuItems = document.querySelectorAll('.menu__item');
                allMenuItems.forEach(i => {
                    if (i !== menuItem) {
                        i.classList.remove('active');
                    }
                });

                menuItem.classList.toggle('active');
            });
        });
    }

    createMenu(menuData);

    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            if (menu) {
                menu.classList.toggle('active'); // Переключаем класс для отображения меню
            }
            this.classList.toggle('active'); // Переключаем класс для гамбургера
        });
    }

    // Используем делегирование событий для элементов меню
    const menuList = document.getElementById('menuList');
    if (menuList) {
        menuList.addEventListener('click', function(event) {
            const targetItem = event.target.closest('.menu__item');
            if (targetItem) {
                const submenu = targetItem.querySelector('.submenu');
                if (submenu) {
                    submenu.classList.toggle('active'); // Переключаем класс для отображения подменю
                }
            }
        });
    }
});

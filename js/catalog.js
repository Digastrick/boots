const overlay = document.getElementById('overlay');
const catalog = document.getElementById('catalog');
const toggleButton = document.getElementById('toggleButton');
const menuItems = document.querySelectorAll('.menu-item');
const productsContainer = document.getElementById('products');

// Данные товаров по категориям
const productsData = {
    'inverter-split': {
        logos: [
            {
                logo: '../img/fujitsu.svg',
                items: [
                    { name: 'Interios', img: '../img/Fujitsu-INTERIOS-silver 1.png' },
                    { name: 'Genios', img: '../img/Fujitsu-GENIOS 2.png' },
                    { name: 'Clarios', img: '../img/Clarios 2.png' },
                ],
            },
            {
                logo: '../img/lessar.svg',
                items: [
                    { name: 'Tiger New', img: '../img/Tiger_2022_1 3.png' },
                    { name: 'Ego', img: '../img/EGO 1.png' },
                    { name: 'FlexCool', img: '../img/Flexcool 1.png' },
                    { name: 'FlexCool New', img: '../img/FLEXCOOL-2022-lit 1.png' },
                    { name: 'Amigo', img: '../img/Amigo-1 2.png' },
                    { name: 'Enigma', img: '../img/Enigma 1.png' },
                ],
            },
        ],
    },

};

// Функция для переключения видимости каталога
toggleButton.addEventListener('click', function() {
    const isCatalogVisible = catalog.style.display === 'block';
    catalog.style.display = isCatalogVisible ? 'none' : 'block';
    overlay.style.display = isCatalogVisible ? 'none' : 'block';
     document.body.style.backgroundColor = isCatalogVisible ? '' : '#f0f0f0';
    });

    function displayProducts(category) {
        productsContainer.innerHTML = ''; // Сброс содержимого контейнера
    
        // Если выбрана категория "all", собираем все товары
        if (category === 'all') {
            for (const key in productsData) {
                productsData[key].logos.forEach(logoData => {
                    // Создаем контейнер для каждого бренда
                    const brandContainer = document.createElement('div');
                    brandContainer.classList.add('brand-container');
    
                    // Отображение логотипа группы
                    if (logoData.logo) {
                        const logoElement = document.createElement('img');
                        logoElement.src = logoData.logo;
                        logoElement.alt = 'Логотип';
                        logoElement.classList.add('category-logo');
                        brandContainer.appendChild(logoElement);
                    }
    
                    // Создаем подконтейнер для продуктов
                    const productsSubContainer = document.createElement('div');
                    productsSubContainer.classList.add('products-sub-container');
    
                    // Отображение заголовка товаров
                    const productsTitle = document.createElement('h3');
                    productsSubContainer.appendChild(productsTitle);
    
                    // Отображение всех товаров для этого логотипа
                    logoData.items.forEach(product => {
                        const productElement = document.createElement('div');
                        productElement.classList.add('product');
                        productElement.innerHTML = `<img src="${product.img}" alt="${product.name}">${product.name}`;
                        productsSubContainer.appendChild(productElement); // Добавляем продукт в подконтейнер
                    });
    
                    // Добавляем подконтейнер с продуктами в контейнер бренда
                    brandContainer.appendChild(productsSubContainer);
                    // Добавляем контейнер бренда в основной контейнер
                    productsContainer.appendChild(brandContainer);
                });
            }
        } else {
            // Для выбранной категории, если это не "all"
            const categoryData = productsData[category] || { logos: [] };
    
            // Проверка на наличие логотипов
            if (categoryData.logos.length > 0) {
                categoryData.logos.forEach(logoData => {
                    // Создаем контейнер для каждого бренда
                    const brandContainer = document.createElement('div');
                    brandContainer.classList.add('brand-container');
    
                    // Отображение логотипа группы
                    if (logoData.logo) {
                        const logoElement = document.createElement('img');
                        logoElement.src = logoData.logo;
                        logoElement.alt = 'Логотип';
                        logoElement.classList.add('category-logo');
                        brandContainer.appendChild(logoElement);
                    }
    
                    // Создаем подконтейнер для продуктов
                    const productsSubContainer = document.createElement('div');
                    productsSubContainer.classList.add('products-sub-container');
    
                    // Отображение заголовка товаров
                    const productsTitle = document.createElement('h3');
                    productsSubContainer.appendChild(productsTitle);
    
                    // Отображение всех товаров для этого логотипа
                    logoData.items.forEach(product => {
                        const productElement = document.createElement('div');
                        productElement.classList.add('product');
                        productElement.innerHTML = `<img src="${product.img}" alt="${product.name}">${product.name}`;
                        productsSubContainer.appendChild(productElement); // Добавляем продукт в подконтейнер
                    });
    
                    // Добавляем подконтейнер с продуктами в контейнер бренда
                    brandContainer.appendChild(productsSubContainer);
                    // Добавляем контейнер бренда в основной контейнер
                    productsContainer.appendChild(brandContainer);
                });
            } else {
                // Если нет логотипов, отображаем сообщение
                const noProductsMessage = document.createElement('p');
                noProductsMessage.innerText = 'Нет доступных товаров в этой категории.';
                productsContainer.appendChild(noProductsMessage);
            }
        }
    }
    

    // Обработчик клика по элементам меню
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => {
                i.classList.remove('active'); // Убираем активный класс со всех
                i.style.color = '#B7B7B7'; // Сбрасываем цвет для всех пунктов
            });
            item.classList.add('active'); // Добавляем активный класс к текущему элементу
            item.style.color = '#222222'; // Устанавливаем цвет для выбранного пункта
            const category = item.getAttribute('data-category');
            displayProducts(category); // Отображаем товары выбранной категории
        });
    });
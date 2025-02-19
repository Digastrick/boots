const products = [
    {
        name: "Сплит-система LS-HE12KCE2/LU-HE12KCE2",
        category: "Инверторные сплит-системы Lessar",
        wholesalePrice: { rub: '67 347.51 ', usd: '767' },
        retailPrice: { rub: '67 347.51' },
        image: '../img/Tiger_2022_1 3.png'
    },
    {
        name: "Сплит-система QV-LA12WAE/QN-LA12WAE",
        category: "Инверторные сплит-системы Quattroclima",
        wholesalePrice: { rub: '67 347.51 ', usd: '767' },
        retailPrice: { rub: '67 347.51' },
        image: '../img/EGO 1.png'
    },
    {
        name: "Сплит-система T09H-SCW/I/ T09H-SCW/O",
        category: "Инверторные сплит-системы TOSOT",
        wholesalePrice: { rub: '67 347.51 ', usd: '767' },
        retailPrice: { rub: '67 347.51' },
        image: '../img/Flexcool 1.png'
    },
    {
        name: "Сплит-система T09H-SCW/I/ T09H-SCW/O",
        category: "Инверторные сплит-системы TOSOT",
        wholesalePrice: { rub: '67 347.51 ', usd: '767' },
        retailPrice: { rub: '67 347.51' },
        image: '../img/FLEXCOOL-2022-lit 1.png'
    },
    {
        name: "Сплит-система LS-HE12KCE2/LU-HE12KCE2",
        category: "Инверторные сплит-системы Lessar",
        wholesalePrice: { rub: '67 347.51 ', usd: '767' },
        retailPrice: { rub: '67 347.51' },
        image: '../img/Amigo-1 2.png'
    },
    {
        name: "Сплит-система LS-HE12KCE2/LU-HE12KCE2",
        category: "Категория 3",
        wholesalePrice: { rub: '67 347.51 ', usd: '767' },
        retailPrice: { rub: '67 347.51' },
        image: '../img/Enigma 1.png'
    },
    
];

let currentIndex = 0; 
const itemsToShow = 1; 
const sliderItems = document.querySelector('.slider-items');

function moveSlider(direction) {
    currentIndex += direction;

    // Обновляем общее количество элементов
    const totalItems = sliderItems.children.length;

    // Проверка границ
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalItems - itemsToShow) {
        currentIndex = totalItems - itemsToShow;
    }

    let itemWidth;

    function updateItemWidth() {
        if (window.innerWidth < 600) {
            itemWidth = 300; // Для узких экранов
        } else if (window.innerWidth < 900) {
            itemWidth = 500; // Для средних экранов
        } else {
            itemWidth = 490; // Для широких экранов
        }
    }
    
    // Инициализация при загрузке страницы
    updateItemWidth();
    
    // Обновление при изменении размера окна
    window.addEventListener('resize', updateItemWidth);
    const itemMargin = 20; // отступ между элементами
    const offset = -currentIndex * (itemWidth + itemMargin);
    sliderItems.style.transform = `translateX(${offset}px)`;
}

// Генерация товаров
function generateProducts() {
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        productItem.innerHTML = `
        <div class="img-container">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <h5>${product.name}</h5>
        <p>${product.category}</p>
        <div class='product-price'>
            <p class="price-label">
                Оптовая цена:<br>
                <strong class="price">${product.wholesalePrice.usd}$</strong> <br>
                <strong class="price">${product.wholesalePrice.rub}₽</strong>
            </p>
            <div class="divider divider-tall"></div>
            <p class="price-label">
                Розничная цена:<br>
                <strong class="price">${product.retailPrice.rub}₽</strong>
            </p>
        </div>
        `;

        sliderItems.appendChild(productItem);
    });
}

// Инициализация слайдера
generateProducts();

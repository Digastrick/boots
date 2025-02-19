const advantagesItems = [
    {
        title: "Бонусная программа",
        image: "", 
        text: "Копите баллы за покупки и оплачивайте ими до 50% стоимости товара",
    },
    {
        title: "Доступ 24 часа",
        image: "", 
        text: "Удобный доступ к нужной информации 24 часа в сутки 7 дней в неделю",
    },
    {
        title: "Актуальная информация",
        image: "", 
        text: "Информация о наличии товаров на складе и их стоимости, доступная в несколько кликов",
    },
    {
        title: "Надежность",
        image: "./img/flash-circle.svg", 
        text: "Текст"
    },
    {
        title: "Опт",
        image: "./img/percentage-square.png", 
        text: "Оптовые цены, бонусы и акции для зарегистрированных пользователей"
    },
    {
        title: "Каталог",
        image: "", 
        text: "4 бренда, 20 товарных категорий, 6 000 наименований на складе"
    },
];

const advantagesContainer = document.querySelector('.advantages-container');

function generateAdvantagesItems() {
    advantagesItems.forEach(item => {
        const advantageItem = document.createElement('div');
        advantageItem.classList.add('advantage-item');

        // Создаем содержимое элемента преимущества
        const circleContent = `
            <div class="circle-blue">
                ${item.image ? `<img src="${item.image}" alt="${item.title}" class="advantage-image">` : ''}
            </div>
            <h5>${item.title}</h5>
        `;

        advantageItem.innerHTML = `
            <div>
                ${circleContent}
            </div>
            <div>
                <p>${item.text}</p>
            </div>
        `;

        advantagesContainer.appendChild(advantageItem);
    });
}

// Инициализация преимуществ
generateAdvantagesItems();

const goodsItems = [
    {
        title: "Мультисплит-системы",
        description: ["Инверторные мультисплит-системы"],
        image: "../img/Cools_Plus_big 2.svg"
    },
    {
        title: "Бытовые сплит-системы",
        description: ["Инверторные сплит-системы", "Сплит-системы постоянной производительности "],
        image: "../img/Cools_Plus_big 2.svg"
    },
    {
        title: "ИНВЕРТОРНЫЕ КОММЕРЧЕСКИЕ СПЛИТ-СИСТЕМЫ",
        description: ["Инверторные кассетные сплит-системы", "Инверторные канальные сплит-системы", "Инверторные напольно-потолочные сплит-системы"],
        image: "../img/Cools_Plus_big 2.svg"
    },
    {
        title: "КОММЕРЧЕСКИЕ СПЛИТ-СИСТЕМЫ",
        description: ["Кассетные сплит-системы", "Канальные сплит-системы", "Напольно-потолочные сплит-системы"],
        image: "../img/Cools_Plus_big 2.svg"
    }
];

const goodsContainer = document.querySelector('.goods-container');

function generateGoodsItems() {
    goodsItems.forEach(item => {
        const goodsItem = document.createElement('div');
        goodsItem.classList.add('goods-item');

        const descriptionList = item.description.map(desc => `
            <li>
                <span class="circle"></span>
                ${desc}
            </li>`).join('');

        goodsItem.innerHTML = `
            <div class="column">
                <h5>${item.title}</h5>
                <ul>${descriptionList}</ul>
                <button class="goods-button">Каталог <img src = "../img/Arrow-white.svg" alt="arrow"></button>
            </div>
            <div class="column">
                <img src="${item.image}" alt="${item.title}" class="item-image">
            </div>
        `;

        goodsContainer.appendChild(goodsItem);
    });
}

// Инициализация товаров
generateGoodsItems();
const bannersData = [
    {
        title: "Новая серия",
        subtitle: "TOSOT Lyra X",
        imgSrc: "./img/tosot.svg",
        bannerImg: "./img/кондей.png"
    },
    {
        title: "Новая коллекция",
        subtitle: "Рандомный кондей",
        imgSrc: "./img/lessar.svg",
        bannerImg: "./img/EGO 1.png"
    }
];

let currentBanner = 0;
const bannerSlider = document.getElementById('banner-slider');

// Функция для создания баннера
function createBanner(data) {
    const banner = document.createElement('div');
    banner.classList.add('banner', 'justify-content-between');

    const arrowPrev = document.createElement('div');
    arrowPrev.classList.add('arrow-prev');
    arrowPrev.innerHTML = `<img src="./img/arrow-slider.svg" alt="arrow-prev" onclick="prevBanner()">`;

    const content = document.createElement('div');
    content.classList.add('banner__content', 'd-flex', 'flex-column', 'justify-content-around');
    content.innerHTML = `
        <h1 class="banner__title">${data.title} <p>${data.subtitle}</p> уже в наличии!</h1>
        <img src="${data.imgSrc}" alt="${data.subtitle}">
    `;

    const bannerImg = document.createElement('div');
    bannerImg.classList.add('banner__img');
    bannerImg.innerHTML = `<img src="${data.bannerImg}" alt="${data.subtitle}">`;

    const arrowNext = document.createElement('div');
    arrowNext.classList.add('arrow-next');
    arrowNext.innerHTML = `<img src="./img/arrow-slider.svg" alt="arrow-next" onclick="nextBanner()">`;

    banner.appendChild(arrowPrev);
    banner.appendChild(content);
    banner.appendChild(bannerImg);
    banner.appendChild(arrowNext);

    return banner;
}

// Функция для отображения баннера
function showBanner(index) {
    const banners = document.querySelectorAll('.banner');
    banners.forEach((banner, i) => {
        banner.style.display = (i === index) ? 'flex' : 'none'; 
    });
}

// Функции для переключения баннеров
function nextBanner() {
    currentBanner = (currentBanner + 1) % bannersData.length; 
    showBanner(currentBanner);
}

function prevBanner() {
    currentBanner = (currentBanner - 1 + bannersData.length) % bannersData.length; 
    showBanner(currentBanner);
}

// Инициализация слайдера
function initSlider() {
    bannersData.forEach(data => {
        const banner = createBanner(data);
        bannerSlider.appendChild(banner);
    });
    showBanner(currentBanner); 
}

initSlider();

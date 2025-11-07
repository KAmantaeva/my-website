// Инициализация данных ресторанов
function initRestaurantsData() {
    // Проверяем, есть ли уже данные в localStorage
    if (!localStorage.getItem('restaurants')) {
        // Создаем тестовые данные ресторанов
        const restaurants = [
            {
                id: 'rest1',
                name: 'Алтын Казан',
                location: 'Алматы, ул. Абая 42',
                description: 'Ресторан казахской кухни с аутентичной атмосферой и традиционными блюдами.',
                price: 12000, // Средний чек
                rating: 4.7,
                stars: 5,
                cuisine: 'kazakh',
                phone: '+7 (727) 123-45-67',
                hours: '10:00 - 23:00, ежедневно',
                images: [
                    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                ],
                amenities: ['wifi', 'parking', 'vip', 'terrace'],
                advantages: [
                    'Традиционная казахская кухня',
                    'Живая музыка по выходным',
                    'Просторный банкетный зал',
                    'Детская игровая зона'
                ],
                menu: {
                    starters: [
                        { name: 'Казы', price: 3500, description: 'Традиционная конская колбаса' },
                        { name: 'Баурсаки', price: 1200, description: 'Жареные пончики из дрожжевого теста' }
                    ],
                    mainCourses: [
                        { name: 'Бешбармак', price: 5500, description: 'Национальное блюдо из мяса и теста' },
                        { name: 'Плов', price: 4200, description: 'Рис с бараниной и специями' }
                    ],
                    desserts: [
                        { name: 'Чак-чак', price: 1800, description: 'Сладкое блюдо из теста с медом' },
                        { name: 'Шертпек', price: 1500, description: 'Традиционное печенье' }
                    ]
                },
                reviews: [
                    {
                        author: 'Айдар К.',
                        rating: 5,
                        text: 'Отличный ресторан с настоящей казахской кухней. Бешбармак просто великолепен!',
                        date: '2023-05-15T12:00:00Z'
                    },
                    {
                        author: 'Мария С.',
                        rating: 4,
                        text: 'Хорошее обслуживание, вкусная еда. Немного шумно по выходным.',
                        date: '2023-04-20T15:30:00Z'
                    }
                ]
            },
            {
                id: 'rest2',
                name: 'La Rivière',
                location: 'Нур-Султан, пр. Кабанбай батыра 53',
                description: 'Изысканный ресторан европейской кухни с видом на реку Ишим.',
                price: 18000,
                rating: 4.8,
                stars: 5,
                cuisine: 'european',
                phone: '+7 (717) 234-56-78',
                hours: '12:00 - 00:00, ежедневно',
                images: [
                    'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
                ],
                amenities: ['wifi', 'parking', 'vip', 'terrace', 'liveMusic'],
                advantages: [
                    'Панорамный вид на реку',
                    'Авторская кухня',
                    'Винная карта премиум-класса',
                    'Романтическая атмосфера'
                ],
                menu: {
                    starters: [
                        { name: 'Карпаччо из говядины', price: 4800, description: 'С трюфельным маслом и пармезаном' },
                        { name: 'Тартар из лосося', price: 5200, description: 'С авокадо и цитрусовой заправкой' }
                    ],
                    mainCourses: [
                        { name: 'Стейк Рибай', price: 12000, description: 'С картофельным гратеном и соусом из красного вина' },
                        { name: 'Ризотто с морепродуктами', price: 8500, description: 'С креветками, мидиями и кальмарами' }
                    ],
                    desserts: [
                        { name: 'Тирамису', price: 2800, description: 'Классический итальянский десерт' },
                        { name: 'Крем-брюле', price: 2500, description: 'С карамелизированной корочкой' }
                    ]
                },
                reviews: [
                    {
                        author: 'Алексей М.',
                        rating: 5,
                        text: 'Превосходный ресторан! Стейк был приготовлен идеально, а вид на реку создает особую атмосферу.',
                        date: '2023-06-10T19:45:00Z'
                    },
                    {
                        author: 'Елена Д.',
                        rating: 5,
                        text: 'Отмечали годовщину свадьбы, все было на высшем уровне. Обслуживание безупречное!',
                        date: '2023-05-28T20:15:00Z'
                    }
                ]
            },
            {
                id: 'rest3',
                name: 'Восточный Сад',
                location: 'Алматы, ул. Достык 85',
                description: 'Аутентичный ресторан азиатской кухни с блюдами из Китая, Японии и Кореи.',
                price: 10000,
                rating: 4.5,
                stars: 4,
                cuisine: 'asian',
                phone: '+7 (727) 345-67-89',
                hours: '11:00 - 22:00, ежедневно',
                images: [
                    'https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFzaWFuJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
                    'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFzaWFuJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                ],
                amenities: ['wifi', 'parking', 'terrace'],
                advantages: [
                    'Блюда из свежих ингредиентов',
                    'Открытая кухня',
                    'Вегетарианское меню',
                    'Доставка еды'
                ],
                menu: {
                    starters: [
                        { name: 'Спринг-роллы', price: 2200, description: 'С овощами и креветками' },
                        { name: 'Гёдза', price: 2500, description: 'Японские пельмени с курицей' }
                    ],
                    mainCourses: [
                        { name: 'Утка по-пекински', price: 7500, description: 'С блинчиками и соусом хойсин' },
                        { name: 'Бибимбап', price: 4800, description: 'Корейское блюдо с рисом, овощами и говядиной' }
                    ],
                    desserts: [
                        { name: 'Моти', price: 1800, description: 'Японские рисовые пирожные' },
                        { name: 'Манго с клейким рисом', price: 2000, description: 'Тайский десерт с кокосовым молоком' }
                    ]
                },
                reviews: [
                    {
                        author: 'Тимур Н.',
                        rating: 4,
                        text: 'Очень вкусная азиатская кухня, особенно понравились спринг-роллы и утка по-пекински.',
                        date: '2023-06-05T13:20:00Z'
                    },
                    {
                        author: 'Анна К.',
                        rating: 5,
                        text: 'Прекрасное место для любителей азиатской кухни. Большие порции и отличный вкус!',
                        date: '2023-05-12T18:40:00Z'
                    }
                ]
            }
        ];

        // Сохраняем данные в localStorage
        localStorage.setItem('restaurants', JSON.stringify(restaurants));
    }
}

// Загрузка ресторанов
function loadRestaurants(customRestaurants) {
    const restaurantsContainer = document.getElementById('restaurantsContainer');
    if (!restaurantsContainer) return;

    // Получаем данные ресторанов
    let restaurants = customRestaurants || JSON.parse(localStorage.getItem('restaurants')) || [];

    // Применяем поиск, если есть
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchLocation = document.getElementById('searchLocation').value.trim().toLowerCase();
            
            // Фильтруем рестораны по поисковому запросу
            let filteredRestaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
            
            if (searchLocation) {
                // Фильтруем рестораны по местоположению
                filteredRestaurants = filteredRestaurants.filter(restaurant => 
                    restaurant.location.toLowerCase().includes(searchLocation) || 
                    restaurant.name.toLowerCase().includes(searchLocation)
                );
            }
            
            // Загружаем отфильтрованные рестораны
            loadRestaurants(filteredRestaurants);
        });
    }

    // Применяем сортировку
    const sortSelect = document.getElementById('sortRestaurants');
    if (sortSelect) {
        const sortValue = sortSelect.value;
        
        if (sortValue === 'price-asc') {
            restaurants.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'price-desc') {
            restaurants.sort((a, b) => b.price - a.price);
        } else if (sortValue === 'rating-desc') {
            restaurants.sort((a, b) => b.rating - a.rating);
        } else if (sortValue === 'name-asc') {
            restaurants.sort((a, b) => a.name.localeCompare(b.name));
        }
    }
    
    // Проверяем, есть ли рестораны для отображения
    if (restaurants.length === 0) {
        restaurantsContainer.innerHTML = '<div class="col-12"><div class="alert alert-info">Нет доступных ресторанов по вашему запросу.</div></div>';
        return;
    }
    
    let html = '';
    
    restaurants.forEach(restaurant => {
        // Формируем звезды
        let starsHtml = '';
        for (let i = 0; i < restaurant.stars; i++) {
            starsHtml += '<i class="bi bi-star-fill text-warning"></i> ';
        }
        
        // Проверяем, добавлен ли ресторан в избранное
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let favoriteButtonHtml = '';
        
        if (currentUser && currentUser.favorites && currentUser.favorites.some(f => f.id === restaurant.id && f.type === 'restaurant')) {
            favoriteButtonHtml = `
            <button class="btn btn-sm btn-outline-danger favorite-btn active" data-id="${restaurant.id}" data-type="restaurant">
                <i class="bi bi-heart-fill"></i>
            </button>
            `;
        } else {
            favoriteButtonHtml = `
            <button class="btn btn-sm btn-outline-danger favorite-btn" data-id="${restaurant.id}" data-type="restaurant">
                <i class="bi bi-heart"></i>
            </button>
            `;
        }
        
        // Определяем тип кухни
        let cuisineText = '';
        if (restaurant.cuisine === 'kazakh') {
            cuisineText = 'Казахская кухня';
        } else if (restaurant.cuisine === 'european') {
            cuisineText = 'Европейская кухня';
        } else if (restaurant.cuisine === 'asian') {
            cuisineText = 'Азиатская кухня';
        }
        
        html += `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
                <img src="${restaurant.images[0]}" class="card-img-top" alt="${restaurant.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h5 class="card-title">${restaurant.name}</h5>
                        ${favoriteButtonHtml}
                    </div>
                    <p class="card-text text-muted mb-2">${restaurant.location}</p>
                    <div class="mb-2">
                        ${starsHtml} <span class="badge bg-warning text-dark ms-1">${restaurant.rating}</span>
                    </div>
                    <p class="card-text mb-2">
                        <span class="badge bg-light text-dark">
                            <i class="bi bi-cup-hot me-1"></i> ${cuisineText}
                        </span>
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="fw-bold">Средний чек: ${restaurant.price} ₸</span>
                        <a href="restaurant-detail.html?id=${restaurant.id}" class="btn btn-primary">Подробнее</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    
    restaurantsContainer.innerHTML = html;
    
    // Добавляем обработчики для кнопок избранного
    const favoriteBtns = document.querySelectorAll('.favorite-btn');
    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleFavorite(this.getAttribute('data-id'), this.getAttribute('data-type'), this);
        });
    });
}

// Добавление/удаление из избранного
function toggleFavorite(id, type, button) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        // Показываем модальное окно для входа
        const loginModal = new bootstrap.Modal(document.getElementById('loginRequiredModal'));
        loginModal.show();
        return;
    }
    
    // Получаем данные пользователя из массива пользователей
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (userIndex === -1) {
        alert('Ошибка при обновлении избранного');
        return;
    }
    
    // Инициализируем массив избранного, если его нет
    if (!users[userIndex].favorites) {
        users[userIndex].favorites = [];
    }
    
    // Проверяем, есть ли уже этот ресторан в избранном
    const favoriteIndex = users[userIndex].favorites.findIndex(f => f.id === id && f.type === type);
    
        if (favoriteIndex === -1) {
        // Добавляем в избранное
        users[userIndex].favorites.push({
            id: id,
            type: type,
            addedAt: new Date().toISOString()
        });
        
        // Обновляем кнопку
        button.classList.add('active');
        button.querySelector('i').classList.remove('bi-heart');
        button.querySelector('i').classList.add('bi-heart-fill');
    } else {
        // Удаляем из избранного
        users[userIndex].favorites.splice(favoriteIndex, 1);
        
        // Обновляем кнопку
        button.classList.remove('active');
        button.querySelector('i').classList.remove('bi-heart-fill');
        button.querySelector('i').classList.add('bi-heart');
    }
    
    // Обновляем данные пользователя в localStorage
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(users[userIndex]));
}

// Фильтрация ресторанов
function filterRestaurants() {
    const cuisineFilter = document.getElementById('cuisineFilter');
    const priceFilter = document.getElementById('priceFilter');
    
    if (!cuisineFilter && !priceFilter) return;
    
    // Получаем данные ресторанов
    let restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    
    // Применяем фильтр по кухне
    if (cuisineFilter && cuisineFilter.value !== 'all') {
        restaurants = restaurants.filter(restaurant => restaurant.cuisine === cuisineFilter.value);
    }
    
    // Применяем фильтр по цене
    if (priceFilter && priceFilter.value !== 'all') {
        if (priceFilter.value === 'low') {
            restaurants = restaurants.filter(restaurant => restaurant.price < 10000);
        } else if (priceFilter.value === 'medium') {
            restaurants = restaurants.filter(restaurant => restaurant.price >= 10000 && restaurant.price <= 15000);
        } else if (priceFilter.value === 'high') {
            restaurants = restaurants.filter(restaurant => restaurant.price > 15000);
        }
    }
    
    // Загружаем отфильтрованные рестораны
    loadRestaurants(restaurants);
}

// Загрузка деталей ресторана
function loadRestaurantDetails() {
    const restaurantDetailContainer = document.getElementById('restaurantDetail');
    if (!restaurantDetailContainer) return;
    
    // Получаем ID ресторана из URL
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = urlParams.get('id');
    
    if (!restaurantId) {
        window.location.href = 'restaurants.html';
        return;
    }
    
    // Получаем данные ресторанов
    const restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    const restaurant = restaurants.find(r => r.id === restaurantId);
    
    if (!restaurant) {
        window.location.href = 'restaurants.html';
        return;
    }
    
    // Заполняем заголовок страницы
    document.title = restaurant.name;
    
    // Формируем звезды
    let starsHtml = '';
    for (let i = 0; i < restaurant.stars; i++) {
        starsHtml += '<i class="bi bi-star-fill text-warning"></i> ';
    }
    
    // Определяем тип кухни
    let cuisineText = '';
    if (restaurant.cuisine === 'kazakh') {
        cuisineText = 'Казахская кухня';
    } else if (restaurant.cuisine === 'european') {
        cuisineText = 'Европейская кухня';
    } else if (restaurant.cuisine === 'asian') {
        cuisineText = 'Азиатская кухня';
    }
    
    // Формируем удобства
    let amenitiesHtml = '';
    if (restaurant.amenities.includes('wifi')) {
        amenitiesHtml += '<span class="badge bg-light text-dark me-2 mb-2"><i class="bi bi-wifi me-1"></i> Wi-Fi</span>';
    }
    if (restaurant.amenities.includes('parking')) {
        amenitiesHtml += '<span class="badge bg-light text-dark me-2 mb-2"><i class="bi bi-p-square-fill me-1"></i> Парковка</span>';
    }
    if (restaurant.amenities.includes('vip')) {
        amenitiesHtml += '<span class="badge bg-light text-dark me-2 mb-2"><i class="bi bi-star me-1"></i> VIP-зал</span>';
    }
    if (restaurant.amenities.includes('terrace')) {
        amenitiesHtml += '<span class="badge bg-light text-dark me-2 mb-2"><i class="bi bi-umbrella me-1"></i> Терраса</span>';
    }
    if (restaurant.amenities.includes('liveMusic')) {
        amenitiesHtml += '<span class="badge bg-light text-dark me-2 mb-2"><i class="bi bi-music-note-beamed me-1"></i> Живая музыка</span>';
    }
    
    // Формируем преимущества
    let advantagesHtml = '';
    restaurant.advantages.forEach(advantage => {
        advantagesHtml += `<li class="list-group-item"><i class="bi bi-check-circle-fill text-success me-2"></i>${advantage}</li>`;
    });
    
    // Формируем меню
    let menuHtml = '';
    
    // Закуски
    if (restaurant.menu.starters && restaurant.menu.starters.length > 0) {
        menuHtml += '<h5 class="mt-4">Закуски</h5>';
        menuHtml += '<div class="list-group mb-3">';
        restaurant.menu.starters.forEach(item => {
            menuHtml += `
            <div class="list-group-item">
                <div class="d-flex justify-content-between align-items-center">
                    <h6 class="mb-0">${item.name}</h6>
                    <span class="badge bg-primary">${item.price} ₸</span>
                </div>
                <p class="text-muted small mb-0">${item.description}</p>
            </div>
            `;
        });
        menuHtml += '</div>';
    }
    
    // Основные блюда
    if (restaurant.menu.mainCourses && restaurant.menu.mainCourses.length > 0) {
        menuHtml += '<h5 class="mt-4">Основные блюда</h5>';
        menuHtml += '<div class="list-group mb-3">';
        restaurant.menu.mainCourses.forEach(item => {
            menuHtml += `
            <div class="list-group-item">
                <div class="d-flex justify-content-between align-items-center">
                    <h6 class="mb-0">${item.name}</h6>
                    <span class="badge bg-primary">${item.price} ₸</span>
                </div>
                <p class="text-muted small mb-0">${item.description}</p>
            </div>
            `;
        });
        menuHtml += '</div>';
    }
    
    // Десерты
    if (restaurant.menu.desserts && restaurant.menu.desserts.length > 0) {
        menuHtml += '<h5 class="mt-4">Десерты</h5>';
        menuHtml += '<div class="list-group mb-3">';
        restaurant.menu.desserts.forEach(item => {
            menuHtml += `
            <div class="list-group-item">
                <div class="d-flex justify-content-between align-items-center">
                    <h6 class="mb-0">${item.name}</h6>
                    <span class="badge bg-primary">${item.price} ₸</span>
                </div>
                <p class="text-muted small mb-0">${item.description}</p>
            </div>
            `;
        });
        menuHtml += '</div>';
    }
    
    // Формируем отзывы
    let reviewsHtml = '';
    if (restaurant.reviews && restaurant.reviews.length > 0) {
        restaurant.reviews.forEach(review => {
            // Формируем звезды для отзыва
            let reviewStarsHtml = '';
            for (let i = 0; i < review.rating; i++) {
                reviewStarsHtml += '<i class="bi bi-star-fill text-warning"></i> ';
            }
            
            // Форматируем дату
            const reviewDate = new Date(review.date);
            const formattedDate = reviewDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
            
            reviewsHtml += `
            <div class="card mb-3">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h6 class="card-title mb-0">${review.author}</h6>
                        <small class="text-muted">${formattedDate}</small>
                    </div>
                    <div class="mb-2">
                        ${reviewStarsHtml}
                    </div>
                    <p class="card-text">${review.text}</p>
                </div>
            </div>
            `;
        });
    } else {
        reviewsHtml = '<div class="alert alert-info">Пока нет отзывов</div>';
    }
    
    // Заполняем контейнер деталями ресторана
    restaurantDetailContainer.innerHTML = `
    <div class="row">
        <div class="col-md-8">
            <h1 class="mb-3">${restaurant.name}</h1>
            <p class="text-muted mb-3">${restaurant.location}</p>
            <div class="mb-3">
                ${starsHtml} <span class="badge bg-warning text-dark ms-1">${restaurant.rating}</span>
            </div>
            <p class="mb-4">${restaurant.description}</p>
            
            <div class="mb-4">
                <h5>Удобства</h5>
                <div>
                    ${amenitiesHtml}
                </div>
            </div>
            
            <div class="mb-4">
                <h5>Преимущества</h5>
                <ul class="list-group">
                    ${advantagesHtml}
                </ul>
            </div>
            
            <div class="mb-4">
                <h5>Контактная информация</h5>
                <p><i class="bi bi-telephone me-2"></i>${restaurant.phone}</p>
                <p><i class="bi bi-clock me-2"></i>${restaurant.hours}</p>
            </div>
            
            <div class="mb-4">
                <h5>Меню</h5>
                ${menuHtml}
            </div>
            
            <div class="mb-4">
                <h5>Отзывы</h5>
                ${reviewsHtml}
            </div>
        </div>
        
        <div class="col-md-4">
            <div id="restaurantCarousel" class="carousel slide mb-4" data-bs-ride="carousel">
                <div class="carousel-inner">
                    ${restaurant.images.map((image, index) => `
                        <div class="carousel-item ${index === 0 ? 'active' : ''}">
                            <img src="${image}" class="d-block w-100" alt="${restaurant.name}" style="height: 300px; object-fit: cover;">
                        </div>
                    `).join('')}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#restaurantCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Предыдущий</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#restaurantCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Следующий</span>
                </button>
            </div>
            
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">Информация</h5>
                    <p class="card-text"><i class="bi bi-cup-hot me-2"></i>${cuisineText}</p>
                    <p class="card-text"><i class="bi bi-cash me-2"></i>Средний чек: ${restaurant.price} ₸</p>
                    <button class="btn btn-primary w-100 mb-2" id="reserveButton">Забронировать столик</button>
                    
                    <!-- Проверяем, добавлен ли ресторан в избранное -->
                    <button class="btn btn-outline-danger w-100" id="favoriteButton">
                        <i class="bi bi-heart me-2"></i>Добавить в избранное
                    </button>
                </div>
            </div>
            
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Местоположение</h5>
                    <div id="map" style="height: 300px; border-radius: 0.25rem;"></div>
                </div>
            </div>
        </div>
    </div>
    `;
    
    // Обработчик для кнопки избранного
    const favoriteButton = document.getElementById('favoriteButton');
    if (favoriteButton) {
        // Проверяем, добавлен ли ресторан в избранное
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.favorites && currentUser.favorites.some(f => f.id === restaurantId && f.type === 'restaurant')) {
            favoriteButton.innerHTML = '<i class="bi bi-heart-fill me-2"></i>Удалить из избранного';
            favoriteButton.classList.add('active');
        }
        
        favoriteButton.addEventListener('click', function() {
            toggleFavorite(restaurantId, 'restaurant', this);
        });
    }
    
    // Обработчик для кнопки бронирования
    const reserveButton = document.getElementById('reserveButton');
    if (reserveButton) {
        reserveButton.addEventListener('click', function() {
            // Проверяем, авторизован ли пользователь
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (!currentUser) {
                // Показываем модальное окно для входа
                const loginModal = new bootstrap.Modal(document.getElementById('loginRequiredModal'));
                loginModal.show();
                return;
            }
            
            // Показываем модальное окно для бронирования
            const reservationModal = new bootstrap.Modal(document.getElementById('reservationModal'));
            
            // Заполняем данные ресторана в модальном окне
            document.getElementById('reservationRestaurantName').textContent = restaurant.name;
            
            // Устанавливаем минимальную дату для бронирования (сегодня)
            const today = new Date();
            const formattedDate = today.toISOString().split('T')[0];
            document.getElementById('reservationDate').min = formattedDate;
            
            reservationModal.show();
        });
    }
    
    // Инициализация карты, если есть API ключ
    // Примечание: для работы карты необходимо добавить API ключ Google Maps или использовать другой сервис карт
    // const mapElement = document.getElementById('map');
    // if (mapElement && typeof google !== 'undefined') {
    //     const map = new google.maps.Map(mapElement, {
    //         center: { lat: 43.238949, lng: 76.889709 }, // Примерные координаты Алматы
    //         zoom: 15
    //     });
    //     
    //     const marker = new google.maps.Marker({
    //         position: { lat: 43.238949, lng: 76.889709 },
    //         map: map,
    //         title: restaurant.name
    //     });
    // }
}

// Обработка бронирования столика
function handleReservation() {
    const reservationForm = document.getElementById('reservationForm');
    if (!reservationForm) return;
    
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Получаем данные из формы
        const restaurantName = document.getElementById('reservationRestaurantName').textContent;
        const date = document.getElementById('reservationDate').value;
        const time = document.getElementById('reservationTime').value;
        const guests = document.getElementById('reservationGuests').value;
        const name = document.getElementById('reservationName').value;
        const phone = document.getElementById('reservationPhone').value;
        const comment = document.getElementById('reservationComment').value;
        
        // Получаем ID ресторана из URL
        const urlParams = new URLSearchParams(window.location.search);
        const restaurantId = urlParams.get('id');
        
        // Получаем данные текущего пользователя
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        if (!currentUser) {
            alert('Для бронирования необходимо авторизоваться');
            return;
        }
        
        // Создаем объект бронирования
        const reservation = {
            id: Date.now().toString(),
            restaurantId: restaurantId,
            restaurantName: restaurantName,
            userId: currentUser.id,
            userName: name,
            date: date,
            time: time,
            guests: parseInt(guests),
            phone: phone,
            comment: comment,
            status: 'pending', // pending, confirmed, cancelled
            createdAt: new Date().toISOString()
        };
        
        // Получаем существующие бронирования
        const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
        
        // Добавляем новое бронирование
        reservations.push(reservation);
        
        // Сохраняем в localStorage
        localStorage.setItem('reservations', JSON.stringify(reservations));
        
        // Обновляем данные пользователя
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        
        if (userIndex !== -1) {
            // Инициализируем массив бронирований пользователя, если его нет
            if (!users[userIndex].reservations) {
                users[userIndex].reservations = [];
            }
            
            // Добавляем ID бронирования
            users[userIndex].reservations.push(reservation.id);
            
            // Обновляем данные пользователя
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(users[userIndex]));
        }
        
        // Закрываем модальное окно
        const reservationModal = bootstrap.Modal.getInstance(document.getElementById('reservationModal'));
        reservationModal.hide();
        
        // Показываем сообщение об успешном бронировании
        const successModal = new bootstrap.Modal(document.getElementById('reservationSuccessModal'));
        successModal.show();
    });
}

// Загрузка избранных ресторанов
function loadFavoriteRestaurants() {
    const favoriteRestaurantsContainer = document.getElementById('favoriteRestaurantsContainer');
    if (!favoriteRestaurantsContainer) return;
    
    // Получаем данные текущего пользователя
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        favoriteRestaurantsContainer.innerHTML = '<div class="alert alert-info">Для просмотра избранного необходимо <a href="login.html">авторизоваться</a>.</div>';
        return;
    }
    
    // Проверяем, есть ли избранные рестораны
    if (!currentUser.favorites || !currentUser.favorites.some(f => f.type === 'restaurant')) {
        favoriteRestaurantsContainer.innerHTML = '<div class="alert alert-info">У вас пока нет избранных ресторанов.</div>';
        return;
    }
    
    // Получаем ID избранных ресторанов
    const favoriteRestaurantIds = currentUser.favorites
        .filter(f => f.type === 'restaurant')
        .map(f => f.id);
    
    // Получаем данные всех ресторанов
    const allRestaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    
    // Фильтруем только избранные рестораны
    const favoriteRestaurants = allRestaurants.filter(restaurant => favoriteRestaurantIds.includes(restaurant.id));
    
    // Загружаем избранные рестораны
    loadRestaurants(favoriteRestaurants);
}

// Инициализация страницы ресторанов
function initRestaurantsPage() {
    // Инициализируем данные ресторанов
    initRestaurantsData();
    
    // Загружаем рестораны
    loadRestaurants();
    
    // Добавляем обработчик для сортировки
    const sortSelect = document.getElementById('sortRestaurants');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            loadRestaurants();
        });
    }
    
    // Добавляем обработчики для фильтров
    const cuisineFilter = document.getElementById('cuisineFilter');
    const priceFilter = document.getElementById('priceFilter');
    
    if (cuisineFilter) {
        cuisineFilter.addEventListener('change', filterRestaurants);
    }
    
    if (priceFilter) {
        priceFilter.addEventListener('change', filterRestaurants);
    }
}

// Инициализация страницы деталей ресторана
function initRestaurantDetailPage() {
    // Инициализируем данные ресторанов
    initRestaurantsData();
    
    // Загружаем детали ресторана
    loadRestaurantDetails();
    
    // Обработка бронирования
    handleReservation();
}

// Инициализация страницы избранных ресторанов
function initFavoritesPage() {
    // Инициализируем данные ресторанов
    initRestaurantsData();
    
    // Загружаем избранные рестораны
    loadFavoriteRestaurants();
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Определяем текущую страницу
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'restaurants.html') {
        initRestaurantsPage();
    } else if (currentPage === 'restaurant-detail.html') {
        initRestaurantDetailPage();
    } else if (currentPage === 'favorites.html') {
        initFavoritesPage();
    }
});
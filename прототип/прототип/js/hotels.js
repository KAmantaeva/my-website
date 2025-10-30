// Продолжение файла hotels.js

// Функция инициализации данных отелей
function initHotelsData() {
    // Проверяем, есть ли уже данные отелей в localStorage
    if (!localStorage.getItem('hotels')) {
        // Создаем массив с данными отелей
        const hotels = [
            {
                id: '1',
                name: 'Отель Золотая Орхидея',
                location: 'Алматы, ул. Фурманова, 164',
                stars: 5,
                rating: 5.0,
                price: 25000,
                type: 'hotel',
                description: 'Роскошный пятизвездочный отель в центре Алматы с панорамным видом на горы. Отель предлагает просторные номера, оформленные в элегантном стиле, с современной мебелью и техникой.',
                amenities: ['wifi', 'parking', 'breakfast', 'pool', 'spa', 'gym'],
                advantages: [
                    'Центральное расположение',
                    'Панорамный вид на горы',
                    'Спа-центр и бассейн',
                    'Ресторан высокой кухни',
                    'Бесплатный Wi-Fi'
                ],
                images: ['images/hotel1.jpg', 'images/hotel1-2.jpg', 'images/hotel1-3.jpg'],
                reviews: [
                    {
                        author: 'Александр',
                        rating: 5,
                        text: 'Отличный отель с прекрасным сервисом. Очень понравился завтрак и вид из окна.',
                        date: '2023-05-15T10:30:00'
                    },
                    {
                        author: 'Елена',
                        rating: 5,
                        text: 'Останавливались на выходные. Все было на высшем уровне!',
                        date: '2023-04-20T14:15:00'
                    }
                ]
            },
            {
                id: '2',
                name: 'Горный Курорт "Пик"',
                location: 'Алматы, Медеу, ул. Горная, 10',
                stars: 4,
                rating: 4.5,
                price: 30000,
                type: 'resort',
                description: 'Горный курорт, расположенный в живописном месте рядом с Медеу. Идеальное место для любителей активного отдыха и природы.',
                amenities: ['wifi', 'parking', 'breakfast', 'pool', 'spa'],
                advantages: [
                    'Расположение в горах',
                    'Чистый воздух',
                    'Спа-центр',
                    'Близость к горнолыжным трассам',
                    'Панорамные виды'
                ],
                images: ['images/hotel2.jpg', 'images/hotel2-2.jpg', 'images/hotel2-3.jpg'],
                reviews: [
                    {
                        author: 'Максим',
                        rating: 5,
                        text: 'Прекрасное место для отдыха от городской суеты. Чистый воздух и потрясающие виды!',
                        date: '2023-06-10T09:45:00'
                    },
                    {
                        author: 'Анна',
                        rating: 4,
                        text: 'Хороший отель, но немного далеко от центра города. Отличный вариант для любителей природы.',
                        date: '2023-05-05T16:20:00'
                    }
                ]
            },
            {
                id: '3',
                name: 'Бизнес-отель "Центр"',
                location: 'Нур-Султан, пр. Республики, 33',
                stars: 4,
                rating: 4.0,
                price: 20000,
                type: 'hotel',
                description: 'Современный бизнес-отель в центре Нур-Султана. Идеальный выбор для деловых поездок и туристов.',
                amenities: ['wifi', 'parking', 'breakfast', 'gym'],
                advantages: [
                    'Центральное расположение',
                    'Бизнес-центр',
                    'Конференц-залы',
                    'Трансфер из аэропорта',
                    'Круглосуточный ресепшн'
                ],
                images: ['images/hotel3.jpg', 'images/hotel3-2.jpg', 'images/hotel3-3.jpg'],
                reviews: [
                    {
                        author: 'Сергей',
                        rating: 4,
                        text: 'Отличный отель для бизнес-поездок. Удобное расположение и хороший сервис.',
                        date: '2023-04-25T11:10:00'
                    },
                    {
                        author: 'Ирина',
                        rating: 4,
                        text: 'Чистые номера, вежливый персонал. Рекомендую!',
                        date: '2023-03-15T13:40:00'
                    }
                ]
            },
            // Добавляем ресторан как объект для отображения в списке отелей
            {
                id: '4',
                name: 'Ресторан "Шелковый путь"',
                location: 'Алматы, ул. Абая, 42',
                stars: 4,
                rating: 4.5,
                price: 15000,
                type: 'restaurant',
                description: 'Изысканный ресторан национальной кухни в центре Алматы. Предлагает широкий выбор традиционных казахских блюд и блюд других стран Центральной Азии.',
                amenities: ['wifi', 'parking', 'vip'],
                advantages: [
                    'Национальная кухня',
                    'Живая музыка',
                    'VIP-кабинеты',
                    'Панорамный вид',
                    'Детское меню'
                ],
                images: ['images/restaurant1.jpg', 'images/restaurant1-2.jpg', 'images/restaurant1-3.jpg'],
                reviews: [
                    {
                        author: 'Дмитрий',
                        rating: 5,
                        text: 'Отличный ресторан с аутентичной кухней. Бешбармак просто восхитительный!',
                        date: '2023-06-05T19:30:00'
                    },
                    {
                        author: 'Айгуль',
                        rating: 4,
                        text: 'Уютная атмосфера и вкусная еда. Немного высокие цены, но качество того стоит.',
                        date: '2023-05-20T20:15:00'
                    }
                ]
            },
            // Добавляем СПА-центр как объект для отображения в списке отелей
            {
                id: '5',
                name: 'СПА-центр "Оазис"',
                location: 'Алматы, ул. Достык, 85',
                stars: 5,
                rating: 4.9,
                price: 18000,
                type: 'spa',
                description: 'Роскошный СПА-центр, предлагающий широкий спектр услуг для релаксации и оздоровления. Профессиональные мастера и современное оборудование.',
                amenities: ['wifi', 'parking', 'pool', 'sauna'],
                advantages: [
                    'Различные виды массажа',
                    'Сауна и хаммам',
                    'Бассейн с гидромассажем',
                    'Косметические процедуры',
                    'Ароматерапия'
                ],
                images: ['images/spa1.jpg', 'images/spa1-2.jpg', 'images/spa1-3.jpg'],
                reviews: [
                    {
                        author: 'Марина',
                        rating: 5,
                        text: 'Потрясающий массаж и отличный сервис. Обязательно вернусь снова!',
                        date: '2023-06-15T15:45:00'
                    },
                    {
                        author: 'Олег',
                        rating: 5,
                        text: 'Лучший СПА-центр в городе. Процедуры на высшем уровне.',
                        date: '2023-05-30T17:20:00'
                    }
                ]
            }
        ];
        
        // Сохраняем данные в localStorage
        localStorage.setItem('hotels', JSON.stringify(hotels));
    }
}

// Функция загрузки отелей
function loadHotels(filteredHotels = null) {
    const hotelsContainer = document.getElementById('hotelsList');
    if (!hotelsContainer) return;
    
    // Получаем данные отелей
    let hotels = filteredHotels;
    if (!hotels) {
        hotels = JSON.parse(localStorage.getItem('hotels')) || [];
        
        // Проверяем, есть ли параметры поиска в URL
        const urlParams = new URLSearchParams(window.location.search);
        const searchLocation = urlParams.get('location');
        
        if (searchLocation) {
            // Фильтруем отели по местоположению
            hotels = hotels.filter(hotel => 
                hotel.location.toLowerCase().includes(searchLocation.toLowerCase()) || 
                hotel.name.toLowerCase().includes(searchLocation.toLowerCase())
            );
            
            // Обновляем заголовок раздела
            const availableHotelsTitle = document.getElementById('availableHotelsTitle');
            if (availableHotelsTitle) {
                availableHotelsTitle.textContent = `Результаты поиска для "${searchLocation}"`;
            }
        }
    }
    
    // Проверяем, есть ли отели для отображения
    if (hotels.length === 0) {
        hotelsContainer.innerHTML = '<div class="alert alert-info">Нет доступных отелей по вашему запросу.</div>';
        return;
    }
    
    // Сортировка отелей
    const sortSelect = document.getElementById('sortHotels');
    if (sortSelect) {
        const sortValue = sortSelect.value;
        
        if (sortValue === 'price-asc') {
            hotels.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'price-desc') {
            hotels.sort((a, b) => b.price - a.price);
        } else if (sortValue === 'rating-desc') {
            hotels.sort((a, b) => b.rating - a.rating);
        } else if (sortValue === 'name-asc') {
            hotels.sort((a, b) => a.name.localeCompare(b.name));
        }
    }
    
    let html = '';
    
    hotels.forEach(hotel => {
        // Формируем звезды
        let starsHtml = '';
        for (let i = 0; i < hotel.stars; i++) {
            starsHtml += '<i class="bi bi-star-fill text-warning"></i> ';
        }
        
        // Определяем тип объекта для отображения соответствующей иконки
        let typeIcon = '';
        let typeText = '';
        
        if (hotel.type === 'hotel') {
            typeIcon = '<i class="bi bi-building me-1"></i>';
            typeText = 'Отель';
        } else if (hotel.type === 'resort') {
            typeIcon = '<i class="bi bi-tree me-1"></i>';
            typeText = 'Курорт';
        } else if (hotel.type === 'restaurant') {
            typeIcon = '<i class="bi bi-cup-hot me-1"></i>';
            typeText = 'Ресторан';
        } else if (hotel.type === 'spa') {
            typeIcon = '<i class="bi bi-water me-1"></i>';
            typeText = 'СПА';
        }
        
        // Проверяем, добавлен ли отель в избранное
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let favoriteButtonHtml = '';
        
        if (currentUser && currentUser.favorites && currentUser.favorites.some(f => f.hotelId === hotel.id)) {
            favoriteButtonHtml = `
            <button class="btn btn-sm btn-outline-danger favorite-btn active" data-hotel-id="${hotel.id}">
                <i class="bi bi-heart-fill"></i>
            </button>
            `;
        } else {
            favoriteButtonHtml = `
            <button class="btn btn-sm btn-outline-danger favorite-btn" data-hotel-id="${hotel.id}">
                <i class="bi bi-heart"></i>
            </button>
            `;
        }
        
        html += `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
                <img src="${hotel.images[0]}" class="card-img-top" alt="${hotel.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <h5 class="card-title">${hotel.name}</h5>
                        ${favoriteButtonHtml}
                    </div>
                    <p class="card-text text-muted mb-2">${hotel.location}</p>
                    <div class="mb-2">
                        ${starsHtml} <span class="badge bg-warning text-dark ms-1">${hotel.rating}</span>
                    </div>
                    <p class="card-text mb-2">
                        <span class="badge bg-light text-dark">
                            ${typeIcon} ${typeText}
                        </span>
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="fw-bold">${hotel.price} ₸ / ночь</span>
                        <a href="hotel-detail.html?id=${hotel.id}" class="btn btn-primary">Подробнее</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    
    hotelsContainer.innerHTML = html;
    
    // Добавляем обработчики для кнопок избранного
    const favoriteBtns = document.querySelectorAll('.favorite-btn');
    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleFavorite(this.getAttribute('data-hotel-id'), this);
        });
    });
}

// Функция добавления/удаления из избранного
function toggleFavorite(hotelId, button) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        alert('Для добавления в избранное необходимо авторизоваться');
        window.location.href = 'login.html';
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
    
    // Проверяем, есть ли уже этот отель в избранном
    const favoriteIndex = users[userIndex].favorites.findIndex(f => f.hotelId === hotelId);
    
    // Получаем данные отеля
    const hotels = JSON.parse(localStorage.getItem('hotels')) || [];
    const hotel = hotels.find(h => h.id === hotelId);
    
    if (!hotel) {
        alert('Отель не найден');
        return;
    }
    
    if (favoriteIndex === -1) {
        // Добавляем отель в избранное
        users[userIndex].favorites.push({
            hotelId: hotel.id,
            hotelName: hotel.name,
            hotelLocation: hotel.location,
            hotelStars: hotel.stars,
            hotelRating: hotel.rating,
            hotelPrice: hotel.price,
            hotelImage: hotel.images[0],
            date: new Date().toISOString()
        });
        
        // Обновляем кнопку
        button.classList.add('active');
        button.innerHTML = '<i class="bi bi-heart-fill"></i>';
        
        alert('Отель добавлен в избранное');
    } else {
        // Удаляем отель из избранного
        users[userIndex].favorites.splice(favoriteIndex, 1);
        
        // Обновляем кнопку
        button.classList.remove('active');
        button.innerHTML = '<i class="bi bi-heart"></i>';
        
        alert('Отель удален из избранного');
    }
    
    // Сохраняем изменения
    localStorage.setItem('users', JSON.stringify(users));
    
    // Обновляем данные текущего пользователя
    currentUser.favorites = users[userIndex].favorites;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

// Загрузка деталей отеля
function loadHotelDetails() {
    const hotelDetailContainer = document.getElementById('hotelDetail');
    if (!hotelDetailContainer) return;
    
    // Получаем ID отеля из URL
    const urlParams = new URLSearchParams(window.location.search);
    const hotelId = urlParams.get('id');
    
    if (!hotelId) {
        hotelDetailContainer.innerHTML = '<div class="alert alert-danger">Отель не найден</div>';
        return;
    }
    
    // Получаем данные отелей
    const hotels = JSON.parse(localStorage.getItem('hotels')) || [];
    const hotel = hotels.find(h => h.id === hotelId);
    
    if (!hotel) {
        hotelDetailContainer.innerHTML = '<div class="alert alert-danger">Отель не найден</div>';
        return;
    }
    
    // Формируем карусель с изображениями
    let carouselHtml = '';
    hotel.images.forEach((image, index) => {
        carouselHtml += `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${image}" class="d-block w-100" alt="${hotel.name}" style="height: 400px; object-fit: cover;">
        </div>
        `;
    });
    
    // Формируем звезды
    let starsHtml = '';
    for (let i = 0; i < hotel.stars; i++) {
        starsHtml += '<i class="bi bi-star-fill text-warning"></i> ';
    }
    
    // Формируем удобства
    let amenitiesHtml = '';
    if (hotel.amenities.includes('wifi')) {
        amenitiesHtml += '<div class="col-md-3 col-6 mb-3"><i class="bi bi-wifi text-primary me-2"></i> Wi-Fi</div>';
    }
    if (hotel.amenities.includes('parking')) {
        amenitiesHtml += '<div class="col-md-3 col-6 mb-3"><i class="bi bi-p-square text-primary me-2"></i> Парковка</div>';
    }
    if (hotel.amenities.includes('breakfast')) {
        amenitiesHtml += '<div class="col-md-3 col-6 mb-3"><i class="bi bi-cup-hot text-primary me-2"></i> Завтрак</div>';
    }
    if (hotel.amenities.includes('pool')) {
        amenitiesHtml += '<div class="col-md-3 col-6 mb-3"><i class="bi bi-water text-primary me-2"></i> Бассейн</div>';
    }
    if (hotel.amenities.includes('spa')) {
        amenitiesHtml += '<div class="col-md-3 col-6 mb-3"><i class="bi bi-gem text-primary me-2"></i> СПА</div>';
    }
    if (hotel.amenities.includes('gym')) {
        amenitiesHtml += '<div class="col-md-3 col-6 mb-3"><i class="bi bi-bicycle text-primary me-2"></i> Фитнес</div>';
    }
    
    // Формируем преимущества
    let advantagesHtml = '';
    if (hotel.advantages && hotel.advantages.length > 0) {
        hotel.advantages.forEach(advantage => {
            advantagesHtml += `<li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i> ${advantage}</li>`;
        });
    }
    
    // Формируем отзывы
    let reviewsHtml = '';
    if (hotel.reviews && hotel.reviews.length > 0) {
        hotel.reviews.forEach(review => {
            // Формируем звезды для отзыва
            let reviewStarsHtml = '';
            for (let i = 0; i < review.rating; i++) {
                reviewStarsHtml += '<i class="bi bi-star-fill text-warning"></i> ';
            }
            
            reviewsHtml += `
            <div class="mb-3 pb-3 border-bottom">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h6 class="mb-0">${review.name}</h6>
                    <small class="text-muted">${new Date(review.date).toLocaleDateString('ru-RU')}</small>
                </div>
                <div class="mb-2">
                    ${reviewStarsHtml}
                </div>
                <p class="mb-0">${review.text}</p>
            </div>
            `;
        });
    } else {
        reviewsHtml = '<p class="text-muted">Пока нет отзывов</p>';
    }
    
    // Заполняем контейнер с деталями отеля
    hotelDetailContainer.innerHTML = `
    <div class="row mb-4">
        <div class="col-12">
            <button id="backToListBtn" class="btn btn-outline-primary mb-3">
                <i class="bi bi-arrow-left"></i> Вернуться к списку отелей
            </button>
            <div id="hotelCarousel" class="carousel slide mb-4" data-bs-ride="carousel">
                <div class="carousel-inner rounded">
                    ${carouselHtml}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#hotelCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Предыдущий</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#hotelCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Следующий</span>
                </button>
            </div>
        </div>
    </div>
    
    <div class="row mb-4">
        <div class="col-md-8">
            <div class="card mb-4">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <h3 class="card-title">${hotel.name}</h3>
                        <button class="btn btn-outline-danger favorite-btn" data-hotel-id="${hotel.id}">
                            <i class="bi bi-heart"></i> В избранное
                        </button>
                    </div>
                    <p class="text-muted mb-2">${hotel.location}</p>
                    <div class="mb-3">
                        ${starsHtml} <span class="badge bg-warning text-dark ms-2">${hotel.rating}</span>
                    </div>
                    <p>${hotel.description}</p>
                </div>
            </div>
            
            <div class="card mb-4">
                <div class="card-header">
                    <h5 class="mb-0">Преимущества</h5>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled">
                        ${advantagesHtml}
                    </ul>
                </div>
            </div>
            
            <div class="card mb-4">
                <div class="card-header">
                    <h5 class="mb-0">Удобства</h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        ${amenitiesHtml}
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <h5 class="mb-0">Отзывы</h5>
                </div>
                <div class="card-body">
                    ${reviewsHtml}
                </div>
            </div>
        </div>
        
        <div class="col-md-4">
            <div class="card sticky-top" style="top: 20px;">
                <div class="card-header">
                    <h5 class="mb-0">Забронировать</h5>
                </div>
                <div class="card-body">
                    <form id="bookingForm">
                        <input type="hidden" id="hotelId" value="${hotel.id}">
                        <div class="mb-3">
                            <label for="checkIn" class="form-label">Дата заезда</label>
                            <input type="date" class="form-control" id="checkIn" required min="${new Date().toISOString().split('T')[0]}">
                        </div>
                        <div class="mb-3">
                            <label for="checkOut" class="form-label">Дата выезда</label>
                            <input type="date" class="form-control" id="checkOut" required>
                        </div>
                        <div class="mb-3">
                            <label for="guests" class="form-label">Количество гостей</label>
                            <select class="form-select" id="guests" required>
                                <option value="1">1 гость</option>
                                <option value="2">2 гостя</option>
                                <option value="3">3 гостя</option>
                                <option value="4">4 гостя</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="roomType" class="form-label">Тип номера</label>
                            <select class="form-select" id="roomType" required>
                                <option value="Стандартный">Стандартный</option>
                                <option value="Улучшенный">Улучшенный</option>
                                <option value="Люкс">Люкс</option>
                            </select>
                        </div>
                        <div class="mb-4">
                            <p class="fw-bold">Стоимость: <span id="totalPrice">${hotel.price}</span> ₸ / ночь</p>
                            <p class="text-muted small">Итоговая сумма будет рассчитана при оформлении бронирования</p>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Забронировать</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
    
    // Добавляем обработчики событий
    document.getElementById('backToListBtn').addEventListener('click', function() {
        window.location.href = 'hotels.html';
    });
    
    // Обработчик для кнопки избранного
    const favoriteBtn = document.querySelector('.favorite-btn');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser && currentUser.favorites && currentUser.favorites.some(f => f.hotelId === hotelId)) {
        favoriteBtn.innerHTML = '<i class="bi bi-heart-fill"></i> В избранном';
        favoriteBtn.classList.add('active');
    }
    
    favoriteBtn.addEventListener('click', function() {
        toggleFavorite(hotelId, this);
    });
    
    // Обработчик для формы бронирования
    const bookingForm = document.getElementById('bookingForm');
    const checkInInput = document.getElementById('checkIn');
    const checkOutInput = document.getElementById('checkOut');
    const roomTypeSelect = document.getElementById('roomType');
    const totalPriceSpan = document.getElementById('totalPrice');
    
    // Устанавливаем минимальную дату выезда
    checkInInput.addEventListener('change', function() {
        const checkInDate = new Date(this.value);
        const nextDay = new Date(checkInDate);
        nextDay.setDate(nextDay.getDate() + 1);
        
        checkOutInput.min = nextDay.toISOString().split('T')[0];
        
        if (checkOutInput.value && new Date(checkOutInput.value) <= checkInDate) {
            checkOutInput.value = nextDay.toISOString().split('T')[0];
        }
        
        updateTotalPrice();
    });
    
    checkOutInput.addEventListener('change', updateTotalPrice);
    
    // Обновляем цену при изменении типа номера
    roomTypeSelect.addEventListener('change', function() {
        const roomType = this.value;
        let price = hotel.price;
        
        if (roomType === 'Улучшенный') {
            price = Math.round(hotel.price * 1.3);
        } else if (roomType === 'Люкс') {
            price = Math.round(hotel.price * 1.8);
        }
        
        totalPriceSpan.textContent = price;
        updateTotalPrice();
    });
    
    // Функция обновления итоговой стоимости
    function updateTotalPrice() {
        const checkIn = new Date(checkInInput.value);
        const checkOut = new Date(checkOutInput.value);
        
        if (checkInInput.value && checkOutInput.value) {
            const nights = Math.round((checkOut - checkIn) / (1000 * 60 * 60 * 24));
            const pricePerNight = parseInt(totalPriceSpan.textContent);
            
            if (nights > 0) {
                const totalPrice = nights * pricePerNight;
                totalPriceSpan.textContent = `${pricePerNight} × ${nights} ночей = ${totalPrice}`;
            }
        }
    }
    
    // Обработчик отправки формы бронирования
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!currentUser) {
            alert('Для бронирования необходимо войти в систему');
            window.location.href = 'login.html';
            return;
        }
        
        const checkIn = checkInInput.value;
        const checkOut = checkOutInput.value;
        const guests = document.getElementById('guests').value;
        const roomType = roomTypeSelect.value;
        
        // Рассчитываем цену в зависимости от типа номера
        let price = hotel.price;
        if (roomType === 'Улучшенный') {
            price = Math.round(hotel.price * 1.3);
        } else if (roomType === 'Люкс') {
            price = Math.round(hotel.price * 1.8);
        }
        
        // Создаем объект бронирования
        const booking = {
            id: Date.now().toString(),
            hotelId: hotel.id,
            hotelName: hotel.name,
            hotelImage: hotel.images[0],
            checkIn: checkIn,
            checkOut: checkOut,
            guests: guests,
            roomType: roomType,
            price: price,
            status: 'Подтверждено',
            date: new Date().toISOString()
        };
        
        // Получаем данные пользователя из массива пользователей
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        
        if (userIndex === -1) {
            alert('Ошибка при бронировании. Пользователь не найден.');
            return;
        }
        
        // Проверяем, есть ли у пользователя массив бронирований
        if (!users[userIndex].bookings) {
            users[userIndex].bookings = [];
        }
        
        // Добавляем бронирование
        users[userIndex].bookings.push(booking);
        
        // Сохраняем изменения
        localStorage.setItem('users', JSON.stringify(users));
        
        // Обновляем данные текущего пользователя
        currentUser.bookings = users[userIndex].bookings;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        alert('Бронирование успешно оформлено!');
        
        // Перенаправляем на страницу профиля
        window.location.href = 'profile.html#bookings';
    });
}

// Инициализация страницы
document.addEventListener('DOMContentLoaded', function() {
    // Инициализируем данные отелей
    initHotelsData();
    
    // Проверяем авторизацию
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userMenuItem = document.getElementById('userMenuItem');
    const loginMenuItem = document.getElementById('loginMenuItem');
    
    if (currentUser) {
        // Если пользователь авторизован, показываем меню пользователя
        if (userMenuItem) {
            userMenuItem.classList.remove('d-none');
            document.getElementById('userDisplayName').textContent = currentUser.name || 'Пользователь';
        }
        if (loginMenuItem) {
            loginMenuItem.classList.add('d-none');
        }
        
        // Обработчик для кнопки выхода
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Удаляем данные текущего пользователя
                localStorage.removeItem('currentUser');
                
                // Перенаправляем на главную страницу
                window.location.href = 'index.html';
            });
        }
    } else {
        // Если пользователь не авторизован, показываем кнопку входа
        if (userMenuItem) {
            userMenuItem.classList.add('d-none');
        }
        if (loginMenuItem) {
            loginMenuItem.classList.remove('d-none');
        }
    }
    
    // Загружаем список отелей
    if (document.getElementById('hotelsList')) {
        loadHotels();
        
        // Обработчик для формы поиска
        const searchForm = document.getElementById('searchForm');
        if (searchForm) {
            searchForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const searchLocation = document.getElementById('searchLocation').value.toLowerCase();
                const searchCheckIn = document.getElementById('searchCheckIn').value;
                const searchType = document.getElementById('searchType').value;
                const searchGuests = document.getElementById('searchGuests').value;
                
                // Получаем данные отелей
                const hotels = JSON.parse(localStorage.getItem('hotels')) || [];
                
                // Фильтр по местоположению или названию
                if (searchLocation && !hotel.location.toLowerCase().includes(searchLocation) && !hotel.name.toLowerCase().includes(searchLocation)) {
                    return false;
                }
                
                // Фильтр по типу
                if (searchType && hotel.type !== searchType) {
                    return false;
                }
                
                return true;
            });
        }
        
        // Обработчики для фильтров
        const filterStars = document.querySelectorAll('.filter-stars');
        const priceRange = document.getElementById('priceRange');
        const amenityCheckboxes = document.querySelectorAll('.form-check-input:not(.filter-stars)');
        
        if (filterStars.length > 0) {
            filterStars.forEach(checkbox => {
                checkbox.addEventListener('change', applyFilters);
            });
        }
        
        if (priceRange) {
            priceRange.addEventListener('input', function() {
                document.getElementById('priceValue').textContent = this.value + ' ₸';
            });
            
            priceRange.addEventListener('change', applyFilters);
        }
        
        if (amenityCheckboxes.length > 0) {
            amenityCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', applyFilters);
            });
        }
        
        // Функция применения фильтров
        function applyFilters() {
            // Получаем выбранные звезды
            const selectedStars = [];
            document.querySelectorAll('.filter-stars:checked').forEach(checkbox => {
                selectedStars.push(parseInt(checkbox.value));
            });
            
            // Получаем максимальную цену
            const maxPrice = parseInt(priceRange.value);
            
            // Получаем выбранные удобства
            const selectedAmenities = [];
            document.querySelectorAll('.form-check-input:not(.filter-stars):checked').forEach(checkbox => {
                selectedAmenities.push(checkbox.value);
            });
            
            // Получаем данные отелей
            const hotels = JSON.parse(localStorage.getItem('hotels')) || [];
            
            // Фильтруем отели
            const filteredHotels = hotels.filter(hotel => {
                // Фильтр по звездам
                if (selectedStars.length > 0 && !selectedStars.includes(hotel.stars)) {
                    return false;
                }
                
                // Фильтр по цене
                if (hotel.price > maxPrice) {
                    return false;
                }
                
                // Фильтр по удобствам
                if (selectedAmenities.length > 0) {
                    for (const amenity of selectedAmenities) {
                        if (!hotel.amenities.includes(amenity)) {
                            return false;
                        }
                    }
                }
                
                return true;
            });
            
            // Загружаем отфильтрованные отели
            loadHotels(filteredHotels);
        }
    }
    
    // Загружаем детали отеля
    if (document.getElementById('hotelDetail')) {
        loadHotelDetails();
    }
    
    // Загружаем избранные отели
    if (document.getElementById('favoritesList')) {
        loadFavorites();
    }
});
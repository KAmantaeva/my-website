// Инициализация данных СПА
function initSpaData() {
    // Проверяем, есть ли уже данные в localStorage
    if (!localStorage.getItem('spas')) {
        // Создаем тестовые данные для СПА
        const spas = [
            {
                id: "spa1",
                name: "Wellness SPA Центр",
                type: "wellness",
                location: "Алматы, ул. Достык 132",
                description: "Wellness SPA Центр предлагает широкий спектр услуг для релаксации и оздоровления. Наши специалисты помогут вам расслабиться и восстановить силы.",
                price: 25000,
                rating: 4.8,
                reviewCount: 124,
                services: [
                    { name: "Классический массаж", price: 15000, duration: "60 мин" },
                    { name: "Тайский массаж", price: 20000, duration: "90 мин" },
                    { name: "Стоун-терапия", price: 25000, duration: "90 мин" },
                    { name: "Аромамассаж", price: 18000, duration: "60 мин" },
                    { name: "СПА программа для пар", price: 45000, duration: "120 мин" }
                ],
                features: ["Массаж", "Сауна", "Уход за лицом", "Уход за телом", "Бассейн"],
                images: [
                    "img/spa/spa1-1.jpg",
                    "img/spa/spa1-2.jpg",
                    "img/spa/spa1-3.jpg",
                    "img/spa/spa1-4.jpg"
                ],
                workingHours: "10:00 - 22:00",
                phone: "+7 (727) 291-91-91",
                website: "wellnessspa.kz",
                reviews: [
                    {
                        id: "review1",
                        userId: "user1",
                        userName: "Алия",
                        rating: 5,
                        date: "2023-10-15",
                        text: "Отличный СПА центр! Профессиональные мастера, приятная атмосфера. Особенно понравился тайский массаж."
                    },
                    {
                        id: "review2",
                        userId: "user2",
                        userName: "Марат",
                        rating: 4,
                        date: "2023-09-20",
                        text: "Хороший сервис, но немного дороговато. Стоун-терапия очень помогла расслабиться."
                    }
                ]
            },
            {
                id: "spa2",
                name: "Медицинский СПА Центр",
                type: "medical",
                location: "Астана, пр. Кабанбай батыра 53",
                description: "Медицинский СПА Центр специализируется на лечебных и оздоровительных процедурах. Наши программы разработаны врачами и направлены на улучшение здоровья.",
                price: 30000,
                rating: 4.6,
                reviewCount: 87,
                services: [
                    { name: "Лечебный массаж", price: 18000, duration: "60 мин" },
                    { name: "Грязелечение", price: 22000, duration: "45 мин" },
                    { name: "Гидротерапия", price: 15000, duration: "30 мин" },
                    { name: "Физиотерапия", price: 12000, duration: "40 мин" },
                    { name: "Комплексная программа", price: 50000, duration: "180 мин" }
                ],
                features: ["Массаж", "Уход за лицом", "Уход за телом"],
                images: [
                    "img/spa/spa2-1.jpg",
                    "img/spa/spa2-2.jpg",
                    "img/spa/spa2-3.jpg"
                ],
                workingHours: "09:00 - 20:00",
                phone: "+7 (717) 272-72-72",
                website: "medicalspa.kz",
                reviews: [
                    {
                        id: "review3",
                        userId: "user3",
                        userName: "Ерлан",
                        rating: 5,
                        date: "2023-11-05",
                        text: "Очень профессиональный подход. Лечебный массаж действительно помог с моей проблемой спины."
                    },
                    {
                        id: "review4",
                        userId: "user4",
                        userName: "Айгуль",
                        rating: 4,
                        date: "2023-10-10",
                        text: "Хорошие процедуры, но хотелось бы больше внимания к деталям. В целом довольна результатом."
                    }
                ]
            },
            {
                id: "spa3",
                name: "Дневной СПА Салон",
                type: "day",
                location: "Алматы, ул. Жибек Жолы 50",
                description: "Дневной СПА Салон предлагает быстрые и эффективные процедуры для занятых людей. Зарядитесь энергией в течение дня!",
                price: 12000,
                rating: 4.5,
                reviewCount: 156,
                services: [
                    { name: "Экспресс-массаж", price: 8000, duration: "30 мин" },
                    { name: "Уход за лицом", price: 12000, duration: "45 мин" },
                    { name: "Маникюр СПА", price: 6000, duration: "60 мин" },
                    { name: "Педикюр СПА", price: 8000, duration: "60 мин" },
                    { name: "Экспресс-программа", price: 20000, duration: "90 мин" }
                ],
                features: ["Массаж", "Уход за лицом", "Уход за телом"],
                images: [
                    "img/spa/spa3-1.jpg",
                    "img/spa/spa3-2.jpg",
                    "img/spa/spa3-3.jpg"
                ],
                workingHours: "09:00 - 21:00",
                phone: "+7 (727) 333-33-33",
                website: "dayspa.kz",
                reviews: [
                    {
                        id: "review5",
                        userId: "user5",
                        userName: "Дина",
                        rating: 5,
                        date: "2023-12-01",
                        text: "Отличный салон! Быстро и качественно. Экспресс-массаж - то, что нужно в обеденный перерыв."
                    },
                    {
                        id: "review6",
                        userId: "user6",
                        userName: "Аскар",
                        rating: 4,
                        date: "2023-11-15",
                        text: "Хороший сервис, удобное расположение. Рекомендую уход за лицом."
                    }
                ]
            },
            {
                id: "spa4",
                name: "Курортный СПА Комплекс",
                type: "resort",
                location: "Боровое, ул. Курортная 10",
                description: "Курортный СПА Комплекс расположен в живописном месте и предлагает полный спектр услуг для отдыха и оздоровления. Идеальное место для восстановления сил.",
                price: 45000,
                rating: 4.9,
                reviewCount: 210,
                services: [
                    { name: "Релакс-массаж", price: 20000, duration: "60 мин" },
                    { name: "СПА-ритуал", price: 35000, duration: "120 мин" },
                    { name: "Термальные процедуры", price: 25000, duration: "90 мин" },
                    { name: "Детокс программа", price: 40000, duration: "150 мин" },
                    { name: "VIP программа", price: 70000, duration: "180 мин" }
                ],
                features: ["Массаж", "Сауна", "Уход за лицом", "Уход за телом", "Бассейн"],
                images: [
                    "img/spa/spa4-1.jpg",
                    "img/spa/spa4-2.jpg",
                    "img/spa/spa4-3.jpg",
                    "img/spa/spa4-4.jpg",
                    "img/spa/spa4-5.jpg"
                ],
                workingHours: "08:00 - 23:00",
                phone: "+7 (716) 345-67-89",
                website: "resortspa.kz",
                reviews: [
                    {
                        id: "review7",
                        userId: "user7",
                        userName: "Жанна",
                        rating: 5,
                        date: "2023-12-10",
                        text: "Потрясающее место! Великолепный сервис, профессиональные мастера. СПА-ритуал - это нечто невероятное!"
                    },
                    {
                        id: "review8",
                        userId: "user8",
                        userName: "Тимур",
                        rating: 5,
                        date: "2023-11-25",
                        text: "Лучший СПА, который я посещал. Прекрасная атмосфера, отличные процедуры. Стоит своих денег."
                    }
                ]
            },
            {
                id: "spa5",
                name: "Восточный СПА Салон",
                type: "wellness",
                location: "Шымкент, ул. Тауке хана 45",
                description: "Восточный СПА Салон предлагает традиционные восточные методики массажа и ухода за телом. Погрузитесь в атмосферу Востока и ощутите гармонию тела и души.",
                price: 18000,
                rating: 4.7,
                reviewCount: 98,
                services: [
                    { name: "Тайский массаж", price: 18000, duration: "60 мин" },
                    { name: "Балийский массаж", price: 20000, duration: "90 мин" },
                    { name: "Аюрведический массаж", price: 25000, duration: "90 мин" },
                    { name: "Хаммам", price: 15000, duration: "60 мин" },
                    { name: "Восточный ритуал", price: 35000, duration: "120 мин" }
                ],
                features: ["Массаж", "Сауна", "Уход за телом"],
                images: [
                    "img/spa/spa5-1.jpg",
                    "img/spa/spa5-2.jpg",
                    "img/spa/spa5-3.jpg"
                ],
                workingHours: "10:00 - 22:00",
                phone: "+7 (725) 234-56-78",
                website: "orientalspa.kz",
                reviews: [
                    {
                        id: "review9",
                        userId: "user9",
                        userName: "Гульнара",
                        rating: 5,
                        date: "2023-12-05",
                        text: "Великолепный салон! Балийский массаж - это что-то невероятное. Обязательно вернусь снова."
                    },
                    {
                        id: "review10",
                        userId: "user10",
                        userName: "Руслан",
                        rating: 4,
                        date: "2023-11-20",
                        text: "Хороший сервис, приятная атмосфера. Тайский массаж очень понравился."
                    }
                ]
            }
        ];
        
        // Сохраняем данные в localStorage
        localStorage.setItem('spas', JSON.stringify(spas));
    }
}

// Загрузка списка СПА
function loadSpas(filters = {}) {
    const spasContainer = document.getElementById('spasContainer');
    if (!spasContainer) return;
    
    // Показываем индикатор загрузки
    spasContainer.innerHTML = '<div class="text-center py-4"><div class="spinner-border text-primary" role="status"></div><p class="mt-2">Загрузка СПА услуг...</p></div>';
    
    // Инициализируем данные СПА, если их нет
    initSpaData();
    
    // Получаем данные из localStorage
    const spas = JSON.parse(localStorage.getItem('spas')) || [];
    
    // Фильтруем СПА по заданным критериям
    let filteredSpas = [...spas];
    
    // Фильтр по типу СПА
    if (filters.type && filters.type !== 'all') {
        filteredSpas = filteredSpas.filter(spa => spa.type === filters.type);
    }
    
    // Фильтр по услугам
    if (filters.features && filters.features.length > 0) {
        filteredSpas = filteredSpas.filter(spa => {
            return filters.features.every(feature => spa.features.includes(feature));
        });
    }
    
    // Фильтр по цене
    if (filters.price && filters.price !== 'all') {
        if (filters.price === 'low') {
            filteredSpas = filteredSpas.filter(spa => spa.price < 15000);
        } else if (filters.price === 'medium') {
            filteredSpas = filteredSpas.filter(spa => spa.price >= 15000 && spa.price <= 30000);
        } else if (filters.price === 'high') {
            filteredSpas = filteredSpas.filter(spa => spa.price > 30000);
        }
    }
    
    // Фильтр по поисковому запросу
    if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        filteredSpas = filteredSpas.filter(spa => 
            spa.name.toLowerCase().includes(searchLower) || 
            spa.location.toLowerCase().includes(searchLower)
        );
    }
    
    // Сортировка
    if (filters.sort) {
        if (filters.sort === 'rating-desc') {
            filteredSpas.sort((a, b) => b.rating - a.rating);
        } else if (filters.sort === 'price-asc') {
            filteredSpas.sort((a, b) => a.price - b.price);
        } else if (filters.sort === 'price-desc') {
            filteredSpas.sort((a, b) => b.price - a.price);
        } else if (filters.sort === 'name-asc') {
            filteredSpas.sort((a, b) => a.name.localeCompare(b.name));
        }
    } else {
        // По умолчанию сортируем по рейтингу
        filteredSpas.sort((a, b) => b.rating - a.rating);
    }
    
    // Если нет результатов
    if (filteredSpas.length === 0) {
        spasContainer.innerHTML = '<div class="alert alert-info">По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска.</div>';
        return;
    }
    
    // Формируем HTML для списка СПА
    let html = '';
    
    filteredSpas.forEach(spa => {
        // Формируем звезды для рейтинга
        let starsHtml = '';
        for (let i = 0; i < 5; i++) {
            if (i < Math.floor(spa.rating)) {
                starsHtml += '<i class="bi bi-star-fill text-warning"></i>';
            } else if (i < spa.rating) {
                starsHtml += '<i class="bi bi-star-half text-warning"></i>';
            } else {
                starsHtml += '<i class="bi bi-star text-warning"></i>';
            }
        }
        
        // Формируем список услуг
        let servicesHtml = '';
        if (spa.services && spa.services.length > 0) {
            servicesHtml = '<div class="mt-2"><small class="text-muted">Услуги: ';
            servicesHtml += spa.services.slice(0, 3).map(service => service.name).join(', ');
            if (spa.services.length > 3) {
                servicesHtml += ' и др.';
            }
            servicesHtml += '</small></div>';
        }
        
        // Формируем список особенностей
        let featuresHtml = '';
        if (spa.features && spa.features.length > 0) {
            featuresHtml = '<div class="mt-2">';
            spa.features.forEach(feature => {
                featuresHtml += `<span class="badge bg-light text-dark me-1 mb-1">${feature}</span>`;
            });
            featuresHtml += '</div>';
        }
        
        // Формируем карточку СПА
        html += `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card h-100 shadow-sm">
                <img src="${spa.images[0]}" class="card-img-top" alt="${spa.name}" style="height: 200px; object-fit: cover;" onerror="this.src='img/placeholder.jpg'">
                <div class="card-body">
                    <h5 class="card-title">${spa.name}</h5>
                    <p class="card-text text-muted mb-2"><i class="bi bi-geo-alt"></i> ${spa.location}</p>
                    <div class="d-flex align-items-center mb-2">
                        <div class="me-2">${starsHtml}</div>
                        <span class="badge bg-warning text-dark">${spa.rating}</span>
                        <small class="text-muted ms-2">(${spa.reviewCount} отзывов)</small>
                    </div>
                    <p class="card-text mb-2"><i class="bi bi-cash"></i> От ${spa.price.toLocaleString()} ₸</p>
                    ${featuresHtml}
                    ${servicesHtml}
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <button class="btn btn-sm btn-outline-primary reserve-spa" data-id="${spa.id}" data-bs-toggle="modal" data-bs-target="#reservationModal">
                            <i class="bi bi-calendar-check me-1"></i> Забронировать
                        </button>
                        <a href="spa-detail.html?id=${spa.id}" class="btn btn-sm btn-primary">
                            <i class="bi bi-info-circle me-1"></i> Подробнее
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    
    // Обновляем контейнер
    spasContainer.innerHTML = html;
    
    // Добавляем обработчики для кнопок бронирования
    const reserveButtons = document.querySelectorAll('.reserve-spa');
    reserveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const spaId = this.getAttribute('data-id');
            prepareSpaReservation(spaId);
        });
    });
}

// Подготовка модального окна для бронирования
function prepareSpaReservation(spaId) {
    // Проверяем, авторизован ли пользователь
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        // Показываем модальное окно для входа
        const loginModal = new bootstrap.Modal(document.getElementById('loginRequiredModal'));
        loginModal.show();
        return;
    }
    
    // Получаем данные СПА
    const spas = JSON.parse(localStorage.getItem('spas')) || [];
    const spa = spas.find(s => s.id === spaId);
    
    if (!spa) {
        alert('Ошибка: СПА не найден');
        return;
    }
    
    // Заполняем модальное окно данными
    document.getElementById('reservationSpaName').textContent = spa.name;
    
    // Заполняем список услуг
    const serviceSelect = document.getElementById('reservationService');
    serviceSelect.innerHTML = '';
    
    spa.services.forEach(service => {
        const option = document.createElement('option');
        option.value = service.name;
        option.textContent = `${service.name} - ${service.price.toLocaleString()} ₸ (${service.duration})`;
        option.setAttribute('data-price', service.price);
        serviceSelect.appendChild(option);
    });
    
    // Устанавливаем минимальную дату (сегодня)
    const today = new Date();
    const dateInput = document.getElementById('reservationDate');
    dateInput.min = today.toISOString().split('T')[0];
    dateInput.value = today.toISOString().split('T')[0];
    
    // Заполняем данные пользователя
    document.getElementById('reservationName').value = currentUser.name || '';
    document.getElementById('reservationPhone').value = currentUser.phone || '';
    
    // Добавляем обработчик для формы бронирования
    const reservationForm = document.getElementById('reservationForm');
    reservationForm.onsubmit = function(e) {
        e.preventDefault();
        bookSpa(spaId);
    };
}

// Бронирование СПА
function bookSpa(spaId) {
    // Получаем данные из формы
    const serviceName = document.getElementById('reservationService').value;
    const servicePrice = document.getElementById('reservationService').options[document.getElementById('reservationService').selectedIndex].getAttribute('data-price');
    const date = document.getElementById('reservationDate').value;
    const time = document.getElementById('reservationTime').value;
    const guests = document.getElementById('reservationGuests').value;
    const name = document.getElementById('reservationName').value;
    const phone = document.getElementById('reservationPhone').value;
    const comment = document.getElementById('reservationComment').value;
    
    // Получаем данные пользователя
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    // Получаем данные СПА
    const spas = JSON.parse(localStorage.getItem('spas')) || [];
    const spa = spas.find(s => s.id === spaId);
    
    // Создаем объект бронирования
    const booking = {
        id: Date.now().toString(),
        spaId: spaId,
        spaName: spa.name,
        spaImage: spa.images[0],
        userId: currentUser.id,
        userName: name,
        phone: phone,
        service: serviceName,
        date: date,
        time: time,
        guests: parseInt(guests),
        price: parseInt(servicePrice),
        comment: comment,
        status: 'confirmed', // confirmed, cancelled
        type: 'spa',
        createdAt: new Date().toISOString()
    };
    
    // Получаем существующие бронирования
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    
    // Добавляем новое бронирование
    bookings.push(booking);
    
    // Сохраняем в localStorage
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    // Закрываем модальное окно бронирования
    const reservationModal = bootstrap.Modal.getInstance(document.getElementById('reservationModal'));
    reservationModal.hide();
    
    // Показываем модальное окно успешного бронирования
    const successModal = new bootstrap.Modal(document.getElementById('reservationSuccessModal'));
    successModal.show();
}

// Применение фильтров
function filterSpas() {
    const typeFilter = document.getElementById('typeFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;
    const searchInput = document.getElementById('searchLocation').value;
    const sortOption = document.getElementById('sortSpas').value;
    
    // Собираем выбранные услуги
    const features = [];
    if (document.getElementById('massageFilter').checked) features.push('Массаж');
    if (document.getElementById('saunaFilter').checked) features.push('Сауна');
    if (document.getElementById('facialFilter').checked) features.push('Уход за лицом');
    if (document.getElementById('bodyFilter').checked) features.push('Уход за телом');
    if (document.getElementById('poolFilter').checked) features.push('Бассейн');
    
    // Применяем фильтры
    loadSpas({
        type: typeFilter,
        price: priceFilter,
        features: features,
        search: searchInput,
        sort: sortOption
    });
}

// Инициализация страницы
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем авторизацию
    checkAuth();
    
    // Загружаем список СПА
    loadSpas();
    
    // Обработчик для формы поиска
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            filterSpas();
        });
    }
    
    // Обработчик для сортировки
    const sortSelect = document.getElementById('sortSpas');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            filterSpas();
        });
    }
});

// Функция для создания карточек СПА
function createSpaCards() {
  const spasContainer = document.getElementById('spasContainer');
  if (!spasContainer) return;
  
  // Получаем данные СПА из localStorage
  const spas = JSON.parse(localStorage.getItem('spas')) || [];
  
  // Очищаем контейнер
  spasContainer.innerHTML = '';
  
  // Создаем карточки для каждого СПА
  spas.forEach(spa => {
    const card = document.createElement('div');
    card.className = 'col-md-4 mb-4';
    
    // Формируем рейтинг в виде звезд
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(spa.rating)) {
        starsHtml += '<i class="bi bi-star-fill text-warning"></i>';
      } else if (i < spa.rating) {
        starsHtml += '<i class="bi bi-star-half text-warning"></i>';
      } else {
        starsHtml += '<i class="bi bi-star text-warning"></i>';
      }
    }
    
    // Создаем HTML для карточки
    card.innerHTML = `
      <div class="card shadow-sm spa-card">
        <img src="${spa.images[0]}" class="card-img-top" alt="${spa.name}">
        <div class="card-body">
          <h5 class="card-title">${spa.name}</h5>
          <p class="card-text text-muted">
            <i class="bi bi-geo-alt"></i> ${spa.location}
          </p>
          <div class="mb-2">
            ${starsHtml} <span class="text-muted">(${spa.reviewCount || 0})</span>
          </div>
          <p class="card-text">${spa.description.substring(0, 100)}...</p>
        </div>
        <div class="card-footer d-grid">
          <a href="spa-detail.html?id=${spa.id}" class="btn btn-primary">
            <i class="bi bi-info-circle me-2"></i>Подробнее
          </a>
        </div>
      </div>
    `;
    
    spasContainer.appendChild(card);
  });
}

// Вызываем функцию при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  // Проверяем, находимся ли мы на странице списка СПА
  if (document.getElementById('spasContainer')) {
    createSpaCards();
  }
});
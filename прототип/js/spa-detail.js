// Загрузка данных СПА
function loadSpaDetails() {
    // Получаем ID СПА из URL
    const urlParams = new URLSearchParams(window.location.search);
    const spaId = urlParams.get('id');
    
    if (!spaId) {
        window.location.href = 'spa.html';
        return;
    }
    
    // Получаем данные СПА из localStorage
    const spas = JSON.parse(localStorage.getItem('spas')) || [];
    const spa = spas.find(s => s.id === spaId);
    
    if (!spa) {
        alert('СПА не найден');
        window.location.href = 'spa.html';
        return;
    }
    
    // Заполняем данные на странице
    document.title = `${spa.name} - BOOKNEST`;
    
    // Название и рейтинг
    document.getElementById('spaName').textContent = spa.name;
    
    // Рейтинг
    let ratingHtml = '';
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(spa.rating)) {
            ratingHtml += '<i class="bi bi-star-fill text-warning"></i>';
        } else if (i < spa.rating) {
            ratingHtml += '<i class="bi bi-star-half text-warning"></i>';
        } else {
            ratingHtml += '<i class="bi bi-star text-warning"></i>';
        }
    }
    document.getElementById('spaRating').innerHTML = ratingHtml + ` <span class="badge bg-warning text-dark">${spa.rating}</span>`;
    document.getElementById('spaReviewCount').textContent = `(${spa.reviewCount} отзывов)`;
    
    // Местоположение
    document.getElementById('spaLocation').innerHTML = `<i class="bi bi-geo-alt"></i> ${spa.location}`;
    
    // Описание
    document.getElementById('spaDescription').innerHTML = `<p>${spa.description}</p>`;
    
    // Услуги
    let servicesHtml = '<div class="table-responsive"><table class="table table-striped">';
    servicesHtml += '<thead><tr><th>Услуга</th><th>Длительность</th><th>Цена</th></tr></thead><tbody>';
    
    spa.services.forEach(service => {
        servicesHtml += `
        <tr>
            <td>${service.name}</td>
            <td>${service.duration}</td>
            <td>${service.price.toLocaleString()} ₸</td>
        </tr>
        `;
    });
    
    servicesHtml += '</tbody></table></div>';
    document.getElementById('spaServices').innerHTML = servicesHtml;
    
    // Фотогалерея
    let galleryHtml = '';
    spa.images.forEach((image, index) => {
        galleryHtml += `
        <div class="col-6 col-md-4">
            <a href="#" class="gallery-item" data-src="${image}" data-index="${index}">
                <img src="${image}" class="img-fluid rounded" alt="${spa.name} фото ${index + 1}" onerror="this.src='img/placeholder.jpg'">
            </a>
        </div>
        `;
    });
    document.getElementById('spaGallery').innerHTML = galleryHtml;
    
    // Карусель
    let carouselHtml = '';
    spa.images.forEach((image, index) => {
        carouselHtml += `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${image}" class="d-block w-100 rounded" alt="${spa.name}" style="height: 300px; object-fit: cover;" onerror="this.src='img/placeholder.jpg'">
        </div>
        `;
    });
    document.querySelector('#spaCarousel .carousel-inner').innerHTML = carouselHtml;
    
    // Информация
    let infoHtml = `
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><i class="bi bi-clock me-2"></i>Часы работы: ${spa.workingHours}</li>
        <li class="list-group-item"><i class="bi bi-telephone me-2"></i>Телефон: ${spa.phone}</li>
        <li class="list-group-item"><i class="bi bi-globe me-2"></i>Сайт: <a href="https://${spa.website}" target="_blank">${spa.website}</a></li>
        <li class="list-group-item"><i class="bi bi-tag me-2"></i>Тип: ${getSpaTypeName(spa.type)}</li>
    </ul>
    `;
    document.getElementById('spaInfo').innerHTML = infoHtml;
    
    // Отзывы
    loadSpaReviews(spa);
    
    // Форма бронирования
    const bookingServiceSelect = document.getElementById('bookingService');
    bookingServiceSelect.innerHTML = '';
    
    spa.services.forEach(service => {
        const option = document.createElement('option');
        option.value = service.name;
        option.textContent = `${service.name} - ${service.duration}`;
        option.setAttribute('data-price', service.price);
        bookingServiceSelect.appendChild(option);
    });
    
    // Устанавливаем цену выбранной услуги
    updateBookingPrice();
    
    // Устанавливаем минимальную дату (сегодня)
    const today = new Date();
    const dateInput = document.getElementById('bookingDate');
    dateInput.min = today.toISOString().split('T')[0];
    dateInput.value = today.toISOString().split('T')[0];
    
    // Проверяем, добавлен ли СПА в избранное
    checkFavoriteStatus(spaId);
    
    // Добавляем обработчики событий
    addEventListeners(spaId);
}

// Получение названия типа СПА
function getSpaTypeName(type) {
    switch(type) {
        case 'wellness': return 'Велнес СПА';
        case 'medical': return 'Медицинский СПА';
        case 'day': return 'Дневной СПА';
        case 'resort': return 'Курортный СПА';
        default: return 'СПА';
    }
}

// Загрузка отзывов
function loadSpaReviews(spa) {
    const reviewsContainer = document.getElementById('spaReviews');
    
    if (!spa.reviews || spa.reviews.length === 0) {
        reviewsContainer.innerHTML = '<div class="alert alert-info">Пока нет отзывов. Будьте первым, кто оставит отзыв!</div>';
        return;
    }
    
    // Сортируем отзывы по дате (сначала новые)
    const sortedReviews = [...spa.reviews].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    let reviewsHtml = '';
    
    sortedReviews.forEach(review => {
        // Формируем звезды для рейтинга
        let starsHtml = '';
        for (let i = 0; i < 5; i++) {
            if (i < review.rating) {
                starsHtml += '<i class="bi bi-star-fill text-warning"></i>';
            } else {
                starsHtml += '<i class="bi bi-star text-warning"></i>';
            }
        }
        
        // Форматируем дату
        const reviewDate = new Date(review.date);
        const formattedDate = reviewDate.toLocaleDateString('ru-RU', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
        });
        
        // Формируем карточку отзыва
        reviewsHtml += `
        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h6 class="card-subtitle">${review.userName}</h6>
                    <small class="text-muted">${formattedDate}</small>
                </div>
                <div class="mb-2">${starsHtml}</div>
                <p class="card-text">${review.text}</p>
            </div>
        </div>
        `;
    });
    
    reviewsContainer.innerHTML = reviewsHtml;
}

// Обновление цены бронирования
function updateBookingPrice() {
    const serviceSelect = document.getElementById('bookingService');
    const priceElement = document.getElementById('bookingPrice');
    
    if (!serviceSelect || !priceElement) return;
    
    const selectedOption = serviceSelect.options[serviceSelect.selectedIndex];
    const price = selectedOption.getAttribute('data-price');
    
    priceElement.textContent = parseInt(price).toLocaleString();
}

// Проверка статуса избранного
function checkFavoriteStatus(spaId) {
    const favoriteButton = document.getElementById('favoriteButton');
    if (!favoriteButton) return;
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser && currentUser.favorites && currentUser.favorites.some(f => f.id === spaId && f.type === 'spa')) {
        favoriteButton.innerHTML = '<i class="bi bi-heart-fill me-2"></i>Удалить из избранного';
        favoriteButton.classList.add('active');
    } else {
        favoriteButton.innerHTML = '<i class="bi bi-heart me-2"></i>Добавить в избранное';
        favoriteButton.classList.remove('active');
    }
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
    
    // Проверяем, есть ли уже этот СПА в избранном
    const favoriteIndex = users[userIndex].favorites.findIndex(f => f.id === id && f.type === type);
    
    // Получаем данные СПА
    const spas = JSON.parse(localStorage.getItem('spas')) || [];
    const spa = spas.find(s => s.id === id);
    
    if (!spa) {
        alert('Ошибка при обновлении избранного: СПА не найден');
        return;
    }
    
    if (favoriteIndex === -1) {
        // Добавляем в избранное с полной информацией
        users[userIndex].favorites.push({
            id: id,
            type: type,
            name: spa.name,
            image: spa.images[0],
            location: spa.location,
            price: spa.price,
            rating: spa.rating,
            stars: Math.floor(spa.rating),
            addedAt: new Date().toISOString()
        });
        
        // Обновляем кнопку
        button.classList.add('active');
        button.innerHTML = '<i class="bi bi-heart-fill me-2"></i>Удалить из избранного';
        
        // Показываем уведомление
        showNotification('Добавлено в избранное', 'success');
    } else {
        // Удаляем из избранного
        users[userIndex].favorites.splice(favoriteIndex, 1);
        
        // Обновляем кнопку
        button.classList.remove('active');
        button.innerHTML = '<i class="bi bi-heart me-2"></i>Добавить в избранное';
        
        // Показываем уведомление
        showNotification('Удалено из избранного', 'danger');
    }
    
    // Обновляем данные пользователя в localStorage
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(users[userIndex]));
}

// Показ уведомления
function showNotification(message, type = 'info') {
    // Создаем контейнер для уведомлений, если его нет
    if (!document.getElementById('notificationContainer')) {
        const container = document.createElement('div');
        container.id = 'notificationContainer';
        container.style.position = 'fixed';
        container.style.top = '20px';
        container.style.right = '20px';
        container.style.zIndex = '9999';
        document.body.appendChild(container);
    }
    
    // Создаем уведомление
    const notification = document.createElement('div');
    notification.className = `toast align-items-center text-white bg-${type} border-0`;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'assertive');
    notification.setAttribute('aria-atomic', 'true');
    
    notification.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;
    
    // Добавляем уведомление в контейнер
    document.getElementById('notificationContainer').appendChild(notification);
    
    // Инициализируем и показываем уведомление
    const toast = new bootstrap.Toast(notification, { delay: 3000 });
    toast.show();
    
    // Удаляем уведомление после скрытия
    notification.addEventListener('hidden.bs.toast', function() {
        notification.remove();
    });
}

// Бронирование СПА
function bookSpa(spaId) {
    // Проверяем, авторизован ли пользователь
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        // Показываем модальное окно для входа
        const loginModal = new bootstrap.Modal(document.getElementById('loginRequiredModal'));
        loginModal.show();
        return;
    }
    
    // Получаем данные из формы
    const serviceName = document.getElementById('bookingService').value;
    const servicePrice = document.getElementById('bookingService').options[document.getElementById('bookingService').selectedIndex].getAttribute('data-price');
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;
    const guests = document.getElementById('bookingGuests').value;
    
    // Проверяем заполнение обязательных полей
    if (!serviceName || !date || !time || !guests) {
        alert('Пожалуйста, заполните все обязательные поля');
        return;
    }
    
    // Получаем данные СПА
    const spas = JSON.parse(localStorage.getItem('spas')) || [];
    const spa = spas.find(s => s.id === spaId);
    
    if (!spa) {
        alert('Ошибка: СПА не найден');
        return;
    }
    
    // Создаем объект бронирования
    const booking = {
        id: Date.now().toString(),
        spaId: spaId,
        spaName: spa.name,
        spaImage: spa.images[0],
        userId: currentUser.id,
        userName: currentUser.name,
        service: serviceName,
        date: date,
        time: time,
        guests: parseInt(guests),
        price: parseInt(servicePrice),
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
    
    // Показываем уведомление
    showNotification('Бронирование успешно создано!', 'success');
    
    // Перенаправляем на страницу профиля
    setTimeout(() => {
        window.location.href = 'profile.html?booking=success';
    }, 2000);
}

// Добавление отзыва
function addReview(spaId) {
    // Проверяем, авторизован ли пользователь
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        // Показываем модальное окно для входа
        const loginModal = new bootstrap.Modal(document.getElementById('loginRequiredModal'));
        loginModal.show();
        return;
    }
    
    // Получаем данные из формы
    const rating = parseInt(document.getElementById('reviewRating').value);
    const text = document.getElementById('reviewText').value;
    
    if (!rating || !text) {
        alert('Пожалуйста, заполните все поля отзыва');
        return;
    }
    
    // Получаем данные СПА
    const spas = JSON.parse(localStorage.getItem('spas')) || [];
    const spaIndex = spas.findIndex(s => s.id === spaId);
    
    if (spaIndex === -1) {
        alert('Ошибка: СПА не найден');
        return;
    }
    
    // Создаем объект отзыва
    const review = {
        id: Date.now().toString(),
        userId: currentUser.id,
        userName: currentUser.name,
        rating: rating,
        date: new Date().toISOString().split('T')[0],
        text: text
    };
    
    // Инициализируем массив отзывов, если его нет
    if (!spas[spaIndex].reviews) {
        spas[spaIndex].reviews = [];
    }
    
    // Добавляем отзыв
    spas[spaIndex].reviews.push(review);
    
    // Пересчитываем рейтинг
    const totalRating = spas[spaIndex].reviews.reduce((sum, r) => sum + r.rating, 0);
    spas[spaIndex].rating = (totalRating / spas[spaIndex].reviews.length).toFixed(1);
    spas[spaIndex].reviewCount = spas[spaIndex].reviews.length;
    
    // Сохраняем в localStorage
    localStorage.setItem('spas', JSON.stringify(spas));
    
    // Показываем уведомление
    showNotification('Ваш отзыв успешно добавлен!', 'success');
    
    // Обновляем отзывы на странице
    loadSpaReviews(spas[spaIndex]);
    
    // Обновляем рейтинг на странице
    document.getElementById('spaRating').innerHTML = '';
    let ratingHtml = '';
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(spas[spaIndex].rating)) {
            ratingHtml += '<i class="bi bi-star-fill text-warning"></i>';
        } else if (i < spas[spaIndex].rating) {
            ratingHtml += '<i class="bi bi-star-half text-warning"></i>';
        } else {
            ratingHtml += '<i class="bi bi-star text-warning"></i>';
        }
    }
    document.getElementById('spaRating').innerHTML = ratingHtml + ` <span class="badge bg-warning text-dark">${spas[spaIndex].rating}</span>`;
    document.getElementById('spaReviewCount').textContent = `(${spas[spaIndex].reviewCount} отзывов)`;
    
    // Очищаем форму
    document.getElementById('reviewText').value = '';
    document.getElementById('reviewRating').value = '5';
}

// Добавление обработчиков событий
function addEventListeners(spaId) {
    // Обработчик для кнопки избранного
    const favoriteButton = document.getElementById('favoriteButton');
    if (favoriteButton) {
        favoriteButton.addEventListener('click', function() {
            toggleFavorite(spaId, 'spa', this);
        });
    }
    
    // Обработчик для формы бронирования
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            bookSpa(spaId);
        });
    }
    
    // Обработчик для выбора услуги (обновление цены)
    const bookingService = document.getElementById('bookingService');
    if (bookingService) {
        bookingService.addEventListener('change', updateBookingPrice);
    }
    
    // Обработчик для формы отзыва
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addReview(spaId);
        });
    }
    
    // Обработчики для фотогалереи
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const src = this.getAttribute('data-src');
            const modalPhoto = document.getElementById('modalPhoto');
            modalPhoto.src = src;
            const photoModal = new bootstrap.Modal(document.getElementById('photoModal'));
            photoModal.show();
        });
    });
}

// Инициализация страницы
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем авторизацию
    checkAuth();
    
    // Загружаем данные СПА
    loadSpaDetails();
});
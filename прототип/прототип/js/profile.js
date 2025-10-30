// Функция для загрузки данных профиля
function loadProfileData() {
  // Получаем текущего пользователя
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  // Если пользователь не авторизован, перенаправляем на страницу входа
  if (!currentUser) {
    window.location.href = 'login.html';
    return;
  }
  
  // Заполняем информацию профиля
  document.getElementById('profileName').textContent = currentUser.name || 'Пользователь';
  document.getElementById('profileEmail').textContent = currentUser.email || '';
  document.getElementById('profileNameInput').value = currentUser.name || '';
  document.getElementById('profileEmailInput').value = currentUser.email || '';
  document.getElementById('profilePhoneInput').value = currentUser.phone || '';
  
  // Отображаем имя пользователя в навигации
  document.getElementById('userDisplayName').textContent = currentUser.name || 'Пользователь';
  
  // Загружаем бронирования
  loadBookings();
  
  // Загружаем избранное
  loadFavorites();
  
  // Загружаем отзывы
  loadReviews();
}

// Функция для сохранения данных профиля
function saveProfileData(event) {
  event.preventDefault();
  
  // Получаем текущего пользователя
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  // Если пользователь не авторизован, перенаправляем на страницу входа
  if (!currentUser) {
    window.location.href = 'login.html';
    return;
  }
  
  // Получаем данные из формы
  const name = document.getElementById('profileNameInput').value;
  const phone = document.getElementById('profilePhoneInput').value;
  
  // Обновляем данные пользователя
  currentUser.name = name;
  currentUser.phone = phone;
  
  // Получаем всех пользователей
  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  // Находим индекс текущего пользователя
  const userIndex = users.findIndex(user => user.email === currentUser.email);
  
  if (userIndex !== -1) {
    // Обновляем данные пользователя в массиве
    users[userIndex] = currentUser;
    
    // Сохраняем обновленный массив пользователей
    localStorage.setItem('users', JSON.stringify(users));
    
    // Обновляем данные текущего пользователя
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Обновляем отображаемое имя
    document.getElementById('profileName').textContent = name;
    document.getElementById('userDisplayName').textContent = name;
    
    // Показываем сообщение об успешном сохранении
    showAlert('Данные профиля успешно сохранены', 'success');
  } else {
    showAlert('Ошибка при сохранении данных профиля', 'danger');
  }
}

// Функция для сохранения настроек
function saveSettings(event) {
  event.preventDefault();
  
  // Получаем текущего пользователя
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  // Если пользователь не авторизован, перенаправляем на страницу входа
  if (!currentUser) {
    window.location.href = 'login.html';
    return;
  }
  
  // Получаем данные из формы
  const password = document.getElementById('settingsPasswordInput').value;
  const confirmPassword = document.getElementById('settingsPasswordConfirmInput').value;
  const notifications = document.getElementById('settingsNotificationsCheck').checked;
  
  // Проверяем, что пароли совпадают
  if (password && password !== confirmPassword) {
    showAlert('Пароли не совпадают', 'danger');
    return;
  }
  
  // Обновляем данные пользователя
  if (password) {
    currentUser.password = password;
  }
  currentUser.notifications = notifications;
  
  // Получаем всех пользователей
  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  // Находим индекс текущего пользователя
  const userIndex = users.findIndex(user => user.email === currentUser.email);
  
  if (userIndex !== -1) {
    // Обновляем данные пользователя в массиве
    users[userIndex] = currentUser;
    
    // Сохраняем обновленный массив пользователей
    localStorage.setItem('users', JSON.stringify(users));
    
    // Обновляем данные текущего пользователя
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Очищаем поля пароля
    document.getElementById('settingsPasswordInput').value = '';
    document.getElementById('settingsPasswordConfirmInput').value = '';
    
    // Показываем сообщение об успешном сохранении
    showAlert('Настройки успешно сохранены', 'success');
  } else {
    showAlert('Ошибка при сохранении настроек', 'danger');
  }
}

// Функция для загрузки бронирований
function loadBookings() {
  const bookingsContainer = document.getElementById('bookingsContainer');
  
  // Получаем текущего пользователя
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  // Если пользователь не авторизован, перенаправляем на страницу входа
  if (!currentUser) {
    window.location.href = 'login.html';
    return;
  }
  
  // Получаем все бронирования
  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
  
  // Фильтруем бронирования текущего пользователя
  const userBookings = bookings.filter(booking => booking.userId === currentUser.id);
  
  // Если бронирований нет
  if (userBookings.length === 0) {
    bookingsContainer.innerHTML = '<div class="col-12"><div class="alert alert-info">У вас пока нет бронирований.</div></div>';
    return;
  }
  
  // Сортируем бронирования по дате (сначала новые)
  userBookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  
  // Создаем HTML для бронирований
  let html = '';
  
  userBookings.forEach(booking => {
    // Определяем тип бронирования и формируем соответствующий HTML
    let bookingDetails = '';
    let bookingTitle = '';
    let bookingImage = '';
    let bookingType = '';
    
    if (booking.type === 'hotel') {
      bookingTitle = booking.hotelName;
      bookingImage = booking.hotelImage;
      bookingType = 'Отель';
      bookingDetails = `
        <p><strong>Тип номера:</strong> ${booking.roomType}</p>
        <p><strong>Даты:</strong> ${booking.checkIn} - ${booking.checkOut}</p>
        <p><strong>Количество ночей:</strong> ${booking.nights}</p>
        <p><strong>Гостей:</strong> ${booking.guests}</p>
        <p><strong>Стоимость:</strong> ${booking.price} ₸</p>
      `;
    } else if (booking.type === 'restaurant') {
      bookingTitle = booking.restaurantName;
      bookingImage = booking.restaurantImage;
      bookingType = 'Ресторан';
      bookingDetails = `
        <p><strong>Дата:</strong> ${booking.date}</p>
        <p><strong>Время:</strong> ${booking.time}</p>
        <p><strong>Количество гостей:</strong> ${booking.guests}</p>
        <p><strong>Повод:</strong> ${booking.occasion || 'Не указан'}</p>
      `;
    } else if (booking.type === 'spa') {
      bookingTitle = booking.spaName;
      bookingImage = booking.spaImage;
      bookingType = 'СПА';
      bookingDetails = `
        <p><strong>Услуга:</strong> ${booking.service}</p>
        <p><strong>Дата:</strong> ${booking.date}</p>
        <p><strong>Время:</strong> ${booking.time}</p>
        <p><strong>Гостей:</strong> ${booking.guests}</p>
        <p><strong>Стоимость:</strong> ${booking.price} ₸</p>
      `;
    }
    
    html += `
      <div class="col-12 mb-4">
        <div class="card">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${bookingImage}" class="img-fluid rounded-start" alt="${bookingTitle}" style="height: 100%; object-fit: cover;">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                  <h5 class="card-title">${bookingTitle}</h5>
                  <span class="badge ${booking.status === 'confirmed' ? 'bg-success' : 'bg-danger'}">${booking.status === 'confirmed' ? 'Подтверждено' : 'Отменено'}</span>
                </div>
                <p class="card-text">
                  <span class="badge bg-primary">${bookingType}</span>
                </p>
                ${bookingDetails}
                <div class="d-flex justify-content-end mt-3">
                  ${booking.status === 'confirmed' ? `<button class="btn btn-sm btn-outline-danger" onclick="cancelBooking('${booking.id}')">Отменить</button>` : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  
  bookingsContainer.innerHTML = html;
}

// Функция для отмены бронирования
function cancelBooking(bookingId) {
  // Подтверждение отмены
  if (!confirm('Вы уверены, что хотите отменить бронирование?')) {
    return;
  }
  
  // Получаем все бронирования
  const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
  
  // Находим индекс бронирования
  const bookingIndex = bookings.findIndex(booking => booking.id === bookingId);
  
  if (bookingIndex === -1) {
    showAlert('Ошибка: Бронирование не найдено', 'danger');
    return;
  }
  
  // Меняем статус бронирования
  bookings[bookingIndex].status = 'cancelled';
  
  // Сохраняем обновленные бронирования
  localStorage.setItem('bookings', JSON.stringify(bookings));
  
  // Обновляем список бронирований
  loadBookings();
  
  // Показываем сообщение об успешной отмене
  showAlert('Бронирование успешно отменено', 'success');
}

// Функция для загрузки избранного
function loadFavorites() {
  const favoritesContainer = document.getElementById('favoritesContainer');
  
  // Получаем текущего пользователя
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  // Если пользователь не авторизован, перенаправляем на страницу входа
  if (!currentUser) {
    window.location.href = 'login.html';
    return;
  }
  
  // Получаем избранное пользователя
  const favorites = currentUser.favorites || [];
  
  // Если избранного нет
  if (favorites.length === 0) {
    favoritesContainer.innerHTML = '<div class="col-12"><div class="alert alert-info">У вас пока нет избранного.</div></div>';
    return;
  }
  
  // Создаем HTML для избранного
  let html = '';
  
  favorites.forEach(favorite => {
    let detailsUrl = '';
    let typeText = '';
    
    if (favorite.type === 'hotel') {
      detailsUrl = `hotel-detail.html?id=${favorite.id}`;
      typeText = 'Отель';
    } else if (favorite.type === 'restaurant') {
      detailsUrl = `restaurant-detail.html?id=${favorite.id}`;
      typeText = 'Ресторан';
    } else if (favorite.type === 'spa') {
      detailsUrl = `spa-detail.html?id=${favorite.id}`;
      typeText = 'СПА';
    }
    
    html += `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100">
          <img src="${favorite.image}" class="card-img-top" alt="${favorite.name}" style="height: 200px; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title">${favorite.name}</h5>
            <p class="card-text">
              <span class="badge bg-primary">${typeText}</span>
            </p>
            <p class="card-text">
              <i class="bi bi-geo-alt-fill text-primary"></i> ${favorite.location || 'Не указано'}
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                ${generateStarRating(favorite.rating || 0)}
              </div>
              <span class="text-primary">${favorite.price ? favorite.price + ' ₸' : ''}</span>
            </div>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <a href="${detailsUrl}" class="btn btn-sm btn-primary">Подробнее</a>
            <button class="btn btn-sm btn-outline-danger" onclick="removeFromFavorites('${favorite.id}', '${favorite.type}')">
              <i class="bi bi-heart-fill"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  });
  
  favoritesContainer.innerHTML = html;
}

// Функция для удаления из избранного
function removeFromFavorites(id, type) {
  // Получаем текущего пользователя
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  // Если пользователь не авторизован, перенаправляем на страницу входа
  if (!currentUser) {
    window.location.href = 'login.html';
    return;
  }
  
  // Инициализируем массив избранного, если его нет
  if (!currentUser.favorites) {
    currentUser.favorites = [];
  }
  
  // Находим индекс элемента в избранном
  const favoriteIndex = currentUser.favorites.findIndex(f => f.id === id && f.type === type);
  
  if (favoriteIndex === -1) {
    showAlert('Ошибка: Элемент не найден в избранном', 'danger');
    return;
  }
  
  // Удаляем элемент из избранного
  currentUser.favorites.splice(favoriteIndex, 1);
  
  // Получаем всех пользователей
  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  // Находим индекс текущего пользователя
  const userIndex = users.findIndex(user => user.email === currentUser.email);
  
  if (userIndex !== -1) {
    // Обновляем данные пользователя в массиве
    users[userIndex] = currentUser;
    
    // Сохраняем обновленный массив пользователей
    localStorage.setItem('users', JSON.stringify(users));
    
    // Обновляем данные текущего пользователя
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Обновляем список избранного
    loadFavorites();
    
    // Показываем сообщение об успешном удалении
    showAlert('Удалено из избранного', 'success');
  } else {
    showAlert('Ошибка при удалении из избранного', 'danger');
  }
}

// Функция для загрузки отзывов
function loadReviews() {
  const reviewsContainer = document.getElementById('reviewsContainer');
  
  // Получаем текущего пользователя
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  // Если пользователь не авторизован, перенаправляем на страницу входа
  if (!currentUser) {
    window.location.href = 'login.html';
    return;
  }
  
  // Получаем все отзывы пользователя
  let userReviews = [];
  
  // Получаем отзывы из отелей
  const hotels = JSON.parse(localStorage.getItem('hotels')) || [];
  hotels.forEach(hotel => {
    if (hotel.reviews) {
      const reviews = hotel.reviews.filter(review => review.userId === currentUser.id);
      reviews.forEach(review => {
        userReviews.push({
          ...review,
          itemName: hotel.name,
          itemImage: hotel.images[0],
          type: 'hotel',
          itemId: hotel.id
        });
      });
    }
  });
  
  // Получаем отзывы из ресторанов
  const restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
  restaurants.forEach(restaurant => {
    if (restaurant.reviews) {
      const reviews = restaurant.reviews.filter(review => review.userId === currentUser.id);
      reviews.forEach(review => {
        userReviews.push({
          ...review,
          itemName: restaurant.name,
          itemImage: restaurant.images[0],
          type: 'restaurant',
          itemId: restaurant.id
        });
      });
    }
  });
  
  // Получаем отзывы из СПА
  const spas = JSON.parse(localStorage.getItem('spas')) || [];
  spas.forEach(spa => {
    if (spa.reviews) {
      const reviews = spa.reviews.filter(review => review.userId === currentUser.id);
      reviews.forEach(review => {
        userReviews.push({
          ...review,
          itemName: spa.name,
          itemImage: spa.images[0],
          type: 'spa',
          itemId: spa.id
        });
      });
    }
  });
  
  // Если отзывов нет
  if (userReviews.length === 0) {
    reviewsContainer.innerHTML = '<div class="col-12"><div class="alert alert-info">У вас пока нет отзывов.</div></div>';
    return;
  }
  
  // Сортируем отзывы по дате (сначала новые)
  userReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Создаем HTML для отзывов
  let html = '';
  
  userReviews.forEach(review => {
    let detailsUrl = '';
    let typeText = '';
    
    if (review.type === 'hotel') {
      detailsUrl = `hotel-detail.html?id=${review.itemId}`;
      typeText = 'Отель';
    } else if (review.type === 'restaurant') {
      detailsUrl = `restaurant-detail.html?id=${review.itemId}`;
      typeText = 'Ресторан';
    } else if (review.type === 'spa') {
      detailsUrl = `spa-detail.html?id=${review.itemId}`;
      typeText = 'СПА';
    }
    
    html += `
      <div class="col-12 mb-4">
        <div class="card">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${review.itemImage}" class="img-fluid rounded-start" alt="${review.itemName}" style="height: 100%; object-fit: cover;">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                  <h5 class="card-title">${review.itemName}</h5>
                  <span class="badge bg-primary">${typeText}</span>
                </div>
                <p class="card-text">
                  <small class="text-muted">Дата отзыва: ${review.date}</small>
                </p>
                <div class="mb-2">
                  ${generateStarRating(review.rating)}
                </div>
                <p class="card-text">${review.text}</p>
                <div class="d-flex justify-content-end mt-3">
                  <a href="${detailsUrl}" class="btn btn-sm btn-outline-primary">Перейти</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
  
  reviewsContainer.innerHTML = html;
}

// Функция для генерации звездного рейтинга
function generateStarRating(rating) {
  let starsHtml = '';
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      starsHtml += '<i class="bi bi-star-fill text-warning"></i>';
    } else if (i < rating) {
      starsHtml += '<i class="bi bi-star-half text-warning"></i>';
    } else {
      starsHtml += '<i class="bi bi-star text-warning"></i>';
    }
  }
  return starsHtml;
}

// Функция для отображения уведомлений
function showAlert(message, type) {
  // Создаем элемент уведомления
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
  alertDiv.setAttribute('role', 'alert');
  alertDiv.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;
  
  // Находим контейнер для уведомлений или создаем его
  let alertContainer = document.querySelector('.alert-container');
  if (!alertContainer) {
    alertContainer = document.createElement('div');
    alertContainer.className = 'alert-container position-fixed top-0 end-0 p-3';
    alertContainer.style.zIndex = '1050';
    document.body.appendChild(alertContainer);
  }
  
  // Добавляем уведомление в контейнер
  alertContainer.appendChild(alertDiv);
  
  // Автоматически скрываем уведомление через 3 секунды
  setTimeout(() => {
    alertDiv.classList.remove('show');
    setTimeout(() => {
      alertDiv.remove();
    }, 150);
  }, 3000);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  // Загружаем данные профиля
  loadProfileData();
  
  // Добавляем обработчик для формы профиля
  const profileForm = document.getElementById('profileForm');
  if (profileForm) {
    profileForm.addEventListener('submit', saveProfileData);
  }
  
  // Добавляем обработчик для формы настроек
  const settingsForm = document.getElementById('settingsForm');
  if (settingsForm) {
    settingsForm.addEventListener('submit', saveSettings);
  }
});

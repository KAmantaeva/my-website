// Booking data storage
let bookings = JSON.parse(localStorage.getItem('bookings')) || [];

// Function to book a hotel
function bookHotel(hotelId, formData) {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        // Store redirect URL for after login
        localStorage.setItem('redirectAfterLogin', window.location.href);
        // Show login required modal if available
        const loginModal = document.getElementById('loginRequiredModal');
        if (loginModal) {
            const bsModal = new bootstrap.Modal(loginModal);
            bsModal.show();
        } else {
            alert('Для бронирования необходимо войти в систему');
            window.location.href = 'login.html';
        }
        return false;
    }
    
    // Get hotel data
    const hotels = JSON.parse(localStorage.getItem('hotels')) || [];
    const hotel = hotels.find(h => h.id === hotelId);
    
    if (!hotel) {
        alert('Ошибка: Отель не найден');
        return false;
    }
    
    // Create booking object
    const booking = {
        id: Date.now().toString(),
        userId: currentUser.id,
        hotelId: hotelId,
        hotelName: hotel.name,
        hotelImage: hotel.images[0],
        ...formData,
        status: 'confirmed',
        type: 'hotel',
        createdAt: new Date().toISOString()
    };
    
    // Add to bookings array
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    // Add to user's bookings
    if (!currentUser.bookings) {
        currentUser.bookings = [];
    }
    currentUser.bookings.push(booking.id);
    
    // Update user data
    updateUserData(currentUser);
    
    // Show success message
    const successModal = document.getElementById('bookingSuccessModal');
    if (successModal) {
        const bsModal = new bootstrap.Modal(successModal);
        bsModal.show();
    } else {
        alert('Бронирование успешно оформлено!');
        window.location.href = 'profile.html';
    }
    
    return true;
}

// Function to book a restaurant
function bookRestaurant(restaurantId, formData) {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        // Store redirect URL for after login
        localStorage.setItem('redirectAfterLogin', window.location.href);
        // Show login required modal if available
        const loginModal = document.getElementById('loginRequiredModal');
        if (loginModal) {
            const bsModal = new bootstrap.Modal(loginModal);
            bsModal.show();
        } else {
            alert('Для бронирования необходимо войти в систему');
            window.location.href = 'login.html';
        }
        return false;
    }
    
    // Get restaurant data
    const restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
    const restaurant = restaurants.find(r => r.id === restaurantId);
    
    if (!restaurant) {
        alert('Ошибка: Ресторан не найден');
        return false;
    }
    
    // Create booking object
    const booking = {
        id: Date.now().toString(),
        userId: currentUser.id,
        restaurantId: restaurantId,
        restaurantName: restaurant.name,
        restaurantImage: restaurant.images[0],
        ...formData,
        status: 'confirmed',
        type: 'restaurant',
        createdAt: new Date().toISOString()
    };
    
    // Add to bookings array
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    // Add to user's bookings
    if (!currentUser.bookings) {
        currentUser.bookings = [];
    }
    currentUser.bookings.push(booking.id);
    
    // Update user data
    updateUserData(currentUser);
    
    // Show success message
    const successModal = document.getElementById('bookingSuccessModal');
    if (successModal) {
        const bsModal = new bootstrap.Modal(successModal);
        bsModal.show();
    } else {
        alert('Бронирование успешно оформлено!');
        window.location.href = 'profile.html';
    }
    
    return true;
}

// Function to book a spa
function bookSpa(spaId, formData) {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        // Store redirect URL for after login
        localStorage.setItem('redirectAfterLogin', window.location.href);
        // Show login required modal if available
        const loginModal = document.getElementById('loginRequiredModal');
        if (loginModal) {
            const bsModal = new bootstrap.Modal(loginModal);
            bsModal.show();
        } else {
            alert('Для бронирования необходимо войти в систему');
            window.location.href = 'login.html';
        }
        return false;
    }
    
    // Get spa data
    const spas = JSON.parse(localStorage.getItem('spas')) || [];
    const spa = spas.find(s => s.id === spaId);
    
    if (!spa) {
        alert('Ошибка: СПА не найден');
        return false;
    }
    
    // Create booking object
    const booking = {
        id: Date.now().toString(),
        userId: currentUser.id,
        spaId: spaId,
        spaName: spa.name,
        spaImage: spa.images[0],
        ...formData,
        status: 'confirmed',
        type: 'spa',
        createdAt: new Date().toISOString()
    };
    
    // Add to bookings array
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    // Add to user's bookings
    if (!currentUser.bookings) {
        currentUser.bookings = [];
    }
    currentUser.bookings.push(booking.id);
    
    // Update user data
    updateUserData(currentUser);
    
    // Show success message
    const successModal = document.getElementById('bookingSuccessModal');
    if (successModal) {
        const bsModal = new bootstrap.Modal(successModal);
        bsModal.show();
    } else {
        alert('Бронирование успешно оформлено!');
        window.location.href = 'profile.html';
    }
    
    return true;
}

// Function to get user's bookings
function getUserBookings(userId) {
    return bookings.filter(booking => booking.userId === userId);
}

// Function to get booking details
function getBookingDetails(bookingId) {
    return bookings.find(booking => booking.id === bookingId);
}

// Function to update user data
function updateUserData(user) {
    // Get all users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Find user index
    const userIndex = users.findIndex(u => u.id === user.id);
    
    if (userIndex !== -1) {
        // Update user in array
        users[userIndex] = user;
        
        // Save updated users array
        localStorage.setItem('users', JSON.stringify(users));
        
        // Update current user
        localStorage.setItem('currentUser', JSON.stringify(user));
    }
}

// Функция для загрузки бронирований на странице профиля
function loadBookings() {
  const bookingsContainer = document.getElementById('bookingsContainer');
  if (!bookingsContainer) return;
  
  // Получаем текущего пользователя
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser) {
    window.location.href = 'login.html';
    return;
  }
  
  // Получаем все бронирования
  const allBookings = JSON.parse(localStorage.getItem('bookings')) || [];
  
  // Фильтруем бронирования текущего пользователя
  const userBookings = allBookings.filter(booking => booking.userId === currentUser.id);
  
  // Если нет бронирований
  if (userBookings.length === 0) {
    bookingsContainer.innerHTML = '<div class="col-12"><div class="alert alert-info">У вас пока нет бронирований.</div></div>';
    return;
  }
  
  // Сортируем бронирования по дате (новые сначала)
  userBookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  
  // Создаем HTML для бронирований
  let html = '';
  
  userBookings.forEach(booking => {
    // Определяем тип бронирования и создаем соответствующий HTML
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
        <p><strong>Количество гостей:</strong> ${booking.guests}</p>
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
        <p><strong>Количество гостей:</strong> ${booking.guests}</p>
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
  const bookingIndex = bookings.findIndex(b => b.id === bookingId);
  
  if (bookingIndex === -1) {
    alert('Ошибка: Бронирование не найдено');
    return;
  }
  
  // Меняем статус бронирования
  bookings[bookingIndex].status = 'cancelled';
  
  // Сохраняем изменения
  localStorage.setItem('bookings', JSON.stringify(bookings));
  
  // Обновляем отображение
  loadBookings();
}

// Загружаем бронирования при загрузке страницы профиля
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.includes('profile.html')) {
    loadBookings();
  }
});
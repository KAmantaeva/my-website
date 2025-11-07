// Обработчик для формы бронирования
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Проверяем, авторизован ли пользователь
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (!currentUser) {
                // Показываем модальное окно для входа
                const loginModal = new bootstrap.Modal(document.getElementById('loginRequiredModal'));
                loginModal.show();
                return;
            }
            
            // Получаем ID ресторана из URL
            const urlParams = new URLSearchParams(window.location.search);
            const restaurantId = urlParams.get('id');
            
            // Получаем данные ресторана
            const restaurants = JSON.parse(localStorage.getItem('restaurants')) || [];
            const restaurant = restaurants.find(r => r.id === restaurantId);
            
            if (!restaurant) {
                alert('Ошибка: ресторан не найден');
                return;
            }
            
            // Получаем данные из формы
            const date = document.getElementById('bookingDate').value;
            const time = document.getElementById('bookingTime').value;
            const guests = document.getElementById('bookingGuests').value;
            
            // Создаем объект бронирования
            const booking = {
                id: Date.now().toString(),
                restaurantId: restaurantId,
                restaurantName: restaurant.name,
                restaurantImage: restaurant.images[0],
                userId: currentUser.id,
                userName: currentUser.name,
                phone: currentUser.phone || '',
                date: date,
                time: time,
                guests: parseInt(guests),
                price: restaurant.price,
                status: 'confirmed', // confirmed, cancelled
                type: 'restaurant',
                createdAt: new Date().toISOString()
            };
            
            // Получаем существующие бронирования
            const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
            
            // Добавляем новое бронирование
            bookings.push(booking);
            
            // Сохраняем в localStorage
            localStorage.setItem('bookings', JSON.stringify(bookings));
            
            // Перенаправляем на страницу профиля
            window.location.href = 'profile.html?booking=success';
        });
    }
    
    // Обработчик для кнопки избранного
    const favoriteButton = document.getElementById('favoriteButton');
    if (favoriteButton) {
        // Получаем ID ресторана из URL
        const urlParams = new URLSearchParams(window.location.search);
        const restaurantId = urlParams.get('id');
        
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
});
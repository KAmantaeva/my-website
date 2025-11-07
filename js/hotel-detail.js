document.addEventListener('DOMContentLoaded', function() {
    // Get hotel ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const hotelId = urlParams.get('id') || '1'; // Default to first hotel if no ID
    
    // Load hotel data
    const hotels = JSON.parse(localStorage.getItem('hotels')) || getDefaultHotels();
    const hotel = hotels.find(h => h.id === hotelId) || hotels[0];
    
    // Update hotel details
    document.getElementById('hotelName').textContent = hotel.name;
    document.title = hotel.name + ' - BOOKNEST';
    
    // Check if hotel is in favorites
    updateFavoriteButton(hotel.id);
    
    // Setup booking form
    const bookingForm = document.getElementById('bookingForm');
    const checkInDate = document.getElementById('checkInDate');
    const checkOutDate = document.getElementById('checkOutDate');
    const roomType = document.getElementById('roomType');
    const nightPrice = document.getElementById('nightPrice');
    const nightsCount = document.getElementById('nightsCount');
    const totalPrice = document.getElementById('totalPrice');
    
    // Set min dates for check-in and check-out
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    checkInDate.min = formatDate(today);
    checkOutDate.min = formatDate(tomorrow);
    
    // Update price calculation when inputs change
    [checkInDate, checkOutDate, roomType].forEach(input => {
        input.addEventListener('change', updatePriceCalculation);
    });
    
    // Initial price calculation
    updatePriceCalculation();
    
    // Handle booking submission
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Check if user is logged in
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            alert('Пожалуйста, войдите в систему, чтобы забронировать отель');
            window.location.href = 'login.html';
            return;
        }
        
        // Create booking
        const booking = {
            id: Date.now().toString(),
            hotelId: hotel.id,
            hotelName: hotel.name,
            checkIn: checkInDate.value,
            checkOut: checkOutDate.value,
            roomType: roomType.options[roomType.selectedIndex].text,
            guestsCount: document.getElementById('guestsCount').value,
            totalPrice: calculateTotalPrice(),
            bookingDate: new Date().toISOString()
        };
        
        // Add booking to user
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        
        if (userIndex !== -1) {
            if (!users[userIndex].bookings) {
                users[userIndex].bookings = [];
            }
            
            users[userIndex].bookings.push(booking);
            localStorage.setItem('users', JSON.stringify(users));
            
            // Update current user
            currentUser.bookings = users[userIndex].bookings;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            alert('Бронирование успешно оформлено!');
            window.location.href = 'profile.html';
        } else {
            alert('Ошибка при бронировании. Пожалуйста, попробуйте снова.');
        }
    });
    
    // Handle favorite button
    const favoriteBtn = document.getElementById('favoriteBtn');
    favoriteBtn.addEventListener('click', function() {
        toggleFavorite(hotel.id);
    });
});

// Helper functions
function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function updatePriceCalculation() {
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    const roomType = document.getElementById('roomType').value;
    
    // Base prices
    const prices = {
        standard: 15000,
        deluxe: 25000,
        suite: 35000
    };
    
    // Update night price
    document.getElementById('nightPrice').textContent = prices[roomType] + ' ₸';
    
    // Calculate nights
    let nights = 0;
    if (checkInDate && checkOutDate) {
        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);
        const timeDiff = checkOut - checkIn;
        nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        if (nights < 0) {
            nights = 0;
            alert('Дата выезда должна быть позже даты заезда');
        }
    }
    
    document.getElementById('nightsCount').textContent = nights;
    
    // Calculate total
    const total = prices[roomType] * nights;
    document.getElementById('totalPrice').textContent = total + ' ₸';
}

function calculateTotalPrice() {
    const roomType = document.getElementById('roomType').value;
    const nights = parseInt(document.getElementById('nightsCount').textContent);
    
    // Base prices
    const prices = {
        standard: 15000,
        deluxe: 25000,
        suite: 35000
    };
    
    return prices[roomType] * nights;
}

function getDefaultHotels() {
    const hotels = [
        {
            id: '1',
            name: 'Beluga Hotel',
            location: 'Алматы',
            stars: 3,
            rating: 4.5,
            price: 15000,
            description: 'Beluga Hotel — это отель с 3 звездами, расположенный в городе Алматы. К услугам гостей бар. В числе прочих удобств — ресторан, доставка еды и напитков в номер, круглосуточная стойка регистрации и бесплатный Wi-Fi.',
            images: ['images/отель2.jfif', 'images/отель3.jpg']
        },
        {
            id: '2',
            name: 'Отель Золотая Орхидея',
            location: 'Алматы',
            stars: 4,
            rating: 4.5,
            price: 20000,
            description: 'Роскошный отель в центре города с видом на горы.',
            images: ['images/Отель1.jfif']
        },
        {
            id: '3',
            name: 'Green Palace Hotel',
            location: 'Астана',
            stars: 5,
            rating: 4.6,
            price: 30000,
            description: 'Современный отель в деловом центре столицы.',
            images: ['images/отель2.jfif']
        }
    ];
    
    localStorage.setItem('hotels', JSON.stringify(hotels));
    return hotels;
}

function updateFavoriteButton(hotelId) {
    const favoriteBtn = document.getElementById('favoriteBtn');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser && currentUser.favorites && currentUser.favorites.includes(hotelId)) {
        favoriteBtn.innerHTML = '<i class="bi bi-heart-fill text-danger"></i>';
        favoriteBtn.classList.add('active');
    } else {
        favoriteBtn.innerHTML = '<i class="bi bi-heart"></i>';
        favoriteBtn.classList.remove('active');
    }
}

function toggleFavorite(hotelId) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser) {
        alert('Пожалуйста, войдите в систему, чтобы добавить отель в избранное');
        window.location.href = 'login.html';
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (userIndex !== -1) {
        if (!users[userIndex].favorites) {
            users[userIndex].favorites = [];
        }
        
        const favoriteIndex = users[userIndex].favorites.indexOf(hotelId);
        
        if (favoriteIndex === -1) {
            // Add to favorites
            users[userIndex].favorites.push(hotelId);
        } else {
            // Remove from favorites
            users[userIndex].favorites.splice(favoriteIndex, 1);
        }
        
        localStorage.setItem('users', JSON.stringify(users));
        
        // Update current user
        currentUser.favorites = users[userIndex].favorites;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        // Update button
        updateFavoriteButton(hotelId);
    }
}
// Обработчик для формы поиска на главной странице
document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const searchType = document.getElementById('searchType').value;
            const searchLocation = document.getElementById('searchLocation').value;
            
            // Перенаправляем на соответствующую страницу с параметрами поиска
            if (searchType === 'hotels') {
                window.location.href = `hotels.html?location=${encodeURIComponent(searchLocation)}`;
            } else if (searchType === 'restaurants') {
                window.location.href = `restaurants.html?location=${encodeURIComponent(searchLocation)}`;
            } else if (searchType === 'spa') {
                window.location.href = `spa.html?location=${encodeURIComponent(searchLocation)}`;
            }
        });
    }
    
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
});
// User data storage
let users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// SMS verification code handling
let verificationCode = '';
let pendingUser = null;

// DOM Elements for registration
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the registration page
    const registerForm = document.getElementById('registerForm');
    const getCodeBtn = document.getElementById('getCodeBtn');
    const verificationSection = document.getElementById('verificationSection');
    
    // Check if we're on the login page
    const loginForm = document.getElementById('loginForm');
    
    // Check if we're on the set password page
    const setPasswordForm = document.getElementById('setPasswordForm');
    
    // Update navigation based on login status
    updateNavigation();
    
    // Registration page functionality
    if (registerForm) {
        getCodeBtn.addEventListener('click', function() {
            const username = document.getElementById('regUsername').value;
            const phone = document.getElementById('regPhone').value;
            
            if (!username || !phone) {
                alert('Пожалуйста, заполните все поля');
                return;
            }
            
            // Generate a random 6-digit code
            verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
            
            // Store pending user
            pendingUser = {
                username: username,
                phone: phone
            };
            
            // Save verification code to localStorage (simulating SMS)
            const smsCodes = JSON.parse(localStorage.getItem('smsCodes')) || {};
            smsCodes[phone] = verificationCode;
            localStorage.setItem('smsCodes', JSON.stringify(smsCodes));
            
            // Show verification section
            verificationSection.style.display = 'block';
            
            // Alert the code (in a real app, this would be sent via SMS)
            alert(`Ваш код подтверждения: ${verificationCode}`);
            
            // Setup code input fields for auto-tabbing
            setupCodeInputs();
        });
        
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!pendingUser) {
                alert('Пожалуйста, получите код подтверждения');
                return;
            }
            
            // Get entered code
            const enteredCode = getEnteredCode();
            
            // Verify code
            if (enteredCode === verificationCode) {
                // Redirect to set password page
                localStorage.setItem('pendingUser', JSON.stringify(pendingUser));
                window.location.href = 'set-password.html';
            } else {
                alert('Неверный код подтверждения');
            }
        });
    }
    
    // Set password page functionality
    if (setPasswordForm) {
        setPasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (newPassword !== confirmPassword) {
                alert('Пароли не совпадают');
                return;
            }
            
            // Get pending user
            const pendingUser = JSON.parse(localStorage.getItem('pendingUser'));
            
            if (!pendingUser) {
                alert('Ошибка регистрации. Пожалуйста, начните заново');
                window.location.href = 'register.html';
                return;
            }
            
            // Create new user
            const newUser = {
                id: Date.now().toString(),
                username: pendingUser.username,
                phone: pendingUser.phone,
                password: newPassword,
                bookings: [],
                favorites: []
            };
            
            // Add to users array
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            // Set as current user
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            
            // Clear pending user
            localStorage.removeItem('pendingUser');
            
            // Redirect to profile
            window.location.href = 'profile.html';
        });
    }
    
    // Login page functionality
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Find user
            const user = users.find(u => u.username === username && u.password === password);
            
            if (user) {
                // Set as current user
                localStorage.setItem('currentUser', JSON.stringify(user));
                
                // Redirect to home page
                window.location.href = 'index.html';
            } else {
                alert('Неверное имя пользователя или пароль');
            }
        });
    }
    
    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Clear current user
            localStorage.removeItem('currentUser');
            
            // Redirect to home page
            window.location.href = 'index.html';
        });
    }
});

// Helper functions
function setupCodeInputs() {
    const inputs = [
        document.getElementById('code1'),
        document.getElementById('code2'),
        document.getElementById('code3'),
        document.getElementById('code4'),
        document.getElementById('code5'),
        document.getElementById('code6')
    ];
    
    inputs.forEach((input, index) => {
        input.addEventListener('keyup', function(e) {
            if (e.key >= '0' && e.key <= '9') {
                // Move to next input
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            } else if (e.key === 'Backspace') {
                // Move to previous input
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });
    });
}

function getEnteredCode() {
    return [
        document.getElementById('code1').value,
        document.getElementById('code2').value,
        document.getElementById('code3').value,
        document.getElementById('code4').value,
        document.getElementById('code5').value,
        document.getElementById('code6').value
    ].join('');
}

function updateNavigation() {
    // Функция для проверки авторизации
    function checkAuth() {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      const loginMenuItem = document.getElementById('loginMenuItem');
      const userMenuItem = document.getElementById('userMenuItem');
      
      if (currentUser) {
        // Пользователь авторизован
        if (loginMenuItem) loginMenuItem.classList.add('d-none');
        if (userMenuItem) {
          userMenuItem.classList.remove('d-none');
          document.getElementById('userDisplayName').textContent = currentUser.name || 'Пользователь';
        }
      } else {
        // Пользователь не авторизован
        if (loginMenuItem) loginMenuItem.classList.remove('d-none');
        if (userMenuItem) userMenuItem.classList.add('d-none');
      }
    }
    
    // Функция для выхода из аккаунта
    function logout() {
      localStorage.removeItem('currentUser');
      window.location.href = 'index.html';
    }
    
    // Инициализация при загрузке страницы
    document.addEventListener('DOMContentLoaded', function() {
      // Проверяем авторизацию
      checkAuth();
      
      // Добавляем обработчик для кнопки выхода
      const logoutBtn = document.getElementById('logoutBtn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
          e.preventDefault();
          logout();
        });
      }
    });
    const loginMenuItem = document.getElementById('loginMenuItem');
    const userMenuItem = document.getElementById('userMenuItem');
    const userDisplayName = document.getElementById('userDisplayName');
    const logoutBtn = document.getElementById('logoutBtn');
    const homeMenuItem = document.getElementById('homeMenuItem');
    
    // Если пользователь авторизован
    if (currentUser) {
        if (loginMenuItem) loginMenuItem.classList.add('d-none');
        if (userMenuItem) {
            userMenuItem.classList.remove('d-none');
            if (userDisplayName) userDisplayName.textContent = currentUser.username || currentUser.name;
        }
        
        // Скрываем пункт "Главный" в меню на страницах отелей и профиля
        if (window.location.pathname.includes('hotels.html') || 
            window.location.pathname.includes('profile.html') || 
            window.location.pathname.includes('hotel-detail.html')) {
            if (homeMenuItem) homeMenuItem.classList.add('d-none');
        }
    }
    
    // Обработчик выхода
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('currentUser');
            window.location.href = 'index.html';
        });
    }
    
    // Обработка формы входа для простой формы (без SMS)
    const simpleLoginForm = document.getElementById('simpleLoginForm');
    if (simpleLoginForm) {
        simpleLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            
            // Получаем пользователей
            const users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Находим пользователя
            const user = users.find(u => (u.username === username || u.phone === username) && u.password === password);
            
            if (user) {
                // Устанавливаем текущего пользователя
                localStorage.setItem('currentUser', JSON.stringify(user));
                
                // Перенаправляем на предыдущую страницу или на главную
                const redirectUrl = localStorage.getItem('redirectAfterLogin') || 'index.html';
                localStorage.removeItem('redirectAfterLogin');
                window.location.href = redirectUrl;
            } else {
                alert('Неверное имя пользователя или пароль');
            }
        });
    }
    
    // Обработка формы простой регистрации (без SMS)
    const simpleRegisterForm = document.getElementById('simpleRegisterForm');
    if (simpleRegisterForm) {
        simpleRegisterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('registerUsername').value;
            const phone = document.getElementById('registerPhone').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Пароли не совпадают');
                return;
            }
            
            // Получаем пользователей
            const users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Проверяем, существует ли пользователь с таким именем или телефоном
            if (users.some(u => u.username === username || u.phone === phone)) {
                alert('Пользователь с таким именем или телефоном уже существует');
                return;
            }
            
            // Создаем нового пользователя
            const newUser = {
                id: Date.now().toString(),
                username: username,
                phone: phone,
                password: password,
                bookings: [],
                favorites: []
            };
            
            // Добавляем пользователя в массив
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            // Устанавливаем текущего пользователя
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            
            // Перенаправляем на главную страницу
            window.location.href = 'index.html';
        });
    }
    
    // Инициализация тестовых данных, если их нет
    initTestData();
}

// Инициализация тестовых данных
function initTestData() {
    // Проверяем, есть ли пользователи
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.length === 0) {
        // Создаем тестового пользователя
        const testUser = {
            id: '1',
            username: 'test',
            phone: '77771234567',
            password: 'test',
            bookings: [],
            favorites: []
        };
        
        users.push(testUser);
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    // Проверяем, есть ли отели
    if (!localStorage.getItem('hotels')) {
        // Создаем тестовые данные отелей
        const hotels = [
            {
                id: '1',
                name: 'Отель Золотая Орхидея',
                location: 'Алматы, ул. Фурманова, 164',
                stars: 5,
                rating: 5.0,
                price: 25000,
                description: 'Роскошный отель в центре города с панорамным видом на горы. Отель предлагает просторные номера, оформленные в современном стиле, с бесплатным Wi-Fi и кондиционером. К услугам гостей спа-центр, крытый бассейн и фитнес-центр.',
                amenities: ['wifi', 'parking', 'breakfast', 'pool'],
                images: ['images/hotel1.jpg', 'images/hotel1-2.jpg', 'images/hotel1-3.jpg'],
                rooms: ['Стандартный номер', 'Люкс', 'Президентский люкс'],
                services: ['Круглосуточная стойка регистрации', 'Обслуживание номеров', 'Трансфер от/до аэропорта'],
                reviews: [
                    {
                        author: 'Александр',
                        rating: 5,
                        text: 'Отличный отель с прекрасным обслуживанием и видом на горы. Обязательно вернусь сюда снова!'
                    },
                    {
                        author: 'Елена',
                        rating: 5,
                        text: 'Великолепный сервис, вкусные завтраки и удобное расположение. Рекомендую!'
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
                description: 'Уютный курорт в горах с прямым доступом к горнолыжным трассам. Отель предлагает комфортабельные номера с видом на горы, ресторан с национальной и европейской кухней, а также спа-центр с сауной и массажными кабинетами.',
                amenities: ['wifi', 'parking', 'breakfast'],
                images: ['images/hotel2.jpg', 'images/hotel2-2.jpg'],
                rooms: ['Стандартный номер', 'Семейный номер', 'Шале'],
                services: ['Прокат лыжного снаряжения', 'Инструкторы по горным лыжам', 'Трансфер до подъемников'],
                reviews: [
                    {
                        author: 'Дмитрий',
                        rating: 5,
                        text: 'Идеальное место для горнолыжного отдыха. Отличные трассы, вкусная еда и приветливый персонал.'
                    },
                    {
                        author: 'Ольга',
                        rating: 4,
                        text: 'Хороший отель с удобным расположением. Немного тесные номера, но в целом все понравилось.'
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
                description: 'Современный бизнес-отель в центре столицы, идеально подходящий для деловых поездок. Отель предлагает комфортабельные номера с рабочей зоной, бесплатным Wi-Fi и кондиционером. К услугам гостей бизнес-центр, конференц-залы и ресторан.',
                amenities: ['wifi', 'parking'],
                images: ['images/hotel3.jpg', 'images/hotel3-2.jpg'],
                rooms: ['Стандартный номер', 'Бизнес-номер', 'Люкс'],
                services: ['Бизнес-центр', 'Конференц-залы', 'Услуги секретаря'],
                reviews: [
                    {
                        author: 'Игорь',
                        rating: 4,
                        text: 'Отличный отель для деловых поездок. Удобное расположение, хороший завтрак и быстрый интернет.'
                    },
                    {
                        author: 'Наталья',
                        rating: 4,
                        text: 'Чистые и комфортные номера, приветливый персонал. Рекомендую для бизнес-путешественников.'
                    }
                ]
            }
        ];
        
        localStorage.setItem('hotels', JSON.stringify(hotels));
    }
}
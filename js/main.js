// seed data (only written once, then all mutations go through localStorage)
var SEED_PRODUCTS = [
    { id: 1, name: "Walnut Monitor Stand", price: 24999, category: "organization", description: "Elevate your monitor with this handcrafted walnut wood stand. Features a clean design with hidden cable management and a storage shelf underneath.", rating: 5, reviews: 124, badge: "Best Seller", stock: 18, image: "images/monitor-stand-wood-desk.jpg" },
    { id: 2, name: "Leather Desk Pad", price: 13999, category: "accessories", description: "Premium full-grain leather desk pad that ages beautifully. Provides a smooth surface for your mouse and protects your desk from scratches.", rating: 4, reviews: 89, badge: "Popular", stock: 34, image: "images/leather-desk-pad.jpg" },
    { id: 3, name: "Minimal White Keyboard", price: 35999, category: "peripherals", description: "A clean mechanical keyboard with silent switches, white PBT keycaps, and wireless connectivity. Perfect for a minimal desk setup.", rating: 5, reviews: 203, badge: "Featured", stock: 12, image: "images/white-mechanical-keyboard.jpg" },
    { id: 4, name: "LED Arc Desk Lamp", price: 19499, category: "lighting", description: "Sleek arc desk lamp with adjustable color temperature and brightness. Touch-sensitive controls with a memory function.", rating: 4, reviews: 67, badge: "", stock: 22, image: "images/modern-desk-lamp.jpg" },
    { id: 5, name: "Monitor Light Bar", price: 12499, category: "lighting", description: "Reduce eye strain with this screen-mounted light bar. Auto-dimming sensor adjusts brightness based on ambient light.", rating: 5, reviews: 91, badge: "", stock: 27, image: "images/monitor-light-bar-desk.jpg" },
    { id: 6, name: "Oak Desk Shelf", price: 33499, category: "organization", description: "A beautiful oak shelf riser that sits on your desk. Two tiers provide extra storage while keeping your workspace organized.", rating: 5, reviews: 45, badge: "New", stock: 9, image: "images/desk-shelf-organizer-wood.jpg" },
    { id: 7, name: "Aluminum USB-C Hub", price: 16999, category: "peripherals", description: "7-in-1 USB-C hub in a sleek aluminum body. Includes HDMI, USB-A, SD card reader, and power delivery passthrough.", rating: 5, reviews: 187, badge: "Top Rated", stock: 45, image: "images/usb-hub-desk-minimal.jpg" },
    { id: 8, name: "Wooden Headphone Stand", price: 10999, category: "accessories", description: "Elegant walnut headphone stand with a slim profile. A simple way to keep your headphones off the desk and on display.", rating: 4, reviews: 94, badge: "", stock: 31, image: "images/headphone-stand-wood.jpg" }
];

var SEED_CATEGORIES = [
    { id: 1, slug: "organization", name: "Desk Organization", description: "Keep your workspace tidy and clutter-free." },
    { id: 2, slug: "lighting",     name: "Lighting",          description: "Set the mood with the right desk lighting." },
    { id: 3, slug: "peripherals",  name: "Peripherals",       description: "Keyboards, hubs, and everyday tools." },
    { id: 4, slug: "accessories",  name: "Accessories",       description: "Finishing touches for a clean setup." }
];

var SEED_ADMIN = { username: "admin", password: "admin123", name: "Haashir Azhar", email: "admin@deskcraft.com" };

var SEED_ORDERS = [
    { id: "ORD-2026-001", date: "2026-03-25", status: "Delivered",  customer: { name: "Ali Raza",    email: "ali@example.com",   phone: "+92 300 1234567", city: "Lahore",    address: "House 45, DHA Phase 5" }, items: [{ id: 1, name: "Walnut Monitor Stand", price: 24999, quantity: 1 }, { id: 2, name: "Leather Desk Pad", price: 13999, quantity: 1 }], total: 38998 },
    { id: "ORD-2026-002", date: "2026-03-20", status: "In Transit", customer: { name: "Sara Khan",   email: "sara@example.com",  phone: "+92 321 7654321", city: "Karachi",   address: "Flat 12, Clifton Block 5" },  items: [{ id: 3, name: "Minimal White Keyboard", price: 35999, quantity: 1 }], total: 35999 },
    { id: "ORD-2026-003", date: "2026-03-10", status: "Delivered",  customer: { name: "Usman Tariq", email: "usman@example.com", phone: "+92 333 9988776", city: "Islamabad", address: "Street 8, F-10/2" },           items: [{ id: 4, name: "LED Arc Desk Lamp", price: 19499, quantity: 2 }, { id: 8, name: "Wooden Headphone Stand", price: 10999, quantity: 1 }], total: 49997 },
    { id: "ORD-2026-004", date: "2026-04-02", status: "Processing", customer: { name: "Zara Ahmed",  email: "zara@example.com",  phone: "+92 312 4455667", city: "Lahore",    address: "House 22, Gulberg III" },      items: [{ id: 7, name: "Aluminum USB-C Hub", price: 16999, quantity: 2 }], total: 33998 },
    { id: "ORD-2026-005", date: "2026-04-08", status: "Pending",    customer: { name: "Bilal Hussain", email: "bilal@example.com", phone: "+92 345 1122334", city: "Faisalabad", address: "House 7, Madina Town" },    items: [{ id: 5, name: "Monitor Light Bar", price: 12499, quantity: 1 }, { id: 6, name: "Oak Desk Shelf", price: 33499, quantity: 1 }], total: 45998 }
];

var SEED_USERS = [
    { id: 1, fullname: "Ali Raza",      email: "ali@example.com",   password: "password123", phone: "+92 300 1234567", city: "Lahore",     address: "House 45, DHA Phase 5",   gender: "male",   dob: "1998-04-12", createdAt: "2026-02-10" },
    { id: 2, fullname: "Sara Khan",     email: "sara@example.com",  password: "password123", phone: "+92 321 7654321", city: "Karachi",    address: "Flat 12, Clifton Block 5", gender: "female", dob: "2000-07-23", createdAt: "2026-02-18" },
    { id: 3, fullname: "Usman Tariq",   email: "usman@example.com", password: "password123", phone: "+92 333 9988776", city: "Islamabad",  address: "Street 8, F-10/2",         gender: "male",   dob: "1995-11-05", createdAt: "2026-03-01" },
    { id: 4, fullname: "Zara Ahmed",    email: "zara@example.com",  password: "password123", phone: "+92 312 4455667", city: "Lahore",     address: "House 22, Gulberg III",    gender: "female", dob: "1999-01-30", createdAt: "2026-03-12" },
    { id: 5, fullname: "Bilal Hussain", email: "bilal@example.com", password: "password123", phone: "+92 345 1122334", city: "Faisalabad", address: "House 7, Madina Town",     gender: "male",   dob: "1997-09-14", createdAt: "2026-03-28" }
];

var SEED_REVIEWS = [
    { id: 1, productId: 1, userName: "Ali Raza",      rating: 5, comment: "Rock solid build. Monitor sits perfectly.", date: "2026-03-27", status: "approved", reply: "" },
    { id: 2, productId: 3, userName: "Sara Khan",     rating: 5, comment: "Silent switches are amazing for the office.", date: "2026-03-22", status: "approved", reply: "Thanks Sara, glad you love it!" },
    { id: 3, productId: 4, userName: "Usman Tariq",   rating: 4, comment: "Good lamp but the base could be heavier.", date: "2026-03-12", status: "approved", reply: "" },
    { id: 4, productId: 7, userName: "Zara Ahmed",    rating: 5, comment: "Exactly what my setup needed.", date: "2026-04-03", status: "pending",  reply: "" },
    { id: 5, productId: 2, userName: "Bilal Hussain", rating: 3, comment: "Smells a bit at first but feels premium.", date: "2026-04-09", status: "pending",  reply: "" }
];

function seedIfMissing(key, value) {
    if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

function seedAll() {
    seedIfMissing('deskcraft_products',   SEED_PRODUCTS);
    seedIfMissing('deskcraft_categories', SEED_CATEGORIES);
    seedIfMissing('deskcraft_admin',      SEED_ADMIN);
    seedIfMissing('deskcraft_orders',     SEED_ORDERS);
    seedIfMissing('deskcraft_users',      SEED_USERS);
    seedIfMissing('deskcraft_reviews',    SEED_REVIEWS);
}
seedAll();

// one-shot restore for a product that was accidentally removed via admin
(function () {
    if (localStorage.getItem('deskcraft_restore_v1')) return;
    try {
        var list = JSON.parse(localStorage.getItem('deskcraft_products') || '[]');
        if (!list.find(function (p) { return p.id === 2; })) {
            list.push({ id: 2, name: "Leather Desk Pad", price: 13999, category: "accessories", description: "Premium full-grain leather desk pad that ages beautifully. Provides a smooth surface for your mouse and protects your desk from scratches.", rating: 4, reviews: 89, badge: "Popular", stock: 34, image: "images/leather-desk-pad.jpg" });
            list.sort(function (a, b) { return a.id - b.id; });
            localStorage.setItem('deskcraft_products', JSON.stringify(list));
        }
    } catch (e) {}
    localStorage.setItem('deskcraft_restore_v1', '1');
})();

// storage helpers (generic read/write with JSON parsing)
function readStore(key, fallback) {
    var raw = localStorage.getItem(key);
    if (!raw) return fallback;
    try { return JSON.parse(raw); } catch (e) { return fallback; }
}
function writeStore(key, value) { localStorage.setItem(key, JSON.stringify(value)); }

function getProducts()   { return readStore('deskcraft_products', []); }
function saveProducts(p) { writeStore('deskcraft_products', p); }
function getCategories() { return readStore('deskcraft_categories', []); }
function saveCategories(c) { writeStore('deskcraft_categories', c); }
function getOrders()     { return readStore('deskcraft_orders', []); }
function saveOrders(o)   { writeStore('deskcraft_orders', o); }
function getUsers()      { return readStore('deskcraft_users', []); }
function saveUsers(u)    { writeStore('deskcraft_users', u); }
function getReviews()    { return readStore('deskcraft_reviews', []); }
function saveReviews(r)  { writeStore('deskcraft_reviews', r); }

// keep backward-compatible "products" global so existing page scripts still work
var products = getProducts();

// mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('menu-overlay');
    if (menu) {
        menu.classList.toggle('open');
    }
    if (overlay) {
        overlay.classList.toggle('hidden');
    }
}

document.addEventListener('click', function (e) {
    if (e.target.id === 'menu-overlay') {
        toggleMobileMenu();
    }
});

// cart functions
function getCart() {
    const cart = localStorage.getItem('deskcraft_cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('deskcraft_cart', JSON.stringify(cart));
    updateCartCount();
}

function addToCart(productId, quantity) {
    quantity = quantity || 1;
    var allProducts = getProducts();
    var product = allProducts.find(function (p) { return p.id === productId; });
    if (!product) return;

    if ((product.stock || 0) <= 0) {
        showToast(product.name + ' is out of stock');
        return;
    }

    var cart = getCart();
    var existingItem = cart.find(function (item) { return item.id === productId; });
    var currentQty = existingItem ? existingItem.quantity : 0;

    if (currentQty + quantity > product.stock) {
        showToast('Only ' + product.stock + ' in stock');
        return;
    }

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity: quantity, image: product.image });
    }

    saveCart(cart);
    showToast(product.name + ' added to cart!');
}

function removeFromCart(productId) {
    var cart = getCart();
    cart = cart.filter(function (item) { return item.id !== productId; });
    saveCart(cart);
    if (typeof renderCart === 'function') {
        renderCart();
    }
}

function updateCartQuantity(productId, newQuantity) {
    var cart = getCart();
    var item = cart.find(function (i) { return i.id === productId; });
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
            return;
        }
        item.quantity = newQuantity;
        saveCart(cart);
    }
    if (typeof renderCart === 'function') {
        renderCart();
    }
}

function getCartTotal() {
    var cart = getCart();
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}

function getCartItemCount() {
    var cart = getCart();
    var count = 0;
    for (var i = 0; i < cart.length; i++) {
        count += cart[i].quantity;
    }
    return count;
}

function updateCartCount() {
    var badges = document.querySelectorAll('.cart-count');
    var count = getCartItemCount();
    for (var i = 0; i < badges.length; i++) {
        badges[i].textContent = count;
        if (count > 0) {
            badges[i].classList.remove('hidden');
        } else {
            badges[i].classList.add('hidden');
        }
    }
}

// toast message
function showToast(message) {
    var existing = document.querySelector('.toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(function () { toast.classList.add('show'); }, 10);

    setTimeout(function () {
        toast.classList.remove('show');
        setTimeout(function () { toast.remove(); }, 300);
    }, 2500);
}

// form validation
function validateEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function validatePhone(phone) {
    var pattern = /^[\d\s\-+()]{7,15}$/;
    return pattern.test(phone);
}

function showError(inputId, message) {
    var input = document.getElementById(inputId);
    var errorEl = document.getElementById(inputId + '-error');
    if (input) input.classList.add('error');
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('show');
    }
}

function clearError(inputId) {
    var input = document.getElementById(inputId);
    var errorEl = document.getElementById(inputId + '-error');
    if (input) input.classList.remove('error');
    if (errorEl) errorEl.classList.remove('show');
}

function clearAllErrors(form) {
    var inputs = form.querySelectorAll('.form-input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove('error');
    }
    var errors = form.querySelectorAll('.error-message');
    for (var j = 0; j < errors.length; j++) {
        errors[j].classList.remove('show');
    }
}

// signup validation
function validateSignup(e) {
    e.preventDefault();
    var form = e.target;
    clearAllErrors(form);
    var isValid = true;

    var fullName = document.getElementById('fullname').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var gender = document.getElementById('gender').value;
    var dob = document.getElementById('dob').value;
    var phone = document.getElementById('phone').value.trim();
    var cityEl = document.getElementById('city');
    var city = cityEl ? cityEl.value.trim() : '';
    var address = document.getElementById('address').value.trim();

    if (!fullName) { showError('fullname', 'Full name is required'); isValid = false; }
    if (!email) { showError('email', 'Email is required'); isValid = false; }
    else if (!validateEmail(email)) { showError('email', 'Please enter a valid email'); isValid = false; }
    if (!password) { showError('password', 'Password is required'); isValid = false; }
    else if (password.length < 6) { showError('password', 'Password must be at least 6 characters'); isValid = false; }
    if (!confirmPassword) { showError('confirm-password', 'Please confirm your password'); isValid = false; }
    else if (password !== confirmPassword) { showError('confirm-password', 'Passwords do not match'); isValid = false; }
    if (!gender) { showError('gender', 'Please select your gender'); isValid = false; }
    if (!dob) { showError('dob', 'Date of birth is required'); isValid = false; }
    if (!phone) { showError('phone', 'Phone number is required'); isValid = false; }
    else if (!validatePhone(phone)) { showError('phone', 'Please enter a valid phone number'); isValid = false; }
    if (cityEl && !city) { showError('city', 'City is required'); isValid = false; }
    if (!address) { showError('address', 'Address is required'); isValid = false; }

    if (isValid) {
        var users = getUsers();
        if (users.find(function (u) { return u.email.toLowerCase() === email.toLowerCase(); })) {
            showError('email', 'An account with this email already exists');
            return;
        }
        var newUser = {
            id: users.length ? Math.max.apply(null, users.map(function (u) { return u.id; })) + 1 : 1,
            fullname: fullName, email: email, password: password,
            phone: phone, city: city, address: address,
            gender: gender, dob: dob,
            createdAt: new Date().toISOString().slice(0, 10)
        };
        users.push(newUser);
        saveUsers(users);
        localStorage.setItem('deskcraft_session', JSON.stringify({ email: email, fullname: fullName }));
        showToast('Account created successfully!');
        form.reset();
        setTimeout(function () { window.location.href = 'index.html'; }, 1200);
    }
}

// login validation
function validateLogin(e) {
    e.preventDefault();
    var form = e.target;
    clearAllErrors(form);
    var isValid = true;

    var email = document.getElementById('login-email').value.trim();
    var password = document.getElementById('login-password').value;

    if (!email) { showError('login-email', 'Email is required'); isValid = false; }
    else if (!validateEmail(email)) { showError('login-email', 'Please enter a valid email'); isValid = false; }
    if (!password) { showError('login-password', 'Password is required'); isValid = false; }

    if (isValid) {
        var users = getUsers();
        var match = users.find(function (u) { return u.email.toLowerCase() === email.toLowerCase() && u.password === password; });
        if (!match) {
            showError('login-password', 'Invalid email or password');
            return;
        }
        localStorage.setItem('deskcraft_session', JSON.stringify({ email: match.email, fullname: match.fullname }));
        showToast('Logged in successfully!');
        form.reset();
        setTimeout(function () { window.location.href = 'index.html'; }, 1000);
    }
}

function getSession()  { return readStore('deskcraft_session', null); }
function clearSession(){ localStorage.removeItem('deskcraft_session'); }
function logoutUser()  { clearSession(); showToast('Logged out'); setTimeout(function(){ window.location.href = 'index.html'; }, 600); }

// contact form validation
function validateContact(e) {
    e.preventDefault();
    var form = e.target;
    clearAllErrors(form);
    var isValid = true;

    var name = document.getElementById('contact-name').value.trim();
    var email = document.getElementById('contact-email').value.trim();
    var subject = document.getElementById('contact-subject').value.trim();
    var message = document.getElementById('contact-message').value.trim();

    if (!name) { showError('contact-name', 'Name is required'); isValid = false; }
    if (!email) { showError('contact-email', 'Email is required'); isValid = false; }
    else if (!validateEmail(email)) { showError('contact-email', 'Please enter a valid email'); isValid = false; }
    if (!subject) { showError('contact-subject', 'Subject is required'); isValid = false; }
    if (!message) { showError('contact-message', 'Message is required'); isValid = false; }

    if (isValid) {
        showToast('Message sent successfully!');
        form.reset();
    }
}

// product search and filter
function filterProducts() {
    var searchInput = document.getElementById('product-search');
    var categoryFilter = document.getElementById('category-filter');
    var searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    var category = categoryFilter ? categoryFilter.value : 'all';

    var filtered = products.filter(function (product) {
        var matchesSearch = product.name.toLowerCase().indexOf(searchTerm) !== -1 ||
            product.description.toLowerCase().indexOf(searchTerm) !== -1;
        var matchesCategory = category === 'all' || product.category === category;
        return matchesSearch && matchesCategory;
    });

    renderProductGrid(filtered);
}

// render products on page
function renderProductGrid(productList) {
    var grid = document.getElementById('product-grid');
    if (!grid) return;

    if (productList.length === 0) {
        grid.innerHTML = '<div class="col-span-full text-center py-16"><p class="text-stone-400 text-lg">No products found</p></div>';
        return;
    }

    var html = '';
    for (var i = 0; i < productList.length; i++) {
        var p = productList[i];
        var stars = '';
        for (var s = 1; s <= 5; s++) {
            stars += '<span class="star ' + (s <= p.rating ? 'filled' : '') + '">&#9733;</span>';
        }

        html += '<div class="bg-white rounded-lg overflow-hidden hover-lift fade-in">';
        html += '  <a href="product-detail.html?id=' + p.id + '" class="block">';
        html += '    <div>';
        html += '      <div class="w-full h-64 rounded-t-lg relative overflow-hidden">';
        html += '        <img src="' + p.image + '" alt="' + p.name + '" class="w-full h-full object-cover">';
        if (p.badge) {
            html += '        <span class="absolute top-3 left-3 bg-stone-900 text-white text-xs px-3 py-1 rounded-full">' + p.badge + '</span>';
        }
        html += '      </div>';
        html += '    </div>';
        html += '  </a>';
        html += '  <div class="p-4">';
        html += '    <a href="product-detail.html?id=' + p.id + '" class="block">';
        html += '      <h3 class="font-medium text-stone-800 mb-1">' + p.name + '</h3>';
        html += '      <div class="text-sm mb-2">' + stars + ' <span class="text-stone-400 ml-1">(' + p.reviews + ')</span></div>';
        html += '      <p class="text-stone-500 text-sm mb-3 line-clamp-2">' + p.description + '</p>';
        html += '    </a>';
        html += '    <div class="flex items-center justify-between">';
        html += '      <span class="text-lg font-semibold text-stone-800">Rs. ' + p.price.toLocaleString() + '</span>';
        html += '      <button onclick="addToCart(' + p.id + ')" class="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm btn-hover hover:bg-stone-700">Add to Cart</button>';
        html += '    </div>';
        html += '  </div>';
        html += '</div>';
    }

    grid.innerHTML = html;
}

// star rating helper
function renderStars(rating) {
    var stars = '';
    for (var s = 1; s <= 5; s++) {
        stars += '<span class="star ' + (s <= rating ? 'filled' : '') + '">&#9733;</span>';
    }
    return stars;
}

// get url parameter
function getUrlParam(name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name);
}

// run on page load
document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();
});


// Delete me 
function calculateAggregate(e) {
    e.preventDefault();

    const interMarks = parseFloat(document.getElementById("intermediate-marks").value) || 0;
    const matricMarks = parseFloat(document.getElementById("matric-marks").value) || 0;
    const entryMarks = parseFloat(document.getElementById("entry-test-marks").value) || 0;

    const aggregate = (interMarks * 0.3) + (matricMarks * 0.3) + (entryMarks * 0.4);

    document.getElementById("result").value = aggregate.toFixed(2);

}
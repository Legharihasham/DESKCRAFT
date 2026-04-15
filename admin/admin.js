// admin.js — shared helpers for the admin panel.
// Relies on main.js (loaded first) for seedAll() + get/save helpers.

var ADMIN_SESSION_KEY = 'deskcraft_admin_session';

function getAdmin()        { return readStore('deskcraft_admin', null); }
function saveAdmin(a)      { writeStore('deskcraft_admin', a); }
function isAdminLoggedIn() { return localStorage.getItem(ADMIN_SESSION_KEY) === 'true'; }
function setAdminLoggedIn(v) { localStorage.setItem(ADMIN_SESSION_KEY, v ? 'true' : 'false'); }
function logoutAdmin()     { localStorage.removeItem(ADMIN_SESSION_KEY); window.location.href = 'login.html'; }

// Guard — call at the top of every admin page except login.
function requireAdmin() {
    if (!isAdminLoggedIn()) { window.location.href = 'login.html'; }
}

// Inject the shared sidebar + topbar. Pass the current page slug so that nav
// item gets the active highlight.
function renderAdminLayout(activePage, pageTitle) {
    var admin = getAdmin() || { name: 'Admin' };
    var sidebarLinks = [
        { slug: 'dashboard',  href: 'dashboard.html',  icon: 'fa-gauge',         label: 'Dashboard'  },
        { slug: 'orders',     href: 'orders.html',     icon: 'fa-box',           label: 'Orders'     },
        { slug: 'products',   href: 'products.html',   icon: 'fa-tag',           label: 'Products'   },
        { slug: 'categories', href: 'categories.html', icon: 'fa-layer-group',   label: 'Categories' },
        { slug: 'customers',  href: 'customers.html',  icon: 'fa-users',         label: 'Customers'  },
        { slug: 'reviews',    href: 'reviews.html',    icon: 'fa-star',          label: 'Reviews'    },
        { slug: 'analytics',  href: 'analytics.html',  icon: 'fa-chart-line',    label: 'Analytics'  },
        { slug: 'profile',    href: 'profile.html',    icon: 'fa-user',          label: 'Profile'    }
    ];

    var linksHtml = '';
    for (var i = 0; i < sidebarLinks.length; i++) {
        var l = sidebarLinks[i];
        var active = l.slug === activePage;
        linksHtml +=
            '<a href="' + l.href + '" class="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm ' +
            (active ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-stone-100') + '">' +
            '  <i class="fa-solid ' + l.icon + ' w-4"></i>' +
            '  <span>' + l.label + '</span>' +
            '</a>';
    }

    var sidebar =
        '<aside id="admin-sidebar" class="fixed md:static top-0 left-0 h-full w-64 bg-white border-r border-stone-100 flex flex-col z-40 transform -translate-x-full md:translate-x-0 transition-transform">' +
        '  <div class="px-6 py-5 border-b border-stone-100">' +
        '    <a href="dashboard.html" class="text-lg font-bold tracking-wider text-stone-900">DESKCRAFT</a>' +
        '    <p class="text-[11px] text-stone-400 tracking-widest uppercase mt-0.5">Admin Panel</p>' +
        '  </div>' +
        '  <nav class="flex-1 px-3 py-4 space-y-1 overflow-y-auto">' + linksHtml + '</nav>' +
        '  <div class="px-4 py-4 border-t border-stone-100">' +
        '    <button onclick="logoutAdmin()" class="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-stone-600 hover:bg-stone-100">' +
        '      <i class="fa-solid fa-right-from-bracket w-4"></i><span>Logout</span></button>' +
        '  </div>' +
        '</aside>';

    var topbar =
        '<header class="bg-white border-b border-stone-100 sticky top-0 z-30">' +
        '  <div class="flex items-center justify-between px-4 sm:px-8 h-16">' +
        '    <div class="flex items-center gap-3">' +
        '      <button onclick="toggleAdminSidebar()" class="md:hidden text-stone-600"><i class="fa-solid fa-bars"></i></button>' +
        '      <h1 class="text-lg font-semibold text-stone-900">' + (pageTitle || '') + '</h1>' +
        '    </div>' +
        '    <div class="flex items-center gap-3">' +
        '      <a href="../index.html" target="_blank" class="text-sm text-stone-500 hover:text-stone-900 hidden sm:inline-flex items-center gap-2"><i class="fa-solid fa-arrow-up-right-from-square"></i>View Store</a>' +
        '      <div class="w-9 h-9 rounded-full bg-stone-900 text-white flex items-center justify-center text-sm font-semibold">' + (admin.name ? admin.name.charAt(0).toUpperCase() : 'A') + '</div>' +
        '    </div>' +
        '  </div>' +
        '</header>';

    var sidebarMount = document.getElementById('admin-sidebar-mount');
    var topbarMount  = document.getElementById('admin-topbar-mount');
    if (sidebarMount) {
        sidebarMount.innerHTML = sidebar +
            '<div id="admin-sidebar-overlay" class="hidden fixed inset-0 bg-black/40 z-30 md:hidden"></div>';
    }
    if (topbarMount) topbarMount.innerHTML = topbar;
}

function toggleAdminSidebar() {
    var sb = document.getElementById('admin-sidebar');
    var overlay = document.getElementById('admin-sidebar-overlay');
    if (!sb) return;
    var opened = sb.classList.toggle('translate-x-0');
    sb.classList.toggle('-translate-x-full', !opened);
    if (overlay) overlay.classList.toggle('hidden', !opened);
}
document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'admin-sidebar-overlay') toggleAdminSidebar();
});

// Small toast reused on admin pages (main.js already defines showToast, but reuse in case).

// Format a Rs. price.
function fmtPrice(n) { return 'Rs. ' + Number(n).toLocaleString(); }

// Escape HTML — we render a lot of user data into innerHTML strings.
function esc(v) {
    if (v == null) return '';
    return String(v)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

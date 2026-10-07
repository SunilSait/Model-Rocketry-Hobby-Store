/* ===== APEX ROCKETRY — SHARED COMPONENTS ===== */
'use strict';

/* ─── Lucide Icon Helper ─────────────────────────────────── */
const ICONS = {
    sun: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    moon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    menu: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    x: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    check: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    xCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    rocket: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4.5C7.5 6 10 5.5 10 5.5"/><path d="M12 15v5s3.03-.55 4.5-2c1.5-1.5 2-4.5 2-4.5"/></svg>',
    eye: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    eyeOff: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',
    facebook: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
    instagram: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    youtube: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>',
    whatsapp: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
    mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    phone: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    clock: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    users: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    chevronLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
    chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
    shield: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    target: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    award: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
    book: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    zap: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    compass: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
    home: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
};

/* ─── THEME & DIRECTION ─────────────────────────────────── */
(function initThemeDir() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('apex_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) html.classList.add('dark');
    if (localStorage.getItem('apex_dir') === 'rtl') html.setAttribute('dir', 'rtl');
})();

function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('apex_theme', html.classList.contains('dark') ? 'dark' : 'light');
    document.querySelectorAll('.theme-icon-wrap').forEach(updateThemeIcon);
}

function updateThemeIcon(el) {
    if (!el) return;
    const isDark = document.documentElement.classList.contains('dark');
    el.innerHTML = isDark ? ICONS.sun : ICONS.moon;
}

function toggleDir() {
    const html = document.documentElement;
    const isRTL = html.getAttribute('dir') === 'rtl';
    html.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
    localStorage.setItem('apex_dir', isRTL ? 'ltr' : 'rtl');
    document.querySelectorAll('.dir-label').forEach(el => {
        el.textContent = isRTL ? 'LTR' : 'RTL';
    });
}

/* ─── SVG LOGO ─────────────────────────────────────────── */
function getLogoSVG(size = 38) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="${size}" height="${size}" class="nav-logo-svg" style="width:${size}px;height:${size}px;display:block;flex-shrink:0;">
        <path d="M 6 34 C 11 34 18 30 25 21 C 28.5 15.5 31.5 9.5 33 5" fill="none" stroke="#155EEF" stroke-width="2" stroke-linecap="round"/>
        <polygon points="33.5,3 36,7.5 31.5,6.5" fill="#155EEF"/>
        <g transform="translate(19, 19) rotate(34) translate(-19, -19)">
            <path d="M 19 6 C 17.5 11 16.5 15 16.5 23 L 19 23 Z" class="logo-mark-graphite" fill="currentColor"/>
            <path d="M 19 6 C 20.5 11 21.5 15 21.5 23 L 19 23 Z" fill="#155EEF"/>
            <polygon points="16.5,18 11.5,24.5 14.5,24.5 16.5,22.5" class="logo-mark-graphite" fill="currentColor"/>
            <polygon points="21.5,18 26.5,24.5 23.5,24.5 21.5,22.5" fill="#155EEF"/>
            <polygon points="17.5,23.5 17,26 21,26 20.5,23.5" class="logo-mark-graphite" fill="currentColor"/>
            <rect x="18" y="14" width="2" height="1.5" rx="0.5" fill="#FFFFFF"/>
        </g>
    </svg>`;
}

/* ─── NAVBAR ─────────────────────────────────────────── */
function injectNav() {
    const el = document.getElementById('main-nav');
    if (!el) return;
    const page = location.pathname.split('/').pop() || 'index.html';
    const links = [
        { href: 'index.html', label: 'Home' },
        { href: 'home2.html', label: 'Home 2' },
        { href: 'products.html', label: 'Products' },
        { href: 'guide.html', label: "Beginner's Guide" },
        { href: 'events.html', label: 'Launch Events' },
        { href: 'pricing.html', label: 'Pricing' },
        { href: 'contact.html', label: 'Contact' },
    ];

    const isDark = document.documentElement.classList.contains('dark');
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

    const navLinksHTML = links.map(l => {
        const isActive = page === l.href || (page === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="nav-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    const mobileLinksHTML = links.map(l => {
        const isActive = page === l.href || (page === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="mob-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    el.innerHTML = `
    <nav class="navbar" id="navbar">
        <div class="nav-inner">
            <!-- Logo -->
            <a href="index.html" class="nav-logo" aria-label="Apex Rocketry Home">
                ${getLogoSVG(40)}
                <div class="nav-logo-text">
                    <span class="brand-top">APEX</span>
                    <span class="brand-bottom">Rocketry</span>
                </div>
            </a>

            <!-- Desktop Nav Links -->
            <div class="nav-links">
                ${navLinksHTML}
            </div>

            <!-- Right Actions -->
            <div class="nav-actions">
                <!-- RTL Toggle -->
                <button onclick="toggleDir()" class="nav-icon-btn" title="Toggle Direction">
                    <span class="dir-label" style="font-size:0.625rem;">${isRTL ? 'RTL' : 'LTR'}</span>
                </button>
                <!-- Theme Toggle -->
                <button onclick="toggleTheme()" class="nav-icon-btn" title="Toggle Theme" aria-label="Toggle dark mode">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
                <!-- CTAs -->
                <a href="login.html" class="btn btn-primary btn-sm">Login</a>
                <!-- Mobile Hamburger -->
                <button class="mobile-menu-btn" onclick="toggleMobileMenu(event)" aria-label="Open menu">
                    <span class="mobile-menu-icon">${ICONS.menu}</span>
                </button>
            </div>
        </div>

        <!-- Mobile Backdrop -->
        <div class="mobile-backdrop" id="mobile-backdrop" onclick="toggleMobileMenu(event)"></div>

        <!-- Mobile Menu -->
        <div class="mobile-menu" id="mobile-menu">
            ${mobileLinksHTML}
            <div class="mob-actions">
                <a href="login.html" class="btn btn-primary w-full">Login</a>
            </div>
            <div class="mob-toggles">
                <button onclick="toggleDir()" class="nav-icon-btn" title="Toggle Direction">
                    <span class="dir-label" style="font-size:0.625rem;">${isRTL ? 'RTL' : 'LTR'}</span>
                </button>
                <button onclick="toggleTheme()" class="nav-icon-btn" title="Toggle Theme">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
            </div>
        </div>
    </nav>
    <div class="navbar-spacer"></div>`;
}

function toggleMobileMenu(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const iconEl = document.querySelector('.mobile-menu-icon');
    if (!menu) return;

    const isOpen = menu.classList.contains('open');
    if (isOpen) {
        menu.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        if (iconEl) iconEl.innerHTML = ICONS.menu;
    } else {
        menu.classList.add('open');
        if (backdrop) backdrop.classList.add('open');
        if (iconEl) iconEl.innerHTML = ICONS.x;
    }
}

document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const btn = document.querySelector('.mobile-menu-btn');
    if (!menu || !menu.classList.contains('open')) return;
    if (btn && (btn === e.target || btn.contains(e.target))) return;
    if (menu.contains(e.target)) return;
    menu.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    const iconEl = document.querySelector('.mobile-menu-icon');
    if (iconEl) iconEl.innerHTML = ICONS.menu;
});

/* ─── FOOTER ─────────────────────────────────────────── */
function injectFooter() {
    const el = document.getElementById('main-footer');
    if (!el) return;
    el.innerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <!-- Column 1: Brand & Socials -->
                <div class="footer-brand">
                    <a href="index.html" class="nav-logo footer-logo" aria-label="Apex Rocketry Home">
                        ${getLogoSVG(40)}
                        <div class="nav-logo-text">
                            <span class="brand-top" style="color:#fff;">APEX</span>
                            <span class="brand-bottom">Rocketry</span>
                        </div>
                    </a>
                    <p>Your trusted source for model rocket kits, engines, launch equipment, and expert guidance to take your hobby to new heights.</p>
                    <div class="footer-socials">
                        <a href="#" class="footer-social-link" aria-label="Facebook">${ICONS.facebook}</a>
                        <a href="#" class="footer-social-link" aria-label="Instagram">${ICONS.instagram}</a>
                        <a href="#" class="footer-social-link" aria-label="YouTube">${ICONS.youtube}</a>
                        <a href="#" class="footer-social-link" aria-label="WhatsApp">${ICONS.whatsapp}</a>
                    </div>
                </div>

                <!-- Column 2: Quick Links -->
                <div class="footer-col">
                    <h4 class="footer-col-title">QUICK LINKS</h4>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="home2.html">Home 2 — Premium</a></li>
                        <li><a href="products.html">Products</a></li>
                        <li><a href="guide.html">Beginner's Guide</a></li>
                        <li><a href="events.html">Launch Events</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>

                <!-- Column 3: Resources -->
                <div class="footer-col">
                    <h4 class="footer-col-title">RESOURCES</h4>
                    <ul class="footer-links">
                        <li><a href="coming-soon.html">Blog & Tips</a></li>
                        <li><a href="coming-soon.html">Careers</a></li>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="signup.html">Sign Up</a></li>
                        <li><a href="404.html">404 Page</a></li>
                        <li><a href="coming-soon.html">Coming Soon</a></li>
                    </ul>
                </div>

                <!-- Column 4: Stay Updated Card -->
                <div class="footer-col footer-col-newsletter">
                    <div class="footer-newsletter-card">
                        <h4 class="footer-newsletter-title">Stay Updated</h4>
                        <p class="footer-newsletter-desc">Get launch event updates, new kit releases, and exclusive hobby tips.</p>
                        <form onsubmit="event.preventDefault(); alert('Subscribed successfully!'); this.reset();" class="footer-newsletter-form">
                            <input type="email" placeholder="your@email.com" class="footer-newsletter-input" required>
                            <button type="submit" class="footer-newsletter-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="footer-bottom">
                <p class="footer-copyright">&copy; ${new Date().getFullYear()} APEX ROCKETRY. All rights reserved.</p>
                <div class="footer-bottom-links">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Cookies</a>
                </div>
            </div>
        </div>
    </footer>`;
}

/* ─── AUTH PAGE HELPERS ─────────────────────────────────── */
function initAuthPage() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('apex_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
    const savedDir = localStorage.getItem('apex_dir');
    if (savedDir === 'rtl') {
        html.setAttribute('dir', 'rtl');
    } else {
        html.setAttribute('dir', 'ltr');
    }
    document.querySelectorAll('.theme-icon-wrap').forEach(updateThemeIcon);
    document.querySelectorAll('.dir-label').forEach(el => {
        el.textContent = html.getAttribute('dir') === 'rtl' ? 'RTL' : 'LTR';
    });
}

function togglePasswordVisibility(inputId, btnEl) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const iconWrap = btnEl.querySelector('.pw-icon');
    if (input.type === 'password') {
        input.type = 'text';
        if (iconWrap) iconWrap.innerHTML = ICONS.eyeOff;
    } else {
        input.type = 'password';
        if (iconWrap) iconWrap.innerHTML = ICONS.eye;
    }
}

/* ─── FAQ TOGGLE ─────────────────────────────────────────── */
function toggleFAQ(el) {
    const item = el.closest('.faq-item');
    const wasActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item.active').forEach(faq => faq.classList.remove('active'));
    if (!wasActive) item.classList.add('active');
}

/* ─── SCROLL ANIMATIONS ─────────────────────────────────── */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

/* ─── COUNTER ANIMATION ─────────────────────────────────── */
function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'));
                const suffix = el.getAttribute('data-suffix') || '';
                const prefix = el.getAttribute('data-prefix') || '';
                let current = 0;
                const step = Math.ceil(target / 60);
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    el.textContent = prefix + current.toLocaleString() + suffix;
                }, 25);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.3 });
    counters.forEach(el => observer.observe(el));
}

/* ─── PRODUCT FILTER ─────────────────────────────────────── */
function filterProducts(category, btn) {
    const cards = document.querySelectorAll('.product-card[data-category]');
    const tabs = document.querySelectorAll('.filter-tab');
    tabs.forEach(t => t.classList.remove('active'));
    if (btn) btn.classList.add('active');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

/* ─── HERO SLIDER ────────────────────────────────────────── */
function initHeroSlider() {
    const track = document.getElementById('hero-slides-track');
    if (!track) return;
    const slides = track.querySelectorAll('.hero-slide, .hero-split-slide');
    const dots = document.querySelectorAll('.hero-dot');
    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');
    if (!slides.length) return;

    let current = 0;
    let timer = null;
    const interval = 5000;

    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        current = index;
        slides.forEach((s, idx) => s.classList.toggle('active', idx === current));
        dots.forEach((d, idx) => d.classList.toggle('active', idx === current));
    }

    function next() { goToSlide(current + 1); }
    function prev() { goToSlide(current - 1); }

    function startTimer() { stopTimer(); timer = setInterval(next, interval); }
    function stopTimer() { if (timer) { clearInterval(timer); timer = null; } }

    if (nextBtn) nextBtn.addEventListener('click', function(e) { e.preventDefault(); next(); startTimer(); });
    if (prevBtn) prevBtn.addEventListener('click', function(e) { e.preventDefault(); prev(); startTimer(); });

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', function(e) { e.preventDefault(); goToSlide(idx); startTimer(); });
    });

    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopTimer);
        heroSection.addEventListener('mouseleave', startTimer);
        let touchStartX = 0;
        heroSection.addEventListener('touchstart', function(e) { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
        heroSection.addEventListener('touchend', function(e) {
            const touchEndX = e.changedTouches[0].screenX;
            if (touchStartX - touchEndX > 50) { next(); startTimer(); }
            else if (touchEndX - touchStartX > 50) { prev(); startTimer(); }
        }, { passive: true });
    }

    startTimer();
}

/* ─── TESTIMONIAL SLIDER (3 SLIDES • 5S AUTO-CYCLE) ─────── */
function initTestimonialSlider() {
    const wrapper = document.getElementById('testimonials-slider-wrapper');
    if (!wrapper) return;

    const slides = wrapper.querySelectorAll('.testimonial-slide');
    const dots = wrapper.querySelectorAll('.testimonial-dot');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');
    const progressBar = document.getElementById('testimonial-progress-fill');
    const counterEl = document.getElementById('testimonial-counter');

    if (!slides.length) return;

    let current = 0;
    let timer = null;
    let isHovered = false;
    const interval = 5000; // 5 seconds per slide

    function resetProgressBar() {
        if (!progressBar) return;
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';
        void progressBar.offsetWidth; // force DOM reflow
        progressBar.style.transition = `width ${interval}ms linear`;
        progressBar.style.width = '100%';
    }

    function pauseProgressBar() {
        if (!progressBar) return;
        const computedStyle = window.getComputedStyle(progressBar);
        const currentWidth = computedStyle.getPropertyValue('width');
        progressBar.style.transition = 'none';
        progressBar.style.width = currentWidth;
    }

    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        current = index;

        slides.forEach((s, idx) => {
            const isActive = idx === current;
            s.classList.toggle('active', isActive);
            s.setAttribute('aria-hidden', !isActive);
        });

        dots.forEach((d, idx) => {
            const isActive = idx === current;
            d.classList.toggle('active', isActive);
            d.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        if (counterEl) {
            const numStr = String(current + 1).padStart(2, '0');
            const totalStr = String(slides.length).padStart(2, '0');
            counterEl.textContent = `TESTIMONIAL ${numStr} / ${totalStr}`;
        }

        if (!isHovered && !document.hidden) {
            resetProgressBar();
        }
    }

    function next() {
        goToSlide(current + 1);
    }

    function prev() {
        goToSlide(current - 1);
    }

    function startTimer() {
        stopTimer();
        if (isHovered || document.hidden) return;
        resetProgressBar();
        timer = setInterval(next, interval);
    }

    function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        pauseProgressBar();
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            next();
            startTimer();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            prev();
            startTimer();
        });
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            goToSlide(idx);
            startTimer();
        });
    });

    // Pause on hover
    wrapper.addEventListener('mouseenter', function() {
        isHovered = true;
        stopTimer();
    });

    wrapper.addEventListener('mouseleave', function() {
        isHovered = false;
        startTimer();
    });

    // Touch swipe support
    let touchStartX = 0;
    wrapper.addEventListener('touchstart', function(e) {
        if (e.changedTouches && e.changedTouches[0]) {
            touchStartX = e.changedTouches[0].screenX;
        }
    }, { passive: true });

    wrapper.addEventListener('touchend', function(e) {
        if (!e.changedTouches || !e.changedTouches[0]) return;
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (diff > 45) {
            next();
            startTimer();
        } else if (diff < -45) {
            prev();
            startTimer();
        }
    }, { passive: true });

    // Page visibility listener
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            stopTimer();
        } else {
            startTimer();
        }
    });

    // IntersectionObserver to pause when off-screen
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                startTimer();
            } else {
                stopTimer();
            }
        }, { threshold: 0.15 });
        observer.observe(wrapper);
    }

    // Initialize slide 0 and countdown timer
    goToSlide(0);
    startTimer();
}

/* ─── NAVBAR SCROLL LISTENER ────────────────────────────── */
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (nav) {
        if (window.scrollY > 15) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    }
}, { passive: true });

/* ─── HERO AEROSPACE COSMIC CANVAS ANIMATION (REROLLED) ─── */
function initHeroCosmicCanvas() {
    const canvas = document.getElementById('hero-space-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const hero = document.getElementById('hero-section');

    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;
    let animationId = null;
    let isVisible = true;

    function resize() {
        if (!hero) return;
        const rect = hero.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        dpr = window.devicePixelRatio || 1;
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Interactive mouse tracking
    let mouse = { x: -9999, y: -9999, active: false };
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.active = true;
        }, { passive: true });
        hero.addEventListener('mouseleave', () => {
            mouse.active = false;
            mouse.x = -9999;
            mouse.y = -9999;
        }, { passive: true });

        // Click to launch an interactive celebration rocket
        hero.addEventListener('click', (e) => {
            // Only trigger if not clicking buttons or interactive links
            if (e.target.closest('a, button, .hero-controls')) return;
            const rect = hero.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            launchRocket(clickX);
        });
    }

    // Depth-sorted particles (3 tiers: distant stars, rising sparks, foreground embers)
    const particles = [];
    const count = Math.min(65, Math.max(30, Math.floor(window.innerWidth / 22)));

    for (let i = 0; i < count; i++) {
        const layer = Math.random() < 0.45 ? 0 : (Math.random() < 0.8 ? 1 : 2);
        particles.push({
            layer: layer, // 0: distant star, 1: rising spark, 2: foreground ember
            x: Math.random() * (width || 1200),
            y: Math.random() * (height || 600),
            radius: layer === 0 ? 0.7 + Math.random() * 0.7 : (layer === 1 ? 1.3 + Math.random() * 0.8 : 2.0 + Math.random() * 1.2),
            vx: (Math.random() - 0.5) * (layer === 0 ? 0.15 : 0.4),
            vy: layer === 0 ? -0.05 - Math.random() * 0.1 : (layer === 1 ? -0.3 - Math.random() * 0.45 : -0.7 - Math.random() * 0.6),
            baseAlpha: layer === 0 ? 0.3 + Math.random() * 0.5 : (layer === 1 ? 0.4 + Math.random() * 0.5 : 0.6 + Math.random() * 0.4),
            alpha: 0.5,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.02 + Math.random() * 0.03,
            colorType: layer === 2 && Math.random() < 0.3 ? 'amber' : (Math.random() < 0.6 ? 'blue' : 'cyan')
        });
    }

    // Miniature Rockets & Smoke Puffs
    const rockets = [];
    const smokePuffs = [];
    let lastAutoLaunch = Date.now();

    function launchRocket(targetX) {
        const startX = targetX !== undefined ? targetX + (Math.random() - 0.5) * 80 : 80 + Math.random() * (width - 160);
        const startY = height + 30;
        const targetAngle = -Math.PI / 2 + (Math.random() - 0.5) * 0.35; // mostly vertical with subtle tilt
        const speed = 4.5 + Math.random() * 2.5;

        rockets.push({
            x: startX,
            y: startY,
            vx: Math.cos(targetAngle) * speed,
            vy: Math.sin(targetAngle) * speed,
            angle: targetAngle + Math.PI / 2, // rotation for drawing rocket
            size: 14 + Math.random() * 6,
            trailTimer: 0
        });
    }

    function render() {
        if (!isVisible) return;
        ctx.clearRect(0, 0, width, height);

        const isDark = document.documentElement.classList.contains('dark');

        // Draw soft ambient hover glow
        if (mouse.active && mouse.x > 0 && mouse.y > 0) {
            const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 160);
            grad.addColorStop(0, isDark ? 'rgba(21, 94, 239, 0.16)' : 'rgba(21, 94, 239, 0.07)');
            grad.addColorStop(1, 'rgba(21, 94, 239, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 160, 0, Math.PI * 2);
            ctx.fill();
        }

        // Render Depth-Sorted Particles
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            p.x += p.vx;
            p.y += p.vy;
            p.pulse += p.pulseSpeed;

            // Gentle interaction with cursor
            if (mouse.active) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100 && dist > 0) {
                    const force = (100 - dist) / 100;
                    p.x += (dx / dist) * force * 1.8;
                    p.y += (dy / dist) * force * 1.8;
                }
            }

            // Wrap vertical float
            if (p.y < -15) {
                p.y = height + 15;
                p.x = Math.random() * width;
            }
            if (p.x < -15) p.x = width + 15;
            if (p.x > width + 15) p.x = -15;

            // Calculate opacity with gentle twinkle
            const twinkle = 0.75 + 0.25 * Math.sin(p.pulse);
            const currentAlpha = Math.min(1, Math.max(0.1, p.baseAlpha * twinkle));

            let colorStr;
            if (p.colorType === 'amber') {
                colorStr = `rgba(245, 158, 11, ${currentAlpha})`;
            } else if (p.colorType === 'cyan') {
                colorStr = `rgba(56, 189, 248, ${currentAlpha})`;
            } else {
                colorStr = isDark ? `rgba(147, 197, 253, ${currentAlpha})` : `rgba(21, 94, 239, ${currentAlpha * 0.7})`;
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = colorStr;

            // Soft glow for larger sparks
            if (p.layer >= 1) {
                ctx.shadowBlur = p.layer === 2 ? 8 : 4;
                ctx.shadowColor = colorStr;
            }
            ctx.fill();
            ctx.shadowBlur = 0;
        }

        // Automatic Rocket Launch Schedule (every 6-8 seconds)
        const now = Date.now();
        if (now - lastAutoLaunch > 6500) {
            launchRocket();
            lastAutoLaunch = now + Math.random() * 2000;
        }

        // Update & Render Smoke Puffs
        for (let i = smokePuffs.length - 1; i >= 0; i--) {
            const sp = smokePuffs[i];
            sp.x += sp.vx;
            sp.y += sp.vy;
            sp.radius += sp.growSpeed;
            sp.alpha -= sp.decay;

            if (sp.alpha <= 0) {
                smokePuffs.splice(i, 1);
                continue;
            }

            ctx.beginPath();
            ctx.arc(sp.x, sp.y, sp.radius, 0, Math.PI * 2);
            const puffAlpha = isDark ? sp.alpha * 0.25 : sp.alpha * 0.15;
            ctx.fillStyle = `rgba(180, 205, 235, ${puffAlpha})`;
            ctx.fill();
        }

        // Update & Render Ascending Miniature Rockets
        for (let i = rockets.length - 1; i >= 0; i--) {
            const r = rockets[i];
            r.x += r.vx;
            r.y += r.vy;

            // Spawn smoke & flame puff behind engine
            r.trailTimer++;
            if (r.trailTimer % 2 === 0) {
                smokePuffs.push({
                    x: r.x + (Math.random() - 0.5) * 3,
                    y: r.y + 10,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: 0.6 + Math.random() * 0.6,
                    radius: 2.5 + Math.random() * 2,
                    growSpeed: 0.15,
                    alpha: 0.7,
                    decay: 0.02
                });
            }

            // Remove rocket if off screen
            if (r.y < -50 || r.x < -50 || r.x > width + 50) {
                rockets.splice(i, 1);
                continue;
            }

            // Draw miniature model rocket
            ctx.save();
            ctx.translate(r.x, r.y);
            ctx.rotate(r.angle);

            // Exhaust plume flame
            const flameLen = 8 + Math.random() * 6;
            ctx.beginPath();
            ctx.moveTo(-2.5, 6);
            ctx.lineTo(2.5, 6);
            ctx.lineTo(0, 6 + flameLen);
            ctx.closePath();
            ctx.fillStyle = '#F59E0B';
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#F59E0B';
            ctx.fill();

            // Inner blue flame core
            ctx.beginPath();
            ctx.moveTo(-1.2, 6);
            ctx.lineTo(1.2, 6);
            ctx.lineTo(0, 6 + flameLen * 0.5);
            ctx.closePath();
            ctx.fillStyle = '#60A5FA';
            ctx.fill();
            ctx.shadowBlur = 0;

            // Rocket Body Tube
            ctx.fillStyle = isDark ? '#FFFFFF' : '#1E293B';
            ctx.fillRect(-2, -6, 4, 12);

            // Nose Cone
            ctx.beginPath();
            ctx.moveTo(-2, -6);
            ctx.lineTo(2, -6);
            ctx.lineTo(0, -11);
            ctx.closePath();
            ctx.fillStyle = '#155EEF'; // Aerospace Blue nose cone
            ctx.fill();

            // Fins
            ctx.beginPath();
            ctx.moveTo(-2, 2);
            ctx.lineTo(-5, 6);
            ctx.lineTo(-2, 6);
            ctx.closePath();
            ctx.fillStyle = '#155EEF';
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(2, 2);
            ctx.lineTo(5, 6);
            ctx.lineTo(2, 6);
            ctx.closePath();
            ctx.fillStyle = '#155EEF';
            ctx.fill();

            ctx.restore();
        }

        animationId = requestAnimationFrame(render);
    }

    // IntersectionObserver to pause when offscreen
    if ('IntersectionObserver' in window && hero) {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                if (!isVisible) {
                    isVisible = true;
                    animationId = requestAnimationFrame(render);
                }
            } else {
                isVisible = false;
                if (animationId) cancelAnimationFrame(animationId);
            }
        }, { threshold: 0.05 });
        observer.observe(hero);
    }

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            isVisible = false;
            if (animationId) cancelAnimationFrame(animationId);
        } else {
            isVisible = true;
            animationId = requestAnimationFrame(render);
        }
    });

    animationId = requestAnimationFrame(render);
}

/* ─── INIT ON DOM READY ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
    injectNav();
    injectFooter();
    initScrollAnimations();
    animateCounters();
    initHeroSlider();
    initHeroCosmicCanvas();
    initTestimonialSlider();
});

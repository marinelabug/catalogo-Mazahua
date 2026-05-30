/* ==========================================
   APLICACIÓN PRINCIPAL - APP.JS
   ========================================== */

// Tema claro/oscuro
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeToggle = document.getElementById('themeToggle');
    const isDark = document.documentElement.classList.contains('dark-theme');
    if (themeToggle) {
        themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
}

// Cargar tema guardado
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-theme');
    }
    updateThemeIcon();
}

// Carrusel de galería
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(n) {
    if (!slides.length) return;
    
    slides.forEach(slide => slide.classList.remove('active'));
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
    if (indicators[currentSlide]) {
        indicators[currentSlide].classList.add('active');
    }
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

function currentSlideFunc(n) {
    showSlide(n);
}

// Auto-rotate carousel cada 5 segundos
function autoRotateCarousel() {
    if (slides.length > 0) {
        setInterval(() => {
            changeSlide(1);
        }, 5000);
    }
}

// Datos de productos
const products = [
    { id: 1, name: 'Anillo', image: '2.jpg', price: 350, description: 'Anillo de plata con diseño floral: joya artesanal elaborada en plata, con grabados finos de flores que simbolizan la conexión con la naturaleza y la delicadeza cultural.', category: 'accesorios', type: 'normal' },
    { id: 2, name: 'Tenis bordados', image: '3.jpg', price: 850, description: 'Tenis de cuero con bordado tradicional: calzado resistente confeccionado en cuero, decorado con bordados mazahuas que aportan identidad y exclusividad.', category: 'calzado', type: 'shoes', sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'] },
    { id: 3, name: 'Tenis de tela', image: '4.jpg', price: 680, description: 'Tenis de tela con bordado y diseño floral: ligeros y cómodos, con bordados florales que representan la riqueza artesanal y un estilo fresco.', category: 'calzado', type: 'shoes', sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'] },
    { id: 4, name: 'Tenis', image: '5.jpg', price: 580, description: 'Tenis de tela básicos: diseño sencillo y versátil, ideal para uso diario, confeccionados en tela de alta calidad.', category: 'calzado', type: 'shoes', sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'] },
    { id: 5, name: 'Bolsa de tela', image: '6.jpg', price: 480, description: 'Bolsa de tela bordada con diseño floral: bolso artesanal con bordados florales detallados, que transmiten tradición y elegancia.', category: 'bolsas', type: 'normal' },
    { id: 6, name: 'Sandalias de cuero', image: '7.jpg', price: 620, description: 'Sandalias de cuero con técnica de punto de cruz: sandalias hechas a mano, decoradas con bordados en punto de cruz que reflejan técnicas ancestrales.', category: 'calzado', type: 'shoes', sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'] },
    { id: 7, name: 'Blusa bordada', image: '8.jpg', price: 750, description: 'Blusa de tela con bordado de flores: prenda ligera y fresca, adornada con bordados florales que aportan un toque artesanal y femenino.', category: 'ropa', type: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
    { id: 8, name: 'Sombrero', image: '9.jpg', price: 420, description: 'Sombrero de hoja de palma: accesorio tradicional tejido con palma, fresco y resistente, perfecto para climas cálidos.', category: 'accesorios', type: 'normal' },
    { id: 9, name: 'Muñeca', image: '10.jpg', price: 280, description: 'Muñeca típica de tela: figura artesanal elaborada en tela, representativa de la cultura mazahua y sus tradiciones.', category: 'artesanía', type: 'normal' },
    { id: 10, name: 'Chiquihuite', image: '11.jpg', price: 550, description: 'Chiquihuite de hojas de palma: cesto tradicional tejido, utilizado para almacenamiento y transporte, símbolo de la vida cotidiana.', category: 'artesanía', type: 'normal' },
    { id: 11, name: 'Petate', image: '12.jpg', price: 890, description: 'Petate de hojas de palma: estera artesanal tejida, empleada como cama, tapete o para secar alimentos, con gran valor cultural.', category: 'artesanía', type: 'normal' },
    { id: 12, name: 'Sandalias', image: '13.jpg', price: 450, description: 'Sandalias básicas de cuero: calzado sencillo y duradero, elaborado en cuero, pensado para uso cotidiano.', category: 'calzado', type: 'shoes', sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'] },
    { id: 13, name: 'Quexquémetl', image: '14.jpg', price: 920, description: 'Quexquémetl rojo tejido y bordado tradicional: prenda triangular tejida a mano, con bordados que reflejan la identidad mazahua.', category: 'ropa', type: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
    { id: 14, name: 'Reboso', image: '15.jpg', price: 680, description: 'Rebozo tricolor tejido con punto de cruz: pieza textil tradicional, tejida con hilos tricolores y decorada con bordados en punto de cruz.', category: 'ropa', type: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
    { id: 15, name: 'Pulseras', image: '16.jpg', price: 280, description: 'Pulseras de hilo tricolor: accesorios artesanales elaborados con hilos de colores, símbolo de unión y tradición.', category: 'accesorios', type: 'normal' },
    { id: 16, name: 'Camisa de manta', image: '17.jpg', price: 520, description: 'Camisa de manta beige con flores: prenda fresca y cómoda, confeccionada en manta, con bordados florales decorativos.', category: 'ropa', type: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
    { id: 17, name: 'Pantalón de manta', image: '18.jpg', price: 580, description: 'Pantalón de manta básico: pieza tradicional de manta, ligera y versátil, ideal para climas cálidos.', category: 'ropa', type: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
    { id: 18, name: 'Monedero', image: '19.jpg', price: 220, description: 'Monedero de tela con bordado tradicional: accesorio pequeño y práctico, decorado con bordados mazahuas.', category: 'accesorios', type: 'normal' },
    { id: 19, name: 'Llavero', image: '20.jpg', price: 180, description: 'Llavero de hilo con diseño de persona: llavero artesanal tejido en hilo, con forma representativa de figuras humanas.', category: 'accesorios', type: 'normal' },
    { id: 20, name: 'Huaraches', image: '21.jpg', price: 490, description: 'Huaraches de cuero color caramelo: calzado típico elaborado en cuero, con acabado en tono caramelo.', category: 'calzado', type: 'shoes', sizes: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46'] },
    { id: 21, name: 'Diadema', image: '22.jpg', price: 310, description: 'Diadema de listón: accesorio artesanal confeccionado con listones, elegante y colorido.', category: 'accesorios', type: 'normal' },
    { id: 22, name: 'Falda', image: '23.jpg', price: 720, description: 'Falda con doble capa: prenda femenina con diseño de doble capa, que aporta volumen y estilo.', category: 'ropa', type: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
    { id: 23, name: 'Collar de chaquira', image: '24.jpg', price: 350, description: 'Collar de chaquira tricolor: accesorio artesanal elaborado con cuentas de chaquira en tres colores, representando identidad cultural.', category: 'accesorios', type: 'normal' },
    { id: 24, name: 'Cinturón', image: '25.jpg', price: 420, description: 'Cinturón de tela con tejido en punto de cruz: accesorio tradicional confeccionado en tela, con bordados en punto de cruz.', category: 'accesorios', type: 'normal' },
    { id: 25, name: 'Quexquémetl Negro', image: '26.jpg', price: 950, description: 'Quexquémetl negro tejido y bordado tradicional: prenda triangular artesanal en color negro, con bordados que reflejan símbolos mazahuas.', category: 'ropa', type: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
    { id: 26, name: 'Camisa de tela', image: '27.jpg', price: 480, description: 'Camisa de tela azul básica: prenda sencilla y fresca, confeccionada en tela, con diseño en tono azul.', category: 'ropa', type: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
    { id: 27, name: 'Camisa Rústica', image: '28.jpg', price: 560, description: 'Camisa de manta con diseño rústico: pieza artesanal de manta, con acabados que evocan lo tradicional y lo natural.', category: 'ropa', type: 'clothing', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
    { id: 28, name: 'Broche de chaquira', image: '29.jpg', price: 290, description: 'Broche de chaquira con diseño de mariposa: accesorio artesanal elaborado con cuentas de chaquira, representando una mariposa.', category: 'accesorios', type: 'normal' },
    { id: 29, name: 'Bolsa Floral', image: '30.jpg', price: 520, description: 'Bolsa de tela con diseño floral: bolso artesanal confeccionado en tela, decorado con motivos florales.', category: 'bolsas', type: 'normal' },
    { id: 30, name: 'Aretes de madera', image: '31.jpg', price: 240, description: 'Aretes de madera con diseño de colibrí: accesorios tallados en madera, con forma de colibrí, símbolo de vida y energía.', category: 'accesorios', type: 'normal' },
];

// Carrito
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function addToCart(productId, quantity, size) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = {
        id: productId,
        name: product.name,
        price: product.price,
        quantity: quantity,
        size: size,
        image: product.image
    };

    const existingItem = cart.find(item => item.id === productId && item.size === size);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    showNotification('Producto agregado al carrito', 'success');
    updateCartBadge();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        const total = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = total;
        badge.style.display = total > 0 ? 'flex' : 'none';
    }
}

function addToFavorites(productId) {
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
    } else {
        favorites.push(productId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function isFavorite(productId) {
    return favorites.includes(productId);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('close');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function renderProducts(containerId, filterProducts = products) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = filterProducts.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image-wrapper">
                <img src="https://via.placeholder.com/300x300?text=${product.name}" alt="${product.name}" class="product-image">
                <button class="product-heart ${isFavorite(product.id) ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${product.id})">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating" id="rating-${product.id}">
                    ${[1, 2, 3, 4, 5].map(star => `
                        <span class="star" onclick="event.stopPropagation(); rateProduct(${product.id}, ${star})" style="cursor: pointer;">
                            ★
                        </span>
                    `).join('')}
                </div>
                <div class="product-price">$${product.price}</div>
                <div class="product-quantity">
                    <button class="quantity-btn" onclick="event.stopPropagation(); decreaseQty(${product.id})">−</button>
                    <input type="number" class="quantity-input" id="qty-${product.id}" value="1" min="1" onclick="event.stopPropagation();">
                    <button class="quantity-btn" onclick="event.stopPropagation(); increaseQty(${product.id})">+</button>
                </div>
                <button class="btn-add-cart" onclick="event.stopPropagation(); handleAddToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Agregar
                </button>
            </div>
        </div>
    `).join('');
}

function handleAddToCart(productId) {
    const qtyInput = document.getElementById(`qty-${productId}`);
    const quantity = parseInt(qtyInput.value) || 1;
    const product = products.find(p => p.id === productId);

    if (product.type === 'clothing' || product.type === 'shoes') {
        openProductModal(productId);
    } else {
        addToCart(productId, quantity, 'N/A');
    }
}

function increaseQty(productId) {
    const input = document.getElementById(`qty-${productId}`);
    input.value = parseInt(input.value) + 1;
}

function decreaseQty(productId) {
    const input = document.getElementById(`qty-${productId}`);
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

function toggleFavorite(productId) {
    addToFavorites(productId);
    const heart = event.target.closest('.product-heart');
    heart.classList.toggle('active');
}

function rateProduct(productId, rating) {
    const ratingDiv = document.getElementById(`rating-${productId}`);
    const stars = ratingDiv.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.classList.toggle('active', index < rating);
    });
}

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let sizesHTML = '';
    if (product.type === 'clothing') {
        sizesHTML = product.sizes.map(size => `
            <button class="size-option" onclick="selectSize('${size}')">${size}</button>
        `).join('');
    } else if (product.type === 'shoes') {
        sizesHTML = product.sizes.map(size => `
            <button class="size-option" onclick="selectSize('${size}')">${size}</button>
        `).join('');
    }

    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };

    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="this.closest('.modal').remove()">
                <i class="fas fa-times"></i>
            </button>
            <img src="https://via.placeholder.com/400x400?text=${product.name}" alt="${product.name}" class="modal-image">
            <div class="modal-info">
                <h2>${product.name}</h2>
                <p class="modal-description">${product.description}</p>
                <div class="modal-price">$${product.price}</div>
                
                ${sizesHTML ? `
                <div class="size-selector">
                    <label>Selecciona una talla:</label>
                    <div class="size-options">
                        ${sizesHTML}
                    </div>
                </div>
                ` : ''}
                
                <div class="modal-quantity">
                    <input type="number" value="1" min="1" id="modal-qty">
                </div>
                
                <button class="btn-modal-add" onclick="addFromModal(${productId}, this.closest('.modal-content'))">
                    <i class="fas fa-shopping-cart"></i> Agregar al Carrito
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

let selectedSize = '';
function selectSize(size) {
    selectedSize = size;
    document.querySelectorAll('.size-option').forEach(btn => {
        btn.classList.toggle('selected', btn.textContent === size);
    });
}

function addFromModal(productId, modalContent) {
    const quantity = parseInt(modalContent.querySelector('#modal-qty').value) || 1;
    const size = selectedSize || 'N/A';

    if ((products.find(p => p.id === productId).type === 'clothing' || products.find(p => p.id === productId).type === 'shoes') && !selectedSize) {
        showNotification('Por favor selecciona una talla', 'error');
        return;
    }

    addToCart(productId, quantity, size);
    modalContent.closest('.modal').remove();
}

// Búsqueda y filtro
function searchProducts(query) {
    const results = products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    );
    return results;
}

function filterByPrice(products, min, max) {
    return products.filter(p => p.price >= min && p.price <= max);
}

function sortByPrice(products, order) {
    return [...products].sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    autoRotateCarousel();
    updateCartBadge();
});

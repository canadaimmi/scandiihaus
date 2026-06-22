/* ===== Mobile nav ===== */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const mobileNavClose = document.getElementById('mobileNavClose');
if (hamburgerBtn) hamburgerBtn.addEventListener('click', () => mobileNavOverlay.classList.add('open'));
if (mobileNavClose) mobileNavClose.addEventListener('click', () => mobileNavOverlay.classList.remove('open'));

/* ===== Scroll-to-top ===== */
const scrollTopBtn = document.getElementById('scrollTopBtn');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('show', window.scrollY > 500);
  });
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ===== Hero slider ===== */
(function heroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dots span');
  if (!slides.length) return;
  let i = 0;
  function show(idx) {
    slides.forEach((s, n) => s.classList.toggle('active', n === idx));
    dots.forEach((d, n) => d.classList.toggle('active', n === idx));
    i = idx;
  }
  document.querySelector('.hero-arrow.right')?.addEventListener('click', () => show((i + 1) % slides.length));
  document.querySelector('.hero-arrow.left')?.addEventListener('click', () => show((i - 1 + slides.length) % slides.length));
  dots.forEach((d, n) => d.addEventListener('click', () => show(n)));
  show(0);
  setInterval(() => show((i + 1) % slides.length), 6000);
})();

/* ===== FAQ accordion ===== */
document.querySelectorAll('.faq-q').forEach((q) => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const wasOpen = item.classList.contains('open');
    item.parentElement.querySelectorAll('.faq-item').forEach((el) => el.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

/* ===== Cart (localStorage) ===== */
const Cart = {
  key: 'scandiihaus_cart',
  get() {
    try { return JSON.parse(localStorage.getItem(this.key)) || []; } catch (e) { return []; }
  },
  save(items) { localStorage.setItem(this.key, JSON.stringify(items)); },
  add(item) {
    const items = this.get();
    const existing = items.find((i) => i.id === item.id);
    if (existing) existing.qty += item.qty;
    else items.push(item);
    this.save(items);
    this.render();
    openCart();
  },
  remove(id) {
    this.save(this.get().filter((i) => i.id !== id));
    this.render();
  },
  total() {
    return this.get().reduce((sum, i) => sum + i.price * i.qty, 0);
  },
  render() {
    const wrap = document.getElementById('cartItems');
    const dot = document.getElementById('cartDot');
    const subtotal = document.getElementById('cartSubtotal');
    if (!wrap) return;
    const items = this.get();
    dot.style.display = items.length ? 'flex' : 'none';
    if (!items.length) {
      wrap.innerHTML = '<p class="cart-empty">Your bag is empty.</p>';
    } else {
      wrap.innerHTML = items.map((i) => `
        <div class="cart-line">
          <div class="img-box" style="background-image:url('${i.image}')"></div>
          <div class="meta">
            <h5>${i.name}</h5>
            <p class="cl-price">${i.qty} × $${i.price.toLocaleString()}</p>
            <span class="remove" data-id="${i.id}">Remove</span>
          </div>
        </div>`).join('');
      wrap.querySelectorAll('.remove').forEach((btn) => btn.addEventListener('click', () => Cart.remove(btn.dataset.id)));
    }
    if (subtotal) subtotal.textContent = `$${this.total().toLocaleString()}`;
  },
};

const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
function openCart() { cartSidebar?.classList.add('open'); cartOverlay?.classList.add('open'); }
function closeCart() { cartSidebar?.classList.remove('open'); cartOverlay?.classList.remove('open'); }
cartBtn?.addEventListener('click', openCart);
cartClose?.addEventListener('click', closeCart);
cartOverlay?.addEventListener('click', closeCart);
document.getElementById('checkoutBtn')?.addEventListener('click', () => alert('This is a demo storefront — checkout is not connected to a payment processor yet.'));
Cart.render();

/* ===== Quick add-to-cart buttons (rendered grids) ===== */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-add-to-cart]');
  if (!btn) return;
  Cart.add({
    id: btn.dataset.id,
    name: btn.dataset.name,
    price: parseFloat(btn.dataset.price),
    image: btn.dataset.image,
    qty: 1,
  });
});

/* ===== Product data fetch helper ===== */
async function loadProducts() {
  const res = await fetch('data/products.json');
  return res.json();
}

/* ===== Star renderer ===== */
function starString(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return '★'.repeat(full) + (half ? '☆' : '') + '☆'.repeat(5 - full - (half ? 1 : 0));
}

window.Cart = Cart;
window.loadProducts = loadProducts;
window.starString = starString;

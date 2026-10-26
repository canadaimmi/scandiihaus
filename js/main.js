/* ==========================================================================
   Scandiihaus — product catalogue + site behaviour
   Data is embedded so the site runs from the filesystem with no server.
   ========================================================================== */

const PRODUCTS = [
  /* ---------- Barrel saunas ---------- */
  {
    id: 'cedarhavn-barrel-4-6',
    name: 'Cedarhavn Barrel Sauna',
    variant: '4–6 Person',
    capacity: '4–6 Person',
    category: 'barrel-saunas',
    categoryLabel: 'Barrel Saunas',
    badge: 'Best Seller',
    badgeTone: 'teal',
    price: 10999,
    compareAt: null,
    rating: 5,
    reviews: 18,
    image: 'images/sauna-cedarhavn-barrel.png',
    gallery: [
      'images/sauna-cedarhavn-barrel.png',
      'images/sauna-interior-barrel.png',
      'images/sauna-interior-pine.png'
    ],
    summary:
      'Western red cedar, bent into the shape that heats best. The curved roof pulls steam down and around rather than letting it stack in the peak, so the bench is usable within about half an hour of lighting the stove.',
    specs: [
      'Seats 4–6 adults on facing benches',
      'Clear western red cedar staves with steel banding',
      'Tempered glass door with cedar frame',
      'Wood-burning heater with stone cradle included',
      'Cradle mounts — no concrete pad required'
    ]
  },
  {
    id: 'cedarhavn-barrel-6-8',
    name: 'Cedarhavn Barrel Sauna',
    variant: '6–8 Person',
    capacity: '6–8 Person',
    category: 'barrel-saunas',
    categoryLabel: 'Barrel Saunas',
    badge: null,
    badgeTone: 'teal',
    price: 12999,
    compareAt: null,
    rating: 5,
    reviews: 11,
    image: 'images/sauna-cedarhavn-barrel.png',
    gallery: [
      'images/sauna-cedarhavn-barrel.png',
      'images/sauna-interior-barrel.png',
      'images/sauna-interior-pine.png'
    ],
    summary:
      'The long-format Cedarhavn, built for families and for anyone who hosts. Two extra feet of barrel length turn a tight four-seater into a room where six to eight people can sit without negotiating knees.',
    specs: [
      'Seats 6–8 adults on facing benches',
      'Clear western red cedar staves with steel banding',
      'Tempered glass door with cedar frame',
      'Larger-capacity wood-burning heater included',
      'Cradle mounts — no concrete pad required'
    ]
  },

  /* ---------- Cabin saunas ---------- */
  {
    id: 'nordhavn-haus-4',
    name: 'Nordhavn Haus Premium Outdoor Sauna',
    variant: '4 Person',
    capacity: '4 Person',
    category: 'cabin-saunas',
    categoryLabel: 'Cabin Saunas',
    badge: null,
    badgeTone: 'teal',
    price: 13999,
    compareAt: null,
    rating: 5,
    reviews: 9,
    image: 'images/sauna-nordhavn-corner.png',
    gallery: [
      'images/sauna-nordhavn-corner.png',
      'images/sauna-nordhavn-angle.png',
      'images/sauna-interior-pine.png'
    ],
    summary:
      'A proper outbuilding rather than a kit. Charred-timber cladding, a flat roof and a full corner of glass — it reads as architecture in the yard, and the backlit benches make it usable as an evening room, not just a sweat box.',
    specs: [
      'Seats 4 adults on tiered benches',
      'Corner glazing with full-height glass door',
      'Charred timber exterior cladding, knotless pine interior',
      'Backlit bench lighting and stone-cradle heater',
      'Delivered assembled and ready to site'
    ]
  },
  {
    id: 'nordhavn-haus-xl',
    name: 'Nordhavn Haus XL with Covered Pavilion',
    variant: 'XL · Covered Pavilion',
    capacity: '6+ Person',
    category: 'cabin-saunas',
    categoryLabel: 'Cabin Saunas',
    badge: 'Flagship',
    badgeTone: 'slate',
    price: 20899,
    compareAt: null,
    rating: 5,
    reviews: 6,
    image: 'images/sauna-nordhavn-pavilion.png',
    gallery: [
      'images/sauna-nordhavn-pavilion.png',
      'images/sauna-nordhavn-angle.png',
      'images/sauna-interior-pine.png'
    ],
    summary:
      'The Nordhavn Haus with a roofed pavilion built onto the end of it — somewhere to cool down, sit out the rain and keep a table and chairs. It is the difference between a sauna you visit and a space you spend the whole evening in.',
    specs: [
      'Sauna room plus roofed outdoor pavilion',
      'Seats 6+ across sauna and covered seating',
      'Slatted privacy screening to the pavilion end',
      'Charred timber exterior, knotless pine interior',
      'Delivered assembled and ready to site'
    ]
  },

  /* ---------- Wood-fired hot tubs ---------- */
  {
    id: 'eco-lux-5-6',
    name: 'Scandinavian Eco Lux Wood Fired Hot Tub',
    variant: '5–6 Person',
    capacity: '5–6 Person',
    category: 'hot-tubs',
    categoryLabel: 'Wood Fired Hot Tubs',
    badge: null,
    badgeTone: 'teal',
    price: 10895,
    compareAt: null,
    rating: 5,
    reviews: 24,
    image: 'images/hot-tub-eco-lux-dark.png',
    gallery: [
      'images/hot-tub-eco-lux-dark.png',
      'images/hot-tub-lake.jpg',
      'images/hot-tub-deck-cabin.jpg',
      'images/hot-tub-sunset.jpg'
    ],
    summary:
      'Fire, water and time — nothing else. An external stove heats the water by convection, so there is no pump, no panel and no power bill. Thermo-treated timber outside, a moulded liner inside, and steps that match.',
    specs: [
      'Seats 5–6 adults comfortably',
      'External wood-fired stove — no electrical hookup',
      'Thermo-treated timber shell, moulded liner',
      'Reaches soaking temperature in roughly 2–4 hours',
      'Matching timber steps and insulated lid included'
    ]
  },
  {
    id: 'eco-lux-jets-5-6',
    name: 'Scandinavian Eco Lux Hot Tub with Jets & Lights',
    variant: '5–6 Person',
    capacity: '5–6 Person',
    category: 'hot-tubs',
    categoryLabel: 'Wood Fired Hot Tubs',
    badge: 'Most Popular',
    badgeTone: 'teal',
    price: 11395,
    compareAt: null,
    rating: 5,
    reviews: 31,
    image: 'images/hot-tub-eco-lux-white.png',
    gallery: [
      'images/hot-tub-eco-lux-white.png',
      'images/hot-tub-ocean.png',
      'images/hot-tub-joy.jpg',
      'images/hot-tub-cabin-view.jpg'
    ],
    summary:
      'The Eco Lux with hydrotherapy jets and underwater lighting added. You keep the wood-fired heat and gain the parts of a modern spa worth having — moving water on your shoulders and a glow you can sit in after dark.',
    specs: [
      'Seats 5–6 adults comfortably',
      'Hydrotherapy jet system with air control',
      'Colour-changing underwater LED lighting',
      'External wood-fired stove — heat needs no power',
      'Matching timber steps and insulated lid included'
    ]
  },
  {
    id: 'eco-lux-jets-7-8',
    name: 'Scandinavian Eco Lux Hot Tub with Jets & Lights',
    variant: '7–8 Person',
    capacity: '7–8 Person',
    category: 'hot-tubs',
    categoryLabel: 'Wood Fired Hot Tubs',
    badge: null,
    badgeTone: 'teal',
    price: 12395,
    compareAt: null,
    rating: 5,
    reviews: 17,
    image: 'images/hot-tub-eco-lux-white.png',
    gallery: [
      'images/hot-tub-eco-lux-white.png',
      'images/hot-tub-deck-dusk.jpg',
      'images/hot-tub-extra.jpg',
      'images/hero-wide.jpg'
    ],
    summary:
      'The largest tub we build, with the full jet and lighting package. Eight adults fit without anyone perching on the edge, which makes it the one to choose if the tub is going to be the reason people come over.',
    specs: [
      'Seats 7–8 adults with room to stretch out',
      'Hydrotherapy jet system with air control',
      'Colour-changing underwater LED lighting',
      'External wood-fired stove — heat needs no power',
      'Matching timber steps and insulated lid included'
    ]
  },

  /* ---------- Services ---------- */
  {
    id: 'expert-guidance',
    name: 'Expert Guidance Package',
    variant: 'Consultation',
    capacity: 'Consultation',
    category: 'services',
    categoryLabel: 'Services',
    badge: null,
    badgeTone: 'teal',
    price: 300,
    compareAt: null,
    rating: 5,
    reviews: 7,
    image: 'images/sauna-interior-pine.png',
    gallery: ['images/sauna-interior-pine.png', 'images/sauna-nordhavn-angle.png'],
    summary:
      'A paid session with someone who has sited a lot of these. Bring your measurements, your access constraints and your shortlist, and leave knowing which model actually fits and what the groundwork will involve.',
    specs: [
      'One-to-one consultation on sizing and siting',
      'Access, drainage and base preparation review',
      'Model comparison against your shortlist',
      'Written summary of recommendations',
      'Fee credited against a later purchase'
    ]
  },
  {
    id: 'personal-solution-planning',
    name: 'Personal Solution Planning',
    variant: 'Design Service',
    capacity: 'Design Service',
    category: 'services',
    categoryLabel: 'Services',
    badge: null,
    badgeTone: 'teal',
    price: 1500,
    compareAt: null,
    rating: 5,
    reviews: 4,
    image: 'images/sauna-nordhavn-pavilion.png',
    gallery: ['images/sauna-nordhavn-pavilion.png', 'images/hot-tub-deck-cabin.jpg'],
    summary:
      'For sites that need thinking about — slopes, tight access, decks that have to be built around the tub, or a sauna and hot tub that need to work as one arrangement. We plan the whole installation before anything ships.',
    specs: [
      'Full site assessment and measured plan',
      'Layout drawings for sauna, tub and decking',
      'Groundwork and access specification',
      'Coordination with your trades',
      'Fee credited against a later purchase'
    ]
  },
  {
    id: 'custom-project',
    name: 'Custom Project',
    variant: 'By Quotation',
    capacity: 'By Quotation',
    category: 'services',
    categoryLabel: 'Services',
    badge: 'Enquire',
    badgeTone: 'slate',
    price: null,
    compareAt: null,
    rating: 5,
    reviews: 3,
    image: 'images/sauna-nordhavn-angle.png',
    gallery: ['images/sauna-nordhavn-angle.png', 'images/sauna-nordhavn-pavilion.png'],
    summary:
      'Dimensions, cladding, glazing and layout built to a specification you set — for commercial installations, unusual footprints, or a building that has to match something already on site. Priced per project.',
    specs: [
      'Built to your dimensions and specification',
      'Choice of cladding, glazing and interior timber',
      'Commercial and multi-unit work undertaken',
      'Drawings issued for approval before build',
      'Lead times quoted per project'
    ]
  }
];

/* ---------- Journal posts ---------- */
const POSTS = [
  {
    tag: 'Buying Guide',
    title: 'Barrel or cabin? How to choose your first sauna',
    excerpt:
      'The honest trade-offs between the two shapes — heat-up time, how many people really fit, and what each one asks of your yard.',
    image: 'images/sauna-cedarhavn-barrel.png'
  },
  {
    tag: 'Wood-Fired Living',
    title: 'What a wood-fired tub actually asks of you',
    excerpt:
      'Filling, lighting, draining and winterising, described properly — so you know what you are signing up for before it arrives.',
    image: 'images/hot-tub-lake.jpg'
  },
  {
    tag: 'Site Preparation',
    title: 'Getting the ground right before delivery day',
    excerpt:
      'Bases, access widths and drainage. The hour you spend on this is the hour that decides whether install day goes smoothly.',
    image: 'images/hot-tub-deck-dusk.jpg'
  }
];

/* ==========================================================================
   Helpers
   ========================================================================== */
const money = (n) => '$' + n.toLocaleString('en-CA', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const priceLabel = (p) => (p.price === null ? 'Request a quote' : money(p.price));

function starRow(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return '★'.repeat(full) + (half ? '⯨' : '') + '☆'.repeat(5 - full - (half ? 1 : 0));
}

function esc(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function loadProducts() {
  return Promise.resolve(PRODUCTS);
}

/* Shared product card markup */
function cardHTML(p) {
  return `
    <article class="card">
      <a class="card__media" href="product.html?id=${p.id}" aria-label="${esc(p.name)}">
        ${p.badge ? `<span class="badge badge--${p.badgeTone}">${p.badge}</span>` : ''}
        <img src="${p.image}" alt="${esc(p.name)} — ${esc(p.variant)}" loading="lazy">
      </a>
      ${
        p.price === null
          ? `<a class="card__quick" href="contact.html">Enquire</a>`
          : `<button type="button" class="card__quick" data-add="${p.id}">Add to Cart</button>`
      }
      <div class="card__body">
        <span class="card__cap">${p.capacity}</span>
        <h3><a href="product.html?id=${p.id}">${esc(p.name)}</a></h3>
        <div class="card__stars">${starRow(p.rating)}<span>(${p.reviews})</span></div>
        <div class="card__price">
          <span class="price-now">${priceLabel(p)}</span>
          ${p.compareAt ? `<span class="price-was">${money(p.compareAt)}</span>` : ''}
        </div>
      </div>
    </article>`;
}

function renderInto(id, list) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = list.map(cardHTML).join('');
}

/* ==========================================================================
   Cart (localStorage)
   ========================================================================== */
const Cart = {
  key: 'scandiihaus_cart_v2',
  read() {
    try {
      return JSON.parse(localStorage.getItem(this.key)) || [];
    } catch (e) {
      return [];
    }
  },
  write(items) {
    try {
      localStorage.setItem(this.key, JSON.stringify(items));
    } catch (e) {
      /* storage unavailable — cart stays in memory for this page */
    }
    this.paint();
  },
  add(id, qty = 1) {
    const product = PRODUCTS.find((p) => p.id === id);
    if (!product || product.price === null) return;
    const items = this.read();
    const hit = items.find((i) => i.id === id);
    if (hit) hit.qty += qty;
    else items.push({ id, name: product.name, variant: product.variant, price: product.price, image: product.image, qty });
    this.write(items);
    openDrawer();
  },
  remove(id) {
    this.write(this.read().filter((i) => i.id !== id));
  },
  total() {
    return this.read().reduce((sum, i) => sum + i.price * i.qty, 0);
  },
  count() {
    return this.read().reduce((sum, i) => sum + i.qty, 0);
  },
  paint() {
    const bubble = document.getElementById('cartCount');
    if (bubble) {
      bubble.textContent = this.count();
      bubble.classList.toggle('is-visible', this.count() > 0);
    }
    const body = document.getElementById('drawerBody');
    const total = document.getElementById('drawerTotal');
    if (!body) return;
    const items = this.read();
    body.innerHTML = items.length
      ? items
          .map(
            (i) => `
        <div class="line-item">
          <img src="${i.image}" alt="${esc(i.name)}">
          <div>
            <h5>${esc(i.name)}</h5>
            <p>${i.qty} × ${money(i.price)}</p>
            <button type="button" data-remove="${i.id}">Remove</button>
          </div>
        </div>`
          )
          .join('')
      : '<p class="drawer__empty">Your cart is empty.</p>';
    if (total) total.textContent = money(this.total());
  }
};

const scrim = document.getElementById('scrim');
const drawer = document.getElementById('drawer');
function openDrawer() {
  drawer?.classList.add('is-open');
  scrim?.classList.add('is-open');
}
function closeDrawer() {
  drawer?.classList.remove('is-open');
  scrim?.classList.remove('is-open');
}

/* ==========================================================================
   Boot
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  Cart.paint();

  /* cart drawer */
  document.getElementById('cartBtn')?.addEventListener('click', openDrawer);
  document.getElementById('drawerClose')?.addEventListener('click', closeDrawer);
  scrim?.addEventListener('click', () => {
    closeDrawer();
    document.getElementById('mobileNav')?.classList.remove('is-open');
  });
  document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    window.location.href = 'contact.html';
  });

  /* add / remove, delegated across every grid on the page */
  document.addEventListener('click', (e) => {
    const add = e.target.closest('[data-add]');
    if (add) {
      e.preventDefault();
      Cart.add(add.dataset.add);
      return;
    }
    const rm = e.target.closest('[data-remove]');
    if (rm) {
      e.preventDefault();
      Cart.remove(rm.dataset.remove);
    }
  });

  /* mobile nav */
  const mobileNav = document.getElementById('mobileNav');
  document.getElementById('burger')?.addEventListener('click', () => {
    mobileNav?.classList.add('is-open');
    scrim?.classList.add('is-open');
  });
  document.getElementById('mobileClose')?.addEventListener('click', () => {
    mobileNav?.classList.remove('is-open');
    scrim?.classList.remove('is-open');
  });

  /* sticky header shadow */
  const header = document.querySelector('.header');
  const onScroll = () => {
    header?.classList.toggle('is-stuck', window.scrollY > 10);
    document.getElementById('toTop')?.classList.toggle('is-visible', window.scrollY > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  document.getElementById('toTop')?.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );

  /* scroll reveal */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reveals.forEach((el) => el.classList.add('is-in'));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, i) => {
            if (!entry.isIntersecting) return;
            setTimeout(() => entry.target.classList.add('is-in'), i * 70);
            io.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px' }
      );
      reveals.forEach((el) => io.observe(el));
    }
  }

  /* accordions (also works for blocks injected later) */
  document.addEventListener('click', (e) => {
    const q = e.target.closest('.acc__q');
    if (!q) return;
    const item = q.closest('.acc__item');
    const wasOpen = item.classList.contains('is-open');
    item.closest('.acc').querySelectorAll('.acc__item').forEach((el) => el.classList.remove('is-open'));
    if (!wasOpen) item.classList.add('is-open');
  });

  /* newsletter + enquiry forms */
  document.querySelectorAll('[data-fake-submit]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = form.querySelector('[data-note]');
      if (note) {
        note.textContent = 'Thanks — we will be in touch shortly.';
        note.style.color = 'var(--teal-dark)';
      }
      form.reset();
    });
  });
});

window.PRODUCTS = PRODUCTS;
window.POSTS = POSTS;
window.Cart = Cart;
window.cardHTML = cardHTML;
window.renderInto = renderInto;
window.starRow = starRow;
window.money = money;
window.priceLabel = priceLabel;
window.esc = esc;
window.loadProducts = loadProducts;

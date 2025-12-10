// Kenya Relocation Hub - Streamlined Scripts

const neighborhoods = [
  { name: "Runda", badge: "Premium", image: "images/Runda.jpg", malls: "Village Market, Rosslyn Riviera", schools: "Rosslyn Academy, Braeburn", hospitals: "Nairobi Hospital, Aga Khan" },
  { name: "Kilimani", badge: "Trending", image: "images/kilimani.jpg", malls: "Yaya Centre, Junction Mall", schools: "Strathmore, Hillcrest", hospitals: "Aga Khan, Avenue Hospital" },
  { name: "Karen", badge: "Family", image: "images/karen.jpg", malls: "The Hub Karen, Junction", schools: "Karen Academy, Brookhouse", hospitals: "Karen Hospital, Nairobi West" },
  { name: "Westlands", badge: "Vibrant", image: "images/westlands.jpg", malls: "Sarit Centre, Westgate", schools: "Braeburn, Peponi School", hospitals: "Nairobi Hospital, Aga Khan" },
  { name: "Kileleshwa", badge: "Cultural", image: "images/kileleshwa.jpg", malls: "Lavington Mall, Kasuku", schools: "St. Mary's, Loreto", hospitals: "MP Shah, Nairobi Hospital" },
  { name: "Lavington", badge: "Modern", image: "images/lavington.jpg", malls: "Lavington Mall, Kasuku", schools: "St Austin's, Loreto", hospitals: "Nairobi Hospital, MP Shah" }
];

const stories = [
  { title: "Seamless Family Relocation to Karen", client: "The Richardsons (US)", category: "family", tag: "Family", before: "3 Months Search", after: "Settled in 3 Weeks" },
  { title: "Strategic Investment in Westlands", client: "Mr. Chen (China)", category: "investment", tag: "Investment", before: "Unverified Title", after: "15% Yield Achieved" },
  { title: "Professional Expat Move to Kilimani", client: "Ms. Anya (UK)", category: "expat", tag: "Expat", before: "Temporary Hotel", after: "Perfect Home Found" },
  { title: "First-Time Home Purchase in Runda", client: "Dr. Al-Farsi (Oman)", category: "investment", tag: "Residential", before: "Legal Confusion", after: "Closed in 45 Days" }
];

let exchangeRate = null;

// Navigation
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  window.addEventListener('scroll', () => nav?.classList.toggle('scrolled', window.pageYOffset > 50));

  toggle?.addEventListener('click', () => {
    links.classList.toggle('active');
    const spans = toggle.querySelectorAll('span');
    const open = links.classList.contains('active');
    spans[0].style.transform = open ? 'rotate(45deg) translateY(7px)' : '';
    spans[1].style.opacity = open ? '0' : '1';
    spans[2].style.transform = open ? 'rotate(-45deg) translateY(-7px)' : '';
  });

  links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('active');
    toggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
  }));

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' }); }
    });
  });

  // Scroll to top
  const scrollBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => scrollBtn?.classList.toggle('visible', window.pageYOffset > 400));
  scrollBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Render content
  renderNeighborhoods();
  renderStories();
  initFilters();
  initCarousel();
  initForm();
  initAnimations();
  fetchRate();
});

function renderNeighborhoods() {
  const grid = document.getElementById('neighborhoodsGrid');
  if (!grid) return;
  grid.innerHTML = neighborhoods.map(n => `
    <article class="neighborhood-card">
      <img src="${n.image}" alt="${n.name}" loading="lazy">
      <div class="neighborhood-info">
        <span class="neighborhood-badge">${n.badge}</span>
        <h4>${n.name}</h4>
        <div class="amenities">
          <div class="amenity"><span class="amenity-icon">🏢</span><span>${n.malls}</span></div>
          <div class="amenity"><span class="amenity-icon">🏫</span><span>${n.schools}</span></div>
          <div class="amenity"><span class="amenity-icon">🏥</span><span>${n.hospitals}</span></div>
        </div>
        <a href="#contact" class="neighborhood-cta">Explore →</a>
      </div>
    </article>
  `).join('');
}

function renderStories(filter = 'all') {
  const grid = document.getElementById('storiesGrid');
  if (!grid) return;
  const filtered = filter === 'all' ? stories : stories.filter(s => s.category === filter);
  grid.innerHTML = filtered.length ? filtered.map(s => `
    <article class="story-card">
      <div class="story-header"><span class="story-tag">${s.tag}</span><h3>${s.title}</h3><p class="story-client">Client: ${s.client}</p></div>
      <div class="before-after"><div><strong>Before</strong><span>${s.before}</span></div><div><strong>After</strong><span>${s.after}</span></div></div>
      <div class="story-summary"><p>Discover how we transformed this client's relocation experience.</p></div>
    </article>
  `).join('') : '<p class="no-results">No stories found.</p>';
}

function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderStories(this.dataset.filter);
    });
  });
}

function initCarousel() {
  const slides = document.querySelectorAll('.testimonial');
  const prev = document.querySelector('.carousel-btn.prev');
  const next = document.querySelector('.carousel-btn.next');
  const dots = document.querySelector('.carousel-dots');
  if (!slides.length) return;

  let current = 0;
  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goTo(i);
    dots?.appendChild(dot);
  });

  function goTo(i) {
    slides[current].classList.remove('active');
    current = i;
    slides[current].classList.add('active');
    dots?.querySelectorAll('.carousel-dot').forEach((d, idx) => d.classList.toggle('active', idx === i));
  }

  prev?.addEventListener('click', () => goTo((current - 1 + slides.length) % slides.length));
  next?.addEventListener('click', () => goTo((current + 1) % slides.length));
  setInterval(() => goTo((current + 1) % slides.length), 6000);
}

async function fetchRate() {
  try {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    exchangeRate = (await res.json()).rates.KES;
  } catch { exchangeRate = 145; }
}

function convertCurrency() {
  const input = document.getElementById('usdInput');
  const result = document.getElementById('kesResult');
  const usd = parseFloat(input?.value);
  if (!usd || usd <= 0) { result.textContent = 'Enter valid amount'; result.style.color = '#6B7280'; return; }
  if (!exchangeRate) { result.textContent = 'Loading...'; fetchRate().then(convertCurrency); return; }
  result.textContent = `KES ${(usd * exchangeRate).toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
  result.style.color = '#C41E3A';
}
window.convertCurrency = convertCurrency;

function initForm() {
  document.getElementById('contactForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...'; btn.disabled = true;
    setTimeout(() => {
      alert('✅ Thank you! We\'ll respond within 24 hours.');
      e.target.reset(); btn.textContent = 'Send Inquiry'; btn.disabled = false;
    }, 1500);
  });
}

function initAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('animate-in'); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.card, .price-card, .neighborhood-card, .story-card, .stat-card').forEach(el => {
    el.classList.add('animate-ready'); observer.observe(el);
  });
}
// Kenya Relocation Hub - Premium JavaScript

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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initCursor();
  initNavigation();
  initScrollEffects();
  renderAreas();
  renderStories();
  initFilters();
  initCarousel();
  initForms();
  initCounters();
  fetchRate();
  
  console.log('%c🌍 Kenya Relocation Hub & Realty', 'color: #D4AF37; font-size: 24px; font-weight: bold; font-family: Georgia;');
  console.log('%cPremium Relocation Services to Nairobi', 'color: #C41E3A; font-size: 14px;');
  console.log('%c📞 +254 797 033 513', 'color: #6B7280;');
});

// Page Loader
function initLoader() {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }, 2000);
}

// Custom Cursor
function initCursor() {
  const cursor = document.getElementById('cursor');
  const cursorDot = document.getElementById('cursorDot');
  if (!cursor || !cursorDot) return;
  
  let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;
  
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
  });
  
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  
  const hoverElements = document.querySelectorAll('a, button, .service-card, .package-card, .area-card');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

// Navigation
function initNavigation() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.pageYOffset > 50);
  });
  
  toggle?.addEventListener('click', () => {
    links.classList.toggle('active');
    const spans = toggle.querySelectorAll('span');
    const open = links.classList.contains('active');
    spans[0].style.transform = open ? 'rotate(45deg) translateY(8px)' : '';
    spans[1].style.opacity = open ? '0' : '1';
    spans[2].style.transform = open ? 'rotate(-45deg) translateY(-8px)' : '';
  });
  
  links?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('active');
      toggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = '1'; });
    });
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      }
    });
  });
}

// Scroll Effects
function initScrollEffects() {
  const scrollTop = document.getElementById('scrollTop');
  
  window.addEventListener('scroll', () => {
    scrollTop?.classList.toggle('visible', window.pageYOffset > 500);
  });
  
  scrollTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  document.querySelectorAll('.service-card, .package-card, .area-card, .story-card, .visual-card, .about-feature').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  
  document.addEventListener('scroll', () => {
    document.querySelectorAll('.in-view').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, { once: true });
}

// Render Areas
function renderAreas() {
  const grid = document.getElementById('areasGrid');
  if (!grid) return;
  
  grid.innerHTML = neighborhoods.map((n, i) => `
    <article class="area-card" style="animation-delay: ${i * 0.1}s">
      <img src="${n.image}" alt="${n.name}" loading="lazy">
      <div class="area-info">
        <span class="area-badge">${n.badge}</span>
        <h4>${n.name}</h4>
        <div class="area-amenities">
          <div class="area-amenity"><span class="area-icon">🏢</span><span>${n.malls}</span></div>
          <div class="area-amenity"><span class="area-icon">🏫</span><span>${n.schools}</span></div>
          <div class="area-amenity"><span class="area-icon">🏥</span><span>${n.hospitals}</span></div>
        </div>
        <a href="#contact" class="area-cta">Explore →</a>
      </div>
    </article>
  `).join('');
}

// Render Stories
function renderStories(filter = 'all') {
  const grid = document.getElementById('storiesGrid');
  if (!grid) return;
  
  const filtered = filter === 'all' ? stories : stories.filter(s => s.category === filter);
  
  grid.innerHTML = filtered.length ? filtered.map((s, i) => `
    <article class="story-card" style="animation-delay: ${i * 0.1}s">
      <div class="story-header">
        <span class="story-tag">${s.tag}</span>
        <h3>${s.title}</h3>
        <p class="story-client">Client: ${s.client}</p>
      </div>
      <div class="before-after">
        <div><strong>Before</strong><span>${s.before}</span></div>
        <div><strong>After</strong><span>${s.after}</span></div>
      </div>
      <div class="story-summary">
        <p>Discover how we transformed this client's relocation experience with our comprehensive services and local expertise.</p>
      </div>
    </article>
  `).join('') : '<p style="text-align:center;grid-column:1/-1;color:#6B7280;padding:3rem;">No stories found for this filter.</p>';
}

// Filters
function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderStories(this.dataset.filter);
    });
  });
}

// Testimonial Carousel
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
    dot.addEventListener('click', () => goTo(i));
    dots?.appendChild(dot);
  });
  
  function goTo(i) {
    slides[current].classList.remove('active');
    current = i;
    slides[current].classList.add('active');
    dots?.querySelectorAll('.carousel-dot').forEach((d, idx) => {
      d.classList.toggle('active', idx === i);
    });
  }
  
  prev?.addEventListener('click', () => goTo((current - 1 + slides.length) % slides.length));
  next?.addEventListener('click', () => goTo((current + 1) % slides.length));
  
  setInterval(() => goTo((current + 1) % slides.length), 6000);
}

// Animated Counters
function initCounters() {
  const counters = document.querySelectorAll('.stat[data-count]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const numEl = el.querySelector('.stat-num');
        let current = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        
        function update() {
          current += increment;
          if (current >= target) {
            numEl.textContent = target;
          } else {
            numEl.textContent = Math.floor(current);
            requestAnimationFrame(update);
          }
        }
        update();
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(c => observer.observe(c));
}

// Currency Converter
async function fetchRate() {
  try {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    exchangeRate = (await res.json()).rates.KES;
  } catch {
    exchangeRate = 145;
  }
}

function convertCurrency() {
  const input = document.getElementById('usdInput');
  const result = document.getElementById('kesResult');
  const usd = parseFloat(input?.value);
  
  if (!usd || usd <= 0) {
    result.textContent = 'Enter valid amount';
    result.style.color = '#6B7280';
    return;
  }
  
  if (!exchangeRate) {
    result.textContent = 'Loading...';
    fetchRate().then(convertCurrency);
    return;
  }
  
  const kes = usd * exchangeRate;
  result.textContent = `KES ${kes.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
  result.style.color = '#C41E3A';
  
  // Animation
  result.style.transform = 'scale(1.05)';
  setTimeout(() => result.style.transform = 'scale(1)', 200);
}

window.convertCurrency = convertCurrency;

// Forms
function initForms() {
  const form = document.getElementById('contactForm');
  
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalHTML = btn.innerHTML;
    
    btn.innerHTML = '<span>Sending...</span>';
    btn.disabled = true;
    
    setTimeout(() => {
      // Success animation
      btn.innerHTML = '<span>✓ Sent!</span>';
      btn.style.background = 'linear-gradient(135deg, #25D366, #20BA5A)';
      
      setTimeout(() => {
        alert('✅ Thank you for your inquiry!\n\nWe\'ll respond within 24 hours.\n\nFor immediate assistance, contact us via WhatsApp.');
        form.reset();
        btn.innerHTML = originalHTML;
        btn.style.background = '';
        btn.disabled = false;
      }, 1000);
    }, 1500);
  });
  
  // Input focus animations
  document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.style.transform = 'scale(1.02)';
    });
    input.addEventListener('blur', function() {
      this.parentElement.style.transform = 'scale(1)';
    });
  });
}

// Trigger in-view animations
setTimeout(() => {
  document.querySelectorAll('.in-view').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });
}, 100);
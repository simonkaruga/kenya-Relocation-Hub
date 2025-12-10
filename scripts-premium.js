// ===============================================
// KENYA RELOCATION HUB - PREMIUM FEATURE JAVASCRIPT
// All 12 premium features implemented
// ===============================================

// ========== CONFIGURATION & DATA ==========
const config = {
  apiKey: 'YOUR_LEAFLET_API_KEY',
  mapCenter: [-1.2865, 36.8172], // Nairobi coordinates
  defaultLanguage: 'en',
  supportedLanguages: ['en', 'fr', 'de', 'es'],
};

// Neighborhood data for map
const neighborhoods = [
  { name: "Runda", lat: -1.2580, lng: 36.8205, badge: "Premium", price: "$2,500-4,000/mo", malls: "Village Market", schools: "Rosslyn Academy", hospitals: "Nairobi Hospital", image: "images/Runda.jpg" },
  { name: "Kilimani", lat: -1.2890, lng: 36.8020, badge: "Trending", price: "$1,800-3,000/mo", malls: "Yaya Centre", schools: "Strathmore", hospitals: "Aga Khan", image: "images/kilimani.jpg" },
  { name: "Karen", lat: -1.3549, lng: 36.7626, badge: "Family", price: "$1,500-2,800/mo", malls: "The Hub Karen", schools: "Karen Academy", hospitals: "Karen Hospital", image: "images/karen.jpg" },
  { name: "Westlands", lat: -1.2673, lng: 36.8065, badge: "Vibrant", price: "$2,000-3,500/mo", malls: "Sarit Centre", schools: "Braeburn", hospitals: "Nairobi Hospital", image: "images/westlands.jpg" },
  { name: "Kileleshwa", lat: -1.2890, lng: 36.7730, badge: "Cultural", price: "$1,600-2,600/mo", malls: "Lavington Mall", schools: "St. Mary's", hospitals: "MP Shah", image: "images/kileleshwa.jpg" },
  { name: "Lavington", lat: -1.3065, lng: 36.7730, badge: "Modern", price: "$1,700-2,900/mo", malls: "Lavington Mall", schools: "St Austin's", hospitals: "Nairobi Hospital", image: "images/lavington.jpg" }
];

// Blog articles data
const blogArticles = [
  {
    id: 1,
    title: "Complete Guide to Relocating to Kenya: Legal Requirements & Documentation",
    category: "legal",
    excerpt: "Everything you need to know about visa requirements, work permits, and immigration procedures for moving to Kenya.",
    author: "Simon Karuga",
    date: "2025-01-15",
    readTime: "8 min",
    image: "images/blog-legal.jpg",
    tags: ["Legal", "Immigration", "Permits"]
  },
  {
    id: 2,
    title: "Best Schools in Nairobi for Expat Families: A Parent's Guide",
    category: "lifestyle",
    excerpt: "Comprehensive review of top international schools in Nairobi, comparing curricula, fees, and community.",
    author: "Jane Mwangi",
    date: "2025-01-12",
    readTime: "12 min",
    image: "images/blog-schools.jpg",
    tags: ["Education", "Family", "Schools"]
  },
  {
    id: 3,
    title: "Healthcare in Nairobi: Quality Hospitals and Insurance Options for Expats",
    category: "lifestyle",
    excerpt: "Everything expats need to know about healthcare facilities, insurance providers, and medical costs in Nairobi.",
    author: "Dr. Njeri Ouma",
    date: "2025-01-10",
    readTime: "10 min",
    image: "images/blog-health.jpg",
    tags: ["Healthcare", "Insurance", "Wellness"]
  },
  {
    id: 4,
    title: "Real Estate Investment in Kenya: Market Trends & Opportunities",
    category: "investment",
    excerpt: "Analysis of Kenya's real estate market, investment potential, and strategies for foreign investors.",
    author: "David Kipchoge",
    date: "2025-01-08",
    readTime: "14 min",
    image: "images/blog-investment.jpg",
    tags: ["Investment", "Real Estate", "Market Analysis"]
  }
];

// Awards & partnerships
const awards = [
  { title: "Best Relocation Service 2024", icon: "🏆" },
  { title: "Customer Choice Award", icon: "⭐" },
  { title: "Premium Partner - East African Real Estate Association", icon: "🤝" },
  { title: "Verified by Expat Community", icon: "✓" }
];

const partners = [
  { name: "Equity Bank", logo: "images/partners/equity.png" },
  { name: "KCB Group", logo: "images/partners/kcb.png" },
  { name: "KRERA", logo: "images/partners/krera.png" },
  { name: "Airbnb", logo: "images/partners/airbnb.png" }
];

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  console.log('🌍 Kenya Relocation Hub - Premium Features Loaded');

  // Core features
  initLoader();
  initCursor();
  initNavigation();
  initScrollEffects();
  
  // Premium features
  initMap();
  initBlogGrid();
  initAwards();
  initChat();
  initCalculator();
  initLifestyleCarousel();
  initNewsletter();
  initLanguageSwitcher();
  initCounters();
  initAnchorScroll();
  
  // Final polish
  setTimeout(() => {
    document.querySelectorAll('[data-animate]').forEach(el => {
      el.classList.add('animate-fade-in-up');
    });
  }, 100);
});

// ========== 1. INTERACTIVE MAP ==========
let map;

function initMap() {
  const mapContainer = document.getElementById('map');
  if (!mapContainer) return;

  // Initialize Leaflet map (CDN must be loaded in HTML)
  if (typeof L !== 'undefined') {
    map = L.map('map').setView(config.mapCenter, 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(map);

    // Add markers for each neighborhood
    neighborhoods.forEach(nb => {
      const marker = L.circleMarker([nb.lat, nb.lng], {
        radius: 12,
        fillColor: '#D4AF37',
        color: '#1A1A2E',
        weight: 3,
        opacity: 1,
        fillOpacity: 0.85
      }).addTo(map);

      marker.bindPopup(`
        <div style="font-family: 'Cormorant Garamond', serif;">
          <h4 style="color: #C41E3A; margin: 0 0 0.5rem 0;">${nb.name}</h4>
          <p style="margin: 0.3rem 0; color: #6B7280;"><strong>Price Range:</strong> ${nb.price}</p>
          <p style="margin: 0.3rem 0; color: #6B7280;"><strong>Malls:</strong> ${nb.malls}</p>
          <p style="margin: 0.3rem 0; color: #6B7280;"><strong>Schools:</strong> ${nb.schools}</p>
          <p style="margin: 0.3rem 0; color: #6B7280;"><strong>Hospitals:</strong> ${nb.hospitals}</p>
        </div>
      `);
    });
  }

  // Render neighborhood cards with images
  renderNeighborhoodCards();
}

function renderNeighborhoodCards() {
  // Check if neighborhood grid exists in HTML, if not create it
  let neighborhoodsGrid = document.querySelector('.neighborhoods-grid');
  
  if (!neighborhoodsGrid) {
    const mapSection = document.querySelector('.map-section');
    if (!mapSection) return;
    
    neighborhoodsGrid = document.createElement('div');
    neighborhoodsGrid.className = 'neighborhoods-grid';
    mapSection.appendChild(neighborhoodsGrid);
  }

  neighborhoodsGrid.innerHTML = neighborhoods.map(nb => `
    <div class="neighborhood-card">
      <div class="neighborhood-image-wrapper">
        <img src="${nb.image}" alt="${nb.name}" class="neighborhood-image" loading="lazy">
        <div class="neighborhood-overlay">${nb.badge}</div>
      </div>
      <div class="neighborhood-card-content">
        <h3 class="neighborhood-card-name">${nb.name}</h3>
        <p class="neighborhood-card-price">${nb.price}</p>
        <ul class="neighborhood-card-amenities">
          <li><strong>Malls:</strong> ${nb.malls}</li>
          <li><strong>Schools:</strong> ${nb.schools}</li>
          <li><strong>Hospitals:</strong> ${nb.hospitals}</li>
        </ul>
      </div>
    </div>
  `).join('');
}

// ========== 2. VIDEO TESTIMONIALS ==========
document.querySelectorAll('.video-play-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const video = this.closest('.testimonial-video')?.querySelector('iframe');
    if (video) {
      video.style.display = 'block';
      this.style.display = 'none';
    }
  });
});

// ========== 3. BLOG GRID & FILTERING ==========
function initBlogGrid() {
  const blogContainer = document.getElementById('blogGrid');
  if (!blogContainer) return;

  function renderBlog(articles) {
    blogContainer.innerHTML = articles.map(article => `
      <article class="blog-card" data-category="${article.category}">
        <div class="blog-image">
          <img src="${article.image}" alt="${article.title}" loading="lazy">
          <span class="blog-category">${article.category}</span>
        </div>
        <div class="blog-content">
          <div class="blog-meta">
            <span class="blog-date">📅 ${formatDate(article.date)}</span>
            <span class="blog-author">✍️ ${article.author}</span>
          </div>
          <h3 class="blog-title">${article.title}</h3>
          <p class="blog-excerpt">${article.excerpt}</p>
          <div class="blog-footer">
            <a href="#blog-detail" class="blog-link">Read More →</a>
            <span class="blog-read-time">${article.readTime}</span>
          </div>
        </div>
      </article>
    `).join('');
  }

  // Initial render
  renderBlog(blogArticles);

  // Blog filters
  document.querySelectorAll('.blog-filter-tag').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.blog-filter-tag').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const filter = this.dataset.filter;
      const filtered = filter === 'all' ? blogArticles : blogArticles.filter(a => a.category === filter);
      renderBlog(filtered);
    });
  });
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// ========== 4. AWARDS & PARTNERSHIPS ==========
function initAwards() {
  const awardsContainer = document.getElementById('awardsGrid');
  const partnersContainer = document.getElementById('partnersGrid');

  if (awardsContainer) {
    awardsContainer.innerHTML = awards.map(award => `
      <div class="award-card">
        <div class="award-icon">${award.icon}</div>
        <div class="award-title">${award.title}</div>
      </div>
    `).join('');
  }

  if (partnersContainer) {
    partnersContainer.innerHTML = partners.map(partner => `
      <div class="partner-logo">
        <img src="${partner.logo}" alt="${partner.name}" loading="lazy">
      </div>
    `).join('');
  }
}

// ========== 5. LIVE CHAT ==========
function initChat() {
  const chatBubble = document.getElementById('chatBubble');
  const chatWindow = document.getElementById('chatWindow');
  const chatClose = document.getElementById('chatClose');
  const chatInput = document.getElementById('chatInput');
  const chatSend = document.getElementById('chatSend');
  const chatBody = document.getElementById('chatBody');

  if (!chatBubble) return;

  chatBubble.addEventListener('click', () => {
    chatWindow.classList.toggle('active');
  });

  chatClose.addEventListener('click', () => {
    chatWindow.classList.remove('active');
  });

  chatSend.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });

  function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // User message
    addMessage(message, 'user');
    chatInput.value = '';

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "Thanks for reaching out! How can I help you with your relocation to Nairobi?",
        "Great question! Would you like to schedule a consultation? I can help set that up.",
        "Our premium package includes airport pickup, accommodation, and local orientation. Interested?",
        "You can reach our team via WhatsApp for faster response. Would you like the link?"
      ];
      addMessage(responses[Math.floor(Math.random() * responses.length)], 'bot');
    }, 800);
  }

  function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-message ${sender}`;
    msgDiv.innerHTML = `
      ${sender === 'bot' ? '<div class="chat-avatar">KR</div>' : ''}
      <div class="chat-bubble-msg">${text}</div>
    `;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  // Initial greeting
  setTimeout(() => {
    addMessage("👋 Welcome! How can Kenya Relocation Hub assist you today?", 'bot');
  }, 500);
}

// ========== 6. COST CALCULATOR ==========
function initCalculator() {
  const calcInputs = document.querySelectorAll('.calc-input, .calc-slider, .calc-checkbox');
  if (calcInputs.length === 0) return;

  function updateCalculation() {
    // Get input values
    const rentalMonths = parseInt(document.getElementById('rentalMonths')?.value || 1);
    const monthlyRent = parseInt(document.getElementById('monthlyRent')?.value || 2000);
    const schoolFees = parseInt(document.getElementById('schoolFees')?.value || 0);
    const relocationCost = parseInt(document.getElementById('relocationCost')?.value || 500);
    const includeInsurance = document.getElementById('includeInsurance')?.checked || false;

    // Calculate
    const rentalCost = rentalMonths * monthlyRent;
    const insurance = includeInsurance ? rentalCost * 0.05 : 0;
    const total = rentalCost + schoolFees + relocationCost + insurance;

    // Update display
    document.getElementById('rentalDisplay').textContent = rentalMonths;
    document.getElementById('rentAmount').textContent = `$${rentalCost.toLocaleString()}`;
    document.getElementById('schoolAmount').textContent = `$${(schoolFees * rentalMonths).toLocaleString()}`;
    document.getElementById('totalAmount').textContent = `$${total.toLocaleString()}`;

    // Breakdown
    document.getElementById('breakdownRental').textContent = `$${rentalCost.toLocaleString()}`;
    document.getElementById('breakdownSchool').textContent = `$${(schoolFees * rentalMonths).toLocaleString()}`;
    document.getElementById('breakdownRelocation').textContent = `$${relocationCost.toLocaleString()}`;
    document.getElementById('breakdownInsurance').textContent = `$${Math.round(insurance).toLocaleString()}`;
  }

  calcInputs.forEach(input => {
    input.addEventListener('input', updateCalculation);
    input.addEventListener('change', updateCalculation);
  });

  // Export functionality
  document.getElementById('exportPDF')?.addEventListener('click', () => {
    alert('PDF export feature - integrate with jsPDF library');
  });

  updateCalculation();
}

// ========== 7. LIFESTYLE CAROUSEL ==========
function initLifestyleCarousel() {
  const carousel = document.querySelector('.carousel-track');
  if (!carousel) return;

  // Smooth scroll with arrow keys
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') carousel.scrollBy({ left: -300, behavior: 'smooth' });
    if (e.key === 'ArrowRight') carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });
}

// ========== 8. NEWSLETTER ==========
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value;
    const btn = form.querySelector('button');
    const originalText = btn.innerHTML;

    btn.innerHTML = '✓ Subscribed!';
    btn.disabled = true;
    btn.style.background = 'linear-gradient(135deg, #25D366, #20BA5A)';

    // Simulate API call
    setTimeout(() => {
      alert(`✅ Welcome to our newsletter!\n\nA free relocation guide has been sent to ${email}`);
      form.reset();
      btn.innerHTML = originalText;
      btn.disabled = false;
      btn.style.background = '';
    }, 1500);
  });
}

// ========== 9. LANGUAGE SWITCHER ==========
function initLanguageSwitcher() {
  const langBtns = document.querySelectorAll('.lang-btn');
  
  langBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      document.documentElement.lang = lang;
      
      langBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Save preference
      localStorage.setItem('preferredLanguage', lang);

      // Trigger translations (integrate with i18n library)
      console.log(`Language changed to: ${lang}`);
    });
  });

  // Set initial language
  const savedLang = localStorage.getItem('preferredLanguage') || config.defaultLanguage;
  document.documentElement.lang = savedLang;
  document.querySelector(`[data-lang="${savedLang}"]`)?.classList.add('active');
}

// ========== 10. ANIMATED COUNTERS ==========
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const animate = () => {
          current += increment;
          if (current >= target) {
            el.textContent = target;
          } else {
            el.textContent = Math.floor(current);
            requestAnimationFrame(animate);
          }
        };

        animate();
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ========== 11. SCROLL EFFECTS & ANIMATIONS ==========
function initScrollEffects() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-animate], .blog-card, .award-card, .value-card').forEach(el => {
    observer.observe(el);
  });

  // Scroll reveal for sections
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.parallax').forEach(el => {
      const rate = el.dataset.rate || 0.5;
      el.style.transform = `translateY(${scrolled * rate}px)`;
    });
  });
}

// ========== 12. SMOOTH ANCHOR SCROLLING ==========
function initAnchorScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Adjust for fixed nav
        const navHeight = 72;
        window.scrollBy(0, -navHeight);
      }
    });
  });
}

// ========== CORE FEATURES (From Previous Implementation) ==========

// Page Loader
function initLoader() {
  const loader = document.getElementById('loader');
  const progress = loader?.querySelector('.loader-progress');
  if (!loader) return;

  document.body.style.overflow = 'hidden';
  let pct = 0;
  const duration = 1800;
  const step = 16;
  const increment = 100 / (duration / step);

  const tick = () => {
    pct = Math.min(100, pct + increment);
    if (progress) progress.style.width = pct + '%';
    if (pct < 100) {
      setTimeout(tick, step);
    } else {
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = 'auto';
        setTimeout(() => loader.remove(), 600);
      }, 320);
    }
  };

  setTimeout(tick, 150);
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
  });

  links?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('active');
    });
  });
}

// ========== UTILITY FUNCTIONS ==========
window.convertCurrency = function() {
  // Implement currency conversion
};

window.scheduleCall = function() {
  document.getElementById('scheduleModal')?.classList.add('active');
};

window.closeScheduleModal = function() {
  document.getElementById('scheduleModal')?.classList.remove('active');
};

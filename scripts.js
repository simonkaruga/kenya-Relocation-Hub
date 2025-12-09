// ========================================
// KENYA RELOCATION HUB - PREMIUM JAVASCRIPT
// Enhanced Interactivity & Animations
// ========================================

// ========== DATA STRUCTURES ==========
const caseStudies = [
  {
    title: "Seamless Family Relocation to Karen",
    client: "The Richardsons (US)",
    category: "family",
    tag: "Family Relocation",
    before: "3 Months Search, No Schools",
    after: "Settled in 3 Weeks, School Enrolment Complete"
  },
  {
    title: "Strategic Investment in Westlands Apartment Block",
    client: "Mr. Chen (China)",
    category: "investment",
    tag: "Property Investment",
    before: "Unverified Title Deed, High Risk",
    after: "Secured Title, 15% Rental Yield Achieved"
  },
  {
    title: "Professional Expat Move to Kilimani",
    client: "Ms. Anya (UK)",
    category: "expat",
    tag: "Expat Professional",
    before: "Lived in Temporary Hotel, Isolated",
    after: "Found Perfect Home, Active Expat Network"
  },
  {
    title: "First-Time Home Purchase in Runda",
    client: "Dr. Al-Farsi (Oman)",
    category: "investment",
    tag: "Residential Purchase",
    before: "Confused by Kenyan Law",
    after: "Clear Legal Guidance, Closed Deal in 45 Days"
  }
];



const articles = [
  {
    title: "Nairobi's Best Expat Neighborhoods for Families",
    tag: "Neighborhoods",
    category: "neighborhood",
    image: "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?auto=format&fit=crop&w=400&q=80",
    date: "Oct 25, 2025",
    link: "https://www.expatica.com/ke/moving-to-nairobi/"
  },
  {
    title: "The Ultimate Checklist for Your Move to Kenya",
    tag: "Expat Life",
    category: "expat",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    date: "Oct 18, 2025",
    link: "https://www.internations.org/kenya-expats/guide/moving-to-kenya-15577"
  },
  {
    title: "Buying Property: Legal Hurdles for Foreigners in Kenya",
    tag: "Legal Guide",
    category: "legal",
    image: "https://images.unsplash.com/photo-1580584128417-7b16c1f39f49?auto=format&fit=crop&w=400&q=80",
    date: "Oct 10, 2025",
    link: "https://www.globalpropertyguide.com/Africa/Kenya"
  },
  {
    title: "Kitisuru vs. Runda: A Comparative Guide",
    tag: "Neighborhood Guide",
    category: "neighborhood",
    image: "https://images.unsplash.com/photo-1552631204-c99a8ee6f2b5?auto=format&fit=crop&w=400&q=80",
    date: "Sep 28, 2025",
    link: "https://www.propertykenya.com/blog/kenya-property-news/compare-kitissuru-runda"
  },
  {
    title: "Understanding M-Pesa: Your Digital Wallet in Nairobi",
    tag: "Expat Finances",
    category: "expat",
    image: "https://images.unsplash.com/photo-1573164574392-0f66ee3cfaec?auto=format&fit=crop&w=400&q=80",
    date: "Sep 15, 2025",
    link: "https://www.safaricom.co.ke/personal/m-pesa"
  },
  {
    title: "How to Secure Your First Investment in Nairobi Real Estate",
    tag: "Legal & Finance",
    category: "legal",
    image: "https://images.unsplash.com/photo-1560448070-70b9e6b11cfa?auto=format&fit=crop&w=400&q=80",
    date: "Sep 1, 2025",
    link: "https://www.propertykenya.com/blog/kenya-property-news/first-time-investment-tips"
  }
];

let articlesToShow = 3;
let exchangeRate = null;

// ========== PAGE LOADER ==========
function initPageLoader() {
  const loader = document.querySelector('.page-loader');
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = 'auto';
      initAOSAnimations();
    }, 1000);
  });
}

// ========== NAVIGATION ==========
function initNavigation() {
  const nav = document.querySelector('.nav-modern');
  const menuToggle = document.querySelector('.nav-menu-toggle');
  const navLinks = document.querySelector('.nav-links-enhanced');
  
  // Sticky navigation on scroll
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
  
  // Mobile menu toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');

      // Animate menu icon
      const spans = menuToggle.querySelectorAll('span');
      if (menuToggle.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(9px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-9px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');

        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');

        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }
  
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
          }
        }
      }
    });
  });
}

// ========== SCROLL TO TOP ==========
function initScrollToTop() {
  const scrollBtn = document.getElementById('scrollToTop');
  
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });
    
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// ========== AOS ANIMATIONS ==========
function initAOSAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('[data-aos]').forEach(element => {
    observer.observe(element);
  });
}



// ========== RENDER CASE STUDIES ==========
function renderCaseStudies(filterCategory = 'all') {
  const grid = document.getElementById('case-study-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  const filteredStudies = filterCategory === 'all'
    ? caseStudies
    : caseStudies.filter(study => study.category === filterCategory);
  
  if (filteredStudies.length === 0) {
    grid.innerHTML = '<p style="text-align:center; grid-column:1/-1; padding:3rem; color:#6B7280; font-size:1.1rem;">No case studies found for this filter.</p>';
    return;
  }
  
  filteredStudies.forEach((study, index) => {
    const card = document.createElement('div');
    card.className = 'story-card-modern';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index % 3) * 100);
    
    card.innerHTML = `
      <div class="story-card-header">
        <span class="story-tag">${study.tag}</span>
        <h3>${study.title}</h3>
        <p class="story-client-name">Client: ${study.client}</p>
      </div>
      <div class="before-after">
        <div>
          <strong>Before:</strong>
          <span>${study.before}</span>
        </div>
        <div>
          <strong>After:</strong>
          <span>${study.after}</span>
        </div>
      </div>
      <div class="story-summary">
        <p>Discover how we transformed this client's relocation experience with our comprehensive services and local expertise.</p>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// ========== RENDER ARTICLES ==========
function renderArticles(filterCategory = 'all') {
  const grid = document.getElementById('blog-articles-grid');
  const loadMoreBtn = document.getElementById('load-more-btn');
  
  if (!grid) return;
  
  grid.innerHTML = '';
  
  const filteredArticles = filterCategory === 'all'
    ? articles
    : articles.filter(article => article.category === filterCategory);
  
  if (filteredArticles.length === 0) {
    grid.innerHTML = '<p style="text-align:center; grid-column:1/-1; padding:3rem; color:#6B7280; font-size:1.1rem;">No articles found for this filter.</p>';
    if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    return;
  }
  
  const displayedArticles = filteredArticles.slice(0, articlesToShow);
  
  displayedArticles.forEach((article, index) => {
    const card = document.createElement('a');
    card.href = article.link;
    card.target = "_blank";
    card.className = 'article-card-modern';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index % 3) * 100);
    
    card.innerHTML = `
      <img src="${article.image}" alt="${article.title}" loading="lazy">
      <div class="article-content-modern">
        <div class="article-meta-modern">
          <span class="article-tag-modern">${article.tag}</span>
          <span class="article-date">${article.date}</span>
        </div>
        <h3>${article.title}</h3>
        <p>${article.title.substring(0, 100)}...</p>
      </div>
    `;
    
    grid.appendChild(card);
  });
  
  // Show/hide load more button
  if (loadMoreBtn) {
    if (articlesToShow < filteredArticles.length) {
      loadMoreBtn.style.display = 'inline-block';
      loadMoreBtn.onclick = () => {
        articlesToShow += 3;
        renderArticles(filterCategory);
      };
    } else {
      loadMoreBtn.style.display = 'none';
    }
  }
}

// ========== FILTER SYSTEMS ==========
function initFilters() {
  // Blog filters
  const blogFilters = document.querySelectorAll('.blog-filters-modern .filter-btn-modern');
  blogFilters.forEach(btn => {
    btn.addEventListener('click', function() {
      blogFilters.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      articlesToShow = 3; // Reset count
      renderArticles(this.getAttribute('data-filter'));
    });
  });
  
  // Stories filters
  const storyFilters = document.querySelectorAll('.stories-filters-modern .filter-btn-modern');
  storyFilters.forEach(btn => {
    btn.addEventListener('click', function() {
      storyFilters.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      renderCaseStudies(this.getAttribute('data-filter'));
    });
  });
}

// ========== TESTIMONIAL CAROUSEL ==========
function initTestimonialCarousel() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dotsContainer = document.querySelector('.carousel-dots');
  
  if (!slides.length || !prevBtn || !nextBtn) return;
  
  let currentSlide = 0;
  
  // Create dots
  if (dotsContainer) {
    slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.className = 'carousel-dot';
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
  }
  
  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    
    // Update dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }
  }
  
  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
  }
  
  function prevSlide() {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }
  
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  
  // Auto-advance every 6 seconds
  setInterval(nextSlide, 6000);
}

// ========== CURRENCY CONVERTER ==========
async function fetchExchangeRate() {
  try {
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    if (!response.ok) throw new Error('API request failed');
    const data = await response.json();
    exchangeRate = data.rates.KES;
  } catch (error) {
    console.error('Failed to fetch exchange rate:', error);
    exchangeRate = 145.00; // Fallback rate
  }
}

async function convert() {
  const usdInput = document.getElementById('usd');
  const resultDisplay = document.getElementById('result');
  const convertBtn = document.querySelector('.btn-convert');
  
  if (!usdInput || !resultDisplay) return;
  
  const usdAmount = parseFloat(usdInput.value);
  
  if (isNaN(usdAmount) || usdAmount <= 0) {
    resultDisplay.textContent = 'Please enter a valid amount';
    resultDisplay.style.color = '#6B7280';
    return;
  }
  
  if (exchangeRate === null) {
    convertBtn.textContent = 'Fetching rate...';
    convertBtn.disabled = true;
    resultDisplay.textContent = 'Loading exchange rate...';
    resultDisplay.style.color = '#6B7280';
    
    await fetchExchangeRate();
    
    convertBtn.textContent = 'Convert Now';
    convertBtn.disabled = false;
  }
  
  const kesAmount = usdAmount * exchangeRate;
  resultDisplay.textContent = `KES ${kesAmount.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;
  resultDisplay.style.color = '#C41E3A';
  
  // Add animation
  resultDisplay.style.transform = 'scale(1.1)';
  setTimeout(() => {
    resultDisplay.style.transform = 'scale(1)';
  }, 200);
}

// Make convert function globally available
window.convert = convert;

// ========== CONSULTATION FORM ==========
function initConsultationForm() {
  const form = document.getElementById('consultation-quick-form');
  const radioButtons = document.querySelectorAll('input[name="consultation-type"]');
  
  if (!form) return;
  
  // Enable submit when radio selected
  radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      // You can add visual feedback here
    });
  });
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const selectedRadio = document.querySelector('input[name="consultation-type"]:checked');
    if (!selectedRadio) {
      alert('Please select a consultation type');
      return;
    }
    
    const submitBtn = form.querySelector('.btn-submit-modern');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Booking...';
    submitBtn.disabled = true;
    
    // Simulate booking process
    setTimeout(() => {
      const consultationType = selectedRadio.parentElement.querySelector('h4').textContent;
      const price = selectedRadio.getAttribute('data-price');
      
      alert(`✅ Consultation Booked Successfully!\n\nType: ${consultationType}\nPrice: $${price}\n\nWe'll contact you within 24 hours to schedule your session.`);
      
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1500);
  });
}

// ========== CONTACT FORM ==========
function initContactForm() {
  const form = document.getElementById('main-contact-form');
  
  if (!form) return;
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('.btn-submit-modern');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
      alert('✅ Thank you for your inquiry!\n\nWe\'ve received your message and will respond within 24 hours.\n\nIn the meantime, feel free to contact us via WhatsApp for immediate assistance.');
      
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1500);
  });
}

// ========== PARALLAX EFFECTS ==========
function initParallaxEffects() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Hero parallax
    const heroImg = document.querySelector('.hero-img-enhanced');
    if (heroImg) {
      heroImg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    // Section badges parallax
    document.querySelectorAll('.section-badge').forEach(badge => {
      if (isInViewport(badge)) {
        const rect = badge.getBoundingClientRect();
        const offset = (window.innerHeight - rect.top) * 0.1;
        badge.style.transform = `translateY(${offset}px)`;
      }
    });
  });
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ========== NUMBER COUNTER ANIMATION ==========
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  counters.forEach(counter => {
    const target = counter.textContent;
    const isPercent = target.includes('%');
    const isPlus = target.includes('+');
    const numericValue = parseInt(target.replace(/[^0-9]/g, ''));
    
    if (isNaN(numericValue)) return;
    
    const duration = 2000;
    const increment = numericValue / (duration / 16);
    let current = 0;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              current = numericValue;
              clearInterval(timer);
            }
            
            let displayValue = Math.floor(current);
            if (isPercent) displayValue += '%';
            if (isPlus) displayValue += '+';
            
            counter.textContent = displayValue;
          }, 16);
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(counter);
  });
}

// ========== INITIALIZE ALL ==========
document.addEventListener('DOMContentLoaded', () => {
  // Core initialization
  initPageLoader();
  initNavigation();
  initScrollToTop();
  
  // Content rendering
  renderCaseStudies('all');
  renderArticles('all');
  
  // Interactive features
  initFilters();
  initTestimonialCarousel();
  initConsultationForm();
  initContactForm();
  
  // Visual effects
  initParallaxEffects();
  animateCounters();
  
  // Fetch exchange rate on load
  fetchExchangeRate();
  
  // Add input animation to currency converter
  const usdInput = document.getElementById('usd');
  if (usdInput) {
    usdInput.addEventListener('input', () => {
      if (usdInput.value) {
        usdInput.style.borderColor = '#C41E3A';
      } else {
        usdInput.style.borderColor = 'rgba(0,0,0,0.1)';
      }
    });
  }
  
  // Add smooth reveal for form inputs on focus
  const formInputs = document.querySelectorAll('input, textarea, select');
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.style.transform = 'scale(1.02)';
      this.parentElement.style.transition = 'transform 0.3s ease';
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.style.transform = 'scale(1)';
    });
  });
  
  // Easter egg: Console message
  console.log('%c🌍 Kenya Relocation Hub & Realty', 'color: #C41E3A; font-size: 24px; font-weight: bold;');
  console.log('%cWelcome to your gateway to Nairobi!', 'color: #D4AF37; font-size: 16px;');
  console.log('%cInterested in our services? Contact us at +254 797 033 513', 'color: #6B7280; font-size: 14px;');
});

// ========== PERFORMANCE OPTIMIZATION ==========
// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Preload critical images
const criticalImages = [
  'images/nairobi.jpg'
];

criticalImages.forEach(src => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
});

// Service Worker for offline support (optional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('/sw.js');
  });
}

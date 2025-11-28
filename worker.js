// --- Global Data Structures ---

// Case Studies (Updated with Image URLs)
const caseStudies = [
    { 
        title: "Seamless Family Relocation to Karen", 
        client: "The Richardsons (US)", 
        category: "family", 
        tag: "Family Relocation", 
        before: "3 Months Search, No Schools", 
        after: "Settled in 3 Weeks, School Enrolment Complete",
        image: "images/story_richardsons.jpg" 
    },
    { 
        title: "Investment in Westlands Apartment Block", 
        client: "Mr. Chen (China)", 
        category: "investment", 
        tag: "Property Investment", 
        before: "Unverified Title Deed, High Risk", 
        after: "Secured Title, 15% Rental Yield Achieved",
        image: "images/story_chen.jpg" 
    },
    { 
        title: "Professional Move to Kilimani", 
        client: "Ms. Anya (UK)", 
        category: "expat", 
        tag: "Expat Professional", 
        before: "Lived in Temporary Hotel, Isolated", 
        after: "Found Perfect Home, Active Expat Network",
        image: "images/story_anya.jpg" 
    },
    { 
        title: "First-Time Home Purchase in Runda", 
        client: "Dr. Al-Farsi (Oman)", 
        category: "investment", 
        tag: "Residential Purchase", 
        before: "Confused by Kenyan Law", 
        after: "Clear Legal Guidance, Closed Deal in 45 Days",
        image: "images/story_alfarsi.jpg" 
    },
];

// Blog Articles (Updated with Snippet and URL)
const articles = [
  {
    title: "Living in Kenya: A Guide for Expats",
    tag: "Expat Life",
    category: "expat",
    image: "images/expat_kenya_guide.jpg",
    date: "Nov 05, 2025",
    url: "https://www.william-russell.com/blog/expat-guide-moving-living-kenya/",
    snippet: "An honest guide to what life in Kenya is like for expats — from housing and permits to cost of living and culture."
  },
  {
    title: "Living in Nairobi for Expats 2024",
    tag: "Expat Experience",
    category: "expat",
    image: "images/nairobi_expat.jpg",
    date: "Oct 15, 2025",
    url: "https://theexpatmummy.com/living-in-nairobi-for-expats/",
    snippet: "A candid view of everyday life in Nairobi for expats, including shopping, food costs, and lifestyle expectations."
  },
  {
    title: "Moving to Kenya? A Comprehensive Guide for Expats",
    tag: "Relocation",
    category: "expat",
    image: "images/kenya_move_guide.jpg",
    date: "Nov 01, 2025",
    url: "https://madisonmanor.co.za/blog/move-to-kenya/",
    snippet: "Up-to-date overview covering visas, housing, cost of living, healthcare, and essential tips for newcomers."
  },
  {
    title: "Relocating to Kenya: Important Tips",
    tag: "Checklist",
    category: "expat",
    image: "images/kenya_tips.jpg",
    date: "Oct 20, 2025",
    url: "https://expatike.com/kenya-expat-checklist/",
    snippet: "A practical checklist for expats including visas, adapting to local life, navigating bureaucracy, and cost expectations."
  },
  {
    title: "American Expat Living in Kenya: Interview",
    tag: "Expat Insights",
    category: "expat",
    image: "images/expat_interview.jpg",
    date: "Sep 30, 2025",
    url: "https://www.expatsblog.com/articles/1775/american-expat-living-in-kenya-interview-with-heidi",
    snippet: "A first-person account of expat life in Kenya: cultural adaptation, work, lifestyle, and practical insights."
  }
];

// Neighborhoods
const neighborhoods = [
  {name:"Runda", image:"images/Runda.jpg", malls:"Village Market", schools:"Rosslyn Academy", hospitals:"Nairobi Hospital"},
  {name:"Kilimani", image:"images/kilimani.jpg", malls:"Yaya Centre, Junction Mall", schools:"Strathmore, Hillcrest", hospitals:"Aga Khan, Avenue Hospital"},
  {name:"Kileleshwa", image:"images/kileleshwa.jpg", malls:"Lavington Mall", schools:"St. Marys, Loreto", hospitals:"MP Shah"},
  {name:"Karen", image:"images/karen.jpg", malls:"The Hub, Junction", schools:"Karen Academy, Brookhouse", hospitals:"Karen Hospital"},
  {name:"Westlands", image:"images/westlands.jpg", malls:"Sarit Centre, Westgate Mall", schools:"Braeburn, Peponi", hospitals:"Nairobi Hospital"},
  {name:"Lavington", image:"images/lavington.jpg", malls:"Lavington Mall", schools:"St Austin, Loretto", hospitals:"The Nairobi Hospital"}
];


// --- Initialization Functions ---

function renderNeighborhoods() {
    const grid = document.getElementById("neighborhoods-grid");
    if (!grid) return;
    neighborhoods.forEach(n => {
      const div = document.createElement("div");
      div.className = "neighborhood-card";
      div.innerHTML = `
        <img src="${n.image}" alt="${n.name}" loading="lazy">
        <h4>${n.name}</h4>
        <p><strong>Malls:</strong> ${n.malls}</p>
        <p><strong>Schools:</strong> ${n.schools}</p>
        <p><strong>Hospitals:</strong> ${n.hospitals}</p>`;
      grid.appendChild(div);
    });
}

function renderArticles(filterCategory = 'all') {
    const grid = document.getElementById('blog-articles-grid');
    if (!grid) return;
    grid.innerHTML = ''; 
    
    const filteredArticles = filterCategory === 'all'
        ? articles
        : articles.filter(article => article.category === filterCategory);
    
    if (filteredArticles.length === 0) {
        grid.innerHTML = '<p style="text-align:center; grid-column:1/-1; padding:2rem; color:#6c757d;">No articles found for this filter.</p>';
        return;
    }

    filteredArticles.forEach(article => {
        const articleLink = document.createElement('div'); // Using div for layout control
        articleLink.className = 'article-card';
        articleLink.innerHTML = `
            <img src="${article.image}" alt="${article.title}" loading="lazy">
            <div class="article-content">
                <div class="article-meta">
                    <span class="article-tag">${article.tag}</span>
                    <span class="article-date">${article.date}</span>
                </div>
                <h3>${article.title}</h3>
                <p class="article-snippet">${article.snippet}</p> <a href="${article.url}" target="_blank" class="btn-primary">Read Full Article</a>
            </div>
        `;
        grid.appendChild(articleLink);
    });
}

function renderCaseStudies(filterCategory = 'all') {
    const grid = document.getElementById('case-study-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    const filteredStudies = filterCategory === 'all'
        ? caseStudies
        : caseStudies.filter(study => study.category === filterCategory);

    if (filteredStudies.length === 0) {
        grid.innerHTML = '<p style="text-align:center; grid-column:1/-1; padding:2rem; color:#6c757d;">No case studies found for this filter.</p>';
        return;
    }

    filteredStudies.forEach(study => {
        const storyCard = document.createElement('a'); // Using 'a' for the whole card link
        storyCard.href = `#case-study-${study.client.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`; 
        storyCard.className = 'story-card';
        storyCard.innerHTML = `
            ${study.image ? `<img src="${study.image}" alt="Client story for ${study.client}">` : ''} 
            <div class="story-header">
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
                <a href="https://wa.me/254797033513?text=Hi,%20I'm%20interested%20in%20learning%20more%20about%20the%20${encodeURIComponent(study.client)}%20case%20study%20and%20how%20you%20can%20help%20me%20relocate." 
                   class="btn-primary" 
                   target="_blank" 
                   style="width: 100%; text-align: center; margin-top: auto;">
                    Discuss a Similar Success Story
                </a>
            </div>
        `;
        grid.appendChild(storyCard);
    });
}


// --- Carousel / Testimonials Logic ---
function initCarousel() {
    let current = 0;
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");
    
    if (totalItems === 0 || !nextBtn || !prevBtn) return;

    function showItem(index) {
      items.forEach(item => item.classList.remove("active"));
      items[index].classList.add("active");
    }

    nextBtn.addEventListener("click", () => {
      current = (current + 1) % totalItems;
      showItem(current);
    });
    prevBtn.addEventListener("click", () => {
      current = (current - 1 + totalItems) % totalItems;
      showItem(current);
    });

    try {
        setInterval(() => {
            current = (current + 1) % totalItems;
            showItem(current);
        }, 5000);
    } catch (e) {
        // Prevent script breaking if interval is not needed in all contexts
    }
    
    showItem(current);
}


// --- Currency Converter Logic ---
let exchangeRate = null;

async function fetchRate() {
  try {
    const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    if (!response.ok) throw new Error("API request failed");
    const data = await response.json();
    exchangeRate = data.rates.KES;
  } catch (error) {
    console.error("Failed to fetch rate:", error);
    exchangeRate = 145.00; // Fallback rate 
  }
}

// Global function for onclick in HTML
async function convert() {
  const usdInput = document.getElementById("usd");
  const result = document.getElementById("result");
  const convertBtn = document.getElementById("convert-btn");

  const usdAmount = parseFloat(usdInput.value);

  if (isNaN(usdAmount) || usdAmount <= 0) {
    result.innerText = "Enter a valid USD amount.";
    return;
  }

  if (exchangeRate === null) {
    convertBtn.innerText = "Fetching...";
    convertBtn.disabled = true;
    result.innerText = "Fetching live rate, please wait...";
    
    await fetchRate();
    
    convertBtn.innerText = "Convert";
    convertBtn.disabled = false;
    
    if (exchangeRate === null) {
      result.innerText = "Failed to fetch rate. Using fallback rate.";
      exchangeRate = 145.00; // Set fallback 
    }
  }

  result.innerText = `${usdAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD = ${(usdAmount * exchangeRate).toLocaleString(undefined, { maximumFractionDigits: 2 })} KES`;
}
// Required to make the HTML onclick="convert()" work:
window.convert = convert;


// --- Booking Form Logic (FIXED TIME SLOT) ---
let bookingData = {};

function initBookingForm() {
    const serviceOptions = document.querySelectorAll('.option-card');
    const step1NextBtn = document.querySelector('#step-1 .next-step');
    const dateInput = document.getElementById('consultation-date');
    const timeSelect = document.getElementById('consultation-time');
    const reviewBtn = document.getElementById('review-booking-btn');
    
    // Step 1: Service Selection
    serviceOptions.forEach(card => {
        card.addEventListener('click', () => {
            serviceOptions.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            bookingData.serviceName = card.querySelector('h4').textContent;
            bookingData.servicePrice = card.getAttribute('data-price');
            bookingData.serviceType = card.getAttribute('data-service');
            
            step1NextBtn.disabled = false;
        });
    });

    // Step 2: Date and Time Validation (FIXED)
    const validateDateTime = () => {
        // Check if both the date input has a value and the time select has a selected option (not the placeholder)
        const isDateSelected = dateInput.value.length > 0;
        const isTimeSelected = timeSelect.value !== ""; 
        
        reviewBtn.disabled = !(isDateSelected && isTimeSelected);
    };
    
    // Attach listeners to both elements
    dateInput.addEventListener('change', validateDateTime);
    timeSelect.addEventListener('change', validateDateTime);
    
    // Initialize validation state
    validateDateTime(); 

    // Navigation
    document.querySelectorAll('.next-step').forEach(btn => {
        btn.addEventListener('click', () => {
            const currentStep = btn.closest('.booking-step');
            const currentStepId = parseInt(currentStep.id.split('-')[1]);
            const nextStepId = currentStepId + 1;
            
            if (currentStepId === 1 && !bookingData.serviceName) {
                console.warn("Cannot proceed: No service selected.");
                return; 
            }
            if (currentStepId === 2 && reviewBtn.disabled) {
                 console.warn("Cannot proceed: Date/Time not selected.");
                return; 
            }

            if (currentStepId === 1) {
                document.querySelector('.selected-service-display').textContent = 
                    `You selected: ${bookingData.serviceName}.`;
            }

            if (currentStepId === 2) {
                bookingData.date = dateInput.value;
                bookingData.time = timeSelect.value;
                
                document.getElementById('summary-service').textContent = bookingData.serviceName;
                document.getElementById('summary-date').textContent = bookingData.date;
                document.getElementById('summary-time').textContent = bookingData.time;
                document.getElementById('summary-price').textContent = `$${bookingData.servicePrice}`;
                
                // Populate hidden form fields for submission
                document.getElementById('form-service-type').value = bookingData.serviceType;
                document.getElementById('form-consultation-date').value = bookingData.date;
                document.getElementById('form-consultation-time').value = bookingData.time;

                // Update the button text for Step 3
                document.getElementById('confirm-booking-btn').textContent = 'Book Appointment & Pay';
            }

            currentStep.classList.remove('active');
            const nextStep = document.getElementById(`step-${nextStepId}`);
            if(nextStep) nextStep.classList.add('active');
        });
    });

    document.querySelectorAll('.prev-step').forEach(btn => {
        btn.addEventListener('click', () => {
            const currentStep = btn.closest('.booking-step');
            const currentStepId = parseInt(currentStep.id.split('-')[1]);
            const prevStepId = currentStepId - 1;

            currentStep.classList.remove('active');
            const prevStep = document.getElementById(`step-${prevStepId}`);
            if(prevStep) prevStep.classList.add('active');
        });
    });

    // Submission Handler (Placeholder)
    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const confirmBtn = document.getElementById('confirm-booking-btn');
        confirmBtn.textContent = 'Processing...';
        confirmBtn.disabled = true;

        // Log all collected data
        console.log("Submitting booking data:", {
            ...bookingData,
            name: paymentForm.name.value,
            email: paymentForm.email.value,
            phone: paymentForm.phone.value,
            notes: paymentForm.notes.value
        });

        // Simulated API call success
        setTimeout(() => {
            alert(`✅ Success! Appointment Confirmed for ${bookingData.serviceName} on ${bookingData.date} at ${bookingData.time}. A confirmation email has been sent (simulated).`);
            confirmBtn.textContent = 'Appointment Confirmed!';
            
            setTimeout(() => {
                // window.location.reload(); // Can be uncommented to reset page after success
            }, 1000);

        }, 1500);
    });
}


// --- Main DOMContentLoaded Listener ---
document.addEventListener('DOMContentLoaded', () => {
    // Render Static Data
    renderNeighborhoods();
    renderArticles('all');
    renderCaseStudies('all');

    // Initialize Dynamic Features
    initCarousel();
    fetchRate(); // Pre-fetch currency rate
    initBookingForm();

    // Filtering Logic for Blog
    const blogFilterButtons = document.querySelectorAll('.blog-filters .btn-filter');
    blogFilterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            blogFilterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderArticles(this.getAttribute('data-filter'));
        });
    });

    // Filtering Logic for Case Studies
    const storyFilterButtons = document.querySelectorAll('.stories-filters .btn-filter');
    storyFilterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            storyFilterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            renderCaseStudies(this.getAttribute('data-filter'));
        });
    });

    // Smooth Scroll for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if(target) target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
});
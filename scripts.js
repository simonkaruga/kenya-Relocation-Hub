// ===== Carousel / Testimonials Auto + Manual =====
let current = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function showItem(index) {
  items.forEach(item => item.classList.remove("active"));
  items[index].classList.add("active");
}

// Next / Prev Buttons
document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % totalItems;
  showItem(current);
});
document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + totalItems) % totalItems;
  showItem(current);
});

// Auto-slide every 5 seconds
setInterval(() => {
  current = (current + 1) % totalItems;
  showItem(current);
}, 5000);

// ===== FAQ Toggle =====
const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ===== Currency Converter =====
function convert() {
  const usd = parseFloat(document.getElementById("usd").value);
  const rate = 150; // USD → KES rate
  if(!isNaN(usd)) {
    document.getElementById("result").innerText = `${usd} USD = ${usd*rate} KES`;
  } else {
    document.getElementById("result").innerText = "Enter a valid number";
  }
}

// ===== Neighborhoods =====
const neighborhoods = [
  {name:"Westlands", malls:"Sarit Centre, Westgate Mall", schools:"Braeburn, Peponi", hospitals:"MP Shah, Nairobi Hospital"},
  {name:"Kilimani", malls:"Yaya Centre, Junction Mall", schools:"Strathmore, Hillcrest", hospitals:"Aga Khan, Avenue Hospital"},
  {name:"Karen", malls:"The Hub, Junction", schools:"Karen Academy, Brookhouse", hospitals:"Karen Hospital"},
  {name:"Runda", malls:"Village Market", schools:"Rosslyn Academy", hospitals:"Nairobi Hospital"},
  {name:"Lavington", malls:"Lavington Mall", schools:"St Austin, Loretto", hospitals:"The Nairobi Hospital"}
];

const grid = document.getElementById("neighborhoods-grid");
neighborhoods.forEach(n => {
  const div = document.createElement("div");
  div.className = "neighborhood-card";
  div.innerHTML = `<h4>${n.name}</h4>
                   <p><strong>Malls:</strong> ${n.malls}</p>
                   <p><strong>Schools:</strong> ${n.schools}</p>
                   <p><strong>Hospitals:</strong> ${n.hospitals}</p>`;
  grid.appendChild(div);
});

// Fade-in neighborhoods on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".neighborhood-card").forEach(card => observer.observe(card));

// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

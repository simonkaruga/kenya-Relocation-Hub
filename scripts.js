// ===== Carousel / Testimonials =====
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

// ===== LIVE Currency Converter =====
let exchangeRate = null;

// Fetch USD → KES rate
async function fetchRate() {
  try {
    const response = await fetch("https://api.exchangerate-api.com/v4/latest/latest?base=USD&symbols=KES");
    const data = await response.json();
    exchangeRate = data.rates.KES;
    console.log("USD → KES rate:", exchangeRate);
  } catch (error) {
    console.error("Failed to fetch rate:", error);
    exchangeRate = null;
  }
}

// Convert USD to KES
async function convert() {
  const usdAmount = parseFloat(document.getElementById("usd").value);
  const result = document.getElementById("result");

  if (isNaN(usdAmount)) {
    result.innerText = "Enter a valid number";
    return;
  }

  if (exchangeRate === null) {
    result.innerText = "Fetching live rate…";
    await fetchRate();
    if (exchangeRate === null) {
      result.innerText = "Failed to fetch rate. Try again later.";
      return;
    }
  }

  result.innerText = `${usdAmount} USD = ${(usdAmount * exchangeRate).toLocaleString()} KES`;
}

// Fetch rate immediately on page load
fetchRate();

// ===== Neighborhoods =====
const neighborhoods = [
  {name:"Runda", image:"images/runda.jpg", malls:"Village Market", schools:"Rosslyn Academy", hospitals:"Nairobi Hospital"},
  {name:"Kilimani", image:"images/kilimani.jpg", malls:"Yaya Centre, Junction Mall", schools:"Strathmore, Hillcrest", hospitals:"Aga Khan, Avenue Hospital"},
  {name:"Kileleshwa", image:"images/kileleshwa.jpg", malls:"Lavington Mall", schools:"St. Marys, Loreto", hospitals:"MP Shah"},
  {name:"Karen", image:"images/karen.jpg", malls:"The Hub, Junction", schools:"Karen Academy, Brookhouse", hospitals:"Karen Hospital"},
  {name:"Westlands", image:"images/westlands.jpg", malls:"Sarit Centre, Westgate Mall", schools:"Braeburn, Peponi", hospitals:"Nairobi Hospital"},
  {name:"Lavington", image:"images/lavington.jpg", malls:"Lavington Mall", schools:"St Austin, Loretto", hospitals:"The Nairobi Hospital"}
];

const grid = document.getElementById("neighborhoods-grid");
neighborhoods.forEach(n => {
  const div = document.createElement("div");
  div.className = "neighborhood-card";
  div.innerHTML = `
    <img src="${n.image}" alt="${n.name}">
    <h4>${n.name}</h4>
    <p><strong>Malls:</strong> ${n.malls}</p>
    <p><strong>Schools:</strong> ${n.schools}</p>
    <p><strong>Hospitals:</strong> ${n.hospitals}</p>`;
  grid.appendChild(div);
});

// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Take A Trip starter website
// WhatsApp number stored in international format without +, spaces, or punctuation.
const WHATSAPP_NUMBER = "919816929669";

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

const toast = document.getElementById("toast");
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "✕" : "☰";
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b === button));
    const filter = button.dataset.filter;
    document.querySelectorAll(".package-card").forEach(card => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});

document.getElementById("planForm").addEventListener("submit", event => {
  event.preventDefault();
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("travelDate").value || "Flexible / not decided";
  const travellers = document.getElementById("travellers").value;
  const duration = document.getElementById("duration").value;
  openWhatsApp(`Hello Take A Trip! I'd like to enquire about a trip.\\n\\nDestination: ${destination}\\nTravel date: ${date}\\nTravellers: ${travellers}\\nDuration: ${duration}\\n\\nPlease share available options, inclusions and pricing.`);
});

document.querySelectorAll(".book-package").forEach(button => {
  button.addEventListener("click", () => {
    const packageName = button.dataset.package;
    openWhatsApp(`Hello Take A Trip! I'm interested in the "${packageName}" package.\\n\\nPlease share itinerary, available dates, price per person, inclusions/exclusions, hotel options and booking terms.`);
  });
});

document.querySelectorAll(".service-enquiry").forEach(button => {
  button.addEventListener("click", () => {
    const service = button.dataset.service;
    openWhatsApp(`Hello Take A Trip! I have a ${service.toLowerCase()}.\\n\\nDestination: \\nDates: \\nNumber of guests: \\nBudget / preferences: \\n\\nPlease help me with options and pricing.`);
  });
});

document.getElementById("footerWhatsApp").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Take A Trip! I'd like help planning a trip.")}`;
document.getElementById("reviewButton").addEventListener("click", () => {
  openWhatsApp("Hello Take A Trip! I'd like to share feedback about my trip.\\n\\nTrip/package: \\nTravel date: \\nMy feedback: \\nMay you publish my feedback on your website? (Yes/No)");
});

// Avoid dates in the past for new enquiries.
const dateInput = document.getElementById("travelDate");
const localToday = new Date();
const yyyy = localToday.getFullYear();
const mm = String(localToday.getMonth() + 1).padStart(2, "0");
const dd = String(localToday.getDate()).padStart(2, "0");
dateInput.min = `${yyyy}-${mm}-${dd}`;

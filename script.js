function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function activateCard(el) {
  document.querySelectorAll(".timeline-item").forEach(item => {
    item.classList.remove("active");
  });
  el.classList.add("active");
}

// Scroll animation for elements
document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll('.scroll-animate');
  const scrollInView = () => {
    scrollElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  };
  window.addEventListener('scroll', scrollInView);
  window.addEventListener('load', scrollInView);
});

document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const response = await fetch("https://script.google.com/macros/s/AKfycbyde2ydGd6E3uHzxhqzVERIEjgDCYBBb57u8XTWbo6OggBNB71lVX-rutAsI1H9ELcHJw/exec", { method: "POST", body: data });
  document.getElementById("response-msg").innerText = response.ok
    ? "✅ Message sent successfully!"
    : "❌ Failed to send message.";
  form.reset();
});
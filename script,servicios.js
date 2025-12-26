const cards = document.querySelectorAll(".service-card");

cards.forEach((card, index) => {
  card.style.opacity = "10";
  card.style.transform = "translateY(20px)";

  setTimeout(() => {
    card.style.transition = "all 0.6s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 200 + index * 150);
});

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((img, index) => {
  img.style.opacity = "0";
  img.style.transform = "scale(0.9)";

  setTimeout(() => {
    img.style.transition = "all 0.6s ease";
    img.style.opacity = "10";
    img.style.transform = "scale(1)";
  }, 300 + index * 120);
});


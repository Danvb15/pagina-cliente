document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".fade-in");

  setTimeout(() => {
    container.style.opacity = "1";
    container.style.transform = "translateY(0)";
    container.style.transition = "all 0.8s ease";
  }, 200);

  const buttons = document.querySelectorAll(".link-btn");

  buttons.forEach((btn, index) => {
    btn.style.opacity = "0";
    btn.style.transform = "translateY(10px)";

    setTimeout(() => {
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0)";
      btn.style.transition = "all 0.4s ease";
    }, 400 + index * 120);
  });
});

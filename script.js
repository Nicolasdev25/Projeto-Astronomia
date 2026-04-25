const hamburguer = document.getElementById("hamburguer");
const menu = document.querySelector(".menu");

hamburguer.addEventListener("click", () => {
  // Alterna a exibição do menu
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});

const btn = document.getElementById("btn-tema");

btn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  btn.textContent = document.body.classList.contains("light-mode")
    ? "☀️"
    : "🌙";
});
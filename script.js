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

window.addEventListener('scroll', () => {
    const btn = document.getElementById('btn-flutuante');
    
    // Se o usuário rolou mais de 300px, mostra o botão
    if (window.scrollY > 300) {
        btn.classList.add('mostrar');
    } else {
        btn.classList.remove('mostrar');
    }
});
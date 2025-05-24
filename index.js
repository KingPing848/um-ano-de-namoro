document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".read-more-btn");
  const text = document.querySelector(".limited-text");

  let expanded = false;

  btn.addEventListener("click", () => {
    if (expanded) {
      text.style.maxHeight = "300px";
      btn.textContent = "Ler mais";
    } else {
      text.style.maxHeight = "2000px";
      btn.textContent = "Ler menos";
    }
    expanded = !expanded;
  });
});

  function toggleMenu() {
    const menu = document.getElementById('menuLateral');
    menu.classList.toggle('ativo');
  }



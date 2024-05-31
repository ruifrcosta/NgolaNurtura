const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

const tipoUsuarioSelect = document.querySelector('select[name="tipo_usuario"]');
const camposMaeDoadora = document.getElementById('campos_mae_doadora');
const camposMaeReceptora = document.getElementById('campos_mae_receptora');
const camposProfissionalSaude = document.getElementById('campos_profissional_saude');

tipoUsuarioSelect.addEventListener('change', () => {
    const tipoUsuario = tipoUsuarioSelect.value;

    camposMaeDoadora.style.display = tipoUsuario === 'mae_doadora' ? 'block' : 'none';
    camposMaeReceptora.style.display = tipoUsuario === 'mae_receptora' ? 'block' : 'none';
    camposProfissionalSaude.style.display = tipoUsuario === 'profissional_saude' ? 'block' : 'none';
});

document.addEventListener('DOMContentLoaded', async () => {

  const carouselImages = document.querySelectorAll('.carousel .image');
  const carouselBullets = document.querySelectorAll('.carousel .bullets span');

  let currentImageIndex = 0;

  function showImage(index) {
    carouselImages.forEach((img, i) => {
      img.classList.toggle('show', i === index);
    });
    carouselBullets.forEach((bullet, i) => {
      bullet.classList.toggle('active', i === index);
    });
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    showImage(currentImageIndex);
  }

  carouselBullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
      currentImageIndex = index;
      showImage(currentImageIndex);
    });
  });

  setInterval(nextImage, 5000); 
});

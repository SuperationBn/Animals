// HEADER {
// MOSTRAR Y OCULTAR MENU -----------------------------
const menu = document.getElementById('menu');
const btnMenu = document.querySelector('.icons .fa-bars');

function showMenuToggle() {
  return menu.classList.toggle('nemuActive');
}

function ocultarElMenoAlCliquearUnEnlace(e) {
  if (e.target.tagName === 'A') {
    return menu.classList.remove('nemuActive');
  }
}

btnMenu.addEventListener('click', showMenuToggle);
menu.addEventListener('click', ocultarElMenoAlCliquearUnEnlace);
// -----------------------------
// CAMBIAR THEME--------------------------------------

const btnTheme = document.querySelector('.icons .fa-circle-half-stroke');
const body = document.querySelector('body');

function cambiarTheme() {

  if (body.className === 'theme-ligth') {
    body.classList.remove('theme-ligth');
    return body.classList.add('theme-dark');

  } else if (body.className === 'theme-dark') {
    body.classList.remove('theme-dark');
    return body.classList.add('theme-ligth');
  }

  console.log(body);
}

btnTheme.addEventListener('click', cambiarTheme);

// -----------------------------
// } ----------------------------------------------------


// EFECTO SUAVE AL NAVEDAR CON EL MENU ----------------------------

$(document).ready(function () {
  $("a").on('click', function (event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        window.location.hash = hash;
      });
    }
  });
});

// -----------------------------
// } ----------------------------------------------------
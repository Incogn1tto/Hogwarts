# hogwarts

https://incogn1tto.github.io/hogwarts/

// Скрипт плавного скролла

$('a[href*="#menu"]').on('click', function (e) { e.preventDefault();

const mobileMenuRef = document.querySelector('[data2-menu]'); const menuBtnRef =
document.querySelector('[data2-menu-button]');
mobileMenuRef.classList.toggle('is-open');
menuBtnRef.classList.toggle('is-open');

$('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
}, 500, 'linear', ); });

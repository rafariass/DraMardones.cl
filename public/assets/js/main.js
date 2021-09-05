// Anio actual, Footer
$('#anio').text(new Date().getFullYear());

// ANIMACION scrollTop
window.addEventListener('scroll', () => {
  const scroll = document.querySelector('.scrollTop');
  scroll.classList.toggle('active', window.scrollY > 100);
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// ToolTip
$(() => $('[data-toggle="tooltip"]').tooltip());

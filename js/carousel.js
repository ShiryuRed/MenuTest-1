
window.addEventListener("load", function(){
    new Glider(document.querySelector('.carousel-list'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel-indicadores',
        arrows: {
          prev: '.carousel-anterior',
          next: '.carousel-siguiente'
        }
    });
});

function downloadPNG() {
  var link = document.createElement('a');
  link.download = 'menú_carta.png';
  link.href = '../multimedia/images/Menu vertical.png';
  link.click();
}
const backgroundModal = document.querySelector('.modal-container');
const modalImg = document.querySelector('.modal-img');

backgroundModal.addEventListener('click', () => {
  backgroundModal.setAttribute('hidden', 'true');
  alert('ola')
})


const modalImages = document.querySelectorAll('.img-menu-list');

modalImages.forEach(images => {
  images.addEventListener('click', () => {
    alert('a')
  });
});


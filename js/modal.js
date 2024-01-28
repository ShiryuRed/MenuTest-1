const backgroundModal = document.querySelector('.modal-container');
const modalImg = document.querySelector('.modal-img');

backgroundModal.addEventListener('click', () => {
  imgModalContainer.classList.remove('img-modal-container-on')
  setTimeout(function(){
   backgroundModal.classList.add('close-modal-container');
  },600);
  
})


const modalImages = document.querySelectorAll('.img-menu-list');
const imgModalContainer = document.querySelector('.img-modal-container');
modalImages.forEach(images => {
  images.addEventListener('click', () => {
    let src = images.getAttribute('src');
    modalImg.setAttribute('src', src);
    backgroundModal.classList.remove("close-modal-container");
    setTimeout(function(){
      imgModalContainer.classList.add('img-modal-container-on')
    },100);
  });
});


import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');
gallery.addEventListener('click',onGalleryItemClick);


const galleryMarckup= makeGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend',galleryMarckup);

function makeGalleryMarkup(galleryItems){
    return galleryItems.map(({preview,original,description })=>{
       return `
        <div class="gallery__item">
            <a href="${original}" class="gallery__link">
             <img class="gallery__image" 
             src="${preview}" 
             alt="${description}"
             data-source="${original}">
            </a>
        </div>
        `

    }).join(" ");

}
function onGalleryItemClick(event) {
    event.preventDefault();
    const isGalleryItem = event.target.classList.contains("gallery__image");
    if (!isGalleryItem) {
      return;
    }
    const originalImg = event.target.dataset.source;
  
    const modal = basicLightbox.create(`<img src="${originalImg}">`, {
      onShow: () => {
        document.addEventListener("keydown", closeOnEscape);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeOnEscape);
      },
    });
  
    modal.show();
  
    function closeOnEscape(event) {
      if (event.code !== "Escape") {
        return;
      }
      modal.close();
    }
  }

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');



const galleryMarckup= makeGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend',galleryMarckup);

function makeGalleryMarkup(galleryItems){
    return galleryItems.map(({preview,original,description })=>{
       return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `

    }).join(" ");

}


// var lightbox = $('.gallery a').simpleLightbox({ /* options */ });
{/* <div class="gallery">
    <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
    <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
</div> */}


let lightbox = new SimpleLightbox('.gallery a', {
    
    captionsData: "alt",
  captionDelay: 250, });

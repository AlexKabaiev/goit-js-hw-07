import { galleryItems } from './gallery-items.js';
const galleryPreview = document.querySelector(".gallery");
galleryPreview.innerHTML = galleryItems.reduce(
  (html, current) =>
    html +
    `<div class="gallery__item">
  <a class="gallery__link" href="${current.original}">
    <img
      class="gallery__image"
      src="${current.preview}"
      data-source="${current.original}"
      alt="${current.description}"
    />
  </a>
</div>`,"");

galleryPreview.addEventListener("click", (e) => {
     e.preventDefault();
    if (e.target.nodeName !== "IMG") return;

});

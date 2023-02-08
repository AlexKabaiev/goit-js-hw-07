import { galleryItems } from "./gallery-items.js";
const galleryPreview = document.querySelector(".gallery");
galleryPreview.innerHTML = galleryItems.reduce(
  (html, current) =>
    html +
    `<a class="gallery__item" href="${current.original}">
  <img 
  class="gallery__image" 
  src="${current.preview}" 
  alt="${current.description}" />
</a>`,
  ""
);
galleryPreview.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;
  let gallery = $(".gallery a").simpleLightbox();
});


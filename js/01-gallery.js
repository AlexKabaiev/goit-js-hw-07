import { galleryItems } from "./gallery-items.js";
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
</div>`,
  ""
);

galleryPreview.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") return;

  const onCloseModal = (e) => {
    const ESC_KEY = "Escape";
    if (e.code === ESC_KEY) {
      instance.close();
    }
  };

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onCloseModal);
      },
      onClose: (instance) => {
        window.addEventListener("keydown", onCloseModal);
      },
    }
  );
  instance.show();
});

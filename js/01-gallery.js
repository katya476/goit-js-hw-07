import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createImageElement(galleryItems);
galleryContainer.innerHTML = cardsMarkup;

function createImageElement(images) {
    return images.map((image) => 
        `
        <div class="gallery__item">
            <a class="gallery__link" href="${image.original}">
                <img
                class="gallery__image"
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"
                />
            </a>
        </div>`
    ).join("");
};

galleryContainer.addEventListener("click", cardOnClick)

function cardOnClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" width="800" height="600">
    `);
    instance.show();

    galleryContainer.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instance.close()
        }
    });
}
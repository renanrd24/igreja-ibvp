const images = document.querySelector('.carousel-images');
const totalImages = document.querySelectorAll('.carousel-images img').length;
let index = 0;

function nextImage() {
    index = (index + 1) % totalImages;
    updateCarousel();
}

function prevImage() {
    index = (index - 1 + totalImages) % totalImages;
    updateCarousel();
}

function updateCarousel() {
    images.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => {
    nextImage();
}, 3000);


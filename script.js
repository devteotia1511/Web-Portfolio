let currentPhoto = 0;

document.getElementById('prev').addEventListener('click', () => {
    const photos = document.querySelectorAll('.photo');
    currentPhoto = (currentPhoto - 1 + photos.length) % photos.length;
    updatePhotos(photos);
});

document.getElementById('next').addEventListener('click', () => {
    const photos = document.querySelectorAll('.photo');
    currentPhoto = (currentPhoto + 1) % photos.length;
    updatePhotos(photos);
});

function updatePhotos(photos) {
    photos.forEach((photo, index) => {
        photo.style.transform = `translateX(${(index - currentPhoto) * 100}%)`;
    });
}

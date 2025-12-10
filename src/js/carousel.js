let index = 0;
const images = document.querySelectorAll('.fade-slide img');

function showImage(i) {
  images.forEach((img, idx) => {
    img.style.opacity = idx === i ? '1' : '0';
  });
}

setInterval(() => {
  index = (index + 1) % images.length;
  showImage(index);
}, 3000);

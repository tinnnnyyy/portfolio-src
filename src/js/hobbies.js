const hobbyImages = document.querySelectorAll('.hobby-img');

hobbyImages.forEach(img => {
    img.addEventListener('mouseenter', () => img.classList.add('hovered'));
    img.addEventListener('mouseleave', () => img.classList.remove('hovered'));

    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = 0;
        modal.style.left = 0;
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.background = 'rgba(0,0,0,0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.cursor = 'pointer';
        modal.style.zIndex = 9999;

        const modalImg = document.createElement('img');
        modalImg.src = img.src;
        modalImg.style.maxWidth = '80%';
        modalImg.style.maxHeight = '80%';
        modalImg.style.borderRadius = '15px';
        modal.appendChild(modalImg);

        document.body.appendChild(modal);

        modal.addEventListener('click', () => modal.remove());
    });
});

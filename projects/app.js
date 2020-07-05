const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');
const imgText = document.querySelector('.caption');
debugger;
previews.forEach(preview => {
    debugger;
    preview.addEventListener('click', () => {
        const originalSrc = preview.getAttribute('data-original');
        original.src= `../assets/projects/${originalSrc}`;

        modal.classList.add('open');
    });
});

modal.addEventListener('click', (e) => {
   modal.classList.remove('open');
});
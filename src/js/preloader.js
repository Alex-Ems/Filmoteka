
document.querySelector('.preloader');

window.addEventListener('load', () => {
    preloader.classList.add('preloader--hide');
    setTimeout(() => {
        preloader.remove();
    }, 1000);
});

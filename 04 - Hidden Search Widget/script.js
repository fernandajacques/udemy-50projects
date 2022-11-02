const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');


btn.addEventListener('click', (e) => {
    e.stopPropagation();
    search.classList.toggle('active');
    input.focus();
})

document.querySelector('body').addEventListener('click', () => {
    document.querySelector('.search')
        .classList
        .remove('active');
});
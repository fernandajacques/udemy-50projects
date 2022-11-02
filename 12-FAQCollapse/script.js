const buttons = document.querySelectorAll('.faq-toggle');
// const faq = document.querySelectorAll('.faq');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('active')
    })
})





// const toggles = document.querySelectorAll('.faq-toggle')

// toggles.forEach(toggle => {
//     toggle.addEventListener('click', () => {
//         toggle.parentNode.classList.toggle('active')
//     })
// })
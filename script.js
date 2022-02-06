let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',() => {
    navbar.classList.toggle('active');
})
window.addEventListener('scroll',() => {
    navbar.classList.remove('active');
})

// --------------darkmode --------------------
let darkmode = document.querySelector('#darkmode');
darkmode.addEventListener('click',() => {
    if(darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active')
    } else {
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active')

    }
})


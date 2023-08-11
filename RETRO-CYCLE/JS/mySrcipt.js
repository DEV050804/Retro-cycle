
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');

    if (navbar.classList.contains('open')) {
        navbar.style.display = 'flex';
    } else {
        navbar.style.display = 'none';
    }
}

const sr = ScrollReveal ({
    distance: '70px',
    duration: 1600,
    delay: 450,
    reset: true
});

sr.reveal('.text',{delay:200, origin:'top'});
sr.reveal('.heading',{delay:200, origin:'top'});
sr.reveal('.computer',{delay:450, origin:'bottom'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll',{delay:500, origin:'right'});
sr.reveal('.navbar',{delay:200, origin:'top'});
sr.reveal('.color-box',{delay:650, origin:'right'});




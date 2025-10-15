const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const slides = document.querySelector('#slides');
const pictureFrame = document.querySelector('#picture-frame');
const btns = document.querySelector('#btns');

let x = 0;
btns.children[x].classList.add('active');
setInterval(() => move(), 5000);

btns.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-btn')) {
        btns.children[x].classList.remove('active');
        i = Array.from(btns.children).indexOf(e.target);
        goTo(i);
    }
}) 

function goTo(i) {
    btns.children[x].classList.remove('active');
    
    x = i;

    slides.style.transform = `translateX(-${(x)*100}%)`;
    btns.children[x].classList.add('active');
}

function move() {
    goTo((x+1)%6);
}
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const slides = document.querySelector('#slides');
const pictureFrame = document.querySelector('#picture-frame');

let x = 0;
slides.children[x].classList.add('active');

pictureFrame.addEventListener('click', (e) => {
    if (e.target.id === 'next' || e.target.id === 'prev') {
        move(e.target.id);
    }
})

function move(dir) {
    if (dir === 'next') {
        x = (x+1)%6;
    }
    else {
        x = (x-1+6)%6;
    }
    slides.style.transform = `translateX(-${(x)*50}vw)`;
}
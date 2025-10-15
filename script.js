const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const slides = document.querySelector('#slides');
const pictureFrame = document.querySelector('#picture-frame');

let x = 1;

pictureFrame.addEventListener('click', (e) => {
    if (e.target.id === 'next' || e.target.id === 'prev') {
        move(e.target.id);
    }
})

function move(dir) {
    if (dir === 'next') {
        if (x >= 6) {
            x = 0;
        }
        slides.style.transform = `translateX(-${x*50}vw)`;
        x++;
    }
    else {
        if (x === 1) {
            x = 7;
        }
        slides.style.transform = `translateX(-${(x-2)*50}vw)`;
        x--;
    }
}
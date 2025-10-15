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
        slides.style.transform = `translateX(-${x*50}vw)`;
        console.log(`translateX(-${x*50}vw)`);
        (x === 5) ? x = 0 : x++;
    }
    else {
        slides.style.transform = `translateX(-${(x-2)*50}vw)`;
        x--;
    }
}

const naruto = document.querySelector('.naruto');
const pipe = document.querySelector('.stone');

const jump = () => {
    naruto.classList.add('jump');

    setTimeout(() => {

        naruto.classList.remove('jump');

    }, 650);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const narutoPosition = +window.getComputedStyle(naruto).bottom.replace('px', '');

    console.log('loop');
    
    if (pipePosition <= 120 && pipePosition > 0 && narutoPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pipe.style.animation = 'none';
        naruto.style.bottom = `${narutoPosition}px`;

        naruto.src = '/Naruto run/img/grave.png';
        naruto.style.width = '180px'
        naruto.style.marginLeft = '50px'

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);
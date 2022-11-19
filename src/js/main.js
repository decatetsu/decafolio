let bgState = false;

const effectBtn = document.getElementById('effects-toggle');
const bgHtmlWrapper = document.getElementById('background-effects');

effectBtn.addEventListener('click', switchBackground);


function switchBackground() {
    bgHtmlWrapper.classList.toggle('background-effects_disabled');
    if (bgState) {
        effectBtn.style.opacity = '0.3';
        effectBtn.setAttribute('title', 'Make some magic');
        bgState = false;
    } else {
        effectBtn.style.opacity = '0.9';
        effectBtn.setAttribute('title', 'Disable magic');
        bgState = true;
    }
}

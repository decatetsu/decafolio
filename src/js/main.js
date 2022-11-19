document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.prevent-load-transition').classList.remove('prevent-load-transition');
});

const effectBtn = document.getElementById('effects-toggle');
const bgHtmlWrapper = document.getElementById('background-effects');
effectBtn.addEventListener('click', switchBackground);

if (window.localStorage.getItem('bgEffects') === null) {
    window.localStorage.setItem('bgEffects', 'false');
}

if (window.localStorage.getItem('bgEffects') === 'true') {
    bgHtmlWrapper.classList.toggle('background-effects_active');
    effectBtn.classList.toggle('effects-toggle_active');
}

function switchBackground() {
    bgHtmlWrapper.classList.toggle('background-effects_active');
    effectBtn.classList.toggle('effects-toggle_active');
    if (window.localStorage.getItem('bgEffects') === 'true') {
        effectBtn.setAttribute('title', 'Make some magic');
        window.localStorage.setItem('bgEffects', 'false');
    } else {
        effectBtn.setAttribute('title', 'Disable magic');
        window.localStorage.setItem('bgEffects', 'true');
    }
}

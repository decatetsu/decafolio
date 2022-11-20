// Declare necessary DOM objects and manage effects toggle switch
const effectBtn = document.getElementById('effects-toggle');
const bgHtmlWrapper = document.getElementById('background-effects');

if (window.localStorage.getItem('bgEffects') === null) {
    window.localStorage.setItem('bgEffects', 'false');
}

if (window.localStorage.getItem('bgEffects') === 'true') {
    bgHtmlWrapper.classList.toggle('background-effects_active');
    effectBtn.classList.toggle('effects-toggle_active');
}

effectBtn.addEventListener('click', () => {
    bgHtmlWrapper.classList.toggle('background-effects_active');
    effectBtn.classList.toggle('effects-toggle_active');
    if (window.localStorage.getItem('bgEffects') === 'true') {
        effectBtn.setAttribute('title', 'Make some magic');
        window.localStorage.setItem('bgEffects', 'false');
    } else {
        effectBtn.setAttribute('title', 'Disable magic');
        window.localStorage.setItem('bgEffects', 'true');
    }
});


// Prevent transition loading from page load and minify background for short pages
window.onload = () => {
    document.querySelectorAll('.prevent-load-transition').forEach(e => {
        e.classList.remove('prevent-load-transition')
    });

    if (document.body.clientHeight < 1500) {
        bgHtmlWrapper.classList.add('background-effects_minify');
    }
}

const buttonformon = document.getElementsByClassName('button-open-form'),
    buttonformnoff = document.getElementsByClassName('buttonformnoff'),
    form = document.querySelector('.main__questionnaire'),
    bgform = document.querySelector('.popup');

[].forEach.call(buttonformon, function (el) {
        el.addEventListener('click', () => {
        const id = requestAnimationFrame(popupOn);
        cancelAnimationFrame(id);
        return requestAnimationFrame(popupOn);
    })
});

[].forEach.call(buttonformnoff, function (el) {
        el.addEventListener('click', () => {
        const id = requestAnimationFrame(popupOff);
        cancelAnimationFrame(id);
        return requestAnimationFrame(popupOff);
    })
});

document.onkeydown = 
    function logKey(e) {
        if (e.code == "Escape") {
            popupOff();
        }
    };


function popupOn() {
    form.classList.add('popup_form-on');
    bgform.classList.add('popup_bg-on');
    form.classList.remove('popup_form-off');
    bgform.classList.remove('popup_bg-off');
}

function popupOff() {
    form.classList.add('popup_form-off');
    bgform.classList.add('popup_bg-off');
    form.classList.remove('popup_form-on');
    bgform.classList.remove('popup_bg-on');
}
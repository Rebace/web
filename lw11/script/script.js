const formOnElement = document.querySelectorAll('.open-form'),
    formOffElement = document.querySelectorAll('.close-form'),
    form = document.querySelector('.main__questionnaire'),
    bgform = document.querySelector('.popup'),
    contentForm = document.querySelector('.questionnaire-content'),
    error = document.querySelector('.form__error');

formOnElement.forEach(function(el) 
    {
        el.addEventListener('click', () => {
            const id = requestAnimationFrame(popupOn);
            cancelAnimationFrame(id);
            return requestAnimationFrame(popupOn);
        })
    });

formOffElement.forEach(function(el) 
{
    el.addEventListener('click', () => {
        const id = requestAnimationFrame(popupOff);
        cancelAnimationFrame(id);
        return requestAnimationFrame(popupOff);
    })
});

document.onkeydown = 
    function (key) {
        if (key.code == "Escape") {
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

function popupError() {
    contentForm.style.display = 'none';
    error.classList.add('form__error-on');
    error.classList.remove('form__error-off');
}
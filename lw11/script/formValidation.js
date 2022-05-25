window.addEventListener('DOMContentLoaded', () => 
{
    const form = document.querySelector('.form'), 
        elementEmail = document.querySelector('.form__email'), 
        elementName = document.querySelector('.form__name'),
        elementActivity = document.querySelector('.form__activity'),
        elementAgreement = document.querySelector('.form__checkbox');

        form.addEventListener('submit', async (event) => 
        {
            elementName.classList.remove('input_error');
            elementEmail.classList.remove('input_error');
            elementActivity.classList.remove('input_error');
            let valid = true;

            if (elementName.value.replace(/[а-я, А-Я, a-z, A-Z]/g, '') != '' || elementName.value.length == 0) 
            {
                console.error(elementName.value.replace(/[а-я, А-Я, a-z, A-Z)]/g, ''));
                elementName.classList.add('input_error');
                valid = false;
            }       
            
            if (elementEmail.value.replace(/[^@]/g, '').length != 1 || elementEmail.value.length < 3) 
            {
                console.error(elementEmail.value);
                elementEmail.classList.add('input_error');
                valid = false;
            }

            if (elementActivity.value == '-') 
            {
                elementActivity.classList.add('input_error');
                valid = false;
            }

            if (valid) 
            {
                const user = 
                {
                    email: elementEmail.value, 
                    name: elementName.value,
                    activity: elementActivity.value,
                    agreement: elementAgreement.checked == 1 ? 'on' : 'off'
                };
                const response = await fetch('./src/UserSurvey.php', 
                    {
                        method: 'POST',
                        body: JSON.stringify(user)
                    }                        
                )
                const result = await response.json();

                console.log(result);
            
                if (result.status == 500) 
                {
                    popupError();
                } 
                else 
                {
                    window.location.reload();
                }
            }
        }
    );
});
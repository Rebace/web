const form=document.querySelector(".record-form__button"),recordForm=document.querySelector(".popup"),itemName=document.querySelector(".record-form__name"),itemEmail=document.querySelector(".record-form__email"),itemActivity=document.querySelector(".record-form__selector"),itemAgreement=document.querySelector(".record-form__checkbox"),View=document.querySelectorAll(".button-register"),Hidden=document.querySelectorAll(".hidden"),bk=document.querySelector(".blackout"),popup=document.querySelector(".popup");function popupView(){popup.classList.add("popup-block_visible"),bk.classList.add("background-blackout_visible"),popup.classList.remove("popup-block_hidden"),bk.classList.remove("background-blackout_hidden")}function popupHidden(){popup.classList.add("popup-block_hidden"),bk.classList.add("background-blackout_hidden"),popup.classList.remove("popup-block_visible"),bk.classList.remove("background-blackout_visible")}View.forEach(e=>{e.addEventListener("click",()=>requestAnimationFrame(popupView))}),Hidden.forEach(e=>{e.addEventListener("click",()=>requestAnimationFrame(popupHidden))}),document.onkeydown=(e=>{"Escape"===e.code&&popupHidden()}),form.addEventListener("click",async()=>{let e=itemName.value.replace(/[а-я, А-Я, a-z, A-Z)]/g,""),o=itemEmail.value.replace(/[^@]/g,""),t=itemActivity.value,r=itemAgreement.checked;itemName.classList.add("record-place_error"),itemEmail.classList.add("record-place_error"),itemActivity.classList.add("record-place_error");if(""===e&&itemName.value&&(itemName.classList.remove("record-place_error"),c=!0),"@"===o&&(itemEmail.classList.remove("record-place_error"),c=!0),"-"!==t&&(itemActivity.classList.remove("record-place_error"),c=!0),c){i();let e={name:itemName.value,email:itemEmail.value,activity:t,agreement:r?"Yes":"No"};fetch("getDataAlgorithm.php",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)}).then(e=>e.text()).then(e=>{500==e.status?(console.log(e),i()):console.log(e)}).catch(e=>console.log(e))}});
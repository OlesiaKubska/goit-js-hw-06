// отримуємо посилання на інпут та його довжину з атрибуту data-length
const input = document.querySelector('#validation-input');
const inputLength = parseInt(input.getAttribute('data-length'));

// функція, яка перевіряє правильність введення символів та змінює клас елемента input
function checkInputLength() {
    if (input.value.length === inputLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}

// додаємо слухача подій на втрату фокусу (blur) для інпуту
input.addEventListener('blur', checkInputLength);
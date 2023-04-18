// використовуємо метод querySelector для пошуку елемента форми за класом login-form і зберігаємо його в змінну loginForm

const loginForm = document.querySelector('form.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); //додаємо обробник події submit до форми, який запобігає перезавантаженню сторінки за допомогою методу preventDefault.

  // зберігаємо елементи input з відповідними атрибутами name у змінні emailInput та passwordInput
    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;
    passwordInput.setAttribute('autocomplete', 'current-password');
    
    // перевіряємо, чи всі поля форми заповнені, використовуючи умову if. Якщо хоча б одне поле порожнє, ми виводимо повідомлення з попередженням.
    if (emailInput.value === '' || passwordInput.value === '') {
        alert('All fields must be filled!');
    } else {
        const loginData = {
        email: emailInput.value,
        password: passwordInput.value
        };
        console.log(loginData); // Якщо ж всі поля заповнені, ми створюємо об'єкт loginData, який містить значення поля email та password, і виводимо його в консоль

        loginForm.reset(); // очищаємо значення полів форми за допомогою методу reset.
    }
});

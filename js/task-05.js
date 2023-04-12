const nameInput = document.getElementById('name-input'); //отримуємо доступ до елементів інпуту
const nameOutput = document.getElementById('name-output'); //отримуємо доступ до елементів спана

nameInput.addEventListener('input', () => {
nameOutput.textContent = nameInput.value || 'Anonymous';
}); //додаємо слухача події input на інпут
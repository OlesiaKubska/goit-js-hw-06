    // отримуємо елементи DOM, з якими будемо працювати
const counter = document.getElementById('counter');
const valueEl = document.getElementById('value');
const incrementBtn = counter.querySelector('[data-action="increment"]');
const decrementBtn = counter.querySelector('[data-action="decrement"]');

  // ініціалізуємо значення лічильника
let counterValue = 0;

  // додаємо слухачів кліків до кнопок
incrementBtn.addEventListener('click', () => {
    counterValue++;
    valueEl.textContent = counterValue;
});

decrementBtn.addEventListener('click', () => {
    counterValue--;
    valueEl.textContent = counterValue;
});
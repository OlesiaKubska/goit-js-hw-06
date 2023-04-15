// вибираємо елементи <button> та <span class="color"> за допомогою методу document.querySelector().
const button = document.querySelector('button.change-color');
const colorSpan = document.querySelector('span.color');

// визначаємо функцію getRandomHexColor(), яка генерує випадковий шістнадцятковий колір.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// додаємо обробник подій кліку на кнопку, який запускає функцію getRandomHexColor(), зберігає новий колір у змінній newColor
button.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor; //встановлює новий колір фону елемента <body> за допомогою властивості style.backgroundColor
  colorSpan.textContent = newColor; // записує значення кольору в <span class="color"> за допомогою властивості textContent.
});
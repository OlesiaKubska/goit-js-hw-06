//отримуємо посилання на елементи DOM, з якими ми будемо працювати: кнопки "Create" та "Destroy", вхідне поле та контейнер для блоків
const controls = document.querySelector("#controls");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

//додаємо обробники подій для кнопок 
createBtn.addEventListener("click", createBoxes); //при натисканні кнопки "Create" викликається функція createBoxes,
destroyBtn.addEventListener("click", destroyBoxes); //при натисканні кнопки "Destroy" - destroyBoxes.

//Функція createBoxes отримує кількість елементів, яку користувач ввів в поле введення
function createBoxes() {
  const amount = +controls.querySelector("input").value;
  const boxes = [];

//створюємо масив блоків з випадковим кольором та збільшує розмір кожного блоку в порівнянні з попереднім

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box); //створюємо новий блок, задаємо йому розмір та колір, додаємо його до масиву
  }

//додаємо всі блоки до контейнера
  
  boxesContainer.append(...boxes); 
}

// Функція destroyBoxes очищає вміст контейнера, встановлюючи значення innerHTML в порожню строку.
function destroyBoxes() {
    boxesContainer.innerHTML = "";
}

//генеруємо випадковий колір у форматі HEX
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215) //використовуємо метод Math.random() для генерації випадкового числа від 0 до 1, потім множить його на 16777215, щоб отримати випадкове число від 0 до 16777215 
    .toString(16) //методом toString(16) перетворює число в рядок у шістнадцятковому форматі
    .padStart(6, 0)}`; //метод padStart(6, 0) додає нулі до початку рядка, якщо його довжина менше 6, щоб заповнити його до шести символів
}
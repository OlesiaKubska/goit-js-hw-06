const fontSizeControl = document.querySelector('#font-size-control'); //отримує посилання на елементи #font-size-control за допомогою методу querySelector
const text = document.querySelector('#text'); //отримує посилання на елементи #text
 //додає обробник події input до #font-size-control
fontSizeControl.addEventListener('input', () => {
    text.style.fontSize = `${fontSizeControl.value}px`;
});  //коли значення #font-size-control змінюється, скрипт оновлює розмір шрифту #text, встановлюючи його значення в fontSizeControl.value 
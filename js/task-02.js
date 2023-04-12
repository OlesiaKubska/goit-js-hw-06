const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("#ingredients"); //отримуємо посилання на <ul> елемент з його ідентифікатором "ingredients".

const liElements = ingredients.map((ingredient) => {
  const li = document.createElement("li"); //створення масиву <li> елементів
  li.textContent = ingredient; //задаємо <li> текстовий вміст
  li.classList.add("item"); //додаємо клас "item" 
  return li; //повертаємо <li>
});

ul.append(...liElements); //додати всі <li> елементи до списку

console.log(ingredients);
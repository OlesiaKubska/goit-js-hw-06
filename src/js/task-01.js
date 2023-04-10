const categoriesList = document.querySelector('#categories'); //знаходження елементу списку категорій
const categories = categoriesList.querySelectorAll('.item'); //отримання всіх категорій
console.log(`Number of categories: ${categories.length}`); //виводимо кількість категорій

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent; //використовуємо метод forEach() для ітерації по кожній категорії; category.querySelector знаходить елемент заголовку категорії
  const elements = category.querySelectorAll('li'); //знаходимо всі елементи категорії
  console.log(`Category: ${categoryName}`); //виводимо текст категорії
  console.log(`Elements: ${elements.length}`); ////виводимо кількість елементів в категорії
});

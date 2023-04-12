const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery'); //вибираємо елемент ul з класом gallery.

const createGalleryItem = ({ url, alt }) =>
  `<li class="gallery__item"><img class="gallery__image" src="${url}" alt="${alt}"></li>`; //приймає об'єкт з властивостями url та alt, і повертає рядок з розміткою для елементу li з вкладеним в нього зображенням.

const galleryMarkup = images.map(createGalleryItem).join(''); //отримуємо масив рядків з розміткою для кожного елементу галереї і масив рядків об'єднується в один рядок за допомогою методу join.

gallery.insertAdjacentHTML('beforeend', galleryMarkup); //вставляємо отриманий рядок з розміткою в кінець елемента ul з класом gallery.

console.log(images);
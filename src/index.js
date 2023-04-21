// Подключение стилей
import './styles/layout.css';
import './styles/content.css';
import 'cropperjs/dist/cropper.css'


// Подключение компонентов проекта
import {handleTextareaAutosize} from './components/textarea-autosize';
import {handleTextareaSymbolCounter} from './components/textarea-symbol-counter';
import {setFilesRemover} from './components/uploader-file-remover';
import FieldTextCleaner from './components/FieldTextCleaner';

import CustomSelect from "./components/CustomSelect";
import CustomMultiselect from "./components/CustomMultiselect";
import Popup from './components/Popup';


// Подключение сторонних библиотек
import 'cropperjs';
import Cropper from 'cropperjs';

const avatar = document.querySelector('.avatar__container:has(.avatar__img)');
const image = document.querySelector('.popup__image');
const popup = new Popup('.popup');
const inputs = document.querySelectorAll('.input, .textarea');


// Инициализация библиотеки Cropperjs (обрезка изображений)
if (image) {
  const cropper = new Cropper(image, {
    aspectRatio: 1,
    viewMode: 3,
  });
}



handleTextareaAutosize();


handleTextareaSymbolCounter();


setFilesRemover();


// Инициализация кастомного выпадающего списка для поля
// "Предпочтительный способ связи"
new CustomSelect('#connection').generate();


// Инициализация кастомного выпадающего списка для поля
// "Название компании"
new CustomSelect('#companyName').generate();


// Инициализация кастомного дыухуровнего выпадающего списка для поля
// "Выбор компетенций"
new CustomMultiselect('#competencies').generate();


// Подключение класса сброса значений полей формы
if (inputs && inputs.length > 0) {
  inputs.forEach((input) => {
    new FieldTextCleaner(input).setEventListeners();
  })
}


// Обеспечение работы модальных окон
popup.setEventListeners();

if (avatar) {
  avatar.addEventListener('mousedown', () => {
    popup.open();
  });
}
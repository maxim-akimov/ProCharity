// Подключение стилей
import './styles/layout.css';
import './styles/content.css';
import 'cropperjs/dist/cropper.css'


// Подключение компонентов проекта
import {handleTextareaAutosize} from './components/textarea-autosize';
import {handleTextareaSymbolCounter} from './components/textarea-symbol-counter';
import {setFilesRemover} from './components/uploader-file-remover';
import FieldTextCleaner from './components/FieldTextCleaner';
import MobileMenu from "./components/MobileMenu";

import CustomSelect from "./components/CustomSelect";
import CustomMultiselect from "./components/CustomMultiselect";
import Popup from './components/Popup';


// Подключение сторонних библиотек
import 'cropperjs';
import Cropper from 'cropperjs';
import PwdViewer from "./components/PwdViewer";
import Avatar from "./components/Avatar";

const avatarContainer = document.querySelector('.avatar__container');
const image = document.querySelector('.popup__image');
const inputs = document.querySelectorAll('.input, .textarea');
const pwdInputs = document.querySelectorAll('.input_type_pwd');
const personalDataForm = document.forms.personalData;

if (personalDataForm) {
  const volunteerSwitcher = personalDataForm.elements.volunteerType;
  const volunteerPostInput = personalDataForm.elements.post;

  // Обработка выбора типа волонтера
  volunteerSwitcher.forEach((input) => {
    // Если происходит изменение значения переключателя типа волонтера
    input.addEventListener('input', (evt) => {
      // и выбран тип "я представляю компанию"
      if (evt.target.value === 'company') {
        // нснимаем блок с полей "выберите компанию" и "должность"
        companyNameCustomField.resetDisabled();
        volunteerPostInput.disabled = false;
      } else {
        // если выбран вариант "я физическое лицо" или ничего не выбрано
        // блокируем эти поля
        companyNameCustomField.setDisabled();
        volunteerPostInput.disabled = true;
      }
    })
  })
}

const popup = new Popup('.popup');
popup.setEventListeners();

// Обеспечение работы модальных окон
if (avatarContainer) {
  avatarContainer.addEventListener('mousedown', () => {
    // Открываем popup только в том случае, если в контейнере лежит элемент изображения
    if (avatarContainer.querySelector('.avatar__img')) {
      popup.open();
    }
  });
}


// Инициализация библиотеки CropperJS (обрезка изображений)
if (image) {
  const cropper = new Cropper(image, {
    aspectRatio: 1,
    viewMode: 2,
    restore: false,
  });


  const avatar = new Avatar({
    imgChangeHandler: (url) => {
      // Открытие модального окна для редактирования аватара
      popup.open();

      // Замена url в случае повторной загрузки другого аватара
      cropper.replace(url)
    },
    cropHandler: () => {
      // Обработка события изменения границ выбранной области или масштаба изображения
      avatar.handleCrop(
        // Получение URL-объекта обрезанного изображения
        cropper.getCroppedCanvas().toDataURL('image/jpeg')
      );
    },
    confirmHandler: () => {
      popup.close();
    }
  });
  avatar.init();
}


// Вызов функции, реализующей автоматическое изменение высоты textarea
handleTextareaAutosize();


// Вызов функции, реализующей подсчет количества введенных в textarea символов
handleTextareaSymbolCounter();


// Вызов функции, отвечающей за удаление файлов из списка в разделе "Портфолио"
setFilesRemover();

// Вызов функции, реализующей подкрашивание окна ввода при наличии ошибки валдиации
handleTextareaValidate();


// Инициализация кастомного выпадающего списка для поля
// "Предпочтительный способ связи"
new CustomSelect('#connection').generate();


// Инициализация кастомного выпадающего списка для поля
// "Название компании"
const companyNameCustomField = new CustomSelect('#companyName');
companyNameCustomField.generate();


// Инициализация кастомного дыухуровнего выпадающего списка для поля
// "Выбор компетенций"
new CustomMultiselect('#competencies').generate();


// Подключение класса сброса значений полей формы
if (inputs && inputs.length > 0) {
  inputs.forEach((input) => {
    new FieldTextCleaner(input).setEventListeners();
  })
}


// Подключение класса для показа/скрытия пароля
if (pwdInputs && pwdInputs.length > 0) {
  pwdInputs.forEach((input) => {
    new PwdViewer(input).setEventListeners();
  })
}


// Управление показом / скрытием меню в мобильной версии
new MobileMenu({
  menuBtnClass: 'menu-icon',
  menuBtnActiveClass: 'menu-icon_active',
  menuContainerClass: 'header__nav',
  menuContainerOpenedClass: 'header__nav_opened'
}).setEventListeners();

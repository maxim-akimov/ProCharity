import './styles/layout.css';
import './styles/content.css';
import 'cropperjs/dist/cropper.css'
import {handleTextareaAutosize} from './components/textarea-autosize';
import {handleTextareaSymbolCounter} from './components/textarea-symbol-counter';
import {setFilesRemover} from './components/uploader-file-remover';
import CustomSelect from "./components/CustomSelect";
import CustomMultiselect from "./components/CustomMultiselect";
import Popup from './components/Popup';
import 'cropperjs';
import Cropper from 'cropperjs';

const image = document.querySelector('.popup__image');

if (image) {
  const cropper = new Cropper(image, {
    aspectRatio: 1,
    viewMode: 3,
  });
}


// Автоматическое увеличение высоты поля
// от количества введенного текста
handleTextareaAutosize();


handleTextareaSymbolCounter();


setFilesRemover();


new CustomSelect('#connection').generate();
new CustomSelect('#companyName').generate();
new CustomMultiselect('#competencies').generate();

const popup = new Popup('.popup');
popup.setEventListeners();

const avatarImg = document.querySelector('.avatar:has(.avatar__img)');

if (avatarImg) {
  avatarImg.addEventListener('mousedown', () => {
    popup.open();
  });
}
import './styles/layout.css';
import './styles/content.css';
//import './vendor/cropperjs/src/css/cropper.scss';
import {handleTextarea} from './components/textarea-autosize';
import CustomSelect from "./components/CustomSelect";
import CustomMultiselect from "./components/CustomMultiselect";
import Popup from './components/Popup';
//import Cropper from "./vendor/cropperjs";


// Автоматическое увеличение высоты поля
// от количества введенного текста
handleTextarea();


new CustomSelect('#connection').generate();
new CustomSelect('#companyName').generate();
new CustomMultiselect('#competencies').generate();

const popup = new Popup('.popup-edit');
popup.setEventListeners();
popup.open();

const image = document.querySelector('.popup-edit__image');
//new Cropper(image);



import './styles/layout.css';
import './styles/content.css';
import {handleTextarea} from './components/textarea-autosize';


// Автоматическое увеличение высоты поля
// от количества введенного текста
handleTextarea();


import CustomSelect from "./components/CustomSelect";
import CustomMultiselect from "./components/CustomMultiselect";

new CustomSelect('#connection').generate();
new CustomSelect('#companyName').generate();
new CustomMultiselect('#competencies').generate();
import { Popup } from './components/Popup';

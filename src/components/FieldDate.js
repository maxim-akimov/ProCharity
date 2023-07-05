export default class FieldDate {
    constructor ({
        inputFieldClass,
        btnCalPickerClass
    }) {
        this._inputFieldClass = inputFieldClass;
        this._btnCalPickerClass = btnCalPickerClass;       
        this._inputFieldElement = document.querySelector(`.${this._inputFieldClass}`);
        this._btnCalPickerElement = document.querySelector(`.${this._btnCalPickerClass}`);
        this._handleClick = this._handleClick.bind(this);
    }

  _handleClick(evt) {
    this._inputFieldElement.showPicker();
  }

  setEventListeners() {
    if (this._btnCalPickerElement) {
        this._btnCalPickerElement.addEventListener('mousedown', this._handleClick);
    }
  }
}

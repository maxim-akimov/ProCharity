class Popup {
    constructor(selector) {
        this._selector = selector;
        this._popup = document.querySelector(this._selector);
        this._closeButton = this._popup.querySelector('.popup-edit__btn-close');
    }

    open() {
        this._popup.classList.add('popup-edit_opened');
    }
    
    close() {
        this._popup.classList.remove('popup-edit_opened');
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', () => {
            this.close()
        })
    }
}

export { Popup }
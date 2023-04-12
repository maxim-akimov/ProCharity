export default class CustomSelect {
  /**
   *
   * @param selector - слектор элемента select, который необходимо кастомизировать
   * @param options
   */
  constructor(selector, options = {
    wrapClass: 'custom-select',
    fieldClass: 'custom-select__field',
    fieldTextClass: 'custom-select__arrow',
    fieldArrowClass: 'custom-select__field-text',
    optionsListContainerClass: 'custom-select__list-container',
    optionsListClass: 'custom-select__list',
    optionClass: 'custom-select__item',
    optionSelectedClass: 'custom-select__item_selected'
  }) {
    this._selectElement = document.querySelector(selector);
    this._options = options;
  }


  _createElements() {
    //Создание обертки для кастомного селекта
    this._customSelectElement = document.createElement('div');
    this._customSelectElement.classList.add(this._wrapClass);


    //Создание поля кастомного селекта
    this._fieldElement = document.createElement('div');
    this._fieldElement.classList.add(this._fieldClass);


    //Создание текстового элемента поля
    this._fieldTextElement = document.createElement('div');
    this._fieldElement.classList.add(this._fieldTextClass);


    //Создание иконки раскрывающегося списка
    this._fieldArrowElement = document.createElement('div');
    this._fieldArrowElement.classList.add(this._fieldArrowClass);


    //Добавление текстового элемента и иконки к полю
    this._fieldElement.append(this._fieldTextElement, this._fieldArrowElement);


    //Добавление поля в контейнер
    this._selectElement.append(this._fieldTextElement);


    //Создание контейнера для вариантов выбора
    this._optionsListContainerElement = document.createElement('div');
    this._optionsListContainerElement.classList.add(this._optionsListContainerClass);


    //Создание элемента списка вариантов выбора
    this._optionsListElement = document.createElement('ul');
    this._optionsListElement.classList.add(this._optionsListClass);


    //Добавление элемента списка в контейнер списка
    this._optionsListContainerElement.append(this._optionsListElement);


    //Добавление контейнера списка в контейнер поля
    this._selectElement.append(this._optionsListContainerElement);


    document.querySelector('.custom-select').after(this._selectElement);


  }


  getElements() {

  }
}
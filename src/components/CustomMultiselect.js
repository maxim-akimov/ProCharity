export default class CustomMultiselect {
  /**
   *
   * @param selector - слектор элемента select, который необходимо кастомизировать
   * @param options - объект параметров
   *    wrapClass                       - класс обертки (контейнера) кастомизированного поля
   *    fieldClass                      - класс поля выбора
   *    fieldTextClass                  - класс текстобого блока, вложенного в поле выбора
   *    fieldArrowClass                 - класс блока иконки выпадающего списка
   *    optionsListContainerClass       - класс контейнера выпадающего списка
   *    optionsOpenedListContainerClass - класс (модификатор) открытого контейнера
   *    optionsListClass                - класс сипка элементов выбора
   *    optionClass                     - класс элемента выбора
   *    optionSelectedClass             - класс выбранного элемента списка
   *    firstOptionIsTitle              - если установлено в true - первый элемент списка будет
   *                                    использоваться в качестве подписи поля и не будет выводиться
   *                                    в кастомизированном списке
   */
  constructor(selector, options = {
    wrapClass: 'custom-multiselect__wrap',
    fieldClass: 'custom-multiselect__field',
    chipsClass: 'custom-multiselect__chips',
    chipsTextClass: 'custom-multiselect__chips-text',
    chipsDeleteBtnClass: 'custom-multiselect__chips-delete-btn',
    fieldArrowClass: 'custom-multiselect__arrow',
    optionsListContainerClass: 'custom-multiselect__list-container',
    optionsOpenedListContainerClass: 'custom-multiselect__list-container__opened',
    optionsListClass: 'custom-multiselect__list',
    optionClass: 'custom-multiselect__item',
    optionArrowClass: 'custom-multiselect__item-arrow',
    checkboxClass: 'custom-multiselect__checkbox',
    checkboxCheckedClass: 'custom-multiselect__checkbox_checked'
  }) {
    this._selectElement = document.querySelector(selector);
    this._options = options;
  }


  _changeOption(option) {
    // Изменение выбранного значения в исходном select
    // (пригодится для реализации обычной передачи значений на сервер -
    // значение будет передоваться из обычного select)
    this._selectElement.value = option.dataset.val;
  }


  _createWrap() {
    // Создание обертки для кастомного селекта
    // Обертка позхволит позиционировать раскрывающийся список относительно поля выбора
    const element = document.createElement('div');
    element.classList.add(this._options.wrapClass);

    return element;
  }


  _createField() {
    // Создание поля кастомного селекта
    const element = document.createElement('div');
    element.classList.add(this._options.fieldClass);

    return element;
  }


  _createArrow() {
    const element = document.createElement('div');
    element.classList.add(this._options.fieldArrowClass);

    return element;
  }


  _createListContainer() {
    const element = document.createElement('div');
    element.classList.add(this._options.optionsListContainerClass);

    return element;
  }


  _createList() {
    const element = document.createElement('ul');
    element.classList.add(this._options.optionsListClass);

    return element;
  }


  _createItem() {
    const element = document.createElement('li');
    element.classList.add(this._options.optionClass);

    return element;
  }


  //Multi
  _createDropdownBlock() {
    // Создание обертки для кастомного селекта
    this._customSelectElement = this._createWrap();

    // Создание поля кастомного селекта
    this._fieldElement = this._createField();

    // Создание иконки раскрывающегося списка
    this._fieldArrowElement = this._createArrow();

    // Добавление текстового элемента и иконки к полю
    this._fieldElement.append(this._fieldArrowElement);

    // Добавление поля в контейнер
    this._customSelectElement.append(this._fieldElement);

    // Создание контейнера для вариантов выбора
    this._optionsListContainerElement = this._createListContainer();

    // Создание элемента списка вариантов выбора
    this._optionsListElement = this._createList();


    // Добавление элемента списка в контейнер списка
    this._optionsListContainerElement.append(this._optionsListElement);

    // Добавление контейнера списка в контейнер поля
    this._customSelectElement.append(this._optionsListContainerElement);
  }


  _getOptions() {
    this._data = [];

    function createDataArray(array) {
      const resultArray = [];

      array.forEach((item, index) => {
        if (item.tagName === 'OPTGROUP'
          || item.tagName === 'OPTION') {
          resultArray.push({
            tagName: item.tagName.toLocaleLowerCase(),
            value: item.label || item.value,
            id: item.id,
            children: createDataArray(item.childNodes),
            isSelected: item.hasAttribute('selected')
          });
        }
      })

      return resultArray;
    }

    const optgroups = this._selectElement.querySelectorAll('optgroup');
    const options = this._selectElement.querySelectorAll('option');

    if (optgroups && optgroups.length > 0) {
      return createDataArray(optgroups);
    }

    return createDataArray(options);
  }


  _getSelectedOption() {
    return this._optionsListElement
      .querySelector(`.${this._options.optionSelectedClass}`);
  }


  //Multi
  _handleItemClick(evt) {
    this._resetSelectedOption();

    this._setSelectedOption(evt.target);

    this._changeOption(evt.target);
  }


  _resetSelectedOption() {
    const selectedOption = this._getSelectedOption();

    if (selectedOption) {
      selectedOption.classList.remove(this._options.optionSelectedClass);
    }
  }


  _createItems(data, parentElement) {
    data.forEach((item) => {
      // Создание элемента списка li
      const option = this._createItem();

      // Если имеются дочерние элементы
      if (item.children.length > 0) {
        // Добавляем стиль родительского пункта списка (стрелка)
        option.classList.add(this._options.optionArrowClass);

        //Создание контейнера (обертки) дочернего списка
        const container = this._createListContainer();

        // Создание элемента дочернего списка
        const list = this._createList();

        // Рекурсивный вызов
        this._createItems(item.children, list);
        container.append(list)
        option.append(container);
      }
      parentElement.append(option);
    });
  }


  _setSelectedOption(option) {
    // Стилизация выбранного элемента списка
    option.classList.add(this._options.optionSelectedClass);
  }


  //Multi
  generate() {
    // Создание каркаса кастомного селекта
    this._createDropdownBlock();
    this._selectElement.after(this._customSelectElement);


    // Заполнение каркаса элементами списка
    this._createItems(
      this._getOptions(),
      this._optionsListElement
    );

    //Установка обработчиков событий
    this.setEventListeners();
  }


  closeDropdown() {
    this._optionsListContainerElement.classList
      .remove(this._options.optionsOpenedListContainerClass);
  }


  openDropdown() {
    this._optionsListContainerElement.classList
      .add(this._options.optionsOpenedListContainerClass);
  }


  setEventListeners() {
    document.addEventListener('mousedown', (evt) => {
      // Если клик был совершен за пределами контейнера
      if (!evt.target.closest(`.${this._options.wrapClass}`)) {
        // Закрытие выпадающего списка
        this.closeDropdown();

        // Если клик был произведен по элементу списка
      } else if (evt.target.classList.contains(this._options.optionClass)) {
        // Обработка клика по элементу
        this._handleItemClick(evt);
        // Закрытие выпадающего списка
        this.closeDropdown();

        // В остальных случаях
      } else {
        // Если  контейнер выпадающего списка открыт
        if (this._optionsListContainerElement.classList
          .contains(this._options.optionsOpenedListContainerClass)) {
          // Закрытие выпадающего списка
          this.closeDropdown();

        } else {
          // или открываем
          this.openDropdown();
        }
      }
    });
  }


}
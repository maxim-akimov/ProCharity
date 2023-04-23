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
    wrapClass: ['custom-select__wrap', 'custom-select__wrap_style_multiselect'],
    headingClass: ['heading', 'heading__title', 'custom-select__heading'],
    closeBtnClass: ['btn', 'btn_type_close', 'custom-select__btn-close'],
    fieldClass: ['custom-select__field', 'custom-select__field_style_multiselect'],
    labelClass: 'custom-select__label',
    chipsClass: 'custom-select__chips',
    chipsTextClass: 'custom-select__chips-text',
    chipsDeleteBtnClass: ['btn', 'custom-select__chips-delete-btn'],
    optionsListContainerClass: 'custom-select__list-container',
    optionsOpenedListContainerClass: 'custom-select__list-container__opened',
    linkClass: 'custom-select__link',
    selectAllGroupLinkClass: 'custom-select__link_type_select-all',
    resetAllGroupLinkClass: 'custom-select__link_type_reset',
    selectBtnClass: ['btn', 'btn_style_primary', 'custom-select__btn', 'custom-select__btn_type_select'],
    resetBtnClass: ['btn', 'btn_style_secondary', 'custom-select__btn', 'custom-select__btn_type_reset'],
    optionsListClass: 'custom-select__list',
    optionClass: 'custom-select__item',
    optionParentClass: 'custom-select__item_style_parent',
    optionParentOpenedClass: 'custom-select__item_style_parent-opened',
    optionSelectableClass: 'custom-select__item_style_checkbox',
    optionSelectedClass: 'custom-select__item_selected-checkbox',
    mobileScreenBreakpoint: 900,
    firstOptionIsTitle: true
  }) {
    this._selectElement = document.querySelector(selector);
    this._options = options;
    this._screenWidth = window.innerWidth;
  }


  _changeOption(option) {
    if (this._selectElement.multiple) {
      const element = this._selectElement.querySelector(`[value="${option.dataset.val}"]`);

      element.selected = !element.selected
    } else {
      this._selectElement.value = option.dataset.val;
    }
  }


  _createWrap() {
    // Создание обертки для кастомного селекта
    // Обертка позволит позиционировать раскрывающийся список относительно поля выбора
    const element = document.createElement('div');
    element.classList.add(
      ...this._handleClassList(this._options.wrapClass)
    );

    return element;
  }


  _createHeading() {
    const element = document.createElement('h2');
    element.textContent = "Выбор компетенции";
    element.classList.add(
      ...this._handleClassList(this._options.headingClass)
    );

    return element;
  }


  _createCloseBtn() {
    const element = document.createElement('button');
    element.classList.add(
      ...this._handleClassList(this._options.closeBtnClass)
    );

    return element;
  }


  _createField() {
    // Создание поля кастомного селекта
    const element = document.createElement('div');
    element.classList.add(
      ...this._handleClassList(this._options.fieldClass)
    );

    return element;
  }


  _createLabel() {
    // Создание поля кастомного селекта
    const element = document.createElement('span');
    element.classList.add(
      ...this._handleClassList(this._options.labelClass)
    );

    return element;
  }


  _createListContainer() {
    const element = document.createElement('div');
    element.classList.add(
      ...this._handleClassList(this._options.optionsListContainerClass)
    );

    return element;
  }


  _createSelectResetGroupLink() {
    const element = document.createElement('a');
    element.textContent = 'Сбросить';
    element.classList.add(
      ...this._handleClassList([this._options.linkClass, this._options.resetAllGroupLinkClass])
    );

    return element;
  }


  _createSelectAllLink() {
    const element = document.createElement('a');
    element.textContent = 'Выбрать все';
    element.classList.add(
      ...this._handleClassList([this._options.linkClass, this._options.selectAllGroupLinkClass])
    );

    return element;
  }


  _createList() {
    const element = document.createElement('ul');
    element.classList.add(
      ...this._handleClassList(this._options.optionsListClass)
    );

    return element;
  }


  _createItem() {
    const element = document.createElement('li');
    element.classList.add(
      ...this._handleClassList(this._options.optionClass)
    );

    return element;
  }


  _createSelectBtn() {
    const element = document.createElement('button');
    element.classList.add(
      ...this._handleClassList(this._options.selectBtnClass)
    );
    element.textContent = 'Выбрать';

    return element;
  }


  _createResetBtn() {
    const element = document.createElement('button');
    element.classList.add(
      ...this._handleClassList(this._options.resetBtnClass)
    );
    element.textContent = 'Сбровить выбор';

    return element;
  }


  _createChipsContainer() {
    const element = document.createElement('div');
    element.classList.add(
      ...this._handleClassList(this._options.chipsClass)
    );

    return element;
  }


  _createChipsText() {
    const element = document.createElement('span');
    element.classList.add(
      ...this._handleClassList(this._options.chipsTextClass)
    );

    return element;
  }


  _createChipsDeleteBtn() {
    const element = document.createElement('button');
    element.classList.add(
      ...this._handleClassList(this._options.chipsDeleteBtnClass)
    );

    return element;
  }


  _createChips(item) {
    const chips = this._createChipsContainer();
    const chipsText = this._createChipsText();
    const chipsDeleteBtn = this._createChipsDeleteBtn();

    chips.setAttribute('data-val', item.dataset.val);
    chips.classList.add(this._options.chipsClass);

    chipsText.textContent = item.textContent;
    chipsText.classList.add(this._options.chipsTextClass);

    chipsDeleteBtn.setAttribute('data-val', item.dataset.val);
    chipsDeleteBtn.classList.add(this._options.chipsDeleteBtnClass);

    this._labelElement.style.display = 'none';

    chips.append(chipsText, chipsDeleteBtn);

    return chips;
  }


  _removeChips(val) {
    const chips = this._fieldElement.querySelector(`[data-val="${val}"]`);

    if (chips) {
      chips.remove();
    }

    if (!this._fieldElement.querySelector(`.${this._options.chipsClass}`)) {
      this._labelElement.style.display = 'inline';
    }
  }


  //Multi
  _createDropdownBlock() {
    // Создание обертки для кастомного селекта
    this._customSelectElement = this._createWrap();

    //Заголовок выпадающего списка
    this._headingElement = this._createHeading();

    // Кнопка закрытия выпадающего списка
    this._closeBtnElement = this._createCloseBtn();

    // Создание поля кастомного селекта
    this._fieldElement = this._createField();

    // Создание подписи поля
    this._labelElement = this._createLabel();

    if (this._options.firstOptionIsTitle) {
      this._labelElement.textContent = this._selectElement
        .querySelector('option').textContent;
    }

    // Добавление текстового элемента и иконки к полю
    this._fieldElement.append(this._labelElement);

    // Добавление поля в контейнер
    this._customSelectElement.append(this._fieldElement);

    // Создание контейнера для вариантов выбора
    this._optionsListContainerElement = this._createListContainer();

    // Создание элемента списка вариантов выбора
    this._optionsListElement = this._createList();

    // Создание кнопки подтверждения выбора
    this._selectBtnElement = this._createSelectBtn();

    // Создание кнопки сброса выбора
    this._resetBtnElement = this._createResetBtn();


    this._optionsListContainerElement.append(
      this._headingElement,
      this._closeBtnElement,
      this._optionsListElement,
      this._selectBtnElement,
      this._resetBtnElement);

    // Добавление контейнера списка в контейнер поля
    this._customSelectElement.append(this._optionsListContainerElement);
  }


  _getOptions() {
    this._data = [];

    // Рекурсивная функция для прохода по всем уровням вложенности элементов
    function createDataArray(array) {
      //Результирующий массив
      const resultArray = [];

      array.forEach((item, index) => {
        // Обрабатываются только элементы optgroup и option,
        // в противном случае в результирующий массив попадут
        // текстовые узлы
        if (item.tagName === 'OPTGROUP'
          || item.tagName === 'OPTION') {

          // Объект с параметрами варианта выбора
          resultArray.push({
            tagName: item.tagName.toLocaleLowerCase(),
            value: item.value || null,
            text: item.label || item.textContent,
            id: item.id,
            children: createDataArray(item.childNodes),
            isSelected: item.hasAttribute('selected'),
            isSelectable: item.tagName === 'OPTION'
          });
        }
      })

      return resultArray;
    }

    const optgroups = this._selectElement.querySelectorAll('optgroup');
    const options = this._selectElement.querySelectorAll('option');

    // Если удалось найти внутри элемента select элементы optgroup
    if (optgroups && optgroups.length > 0) {
      //Передаем их в фукцию для рекурсивного получения данных
      return createDataArray(optgroups);
    }

    return createDataArray(options);
  }


  //Multi
  _handleItemClick(evt) {
    // Если элемент списка иммеет класс выбранного (отмеченного) элемента
    if (evt.target.classList.contains(this._options.optionSelectedClass)) {
      this._removeChips(evt.target.dataset.val);
    } else {
      this._fieldElement.append(this._createChips(evt.target));
    }

    // Переключение класса "выбранного" (отмеченного) элемента
    this._toggleSelectedOption(evt.target);

    // Изменение выбранных элементов в стандартном select
    this._changeOption(evt.target);
  }


  //Multi
  _handleParentItemClick(evt) {
    evt.target.classList.toggle(this._options.optionParentOpenedClass);

    const childContainer = evt.target.querySelector(`.${this._options.optionsListContainerClass}`);

    if (childContainer) {
      childContainer.classList.toggle(this._options.optionsOpenedListContainerClass);
    }
  }


  //Multi
  _handleSelectGroup(evt) {
    const container = evt.target.parentNode;
    const options = container.querySelectorAll(`.${this._options.optionClass}`);

    options.forEach((option) => {
      const chips = this._fieldElement
        .querySelector(`[data-val="${option.dataset.val}"]`);

      if (!chips) {
        this._fieldElement.append(this._createChips(option));
      }
      this._setSelectedOption(option);
      this._changeOption(option);
    })
  }


  //Multi
  _handleResetGroup(evt) {
    const container = (evt) ? evt.target.parentNode : this._customSelectElement;
    const options = container.querySelectorAll(`.${this._options.optionSelectedClass}`);

    options.forEach((option) => {
      this._removeChips(option.dataset.val);
      this._resetSelectedOption(option);
      this._changeOption(option);
    })
  }


  _handleChipsClick(evt) {
    const val = evt.target.dataset.val;

    const option = document.querySelector(
      `.${this._options.optionClass}[data-val="${val}"]`
    );

    this._changeOption(option);
    this._toggleSelectedOption(option);
    this._removeChips(val);
  }


  _handleClassList(classList) {
    if (typeof classList === 'string') {
      return [classList];
    }
    return classList;
  }


  _createItems(data, parentElement) {
    data.forEach((item, index) => {
      // Создание элемента списка li
      const option = this._createItem();

      // Добавление атрибута для связки элементов выбора со стандартным select
      option.setAttribute('data-val', item.value);
      option.setAttribute('data-is-selectable', item.isSelectable);

      if (item.isSelectable) {
        option.classList.add(
          this._handleClassList(this._options.optionSelectableClass)
        );
      }


      // Установка отображаемого текстового значения
      option.textContent = item.text;

      // Если имеются дочерние элементы
      if (item.children.length > 0) {
        // Добавляем стиль родительского пункта списка (стрелка)
        option.classList.add(
          ...this._handleClassList(this._options.optionParentClass)
        );

        //Создание контейнера (обертки) дочернего списка
        const container = this._createListContainer();
       container.append(this._createSelectResetGroupLink());
       container.append(this._createSelectAllLink());

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


  _toggleSelectedOption(option) {
    // Стилизация выбранного элемента списка
    option.classList.toggle(this._options.optionSelectedClass);
  }


  _setSelectedOption(option) {
    option.classList.add(this._options.optionSelectedClass);
  }


  _resetSelectedOption(option) {
    option.classList.remove(this._options.optionSelectedClass);
  }


  //Multi
  generate() {
    if (this._selectElement) {
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
  }


  _closeOtherItems() {
    // Поиск открытого дочернего контейнера с элементами следующего уровня
    const openedChildContainer = this._optionsListContainerElement
      .querySelector(`.${this._options.optionsOpenedListContainerClass}`);

    // Если открытый контейнер найден
    if (openedChildContainer) {
      // Удаление класса "открытого" контейнера
      openedChildContainer.classList.remove(this._options.optionsOpenedListContainerClass);
    }


    // Поиск пункта списка, являющегося родительским для открытого контейнера
    const openedParentItem = this._optionsListContainerElement
      .querySelector(`.${this._options.optionParentOpenedClass}`);

    // Если открытый контейнер найден
    if (openedParentItem) {
      // Удаление класса "открытого" контейнера
      openedParentItem.classList.remove(this._options.optionParentOpenedClass);
    }
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
    // Обработка клика вне выпадающего списка
    document.addEventListener('mousedown', (evt) => {
      // Если клик был совершен за пределами контейнера
      if (!evt.target.closest(`.${this._options.wrapClass}`)) {
        // Закрытие выпадающего списка
        this.closeDropdown();
      }
    });

    this._resetBtnElement.addEventListener('mousedown', (evt) => {
      this._handleResetGroup();
    })

    // Обработка клика по контейнеру выпадающего списка
    this._customSelectElement.addEventListener('mousedown', (evt) => {
      // Если клик был совершен по кнопке удаления "чипса"
      if (evt.target.classList.contains(this._options.chipsDeleteBtnClass)) {
        this._handleChipsClick(evt);
      }

      // Если клик по ссылке "Выбрать все"
      if (evt.target.classList.contains(this._options.selectAllGroupLinkClass)) {
        this._handleSelectGroup(evt);
      }


      // Если клик по ссылке "Сбросить"
      if (evt.target.classList.contains(this._options.resetAllGroupLinkClass)) {
        this._handleResetGroup(evt);
      }


      // Если клик был совершен по пункту выпадающего списка
      if (evt.target.classList.contains(this._options.optionClass)) {
        // Если пункт доступен для обработки клика (на случай, если в списке будут
        // присутствовать элементы optgroup, не имеющие вложенных элементов option
        // В этом случае клик по пункту никак обработан не будет
        if (evt.target.dataset.isSelectable === 'true') {
          // Обработка клика по элементу
          this._handleItemClick(evt);
        }


        // Если клик по родительскому пункту и ширина экрана
        // меньше установленной точки перелома - обработка открытия дочернего списка
        // (только для мобильных устройств)
        if (evt.target.classList.contains(this._options.optionParentClass)
          && this._screenWidth < this._options.mobileScreenBreakpoint) {
          this._closeOtherItems();
          this._handleParentItemClick(evt);
        }


        // В остальных случаях
      } else {
        // Если контейнер выпадающего списка открыт
        // и клик был совершен за пределами дочерних элеменетов пункта списка
        if (this._optionsListContainerElement.classList
          .contains(this._options.optionsOpenedListContainerClass)
          && !evt.target.closest(`.${this._options.optionClass}`)) {
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
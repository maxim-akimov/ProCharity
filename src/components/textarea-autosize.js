function setHeight(el) {
  el.style.height = 'auto';
  el.style.height = el.scrollHeight + 2 + 'px';
}

//из-за автоматического подсчета высоты поля ввода текста 
//не попасть со смещением текста ошибки при его абсолютном позиционировании
// function setTop(el) {
//   el.style.top = el.closest('.textarea__field_autosize').scrollHeight + 2 + 'px';
// }

export function handleTextareaAutosize(selector) {
  const textarea = document.querySelectorAll('.textarea__field_autosize');
  // const texterror = document.querySelectorAll('.textarea__error-message');

  textarea.forEach((t) => {
    t.addEventListener('input', () => setHeight(t));

    // "Разворачиваем поле" при загрузке страницы (если в поле есть текст)
    setHeight(t);
  })

  // "Смещаем поле ошибки вниз при загрузке страницы (если в поле есть текст)
  // texterror.forEach((t) => {
  //   setTop(t);
  // })

}
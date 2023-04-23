function setHeight(el) {
  el.style.height = el.scrollHeight + 'px';

  if (!el.value) {
    el.style.height = 'auto';
  }
}

export function handleTextareaAutosize(selector) {
  const textarea = document.querySelectorAll('.textarea__field_autosize');

  textarea.forEach((t) => {
    t.addEventListener('input', () => setHeight(t));

    // "Разворачиваем поле" при загрузке страницы (если в поле есть текст)
    setHeight(t);
  })
}
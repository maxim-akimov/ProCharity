function setHeight(el) {
  el.style.height = el.scrollHeight + 'px';

  if (!el.value) {
    el.style.height = 'auto';
  }
}

export function handleTextarea(selector) {
  const textarea = document.querySelectorAll('.text-area_autosize');

  textarea.forEach((t) => {
    t.addEventListener('input', () => setHeight(t));

    // "Разворачиваем поле" при загрузке страницы (если в поле есть текст)
    setHeight(t);
  })
}
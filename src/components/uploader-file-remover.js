function handleFileListClick(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains('uploader__btn-delete')) {
    evt.target.closest('.uploader__item').remove();
  }
}

export function setFilesRemover() {
  document.querySelector('.uploader__files-list')
    .addEventListener('mousedown', handleFileListClick);
}
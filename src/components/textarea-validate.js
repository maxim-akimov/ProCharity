export function handleTextareaValidate() {
    const textArea = document.querySelectorAll('.textarea');
    textArea.forEach((textarea) => {
      textarea.addEventListener('focusout', () => {
        const textAreaField = textarea.querySelector('.textarea__field');
        const textAreaError = textarea.querySelector('.textarea__error-message');
        if(!textAreaField.validity.valid) {
          textarea.classList.add('textarea_error');        
          textAreaError.classList.add('textarea__error-message_visible');
          textAreaError.textContent = textAreaField.validationMessage;
          
        }
      });
      textarea.addEventListener('focusin', () => {
        const textAreaError = textarea.querySelector('.textarea__error-message');
        textarea.classList.remove('textarea_error');      
        textAreaError.classList.remove('textarea__error-message_visible');
        textAreaError.textContent = '';
      });
    }) 
  }
document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('.animated-text');
    const textContent = text.textContent;
    text.textContent = '';
  
    for (let i = 0; i < textContent.length; i++) {
      const span = document.createElement('span');
      span.textContent = textContent[i];
      span.style.animation = `appearText 3s ${i * 0.1}s forwards`;
      text.appendChild(span);
    }
  });
  
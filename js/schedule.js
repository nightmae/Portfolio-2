/*

document.addEventListener('DOMContentLoaded', function () {
    const days = document.querySelectorAll('.Hajperlink');
    const contentElements = document.querySelectorAll('.content');
  
    days.forEach(day => {
      const targetId = day.dataset.target;
      const dayContentElement = document.getElementById(targetId);
  
      day.addEventListener('click', function () {
        contentElements.forEach(contentElement => {
          if (contentElement === dayContentElement) {
            contentElement.classList.add('content-show');
          } else {
            contentElement.classList.remove('content-show');
          }
        });
      });
    });
  });

 */
document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.project');
  
    boxes.forEach(box => {
      box.addEventListener('mouseenter', function() {
        box.style.transform = 'scale(1.1)';
        box.style.transition = 'transform 0.5s ease';
        box.style.backgroundColor = '#ffcc00';
      });
  
      box.addEventListener('mouseleave', function() {
        box.style.transform = 'scale(1)';
        box.style.transition = 'transform 0.5s ease';
        box.style.backgroundColor = '#f4f4f4';
      });
    });
  });
  
import './style.css';

document.addEventListener('DOMContentLoaded', function () {
  function toggleAccordion(index) {
    const content = document.getElementById(`accordion-content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    content.classList.toggle('show');
    icon.classList.toggle('rotate-180');
  }

  window.toggleAccordion = toggleAccordion; // Make function accessible from inline onclick
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.closest('div');
      const answer = faqItem.querySelector('div:last-child');
      const svg = button.querySelector('svg');
      const plusIcon = svg.querySelector('#plus-icon');
      const minusIcon = svg.querySelector('#minus-icon');
      
      // Toggle answer visibility
      answer.classList.toggle('hidden');
      
      // Toggle between plus and minus icons
      plusIcon.classList.toggle('show');
      minusIcon.classList.toggle('hidden');
      
    });
  });


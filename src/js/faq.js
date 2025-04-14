export const faq = () => {
  const questionsBtn = document.querySelectorAll('.faq-question-button-js');

  questionsBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.nextElementSibling.classList.toggle('open');
    });
  });
};

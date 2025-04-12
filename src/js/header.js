const mobileMenu = () => {
  const mobileMenuButton = document.querySelector('.header-nav-mobile-button');
  const mobileMenu = document.querySelector('.header-nav-mobile');
  const mobileMenuButtonClose = document.querySelector(
    '.header-nav-mobile-button-close'
  );
  const mobileMenuItems = document.querySelectorAll('.header-nav-mobile-item');
  const logo = document.querySelector('.header-logo');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
    mobileMenuButton.style.display = 'none';
    logo.style.display = 'none';
  });

  mobileMenuButtonClose.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    mobileMenuButton.style.display = 'flex';
    logo.style.display = 'flex';
  });

  mobileMenuItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      mobileMenuButton.style.display = 'flex';
      logo.style.display = 'flex';
    });
  });
};

export default mobileMenu;

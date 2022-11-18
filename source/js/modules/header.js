const header = document.querySelector('.header');
const overlay = document.querySelector('.header__overlay');
const mainNavigation = document.querySelector('.header__wrapper');
const navigationToggleButton = document.querySelector('.header__toggle');
const headerLinks = document.querySelectorAll('.header__link');

const closeMenu = () => {
  mainNavigation.classList.add('header__wrapper--closed');
  mainNavigation.classList.remove('header__wrapper--opened');
  header.classList.remove('is-active');
  document.body.style.overflow = 'auto';
};

const openMenu = () => {
  mainNavigation.classList.remove('header__wrapper--closed');
  mainNavigation.classList.add('header__wrapper--opened');
  header.classList.add('is-active');
  document.body.style.overflow = 'hidden';
};

const toggleMenu = () => {
  if (overlay) {
    overlay.addEventListener('click', () => {
      closeMenu();
    });
  }

  if (mainNavigation && navigationToggleButton && header) {
    navigationToggleButton.addEventListener('click', function () {
      if (mainNavigation.classList.contains('header__wrapper--closed')) {
        openMenu();

      } else {
        closeMenu();
      }
    });
  }
};

const jumpToSection = () => {
  headerLinks.forEach((item) => {
    item.addEventListener('click', () => {
      closeMenu();
    });
  });
};

export {toggleMenu, jumpToSection};

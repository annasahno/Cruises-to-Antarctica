const mainNavigation = document.querySelector('.header__wrapper');
const navigationToggleButton = document.querySelector('.header__toggle');

const toggleMenu = () => {
  navigationToggleButton.addEventListener('click', function () {
    if (mainNavigation.classList.contains('header__wrapper--closed')) {
      mainNavigation.classList.remove('header__wrapper--closed');
      mainNavigation.classList.add('header__wrapper--opened');
    } else {
      mainNavigation.classList.add('header__wrapper--closed');
      mainNavigation.classList.remove('header__wrapper--opened');
    }
  });
};

export {toggleMenu};

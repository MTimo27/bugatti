const navbarIcon = document.getElementById('navbar__icon');
const navbarMenu = document.getElementById('navbar__menu');

let isOpened = false;

navbarIcon.addEventListener('click', () => {
  if (isOpened === false) {
    navbarIcon.classList.remove('navbar__icon--closed');
    navbarMenu.classList.remove('navbar__menu--closed');
    navbarIcon.classList.add('navbar__icon--opened');
    navbarMenu.classList.add('navbar__menu--opened');
    isOpened = true;
  } else {
    navbarIcon.classList.remove('navbar__icon--opened');
    navbarMenu.classList.remove('navbar__menu--opened');
    navbarIcon.classList.add('navbar__icon--closed');
    navbarMenu.classList.add('navbar__menu--closed');
    isOpened = false;
  }
});

let navbarMenuItems = document.querySelectorAll('li.item');

navbarMenuItems.forEach((item) => {
  item.addEventListener('click', () => {
    navbarIcon.classList.remove('navbar__icon--opened');
    navbarMenu.classList.remove('navbar__menu--opened');
    navbarIcon.classList.add('navbar__icon--closed');
    navbarMenu.classList.add('navbar__menu--closed');
    isOpened = false;
  });
});

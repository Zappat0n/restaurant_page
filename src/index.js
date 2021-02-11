import tabRestaurant from './tab_restaurant';
import tabMenu from './tab_menu';
import tabContact from './tab_contact';
import styles from './assets/style.scss'; // eslint-disable-line no-unused-vars

function MainPage() {
  let container = '';

  const initialize = () => {
    container = document.querySelector('#content');
  };

  const createTab = (key) => {
    switch (key) {
      case 'Restaurant': tabRestaurant(); break;
      case 'Contact': tabContact(); break;
      case 'Menu': tabMenu(); break;
      default:
        console.log('Tab not found');
    }
  };

  const addTab = (ul, title) => {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = title;
    li.addEventListener('click', (event) => createTab(event.target.textContent));
  };

  const addTabNavbar = () => {
    const navBar = document.querySelector('nav');
    const ul = document.createElement('ul');
    navBar.appendChild(ul);
    addTab(ul, 'Restaurant');
    addTab(ul, 'Contact');
    addTab(ul, 'Menu');
  };

  const run = () => {
    addTabNavbar();
    createTab('Restaurant');
  };

  return { initialize, run, container };
}

const main = new MainPage();
main.initialize();
main.run();

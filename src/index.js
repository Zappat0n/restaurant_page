import restaurantModule from './tab_restaurant';
import menuModule from './tab_menu';
import contactModule from './tab_contact';
import styles from './assets/style.scss'; // eslint-disable-line no-unused-vars

const mainPage = (container) => {
  const createTab = (key) => {
    switch (key) {
      case 'Restaurant': restaurantModule(container); break;
      case 'Contact': contactModule(container); break;
      case 'Menu': menuModule(container); break;
      default: restaurantModule(container);
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

  return { run };
};

mainPage(document.querySelector('#content')).run();

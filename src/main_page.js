import TabRestaurant from './tab_restaurant';
import TabMenu from './tab_menu';
import TabContact from './tab_contact';

function MainPage() {
  let container = '';

  const initialize = () => {
    container = document.querySelector('#content');
  };

  const createTab = (key) => {
    switch (key) {
      case 'Restaurant': (new TabRestaurant()).initialize(); break;
      case 'Contact': (new TabContact()).initialize(); break;
      case 'Menu': (new TabMenu()).initialize(); break;
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

export { MainPage as default };

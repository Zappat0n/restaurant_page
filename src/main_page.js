import Tab from './tab';
import content from './content';

function MainPage() {
  let container = '';
  let tabs;

  const initialize = () => {
    container = document.querySelector('#content');
    tabs = content;
  };

  const createTab = (key) => {
    const tab = new Tab();
    tab.initialize(key);
    tab.run();
  };

  const addTab = (ul, title) => {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = title;
    li.addEventListener('click', (event) => createTab(tabs[event.target.textContent]));
  };

  const addTabNavbar = () => {
    const header = document.querySelector('header');
    const navBar = document.createElement('nav');
    const ul = document.createElement('ul');
    header.appendChild(navBar);
    navBar.appendChild(ul);
    addTab(ul, 'Restaurant');
    addTab(ul, 'Contact');
    addTab(ul, 'Menu');
  };

  const run = () => {
    addTabNavbar();
    createTab(tabs.Restaurant);
  };

  return { initialize, run, container };
}

export { MainPage as default };

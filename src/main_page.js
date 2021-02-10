import mainImage from './assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg';
import Tab from './tab';

function MainPage() {
  let container = '';
  const tabs = {
    Restaurant: {
      title: 'My Little Tavern',
      image: mainImage,
      content: {
        title: 'Heavenly food',
        body: 'I made a reservation in advance for my girlfriend, to say about the food that it was really heaven, we had a very good time, the behavior of the staff was excellent, I will definitely recommend',
        date: 'Date of visit: February 2021',
      },
    },
  };

  const initialize = () => {
    container = document.querySelector('#content');
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
    createTab(tabs[ 'Restaurant' ]);
  };

  return { initialize, run, container };
}

export { MainPage as default };

import menuImage from './assets/stefan-johnson-xIFbDeGcy44-unsplash.jpg';
import tabFactory from './tab';

const menuModule = (container) => {
  const obj = {
    title: 'Winter Menu',
    image: menuImage,
    content: [
      {
        title: 'We have added the following winter dishes to our menu',
        body: 'Classic Chicken Pot Pie\nFridge Clean-Out Nabe With Mushroom Dashi\nCreamy-ish of Mushroom Soup\nBrothy Tomato and Fish Soup With Lime',
        date: 'We are sure you will enjoy them!',
      },
    ],
  };
  tabFactory(container).appendChild(obj);
};

export { menuModule as default };

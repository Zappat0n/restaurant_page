import contactImage from './assets/tim-mossholder-FH3nWjvia-U-unsplash.jpg';
import Tab from './tab';

function TabMenu() {
  const obj = {
    title: 'Contact information',
    image: contactImage,
    content: [
      {
        title: 'Book a table',
        body: 'If you want to book a table please call: 555-9860-641\nYou can also do it by email: mylittletavern@doodle.com',
        date: 'We are looking forward to meet you!',
      },
    ],
  };

  const initialize = () => {
    const tab = new Tab();
    tab.initialize(obj);
    tab.run();
  };

  return { initialize };
}

export { TabMenu as default };

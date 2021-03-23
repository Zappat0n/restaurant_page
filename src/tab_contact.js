import contactImage from './assets/tim-mossholder-FH3nWjvia-U-unsplash.jpg';
import tabFactory from './tab';

const contactModule = (container) => {
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
  tabFactory(container).appendChild(obj);
};

export { contactModule as default };

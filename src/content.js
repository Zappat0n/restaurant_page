import mainImage from './assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg';
import contactImage from './assets/tim-mossholder-FH3nWjvia-U-unsplash.jpg';
import menuImage from './assets/stefan-johnson-xIFbDeGcy44-unsplash.jpg';

const content = {
  Restaurant: {
    title: 'My Little Tavern',
    image: mainImage,
    content: [
      {
        title: 'Heavenly food',
        body: 'I made a reservation in advance for my girlfriend, to say about the food that it was really aven, we had a very good time, the behavior of the staff was excellent, I will definitely recommend',
        date: 'Date of visit: February 2021',
      }, {
        title: 'Fantastic all round, would',
        body: 'Fantastic all round, would highly recommend! Pre booking is essential though, covid measures friendly and safe and the atmosphere is stunning. The food is heavenly and I was spoilt for choice, it was my birthday whilst visiting and the staff made a real fuss of me!',
        date: 'Date of visit: September 2020',
      },
    ],
  },
  Contact: {
    title: 'Contact information',
    image: contactImage,
    content: [
      {
        title: 'Book a table',
        body: 'If you want to book a table please call: 555-9860-641\nYou can also do it by email: mylittletavern@doodle.com',
        date: 'We are looking forward to meet you!',
      },
    ],
  },
  Menu: {
    title: 'Winter Menu',
    image: menuImage,
    content: [
      {
        title: 'We have added the following winter dishes to our menu',
        body: 'Classic Chicken Pot Pie\nFridge Clean-Out Nabe With Mushroom Dashi\nCreamy-ish of Mushroom Soup\nBrothy Tomato and Fish Soup With Lime',
        date: 'Date of visit: February 2021',
      },
    ],
  },
};

export { content as default };

import mainImage from './assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg';
import Tab from './tab';

function TabRestaurant() {
  const obj = {
    title: 'Restaurant',
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
  };

  const initialize = () => {
    const tab = new Tab();
    tab.initialize(obj);
    tab.run();
  };

  return { initialize };
}

export { TabRestaurant as default };

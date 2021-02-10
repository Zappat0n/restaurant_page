import Main_image from './assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg'

const mainPage = (() => {
  const initialize = () => {
    this.container = document.querySelector('#content');
  };

  const addTitle = (title) => {
    const h1 = document.createElement('h1');
    h1.textContent = title;
    this.container.appendChild(h1);
  };

  const addImage = (image) => {
    const myImage = new Image();
    myImage.src = image;
    this.container.appendChild(myImage);
  };

  const addArticle = (title, body, date) => {
    const h4 = document.createElement('h4');
    h4.textContent = title;
    const p = document.createElement('p');
    p.textContent = body;
    const p2 = document.createElement('p');
    p2.textContent = date;
    this.container.appendChild(document.createElement('br'));
    this.container.appendChild(h4);
    this.container.appendChild(p);
    this.container.appendChild(p2);
  };

  const run = () => {
    addTitle('My Little Tavern');
    addImage(Main_image);
    addArticle('Heavenly food', 'I made a reservation in advance for my girlfriend, to say about the food that it was really heaven, we had a very good time, the behavior of the staff was excellent, I will definitely recommend', 'Date of visit: February 2021');
  };

  return { initialize, run };
})();

module.exports = mainPage;

const mainPage = (() => {

  const initialize = () => {
    this.body = document.querySelector('body');
  };

  const addTitle = (title) => {
    const h1 = document.createElement('h1');
    h1.textContent = title;
    this.body.appendChild(h1);
  };

  const run = () => {
    addTitle('My Little Tavern');
  };

  return { initialize, run };
})();

module.exports = mainPage;

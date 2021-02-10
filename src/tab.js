
function Tab() {
  let obj;
  let container;

  const initialize = (_obj) => {
    obj = _obj;
    container = document.querySelector('#content');
  };

  const addTitle = (title) => {
    const h1 = document.createElement('h2');
    h1.textContent = title;
    container.appendChild(h1);
  };

  const addImage = (image) => {
    const myImage = new Image();
    myImage.src = image;
    myImage.classList.add('main-image');
    container.appendChild(myImage);
  };

  const addArticle = (content) => {
    const h4 = document.createElement('h4');
    h4.textContent = content.title;
    container.appendChild(document.createElement('br'));
    container.appendChild(h4);
    content.body.split('\n').forEach(value => {
      const p = document.createElement('p');
      p.textContent = value;
      container.appendChild(p);
    });
    const p2 = document.createElement('p');
    p2.textContent = content.date;
    container.appendChild(p2);
  };


  const run = () => {
    container.innerHTML = '';
    addTitle(obj.title);
    addImage(obj.image);
    obj.content.forEach(element => {
      addArticle(element);
    });
  };

  return { initialize, run };
}

export { Tab as default };

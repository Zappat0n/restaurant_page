
function Tab() {
  let obj;
  let container;

  const initialize = (_obj) => {
    obj = _obj;
    container = document.querySelector('#content');
  };

  const addTitle = (title) => {
    const h1 = document.createElement('h1');
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
    const p = document.createElement('p');
    p.textContent = content.body;
    const p2 = document.createElement('p');
    p2.textContent = content.date;
    container.appendChild(document.createElement('br'));
    container.appendChild(h4);
    container.appendChild(p);
    container.appendChild(p2);
  };


  const run = () => {
    container.innerHTML = '';
    addTitle(obj.title);
    addImage(obj.image);
    addArticle(obj.content);
  };

  return { initialize, run };
}

export { Tab as default };

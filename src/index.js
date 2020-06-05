import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/util';
import watchers from './view';

const links = [];

const app = () => {
  const state = {

  };

  const form = document.querySelector('.rss-form');
  const inputUrl = form.querySelector('[name=url]');
  const buttonAdd = form.querySelector('[name=add]');

  inputUrl.addEventListener('input', ({ target }) => {
    links.push(target.value);
  });

  watchers.watchData(links);
};

app();

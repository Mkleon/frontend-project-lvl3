import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/util';
import watchData from './view';

const data = [];

const app = () => {
  const state = {

  };

  const form = document.querySelector('.rss-form');
  const fieldUrl = form.querySelector('[name=url]');

  watchData(data);
};

app();

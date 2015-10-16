import Features from '../src';

const parent = document.getElementById('features');

Features().map((feature) => {
  var el = document.createElement('li');
  el.innerText = feature;
  parent.appendChild(el);
});

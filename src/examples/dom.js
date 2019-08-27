const header = document.getElementById('#header');
const title = document.getElementByTag('h1');
const cars = document.getElementsByClassName('.car');
const specific = document.querySelector('#header .container h2.subtitle span');
const div = document.createElement('div');

title.setinnerHTML('JavaScript Crash Course');
title.setAttribute('enabled', true);
title.style.backgroundColor = 'blue';
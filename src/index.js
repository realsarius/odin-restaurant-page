import './style.css';

import home from './home';
import gallery from './gallery';
import story from './story';
import {
  navBar,
  navBarLefta,
  navBarRightUList2a,
  navBarRightUList3a,
  navBarRightUList4a,
} from './nav-bar';
import footer from './footer';

const content = document.querySelector('.content');
const container = document.createElement('div');
container.className = 'container';

container.appendChild(navBar);

container.appendChild(home);
container.appendChild(gallery);
container.appendChild(story);

container.appendChild(footer);

navBarLefta.addEventListener('click', () => {
  document.getElementById(home.id).style.display = 'flex';
  document.getElementById(gallery.id).style.display = 'none';
  document.getElementById(story.id).style.display = 'none';
});

navBarRightUList2a.addEventListener('click', () => {
  document.getElementById(home.id).style.display = 'flex';
  document.getElementById(gallery.id).style.display = 'none';
  document.getElementById(story.id).style.display = 'none';
});

navBarRightUList3a.addEventListener('click', () => {
  document.getElementById(home.id).style.display = 'none';
  document.getElementById(gallery.id).style.display = 'flex';
  document.getElementById(story.id).style.display = 'none';
});

navBarRightUList4a.addEventListener('click', () => {
  document.getElementById(home.id).style.display = 'none';
  document.getElementById(gallery.id).style.display = 'none';
  document.getElementById(story.id).style.display = 'flex';
});

content.appendChild(container);

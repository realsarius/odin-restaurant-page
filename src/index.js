import home from './home';
import galleryContent from './gallery';
import story from './story';
import {
  navBar,
  navBarRightUList2a,
  navBarRightUList3a,
  navBarRightUList4a,
} from './nav-bar';

const content = document.querySelector('.content');
const container = document.createElement('div');
container.className = 'container';

container.appendChild(navBar);

container.appendChild(home);
container.appendChild(galleryContent);
container.appendChild(story);

navBarRightUList2a.addEventListener('click', () => {
  document.getElementById(home.id).style.display = 'flex';
  document.getElementById(galleryContent.id).style.display = 'none';
  document.getElementById(story.id).style.display = 'none';
});

navBarRightUList3a.addEventListener('click', () => {
  document.getElementById(home.id).style.display = 'none';
  document.getElementById(galleryContent.id).style.display = 'flex';
  document.getElementById(story.id).style.display = 'none';
});

navBarRightUList4a.addEventListener('click', () => {
  document.getElementById(home.id).style.display = 'none';
  document.getElementById(galleryContent.id).style.display = 'none';
  document.getElementById(story.id).style.display = 'flex';
});

content.appendChild(container);

const gallery = document.createElement('div');
const galleryContent = document.createElement('div');
galleryContent.className = 'gallery-content';

const gallery1 = document.createElement('div');
const gallery2 = document.createElement('div');
const gallery3 = document.createElement('div');
const gallery4 = document.createElement('div');
const gallery5 = document.createElement('div');
gallery1.className = 'gallery1';
gallery2.className = 'gallery2';
gallery3.className = 'gallery3';
gallery4.className = 'gallery4';
gallery5.className = 'gallery5';

gallery.id = 'gallery';

gallery.style.display = 'none';

galleryContent.appendChild(gallery1);
galleryContent.appendChild(gallery2);
galleryContent.appendChild(gallery3);
galleryContent.appendChild(gallery4);
galleryContent.appendChild(gallery5);
gallery.appendChild(galleryContent);
export default gallery;

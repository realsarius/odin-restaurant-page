const gallery = document.createElement('div');
const galleryContent = document.createElement('div');
galleryContent.className = 'gallery-content';

gallery.id = 'gallery';

galleryContent.textContent = 'Gallery';

gallery.style.display = 'none';

gallery.appendChild(galleryContent);
export default gallery;

const gallerySlider = document.createElement('div');
const galleryOutside = document.createElement('div');
const gallery = document.createElement('div');
const galleryImage1 = document.createElement('img');
const galleryImage2 = document.createElement('img');
const galleryImage3 = document.createElement('img');
const galleryImage4 = document.createElement('img');
const galleryImage5 = document.createElement('img');

const sliderNav = document.createElement('div');
sliderNav.className = 'sliderNav';

galleryImage1.className = 'galleryImage1';
galleryImage2.className = 'galleryImage2';
galleryImage3.className = 'galleryImage3';
galleryImage4.className = 'galleryImage4';
galleryImage5.className = 'galleryImage5';

gallerySlider.id = 'gallerySlider';
galleryOutside.className = 'galleryOutside';
gallery.className = 'gallery';

gallery.appendChild(galleryImage1);
gallery.appendChild(galleryImage2);
gallery.appendChild(galleryImage3);
gallery.appendChild(galleryImage4);
gallery.appendChild(galleryImage5);
galleryOutside.appendChild(gallery);
galleryOutside.appendChild(sliderNav);
gallerySlider.appendChild(galleryOutside);

gallerySlider.style.display = 'none';

export default gallerySlider;

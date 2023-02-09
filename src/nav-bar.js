const navBar = document.createElement('nav');
navBar.className = 'nav-bar';
const navBarLeft = document.createElement('div');
const navBarRight = document.createElement('div');
const navBarRightUList = document.createElement('ul');

// const navBarRightUList1 = document.createElement('li');
const navBarRightUList2 = document.createElement('li');
const navBarRightUList3 = document.createElement('li');
const navBarRightUList4 = document.createElement('li');
// const navBarRightUList5 = document.createElement('li');

// Links
// const navBarRightUList1a = document.createElement('a');
const navBarRightUList2a = document.createElement('a');
const navBarRightUList3a = document.createElement('a');
const navBarRightUList4a = document.createElement('a');
// const navBarRightUList5a = document.createElement('a');
const navBarLefta = document.createElement('a');

// navBarRightUList1a.href = '#';
navBarRightUList2a.href = '#';
navBarRightUList3a.href = '#';
navBarRightUList4a.href = '#';
// navBarRightUList5a.href = '#';

navBarLefta.href = '#';

navBarLefta.textContent = 'TRÉMONT';
navBarLeft.className = 'logo';

navBarLeft.appendChild(navBarLefta);

// navBarRightUList1a.textContent = 'Order Now';
navBarRightUList2a.textContent = 'Home';
navBarRightUList3a.textContent = 'Gallery';
navBarRightUList4a.textContent = 'Story';
// navBarRightUList5a.textContent = 'Visit';

// navBarRightUList1.appendChild(navBarRightUList1a);
navBarRightUList2.appendChild(navBarRightUList2a);
navBarRightUList3.appendChild(navBarRightUList3a);
navBarRightUList4.appendChild(navBarRightUList4a);
// navBarRightUList5.appendChild(navBarRightUList5a);

// navBarRightUList.appendChild(navBarRightUList1);
navBarRightUList.appendChild(navBarRightUList2);
navBarRightUList.appendChild(navBarRightUList3);
navBarRightUList.appendChild(navBarRightUList4);
// navBarRightUList.appendChild(navBarRightUList5);

navBarRight.appendChild(navBarRightUList);

navBar.appendChild(navBarLeft);
navBar.appendChild(navBarRight);

export {
  navBar,
  navBarLefta,
  // navBarRightUList1a,
  navBarRightUList2a,
  navBarRightUList3a,
  navBarRightUList4a,
  // navBarRightUList5a,
};

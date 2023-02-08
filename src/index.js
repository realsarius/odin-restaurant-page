import './style.css';

const content = document.querySelector('.content');
const container = document.createElement('div');
const navBar = document.createElement('nav');
const navBarLeft = document.createElement('div');
const navBarRight = document.createElement('div');
const navBarRightUList = document.createElement('ul');

const navBarRightUList1 = document.createElement('li');
const navBarRightUList2 = document.createElement('li');
const navBarRightUList3 = document.createElement('li');
const navBarRightUList4 = document.createElement('li');
const navBarRightUList5 = document.createElement('li');

// Links
const navBarRightUList1a = document.createElement('a');
const navBarRightUList2a = document.createElement('a');
const navBarRightUList3a = document.createElement('a');
const navBarRightUList4a = document.createElement('a');
const navBarRightUList5a = document.createElement('a');

navBarRightUList1a.href = '#';
navBarRightUList2a.href = '#';
navBarRightUList3a.href = '#';
navBarRightUList4a.href = '#';
navBarRightUList5a.href = '#';

navBarLeft.textContent = 'asdsa';
navBarRightUList.className = 'links';

navBarRightUList1a.textContent = 'Order Now';
navBarRightUList2a.textContent = 'Home';
navBarRightUList3a.textContent = 'Gallery';
navBarRightUList4a.textContent = 'Story';
navBarRightUList5a.textContent = 'Visit';

container.style.cssText = `
width: 100vw;
height: 100vh;
`;
container.style.cssText = `
width: 100%;
height: 100vh;
`;
navBar.style.cssText = `
height: 100px;
border: 1px red solid;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 30px;
`;
navBarRightUList.style.cssText = `
display: flex;
gap: 20px;
`;
navBarRightUList1.appendChild(navBarRightUList1a);
navBarRightUList2.appendChild(navBarRightUList2a);
navBarRightUList3.appendChild(navBarRightUList3a);
navBarRightUList4.appendChild(navBarRightUList4a);
navBarRightUList5.appendChild(navBarRightUList5a);

navBarRightUList.appendChild(navBarRightUList1);
navBarRightUList.appendChild(navBarRightUList2);
navBarRightUList.appendChild(navBarRightUList3);
navBarRightUList.appendChild(navBarRightUList4);
navBarRightUList.appendChild(navBarRightUList5);

navBarRight.appendChild(navBarRightUList);

navBar.appendChild(navBarLeft);
navBar.appendChild(navBarRight);
container.appendChild(navBar);
content.appendChild(container);

const content = document.querySelector('.content');
const container = document.createElement('div');

container.style.cssText = `
width: 100vw;
height: 100vh;
`;
container.style.cssText = `
width: 100%;
height: 200px;
border: 1px red solid;
`;

content.appendChild(container);

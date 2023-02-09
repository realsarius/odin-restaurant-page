const footer = document.createElement('div');
const footerText = document.createElement('p');

footerText.textContent = `realsarius © ${new Date().getFullYear()}`;
footer.className = 'footer';

footer.appendChild(footerText);

export default footer;

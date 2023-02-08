const footer = document.createElement('div');
const footerText = document.createElement('p');

footerText.textContent = `Berkan Sözer © ${new Date().getFullYear()}`;
footer.className = 'footer';

footer.appendChild(footerText);

export default footer;

const home = document.createElement('div');
const homeContent = document.createElement('div');
homeContent.className = 'home-content';

home.textContent = 'Home';
home.id = 'home';

home.appendChild(homeContent);

export default home;

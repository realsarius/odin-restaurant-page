const home = document.createElement('div');
const homeContent = document.createElement('div');
const address = document.createElement('div');
const title = document.createElement('div');
const titlePart1 = document.createElement('div');
const titlePart2 = document.createElement('div');
const titlePart3 = document.createElement('div');
homeContent.className = 'home-content';

address.id = 'address';
title.id = 'title';
home.id = 'home';

address.textContent = '123 Fake Street -- Seattle, WA -- 206-555-7890';
titlePart1.textContent = 'EAT';
titlePart2.textContent = 'DRINK';
titlePart3.textContent = 'VISIT';

title.appendChild(titlePart1);
title.appendChild(titlePart2);
title.appendChild(titlePart3);
homeContent.appendChild(address);
homeContent.appendChild(title);
home.appendChild(homeContent);

export default home;

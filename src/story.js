const story = document.createElement('div');
const storyContent = document.createElement('div');
const title = document.createElement('h1');
const main = document.createElement('main');

storyContent.className = 'story-content';

story.id = 'story';

title.textContent = 'STORY';
main.textContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Egestas purus viverra accumsan in nisl nisi. Etiam sit amet nisl purus in mollis nunc. Nibh ipsum consequat nisl vel pretium. Fermentum dui faucibus in ornare quam viverra. Arcu non odio euismod lacinia at quis risus sed. Malesuada fames ac turpis egestas sed tempus. Consectetur adipiscing elit duis tristique sollicitudin. Suspendisse sed nisi lacus sed viverra tellus in hac.\r\n \r\nNeque laoreet suspendisse interdum consectetur libero id faucibus. Viverra vitae congue eu consequat ac felis. Enim sit amet venenatis urna cursus eget. Ultrices gravida dictum fusce ut placerat. Viverra accumsan in nisl nisi scelerisque eu ultrices. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Aliquet lectus proin nibh nisl condimentum id venenatis. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Ornare arcu dui vivamus arcu felis bibendum ut.';

story.style.display = 'none';

storyContent.appendChild(title);
storyContent.appendChild(main);
story.appendChild(storyContent);
export default story;

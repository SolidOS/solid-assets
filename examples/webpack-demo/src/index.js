// Import theme tokens – the CSS variables are applied globally.
import '@solidos/tokens/themes.css';

// Import only the icons you need so webpack only emits those SVG files.
import searchIconUrl from '@solidos/icons/icons/search.svg';
import menuIconUrl from '@solidos/icons/icons/menu.svg';
import logoUrl from '@solidos/icons/logos/solidos.svg';

// Apply the default light theme; change to 'dark' for the dark variant.
document.documentElement.dataset.theme = 'light';

// Toggle theme on button click.
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  const current = document.documentElement.dataset.theme;
  document.documentElement.dataset.theme = current === 'dark' ? 'light' : 'dark';
});

// Render UI icons using CSS mask + --icon-color token.
function createUiIcon(url, label) {
  const span = document.createElement('span');
  span.className = 'Icon';
  span.setAttribute('role', 'img');
  span.setAttribute('aria-label', label);
  span.style.setProperty('--icon-mask', `url("${url}")`);
  return span;
}

document.getElementById('icons').append(
  createUiIcon(searchIconUrl, 'Search'),
  createUiIcon(menuIconUrl, 'Menu')
);

// Render the multi-color logo via <img>.
const logo = document.createElement('img');
logo.src = logoUrl;
logo.alt = 'SolidOS';
logo.className = 'Logo';
document.getElementById('logo').appendChild(logo);

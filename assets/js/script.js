function changeMode() {
	changeClasses();
	changeText();
}

function changeClasses() {
	button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    ul.classList.toggle(darkModeClass);
	nav.classList.toggle(darkModeClass);
}

function changeText() {
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (nav.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
		return;
	}

	button.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const ul = document.getElementById('ul-mode-selector');
const h1 = document.getElementById('page-title');
const nav = document.getElementsByTagName('nav')[0];

button.addEventListener('click', changeMode);
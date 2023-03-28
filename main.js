const menuButton = document.querySelector('[aria-controls="menu-list"]');

function handleClick() {
	const buttonState = menuButton.getAttribute('aria-expanded');
	menuButton.setAttribute(
		'aria-expanded',
		buttonState === 'true' ? 'false' : 'true'
	);
}

menuButton.addEventListener('click', handleClick);

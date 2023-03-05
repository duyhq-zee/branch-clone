// Click X button to close the utility bar
const closeButton = document.querySelector('.utility-bar .close-button');

closeButton.addEventListener('click', () => {
	const utilityBar = document.querySelector('.utility-bar');
	utilityBar.style.display = 'none';
});

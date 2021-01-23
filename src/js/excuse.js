const getButtonID = document.querySelector('#generateButton');
const bongoCat = document.querySelector('#cat-no-animation');
const bongoCatAnimation = document.querySelector('#cat-animation');
const textDiv = document.querySelector('#textDiv');
const loading = document.querySelector('#loading');

window.onload = () => {
	getButtonID.addEventListener('click', () => {
		addBongoCat();
	});
};

const addBongoCat = () => {
	textDiv.classList.add('d-none');
	bongoCat.classList.add('d-none');
	bongoCatAnimation.classList.remove('d-none');
	loading.classList.remove('d-none');
	setTimeout(removeBongoCat, 3000);
};

const removeBongoCat = () => {
	loading.classList.add('d-none');
	bongoCat.classList.remove('d-none');
	bongoCatAnimation.classList.add('d-none');
	textDiv.classList.remove('d-none');
	generateName();
};

const randomExcuse = (arraylength) => {
	return Math.floor(Math.random() * arraylength);
};

const generateName = () => {
	let who = [
		"Sorry I'm late, but",
		'Sorry I forgot your birthday,but',
		"I couldn't come to your wedding,",
		"You won't beleive this:",
		'This sounds crazy, but',
		'This sounds unbeleivable but',
		'Holy shit!',
		'Oh man, ',
	];

	let action = [
		'the lord of darkness',
		'Godzilla',
		'the human centipede',
		'a tiny lizard',
		'the first page of Twilight',
		'the inventor of the slanket',
		'the director of 101 dalmations',
		'the little kid from Indiana Jones',
		'a man with six fingers on his hand',
		'Donald Trump',
		'Red Foreman',
		'Scrooge McDuck',
		'the Ghostbusters',
		'Diablo, the god of death',
		'Harry Potter',
		'Captain Kirk',
		'Dobby the elf',
		'Sherlock Holmes',
		'my speakers',
		'Chtulu',
		'a homeless guy',
		'a frag grenade',
		'a lady with a spandex watch',
		'a toothpick',
		'the creators of southpark',
	];

	let what = [
		'tried to kill me',
		'ran me over with a tractor',
		'ate my homework',
		'tried to seduce me',
		'stole my car',
		'stole my identity',
		'beamed me up',
		'gave me knucle sandwich',
		'ate my lunch',
		'dropped kicked me into another dimension',
		'ripped a hole in the space time continuum',
		'did a moonwalk on my porsche',
		'TPed by house',
		'killed Kenny',
		'sent me to Narnia',
		'gave me a hickey',
		'set my house on fire',
		'kidnapped my lizard',
	];

	let when = [
		'before the class',
		'right on time',
		'when I finished',
		'during my lunch',
		'while I was praying',
	];

	let finalArr = [who, action, what, when];

	let string = '';

	for (let i = 0; i < finalArr.length; i++) {
		string = string.concat(' ', finalArr[i][randomExcuse(finalArr[i].length)]);
	}

	return (document.getElementById('excuse').innerHTML = string);
};

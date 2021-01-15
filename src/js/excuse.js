function formatString(string) {
	return string[0].toUpperCase() + string.slice(1);
}

function randomExcuse(a, b) {
	return Math.floor(Math.random() * (a - b)) + b;
}

function generateName() {
	var who = [
		"Sorry I'm late, but",
		'sorry I forgot your birthday,but',
		"i couldn't come to your wedding,",
		"you won't beleive this:",
		'This sounds crazy, but',
		'This sounds unbeleivable but',
		'Holy shit!',
		'oh man, ',
	];

	var action = [
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

	var whe = [
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

	var excuse =
		formatString(who[randomExcuse(0, who.length + 1)]) +
		' ' +
		formatString(action[randomExcuse(0, action.length + 1)]) +
		' ' +
		formatString(whe[randomExcuse(0, whe.length + 1)]);

	return excuse;
}

function newExcuse() {
	document.getElementById('excuse').innerHTML = generateName();
}

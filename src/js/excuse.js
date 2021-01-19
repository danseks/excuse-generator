function randomExcuse(arraylength) {
	return Math.floor(Math.random() * arraylength);
}

function formatString(string) {
	console.log(string);
	return string[0].toUpperCase() + string.slice(1);
}

function generateName() {
	let who = [
		"Sorry I'm late, but",
		'sorry I forgot your birthday,but',
		"i couldn't come to your wedding,",
		"you won't beleive this:",
		'This sounds crazy, but',
		'This sounds unbeleivable but',
		'Holy shit!',
		'oh man, ',
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
	    string = string.concat(
		    ' ',
		    formatString(finalArr[i][randomExcuse(finalArr[i].length)])
	    );
    }

	return string;
}

function newExcuse() {
	document.getElementById('excuse').innerHTML = generateName();
}

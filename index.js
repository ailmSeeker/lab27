// Code your solutions in this file

function writeCards(names){
	let returnName = [];
	for(let x of names){
		returnName.push(`Thank you, ${x}, for the wonderful surprise gift!`);	
	}

	return returnName;
}

function countDown(numbers){
	for(let x = numbers; x >= 0; x--){
		console.log(x);
	}
}

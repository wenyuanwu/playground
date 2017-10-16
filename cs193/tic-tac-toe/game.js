const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';

function assignSpace(space, owner){
	const image = document.createElement('img');
	image.src = owner === 'x'? X_IMAGE_URL : O_IMAGE_URL;
	space.appendChild(image);

	const index = parseInt(space.dataset.index);
	takenBoxes[index] = owner;
	const indexToRemove = freeBoxes.indexOf(space);
	freeBoxes.splice(indexToRemove, 1);
	space.removeEventListener('click', changeToX);

}

function changeToX(event){
	assignSpace(event.currentTarget, 'x');
	if(isGameOver()){
		displayWinner();
	} else{
		computerChooseO();
	}
}

function computerChooseO(){
	const allBoxes = document.querySelectorAll('#grid div');
	const index = Math.floor(Math.random()*freeBoxes.length);
	const freeSpace = freeBoxes[index];
	assignSpace(freeSpace, 'o');
	if(isGameOver()){
		displayWinner();
	}
}

function isGameOver(){
	return freeBoxes.length === 0 || getWinner() !== null;
}

function displayWinner(){
	const winner = getWinner();
	const resultContainer = document.querySelector('#results');
	const header = document.createElement('h1');
	if(winner === 'x'){
		header.textContent = "You Win!";
	} else if (winner === 'o'){
		header.textContent = "Computer Wins!";
	} else {
		header.textContent = 'Tie';
	}

	resultContainer.appendChild(header);

	for (const box of freeBoxes){
		box.removeEventListener('click', changeToX);
	}
}

function checkBoxes(one, two, three){
	if (takenBoxes[one] !== undefined &&
		takenBoxes[one] === takenBoxes[two] && 
		takenBoxes[two] === takenBoxes[three]){
		return takenBoxes[one];
	}
	return null;
}

function getWinner(){
	for (let col = 0; col < 3; col ++){
		const offset = col * 3;
		// 0, 1, 2
		// 3, 4, 5
		// 6,7,8

		let result = checkBoxes(offset, 1+offset, 2+ offset) || 
			checkBoxes(col, 3+ col, 6+col);
		// 0, 3, 6
		// 1, 4, 7
		// 2, 5, 8	
		if (result){
			return result;
		}
	}

	return checkBoxes(0, 4, 8) || checkBoxes(2, 4, 6);
}

const freeBoxes = [];
const takenBoxes = {};

const boxes = document.querySelectorAll('#grid div');
for (const box of boxes){
	box.addEventListener('click', changeToX);
	freeBoxes.push(box);
}


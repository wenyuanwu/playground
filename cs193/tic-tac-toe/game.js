const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';

function changToX(event){
	const container = event.currentTarget;
	const image = document.createElement('img');
	image.src = X_IMAGE_URL;
	container.appendChild(image);
	container.removeEventListener('click', changToX);
}

const boxes = document.querySelectorAll('#grid, div');
for (const box of boxes){
	box.addEventListener('click', changToX);
}


function onSuccess(response){
	console.log(response.status);	
}

function onError(error){
	console.log('Error: ' + error);
}

fetch('image.txt').then(onSuccess, onError);
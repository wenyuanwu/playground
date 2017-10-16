Array.prototype.flatten = Array.prototype.flatten || function(){
	return this.reduce(function(flat, toFlatten){
		return flat.concat(Array.isArray(toFlatten) ? toFlatten.flatten(): toFlatten);
	}, []);	
};

let b = [1, 3, [4, 6, [8]]];
console.log(b.flatten());
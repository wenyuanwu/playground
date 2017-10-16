Array.prototype.flatten = Array.prototype.flatten || function(arr=[]){

	this.forEach(function(el){
		if (typeof el === "object"){
			el.flatten(arr);
		} else {
			arr.push(el);
		}
	});

	return arr;
};

// let a = [1,3,5];
// console.log(a.flatten());
let b = [1, 3, [4, 6, [8]]];
console.log(b.flatten());
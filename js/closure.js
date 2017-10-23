const closure = function(a){
	var result = [], i, n; 
	for(i = 0, n = a.length; i < n; i++){
		// console.log(i);
		result[i] = function(){
			return a[i];
		};
		// console.log(result);
	}
	// console.log(result, "final");
	return result; 
};

let a = [10, 1, 2, 3];
let arr = closure(a);
console.log(arr, "arr");
let arr_0 = arr[0];
console.log(arr_0(), "arr_0()");
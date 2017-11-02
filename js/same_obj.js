function sameObj(a,b){
	let boolean_value = true; 

	if (Object.keys(a).length !== Object.keys(b).length){
		boolean_value = false;
	}

	Object.keys(a).forEach(function(k){
		if (typeof a[k]!==  "object" ){
			if (a[k] !== b[k]){
			   boolean_value = false;	
			}
		} else {
			boolean_value = sameObj(a[k], b[k]);
		}
		}
	);

	return boolean_value;
}

var a = {x: 1, y: [1,2]};
var b = {x: 1, y: [1,2,3]};

console.log(sameObj(a, b));
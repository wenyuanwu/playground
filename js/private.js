const f = function(){

	function inner(arg){
		console.log(arg);
	}

	return function(arg){
		inner(arg);
	};

};

let g = f();
g(100);

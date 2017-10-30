const outer_fun = function (n){
	for (let i = 0; i < n; i++){
		// (function(index){ 
		// 	setTimeout( function(){console.log(index);}, index * 1000);
		// })(i);
		inner(i)(i);
	}
};

const inner = function(index){

	const cb = function(){
		console.log(index);
	};	

	const timer = function(index){
		// console.log("timer");
		setTimeout(cb, index * 1000);
	};			

	return timer;
};

outer_fun(10);
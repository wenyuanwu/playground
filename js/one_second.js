const oneSecond = function(n){
	for (let i = 1; i < n + 1; i++){
		(function(index){
			setTimeout(function(){console.log(index);}, index * 1000);
		})(i);
	}
};

oneSecond(10);
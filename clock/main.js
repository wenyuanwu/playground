const clock = document.getElementById("clock");

var date = new Date();
var hour;
var minute;
var second;
var s_hour;
var s_minute;
var s_second; 

const setClock = function(){
	console.log("set");
	if (hour){
		second += 1; 
		if (second > 59){
			second = 0;
			minute += 1;
		} 

		if (minute > 59){
			minute = 0;
			hour += 1;
		}

		if (hour > 23){
			hour = 0;
			minute = 0;
			second = 0;
		}

	} else{
		hour = date.getHours();
		minute = date.getMinutes();
		second = date.getSeconds();
	}
	setClockString();
};

const setClockString = function(){

	if (hour < 10){
	s_hour = "0" + hour.toString();
	} else{
		s_hour = hour.toString();
	}

	if (minute < 10){
	s_minute = "0" + minute.toString();
	} else{
	s_minute = minute.toString();
	}

	if (second < 10){
	s_second = "0" + second.toString();
	} else{
	s_second = second.toString();
	} 

	insertNewdate();
};

const insertNewdate = function(){
	if (s_hour < 12){
		clock.textContent = s_hour + ":" + s_minute + ":" + s_second + " AM";}
	else{
		clock.textContent = s_hour + ":" + s_minute + ":" + s_second + " PM";
	}
} ;

setInterval(setClock, 1000);

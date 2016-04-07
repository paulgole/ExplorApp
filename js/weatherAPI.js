// setup is used to pull the data from the appropriate city & return the weather & current temp

function setup() {
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + winners[0].name + "&APPID=9b021461b994f10f96e2234841d14255&units=metric", gotData);
}

function gotData(data) {
	var currentWeatherDiv = document.querySelector('.currentWeather');
	var curDeg = document.querySelector('.curDeg');
	var currentDeg = document.createTextNode(Math.floor(data.main.temp) + "\xB0" + 'C ');
	curDeg.appendChild(currentDeg);
	var curWeath = document.querySelector('.curWeath');
	var currentCondition = document.createTextNode(data.weather[0].main);
	curWeath.appendChild(currentCondition);

	console.log("The current weather in " + data.name + " is " + data.main.temp);
	console.log(data.weather[0].main);
}

// weekForecast is to pull data for the full week

function weekForecast() {
	$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + winners[0].name + "&appid=9b021461b994f10f96e2234841d14255&units=metric", getData)
}

function getData(data) {
	var weatherIcon1 = document.querySelector('#weatherIcon1');
	var weatherIcon2 = document.querySelector('#weatherIcon2');
	var weatherIcon3 = document.querySelector('#weatherIcon3');
	var weatherIcon4 = document.querySelector('#weatherIcon4');
	var weatherIcon5 = document.querySelector('#weatherIcon5');


	// var date = new Date(parseInt(data.list[0].dt)*1000);
	// // Hours part from the timestamp
	// var hours = date.getHours();
	// // Minutes part from the timestamp
	// var minutes = "0" + date.getMinutes();
	// // Seconds part from the timestamp
	// var seconds = "0" + date.getSeconds();

	var weatherIcons = [weatherIcon1, weatherIcon2, weatherIcon3, weatherIcon4, weatherIcon5];

	for (i = 0; i < 5; i++) {
		if (data.list[i].weather[0].id >= 600 && data.list[i].weather[0].id <= 623) {
			weatherIcons[i].style.backgroundImage = "url(img/weatherIcons/weatherUI_snow.svg)";
		} else if (data.list[i].weather[0].id >= 200 && data.list[i].weather[0].id <= 232) {
			weatherIcons[i].style.backgroundImage = "url(img/weatherIcons/weatherUI_lightning.svg)";
		} else if (data.list[i].weather[0].id >= 300 && data.list[i].weather[0].id <= 531) {
			weatherIcons[i].style.backgroundImage = "url(img/weatherIcons/weatherUI_rain.svg)";
		} else if (data.list[i].weather[0].id >= 701 && data.list[i].weather[0].id <= 781) {
			weatherIcons[i].style.backgroundImage = "url(img/weatherIcons/weatherUI_atmosphere.svg)";
		} else if (data.list[i].weather[0].id == 800 || data.list[i].weather[0].id == 951) {
			weatherIcons[i].style.backgroundImage = "url(img/weatherIcons/weatherUI_sun.svg)";
		} else if (data.list[i].weather[0].id >= 801 && data.list[i].weather[0].id <= 804) {
			weatherIcons[i].style.backgroundImage = "url(img/weatherIcons/weatherUI_cloudy.svg)";
		} else if (data.list[i].weather[0].id >= 900 && data.list[i].weather[0].id <= 906) {
			weatherIcons[i].style.backgroundImage = "url(img/weatherIcons/weatherUI_severe.svg)";
		} else if (data.list[i].weather[0].id >= 952 && data.list[i].weather[0].id <= 962) {
			weatherIcons[i].style.backgroundImage = "url(img/weatherIcons/weatherUI_wind.svg)";
		}
	}
}

function weekDays() {

	$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + winners[0].name + "&appid=9b021461b994f10f96e2234841d14255&units=metric", getDay)
}

function getDay(data) {

	var day1 = document.querySelector('#day1');
	var day2 = document.querySelector('#day2');
	var day3 = document.querySelector('#day3');
	var day4 = document.querySelector('#day4');
	var day5 = document.querySelector('#day5');

	days = [day1, day2, day3, day4, day5];

	for (i = 0; i < 5; i++) {
		var timestamp = data.list[i].dt; // UNIX timestamp in seconds
		var time = new Date();
		time.setTime(timestamp * 1000); // javascript timestamps are in milliseconds
		time.toUTCString();

		week = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"];

		var dayText = document.createTextNode(week[time.getDay()]);
		days[i].appendChild(dayText);
	}

}


function weekDegrees() {
	$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + winners[0].name + "&appid=9b021461b994f10f96e2234841d14255&units=metric", getDegrees)
}

function getDegrees(data) {
	var degrees1 = document.querySelector('#degrees1');
	var degrees2 = document.querySelector('#degrees2');
	var degrees3 = document.querySelector('#degrees3');
	var degrees4 = document.querySelector('#degrees4');
	var degrees5 = document.querySelector('#degrees5');

	var degrees = [degrees1, degrees2, degrees3, degrees4, degrees5];

	for (i = 0; i < 5; i++) {
		var currentDeg = document.createTextNode(Math.floor(data.list[i].temp.day) + "\xB0" + ' ');
		degrees[i].appendChild(currentDeg);
	}
}
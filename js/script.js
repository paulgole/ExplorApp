/////////////////////////////////////////////////////////
//
// Country is an object holding the following parameters:
//		name, value, color, tags
//
/////////////////////////////////////////////////////////

function City(nm, country, val, bg, tag) {
	this.name = nm;
	this.value = val;
	this.bg = bg;
	this.tags = tag;
	this.country = country;
}

var cities = [];

var toronto = new City("Toronto", "Canada", 0, "img/cities/lineCities_toronto.svg", ["multicultural", "nightLife", "skiSnowboard", "shopping", "hockey", "baseball", "basketball", "beer"]);
cities.push(toronto);

var vancouver = new City("Vancouver", "Canada", 0, "img/cities/lineCities_vancouver.svg", ["skiSnowboard", "mountains", "hiking", "multicultural", "aquariums", "hockey", "sailing", "scubaDiving"]);
cities.push(vancouver);

var montreal = new City("Montreal", "Canada", 0, "img/cities/lineCities_montreal.svg", ["shopping", "nightLife", "hockey", "skiSnowboard", "artGalleries", "concerts", "cathedrals", "architecture"]);
cities.push(montreal);

var newYorkCity = new City("New York City", "USA", 0, "img/cities/lineCities_newYorkCity.svg", ['shopping', 'nightLife', 'fashion', 'basketball', 'baseball', 'concerts', 'multicultural', 'architecture']);
cities.push(newYorkCity);

var nashville = new City("Nashville", "USA", 0, "img/cities/lineCities_nashville.svg", ["countryMusic", 'beer', 'hockey', 'football', 'museums', 'concerts', 'nightLife', 'architecture']);
cities.push(nashville);

var chicago = new City("Chicago", "USA", 0, "img/cities/lineCities_chicago.svg", ['pizza', 'hockey', 'baseball', 'artGalleries', 'shopping', 'museums', 'architecture', 'beaches']);
cities.push(chicago);

var losAngeles = new City("LosAngeles", "USA", 0, "img/cities/lineCities_losAngeles.svg", ['palmTrees', 'beaches', 'shopping', 'fashion', 'surfing', 'nightLife', 'hockey', 'multicultural']);
cities.push(losAngeles);

var amsterdam = new City("Amsterdam", "Netherlands", 0, "img/cities/lineCities_amsterdam.svg", ['artGalleries', 'museums', 'legalizedMarijuana', 'nightLife', 'beer', 'concerts', 'shopping', 'multicultural']);
cities.push(amsterdam);

var stockholm = new City("Stockholm", "Sweden", 0, "img/cities/lineCities_stockholm.svg", ['hockey', 'skiSnowboard', 'beer', 'architecture', 'museums', 'nightlife', 'concerts', 'auroraBorealis']);
cities.push(stockholm);

var copenhagen = new City("Copenhagen", "Denmark", 0, "img/cities/lineCities_copenhagen.svg", ['architecture', 'castles', 'museums', 'artGalleries', 'aquariums', 'beer', 'sailing', 'shopping']);
cities.push(copenhagen);

var marrakech = new City("Marrakech", "Morocco", 0, "img/cities/lineCities_marrakech.svg", ['mosques', 'museums', 'openMarkets', 'mountains', 'nightLife', 'dry', 'exotic animals', 'beaches']);
cities.push(marrakech);

var siemReap = new City("Siem Reap", "Cambodia", 0, "img/cities/lineCities_siemReap.svg", ['ancientRuins', 'wildlife', 'museums', 'legalizedMarijuana', 'jungles', 'palmTrees', 'exoticAnimals']);
cities.push(siemReap);

var istanbul = new City("Istanbul", "Turkey", 0, "img/cities/lineCities_istanbul.svg", ['openMarkets', 'museums', 'architecture', 'mosques', 'castles', 'nightLife', 'beaches', 'ancientRuins']);
cities.push(istanbul);

var hanoi = new City("Hanoi", "Vietnam", 0, "img/cities/lineCities_hanoi.svg", ['architecture', 'museums', 'outdoorMarkets', 'temples', 'beaches', 'nightLife', 'exoticAnimals', 'mountains']);
cities.push(hanoi);

var prague = new City("Prague", "Czech Republic", 0, "img/cities/lineCities_prague.svg", ['cathedrals', 'castles', 'beer', 'legalizedMarijuana', 'concerts', 'museums', 'nightLife', 'hockey']);
cities.push(prague);

var london = new City("London", "England", 0, "img/cities/lineCities_queenstown.svg", ['artGalleries', 'museums', 'castles', 'shopping', 'concerts', 'soccer', 'multicultural', 'cathedrals']);
cities.push(london);

var buenosAires = new City("Buenos Aires", "Argentina", 0, "img/cities/lineCities_buenosAires.svg", ['beaches', 'soccer', 'architecture', 'museums', 'nightLife', 'palmTrees', 'hiking', 'vineyards']);
cities.push(buenosAires);

var berlin = new City("Berlin", "Germany", 0, "img/cities/lineCities_berlin.svg", ['beer', 'soccer', 'artGalleries', 'museums', 'castles', 'architecture', 'nightLife', 'cathedrals']);
cities.push(berlin);

var rome = new City("Rome", "Italy", 0, "img/cities/lineCities_rome.svg", ['pizza', 'romance', 'ancientRuins', 'cathedrals', 'museums', 'cafes', 'soccer', 'beaches']);
cities.push(rome);

var reykjavik = new City("Reykjavik", "Iceland", 0, "img/cities/lineCities_reykjavik.svg", ['northernLights', 'waterfalls', 'hotSprings', 'hiking', 'glaciers', 'nightLife', 'mountains', 'skiSnowboard']);
cities.push(reykjavik);

var kiev = new City("Kiev", "Ukraine", 0, "img/cities/lineCities_kiev.svg", ['museums', 'cathedrals', 'openMarkets', 'architecture', 'beer', 'nightLife', 'soccer', 'artGalleries']);
cities.push(kiev);

var krakow = new City("Krakow", "Poland", 0, "img/cities/lineCities_krakow.svg", ['nightLife', 'castles', 'beer', 'concerts', 'architecture', 'cathedrals', 'soccer', 'shopping']);
cities.push(krakow);

var paris = new City("Paris", "France", 0, "img/cities/lineCities_paris.svg", ['artGalleries', 'concerts', 'cathedrals', 'museums', 'cafes', 'romance', 'shopping', 'soccer']);
cities.push(paris);

var rioDeJaneiro = new City("Rio De Janeiro", "Brazil", 0, "img/cities/lineCities_rioDeJaneiro.svg", ['surfing', 'beaches', 'paragliding', 'mountains', 'palmTrees', 'soccer', 'scubaDiving']);
cities.push(rioDeJaneiro);

var capeTownCentral = new City("Cape Town", "South Africa", 0, "img/cities/lineCities_capeTown.svg", ['surfing', 'beaches', 'vineyards', 'mountains', 'castles', 'outdoorMarkets', 'hiking', 'rugby']);
cities.push(capeTownCentral);

var budapest = new City("Budapest", "Hungary", 0, "img/cities/lineCities_budapest.svg", ['hotSprings', 'museums', 'castles', 'nightLife', 'mountains', 'cathedrals', 'architecture', 'concerts']);
cities.push(budapest);

var zermatt = new City("Zermatt", "Switzerland", 0, "img/cities/lineCities_zermatt.svg", ['legalizedMarijuana', 'hotSprings', 'hiking', 'skiSnowboard', 'mountains', 'glaciers', 'castles', 'shopping']);
cities.push(zermatt);

var barcelona = new City("Barcelona", "Spain", 0, "img/cities/lineCities_barcelona.svg", ['surfing', 'legalizedMarijuana', 'beaches', 'soccer', 'castles', 'cathedrals', 'nightLife', 'basketball']);
cities.push(barcelona);

var florence = new City("Florence", "Italy", 0, "img/cities/lineCities_florence.svg", ['romance', 'cathedrals', 'artGalleries', 'architecture', 'openMarkets', 'shopping', 'sailing', 'cafes']);
cities.push(florence);

var bangkok = new City("Bangkok", "Thailand", 0, "img/cities/lineCities_bangkok.svg", ['aquariums', 'museums', 'temples', 'beaches', 'exoticAnimals', 'jungles', 'nightLife', 'sailing']);
cities.push(bangkok);

var athens = new City("Athens", "Greece", 0, "img/cities/lineCities_athens.svg", ['ancientRuins', 'mountains', 'museums', 'openMarkets', 'concerts', 'cafes', 'hiking', 'sailing']);
cities.push(athens);

var queenstown = new City("Queenstown", "New Zealand", 0, "img/cities/lineCities_queenstown.svg", ['paragliding', 'rugby', 'vineyards', 'nightLife', 'skiSnowboard', 'mountains', 'scubaDiving', 'safari']);
cities.push(queenstown);

var sydney = new City("Sydney", "Australia", 0, "img/cities/lineCities_sydney.svg", ['surfing', 'scubaDiving', 'beaches', 'concerts', 'museums', 'aquariums', 'rugby', 'multicultural']);
cities.push(sydney);

var vienna = new City("Vienna", "Austria", 0, "img/cities/lineCities_vienna.svg", ['skiSnowboard', 'beer', 'concerts', 'mountains', 'cathedrals', 'vineyards', 'castles', 'museums']);
cities.push(vienna);

var honolulu = new City("Honolulu", "Hawaii", 0, "img/cities/lineCities_honolulu.svg", ['surfing', 'scubaDiving', 'beaches', 'romance', 'mountains', 'waterfalls', 'palmTrees', 'aquariums']);
cities.push(honolulu);


/////////////////////////////////////////////////////////
//
// Complete list of tags used in the filter system
//
/////////////////////////////////////////////////////////

function Tags(nm, img, bgC, text) {
	this.name = nm;
	this.image = img;
	this.color = bgC;
	this.text = text;
}

var tagsList = [];

var ancientRuins = new Tags("ancientRuins", "img/tags/ancientRuins.svg", "", "Explore ancient ruins?");
tagsList.push(ancientRuins);

var aquariums = new Tags("aquariums", "img/tags/aquariums.svg", "", "Visit an aquarium?");
tagsList.push(aquariums);

var architecture = new Tags("architecture", "img/tags/architecture.svg", "", "See beautiful architecture?");
tagsList.push(architecture);

var artGalleries = new Tags("artGalleries", "img/tags/artMuseums.svg", "", "Immerse yourself in art?");
tagsList.push(artGalleries);

var auroraBorealis = new Tags("auroraBorealis", "img/tags/auroraBorealis.svg", "", "Witness the Aurora Borealis?");
tagsList.push(auroraBorealis);

var baseball = new Tags("baseball", "img/tags/baseball.svg", "", "Go out to the ball game?");
tagsList.push(baseball);

var basketball = new Tags("basketball", "img/tags/basketball.svg", "", "Watch some hoops?");
tagsList.push(basketball);

var beach = new Tags("beach", "img/tags/beaches.svg", "", "Hit the beach?");
tagsList.push(beach);

var beer = new Tags("beer", "img/tags/beer.svg", "", "Grab a brew?");
tagsList.push(beer);

var cafes = new Tags("cafes", "img/tags/cafes.svg", "", "Have lunch at a cafe?");
tagsList.push(cafes);

var castles = new Tags("castles", "img/tags/castles.svg", "", "Explore castles?");
tagsList.push(castles);

var cathedrals = new Tags("cathedrals", "img/tags/cathedrals.svg", "", "Visit cathedrals?");
tagsList.push(cathedrals);

var concerts = new Tags("concerts", "img/tags/concert.svg", "", "Go see a concert?");
tagsList.push(concerts);

var countryMusic = new Tags("countryMusic", "img/tags/countryMusic.svg", "", "Take in some country music?");
tagsList.push(countryMusic);

var dry = new Tags("dry", "img/tags/dry.svg", "", "Be in a dry climate?");
tagsList.push(dry);

var exoticAnimals = new Tags("exoticAnimals", "img/tags/exoticAnimals.svg", "", "See exotic animals?");
tagsList.push(exoticAnimals);

var fashion = new Tags("fashion", "img/tags/fashion.svg", "", "Take in fashion culture?");
tagsList.push(fashion);

var football = new Tags("football", "img/tags/football.svg", "", "Watch a football game?");
tagsList.push(football);

var glaciers = new Tags("glaciers", "img/tags/glaciers.svg", "", "Visit glaciers?");
tagsList.push(glaciers);

var hiking = new Tags("hiking", "img/tags/hiking.svg", "", "Take a hike?");
tagsList.push(hiking);

var hockey = new Tags("hockey", "img/tags/hockey.svg", "", "Catch a hockey game?");
tagsList.push(hockey);

var hotSprings = new Tags("hotSprings", "img/tags/hotSprings.svg", "", "Relax in some hot springs?");
tagsList.push(hotSprings);

var humid = new Tags("humid", "img/tags/humid.svg", "", "Be in a humid climate?");
tagsList.push(humid);

var jungles = new Tags("jungles", "img/tags/jungles.svg", "", "Explore the jungle?");
tagsList.push(jungles);

var legalizedMarijuana = new Tags("legalizedMarijuana", "img/tags/legalizedMarijuana.svg", "", "Go Where it is legal?");
tagsList.push(legalizedMarijuana);

var mosques = new Tags("mosques", "img/tags/mosques.svg", "", "Visit mosques?");
tagsList.push(mosques);

var mountains = new Tags("mountains", "img/tags/mountains.svg", "", "Be around mountains?");
tagsList.push(mountains);

var multicultural = new Tags("multicultural", "img/tags/multiCultural.svg", "", "Be somewhere multicultural?");
tagsList.push(multicultural);

var museums = new Tags("museums", "img/tags/museums.svg", "", "Visit museums?");
tagsList.push(museums);

var nightLife = new Tags("nightLife", "img/tags/nightLife.svg", "", "Party hard?");
tagsList.push(nightLife);

var outdoorMarkets = new Tags("outdoorMarkets", "img/tags/outdoorMarkets.svg", "", "Shop at outdoor markets?");
tagsList.push(outdoorMarkets);

var palmTrees = new Tags("palmTrees", "img/tags/palmTrees.svg", "", "Lay under the palmtrees?");
tagsList.push(palmTrees);

var paragliding = new Tags("paragliding", "img/tags/paragliding.svg", "", "Go paragliding?");
tagsList.push(paragliding);

var pizza = new Tags("pizza", "img/tags/pizza.svg", "", "Eat authentic local pizza?");
tagsList.push(pizza);

var romance = new Tags("romance", "img/tags/romance.svg", "", "Be where the romance is?");
tagsList.push(romance);

var rugby = new Tags("rugby", "img/tags/football.svg", "", "Witness a live rugby match?");
tagsList.push(rugby);

var sailing = new Tags("sailing", "img/tags/sailing.svg", "", "Go sailing?");
tagsList.push(sailing);

var safari = new Tags("safari", "img/tags/exoticAnimals.svg", "", "Go on a safari?");
tagsList.push(safari);

var scubaDiving = new Tags("scubaDiving", "img/tags/scubaDiving.svg", "", "Go scuba diving?");
tagsList.push(scubaDiving);

var shopping = new Tags("shopping", "img/tags/shopping.svg", "", "Go shopping?");
tagsList.push(shopping);

var skiSnowboard = new Tags("skiSnowboard", "img/tags/skiSnowboard.svg", "", "Shred gnar?");
tagsList.push(skiSnowboard);

var soccer = new Tags("soccer", "img/tags/soccer.svg", "", "Go watch a soccer game?");
tagsList.push(soccer);

var surfing = new Tags("surfing", "img/tags/surfing.svg", "", "Catch some waves?");
tagsList.push(surfing);

var temples = new Tags("temples", "img/tags/temples.svg", "", "Visit temples?");
tagsList.push(temples);

var vineyards = new Tags("vineyards", "img/tags/vineyards.svg", "", "Visit vineyards?");
tagsList.push(vineyards);

var waterfalls = new Tags("waterfalls", "img/tags/waterfalls.svg", "", "Go chasing waterfalls?");
tagsList.push(waterfalls);


// var tagsList = ["hockey", "baseball", "snowboard", "mountains", "hiking", "museums",
// 				"temples", "ancient ruins", "beaches"];

/////////////////////////////////////////////////////////
//
// checkTag function queries through all city objects in
//		the cities array and then queries through all of
//		the tags for each city and compares the tags with
//		a specified tag. If a tag is a match for a city,
//		then the city gets a value increase of 1
//
/////////////////////////////////////////////////////////

function checkTag(tag) {
	for (i = 0; i < cities.length; i++) {
		for (x = 0; x < cities[i].tags.length; x++) {
			if (cities[i].tags[x] == tag) {
				cities[i].value = cities[i].value + 1;
				// console.log(cities[i].name + " = " + cities[i].value);
			}
		}
	}
}

var winners = [];

function getResult() {
	var winNum = 0;
	for (i = 0; i < cities.length; i++) {
		if (winNum > cities[i].value) {} else {
			winNum = cities[i].value;
		}
	}

	for (x = 0; x < cities.length; x++) {
		if (winNum == cities[x].value) {
			winners.push(cities[x]);
		}
	}

	var winner = document.querySelector('.resultsPageImg');
	var resultCity = document.querySelector('.resultCity');
	var resultCountry = document.querySelector('.resultCountry');
	winner.style.background = "url(" + winners[0].bg + ") no-repeat center center";
	console.log(winners[0].bg);

	var cityText = document.createTextNode(winners[0].name);
	resultCity.appendChild(cityText);

	var countryText = document.createTextNode(winners[0].country);
	resultCountry.appendChild(countryText);

	setup();
	weekForecast();
	weekDays();
	weekDegrees();
}

/////////////////////////////////////////////////////////
//
// functions below are used to attach to cards and are
//		triggered on swipe events
//
/////////////////////////////////////////////////////////

function beginApp() {
	var main = document.querySelector('.main');
	var cardsSection = document.querySelector('.cardsSection');
	var cardsContainer = document.querySelector('#cardsContainer');
	var wrap = document.querySelector('.wrap');
	main.style.display = "none";
	cardsSection.style.display = "flex";
	cardsContainer.style.opacity = "1";
	wrap.style.background = "#f2f2f2";
	cardCollector();
	createCards();

	var cards = document.querySelectorAll('.cards');
	for (i = 0; i < cards.length; i++) {
		cards[i].addEventListener("touchstart", respondToStart);
		cards[i].addEventListener("touchmove", respondToMove);
	}
};

var activeTags = [];
var activeTagging = [];

function cardCollector() {
	if (tagsList.length != 0) {
		for (i = 0; i < 3; i++) {
			randNum = Math.floor(Math.random() * tagsList.length);
			var a = tagsList.splice(randNum, 1);
			activeTags = activeTags.concat(a);
			activeTagging = activeTagging.concat(a);
		}
	} else {}
}

function createCards() {
	var marginBoost = 0;
	var zIndex = "5000";
	var cardW = "100";
	var leftPos = "0";
	var sec = document.querySelector('#cardsContainer');

	for (i = 0; i < activeTags.length; i++) {
		var card = document.createElement('div');
		card.setAttribute('class', 'cards');
		card.style.bottom = marginBoost + "px";
		card.style.zIndex = zIndex;
		card.style.width = cardW + "%";
		card.style.height = cardW + "%";
		card.style.left = leftPos + "%";

		sec.appendChild(card);

		marginBoost = marginBoost + 65;
		zIndex = (Number(zIndex) - 500).toString();
		cardW = (Number(cardW) - 10).toString();
		leftPos = (Number(leftPos) + 5).toString();

		var cardContainer = document.createElement('div');
		cardContainer.setAttribute('class', 'cardContainer');
		card.appendChild(cardContainer);

		var cardHeader = document.createElement('div');
		cardHeader.setAttribute('class', 'cardHeader');
		cardContainer.appendChild(cardHeader);

		var cardHeaderImg = document.createElement('div');
		cardHeaderImg.setAttribute('class', 'cardHeaderImg');
		cardHeader.appendChild(cardHeaderImg);

		var cardResultText = document.createElement('div');
		cardResultText.setAttribute('class', 'cardResultText');
		cardContainer.appendChild(cardResultText);

		var resultText = document.createTextNode("Results");
		cardResultText.appendChild(resultText);

		cardHeaderImg.addEventListener('click', function () {
			var preResults = document.querySelector('.resultsWrap');
			preResults.style.display = "flex";
		});

		var cardImgArea = document.createElement('div');
		cardImgArea.setAttribute('class', 'cardImgArea');
		cardContainer.appendChild(cardImgArea);

		var cardImgSection = document.createElement('div');
		cardImgSection.setAttribute('class', 'cardImgSection');
		cardImgArea.appendChild(cardImgSection);

		var cardImgContainer = document.createElement('div');
		cardImgContainer.setAttribute('class', 'cardImgContainer');
		cardImgContainer.style.background = "url(" + activeTags[i].image + ") no-repeat center center";
		cardImgSection.appendChild(cardImgContainer);

		var cardTextAbove = document.createElement('div');
		cardTextAbove.setAttribute('class', 'cardTextAbove');
		cardContainer.appendChild(cardTextAbove);

		var textAbove = document.createTextNode("Do you want to:");
		cardTextAbove.appendChild(textAbove);

		var cardText = document.createElement('div');
		cardText.setAttribute('class', 'cardText');
		cardContainer.appendChild(cardText);

		var text = document.createTextNode(activeTags[i].text);
		cardText.appendChild(text);

		var cardDecision = document.createElement('div');
		cardDecision.setAttribute('class', 'cardDecision');
		cardContainer.appendChild(cardDecision);

		var cardDecisionNoCon = document.createElement('div');
		cardDecisionNoCon.setAttribute('class', 'cardDecisionNoCon');
		cardDecision.appendChild(cardDecisionNoCon);
		cardDecisionNoCon.addEventListener('click', translate);

		var cardDecisionNo = document.createElement('div');
		cardDecisionNo.setAttribute('class', 'cardDecisionNo');
		cardDecisionNoCon.appendChild(cardDecisionNo);

		var cardDecisionNoText = document.createTextNode("Nope!");
		cardDecisionNoCon.appendChild(cardDecisionNoText);

		var cardDecisionYesCon = document.createElement('div');
		cardDecisionYesCon.setAttribute('class', 'cardDecisionYesCon');
		cardDecision.appendChild(cardDecisionYesCon);
		cardDecisionYesCon.addEventListener('click', filter);

		var cardDecisionYes = document.createElement('div');
		cardDecisionYes.setAttribute('class', 'cardDecisionYes');
		cardDecisionYesCon.appendChild(cardDecisionYes);

		var cardDecisionYesText = document.createTextNode("Yes!");
		cardDecisionYesCon.appendChild(cardDecisionYesText);

	}

}

window.addEventListener("load", function () {
	var btnYes = document.querySelector(".buttonYes");
	var btnNo = document.querySelector(".buttonNo");
	var resultsWrap = document.querySelector(".resultsWrap");
	var cardsSection = document.querySelector(".cardsSection");
	var resultsCon = document.querySelector('#resultsPage-wrap');
	var results = document.querySelector('.resultsPage');
	var cards = document.querySelectorAll('.cards');

	btnYes.addEventListener("click", function () {
		getResult();
		resultsWrap.style.display = "none";
		cardsSection.style.display = "none";
		resultsCon.style.display = "flex";
		setTimeout(function () {
			results.style.opacity = "1";
		}, 100);
	});

	btnNo.addEventListener("click", function () {
		resultsWrap.style.display = "none";
	});
})

function translate(e) {
	var noContainers = document.querySelectorAll(".cardDecisionNoCon");
	var yesContainers = document.querySelectorAll(".cardDecisionYesCon");

	var cards = document.querySelectorAll('.cards');
	cards[0].className += ' rotateLeft';

	for (i = 0; i < noContainers.length; i++) {
		noContainers[i].removeEventListener("click", translate);
		yesContainers[i].removeEventListener("click", filter);
	}
	setTimeout(function () {
		for (j = 0; j < noContainers.length; j++) {
			noContainers[j].addEventListener("click", translate);
			yesContainers[j].addEventListener("click", filter);
		}

	}, 600);

	console.log(activeTagging.length);

	if (activeTagging.length == 1) {
		var resultsWrap = document.querySelector(".resultsWrap");
		var cardsSection = document.querySelector(".cardsSection");
		var resultsCon = document.querySelector('#resultsPage-wrap');
		var results = document.querySelector('.resultsPage');
		getResult();
		resultsWrap.style.display = "none";
		cardsSection.style.display = "none";
		resultsCon.style.display = "flex";
		setTimeout(function () {
			results.style.opacity = "1";
		}, 100);
	}

	setTimeout(function () {
		shift(e);
	}, 100);
}

function filter(ev) {
	// console.log("workingBefore --------------------------------");
	// console.log(activeTagging[0].name);
	checkTag(activeTagging[0].name);
	// console.log("workingAfter ----------------------------------");

	var cards = document.querySelectorAll('.cards');
	cards[0].className += ' rotateRight';

	var noContainers = document.querySelectorAll(".cardDecisionNoCon");
	var yesContainers = document.querySelectorAll(".cardDecisionYesCon");
	console.log(yesContainers);
	for (i = 0; i < yesContainers.length; i++) {
		yesContainers[i].removeEventListener("click", filter);
		noContainers[i].removeEventListener("click", translate);
	}
	setTimeout(function () {
		for (j = 0; j < yesContainers.length; j++) {
			yesContainers[j].addEventListener("click", filter);
			noContainers[j].addEventListener("click", translate);
		}
	}, 600);

	console.log(activeTagging.length);

	if (activeTagging.length == 1) {
		var resultsWrap = document.querySelector(".resultsWrap");
		var cardsSection = document.querySelector(".cardsSection");
		var resultsCon = document.querySelector('#resultsPage-wrap');
		var results = document.querySelector('.resultsPage');
		getResult();
		resultsWrap.style.display = "none";
		cardsSection.style.display = "none";
		resultsCon.style.display = "flex";
		setTimeout(function () {
			results.style.opacity = "1";
		}, 100);
	}

	setTimeout(function () {
		shift(ev);
	}, 100);
}



var counter = 1;

function shift(ev) {

	var firstChild = ev.target.closest('.cards:first-child');
	var cardContainerFirst = ev.target.closest('.cardContainer:first-child');

	var cards = document.querySelectorAll('.cards');
	var cardsContainer = document.querySelectorAll('.cardContainer');

	firstChild.style.opacity = "0";
	setTimeout(function () {
		firstChild.remove();
		// activeTags.splice(0,3);
	}, 100)

	switch (counter) {
	case 1:
		activeTags.splice(0, 3);
		activeTagging.splice(0, 1);

		if (tagsList.length != 0) {
			for (i = 0; i < 3; i++) {
				randNum = Math.floor(Math.random() * tagsList.length);
				var a = tagsList.splice(randNum, 1);
				// var a = tagsList[randNum].name;
				activeTags = activeTags.concat(a);
				activeTagging = activeTagging.concat(a);
				// activeTags.push(a);
			}
		} else {}

		counter = 2;
		break;

	case 2:
		activeTags.splice(0, 1);
		activeTagging.splice(0, 1);

		if (tagsList.length != 0) {
			for (i = 0; i < 1; i++) {
				randNum = Math.floor(Math.random() * tagsList.length);
				var a = tagsList.splice(randNum, 1);
				// var a = tagsList[randNum].name;
				activeTags = activeTags.concat(a);
				activeTagging = activeTagging.concat(a);
				// activeTags.push(a);
			}
		} else {}
		break;
	}

	setTimeout(function () {
		for (i = 0; i < 3; i++) {
			cards[i].style.bottom = (parseInt(cards[i].style.bottom) - 65) + "px";
			cards[i].style.width = (parseInt(cards[i].style.width) + 10) + "%";
			cards[i].style.height = (parseInt(cards[i].style.height) + 10) + "%";
			cards[i].style.zIndex = (parseInt(cards[i].style.zIndex) + 500) + "";
			cards[i].style.left = (parseInt(cards[i].style.left) - 5) + "%";
		}
	}, 10)


	cardContainerFirst.style.opacity = "1";



	setTimeout(function () {
		var card = document.createElement('div');
		var sec = document.querySelector('#cardsContainer');
		card.setAttribute('class', 'cards');
		card.style.bottom = "130px";
		card.style.zIndex = "4000";
		card.style.width = "80%";
		card.style.height = "80%";
		card.style.left = "10%";
		card.style.opacity = "0";
		sec.appendChild(card);

		card.addEventListener("touchstart", respondToStart);
		card.addEventListener("touchmove", respondToMove);
		// card.addEventListener('click', shift);

		var cardContainer = document.createElement('div');
		cardContainer.setAttribute('class', 'cardContainer');
		card.appendChild(cardContainer);

		var cardHeader = document.createElement('div');
		cardHeader.setAttribute('class', 'cardHeader');
		cardContainer.appendChild(cardHeader);

		var cardHeaderImg = document.createElement('div');
		cardHeaderImg.setAttribute('class', 'cardHeaderImg');
		cardHeader.appendChild(cardHeaderImg);

		var cardResultText = document.createElement('div');
		cardResultText.setAttribute('class', 'cardResultText');
		cardContainer.appendChild(cardResultText);

		var resultText = document.createTextNode("Results");
		cardResultText.appendChild(resultText);

		cardHeaderImg.addEventListener('click', function () {
			var preResults = document.querySelector('.resultsWrap');
			preResults.style.display = "flex";
			// returns();
		});

		var cardImgArea = document.createElement('div');
		cardImgArea.setAttribute('class', 'cardImgArea');
		cardContainer.appendChild(cardImgArea);

		var cardImgSection = document.createElement('div');
		cardImgSection.setAttribute('class', 'cardImgSection');
		cardImgArea.appendChild(cardImgSection);

		var cardImgContainer = document.createElement('div');
		cardImgContainer.setAttribute('class', 'cardImgContainer');
		cardImgContainer.style.background = "url(" + activeTags[0].image + ") no-repeat center center";
		cardImgSection.appendChild(cardImgContainer);

		var cardTextAbove = document.createElement('div');
		cardTextAbove.setAttribute('class', 'cardTextAbove');
		cardContainer.appendChild(cardTextAbove);

		var textAbove = document.createTextNode("Do you want to:");
		cardTextAbove.appendChild(textAbove);

		var cardText = document.createElement('div');
		cardText.setAttribute('class', 'cardText');
		cardContainer.appendChild(cardText);

		var text = document.createTextNode(activeTags[0].text);
		cardText.appendChild(text);

		var cardDecision = document.createElement('div');
		cardDecision.setAttribute('class', 'cardDecision');
		cardContainer.appendChild(cardDecision);

		var cardDecisionNoCon = document.createElement('div');
		cardDecisionNoCon.setAttribute('class', 'cardDecisionNoCon');
		cardDecision.appendChild(cardDecisionNoCon);
		cardDecisionNoCon.addEventListener('click', translate);

		var cardDecisionNo = document.createElement('div');
		cardDecisionNo.setAttribute('class', 'cardDecisionNo');
		cardDecisionNoCon.appendChild(cardDecisionNo);

		var cardDecisionNoText = document.createTextNode("Nope!");
		cardDecisionNoCon.appendChild(cardDecisionNoText);

		var cardDecisionYesCon = document.createElement('div');
		cardDecisionYesCon.setAttribute('class', 'cardDecisionYesCon');
		cardDecision.appendChild(cardDecisionYesCon);
		cardDecisionYesCon.addEventListener('click', filter)

		var cardDecisionYes = document.createElement('div');
		cardDecisionYes.setAttribute('class', 'cardDecisionYes');
		cardDecisionYesCon.appendChild(cardDecisionYes);

		var cardDecisionYesText = document.createTextNode("Yes!");
		cardDecisionYesCon.appendChild(cardDecisionYesText);


		card.style.opacity = "1";
	}, 300);

}
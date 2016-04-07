function respondToStart(ev){
	x = ev.touches[0].clientX;
	y = ev.touches[0].clientY;
}

function respondToMove(ev){
	if(!x || !y) return;

	//remember current location
	var curX = ev.touches[0].clientX;
	var curY = ev.touches[0].clientY;

	//calculate the difference (delta)
	var dX = curX - x;
	var dY = curY - y;

	if(Math.abs(dX) < 10 && Math.abs(dY) < 10) return;

	if(Math.abs(dX) > Math.abs(dY)){
		//swipe sideways
		if(dX > 0){
			//right

      filter(ev);
      console.log("right");
      var cards = document.querySelectorAll('.cards');
      for(j=0;j<cards.length;j++){
        cards[j].removeEventListener("touchstart", respondToStart);
    		cards[j].removeEventListener("touchmove", respondToMove);
      }

      setTimeout(function(){
        for(j=0;j<cards.length;j++){
          cards[j].addEventListener("touchstart", respondToStart);
      		cards[j].addEventListener("touchmove", respondToMove);
        }
      }, 800);

			// var obj = document.querySelector('#panel-left');
			// obj.style.left = "0px";
		} else {
			//left

      translate(ev);
      console.log("left");
      var cards = document.querySelectorAll('.cards');
      for(x=0;x<cards.length;x++){
        cards[x].removeEventListener("touchstart", respondToStart);
    		cards[x].removeEventListener("touchmove", respondToMove);
      }

      setTimeout(function(){
        for(j=0;j<cards.length;j++){
          cards[j].addEventListener("touchstart", respondToStart);
      		cards[j].addEventListener("touchmove", respondToMove);
        }
      }, 800);

		}
	} else {
		if(dY > 0) {
			//down
			console.log("down");
		} else {
			//up
			console.log("up");
      var preResults = document.querySelector('.resultsWrap');
      preResults.style.display = "flex";
		}
	}
}

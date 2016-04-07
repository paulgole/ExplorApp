window.onload = function () {

	//About
	var about = document.getElementById('about_link');
	var about_section = document.getElementById('about');
	about_section.style.opacity = '0';
	about.addEventListener('click', function () {
		var about_section = document.getElementById('about');
		var close = document.getElementById('close');
		about_section.style.display = 'block';
		setTimeout(function () {
			about_section.style.opacity = '1';
		}, 100);
		close.addEventListener('click', function () {
			about_section.style.opacity = '0';
			setTimeout(function () {
				about_section.style.display = 'none';
			}, 1000);
		});
	});
	//Contact
	var contact = document.getElementById('contact_link');
	var contact_section = document.getElementById('contact');
	contact_section.style.opacity = '0';
	contact.addEventListener('click', function () {
		var contact_section = document.getElementById('contact');
		var close = document.getElementById('closee');
		contact_section.style.display = 'block';
		setTimeout(function () {
			contact_section.style.opacity = '1';
		}, 100);
		close.addEventListener('click', function () {
			contact_section.style.opacity = '0';
			setTimeout(function () {
				contact_section.style.display = 'none';
			}, 1000);
		});
	});
	//Social
	var share = document.getElementById('share');
	var counter = 0;
	share.addEventListener('click', function () {
		var twitter = document.getElementById('twitter');
		var google = document.getElementById('google');
		var facebook = document.getElementById('facebook');
		var social = [twitter, google, facebook];
		//Toggle apperance for social sharing
		switch (counter) {
		case 0:
			//Display On
			social[0].style.display = 'block';
			social[1].style.display = 'block';
			social[2].style.display = 'block';
			setTimeout(function () {
				social[2].style.opacity = '1';
			}, 200);
			setTimeout(function () {
				social[1].style.opacity = '1';
			}, 275);
			setTimeout(function () {
				social[0].style.opacity = '1';
			}, 350);
			counter = 1;
			break;
		case 1:
			//Display off
			setTimeout(function () {
				social[0].style.display = 'none';
				social[1].style.display = 'none';
				social[2].style.display = 'none';
			}, 1000);
			setTimeout(function () {
				social[0].style.opacity = '0';
			}, 200);
			setTimeout(function () {
				social[1].style.opacity = '0';
			}, 275);
			setTimeout(function () {
				social[2].style.opacity = '0';
			}, 350);
			counter = 0;
			break;
		}
	});
}
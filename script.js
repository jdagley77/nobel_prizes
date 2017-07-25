

$.getJSON("nobel.json", function(data) {
 	var prizes = data.prizes

 	for (var i = 0; i < prizes.length; i++) {
 		var cat = prizes[i].category;
 		cat = '<p class="cat">' + cat + '</p>';
 		var year = prizes[i].year;	
 		var motiv = '';
 		var fullName = [];
 		for (var j=0; j < prizes[i].laureates.length; j++) {
 			var firstName = prizes[i].laureates[j].firstname;
 			var lastName = prizes[i].laureates[j].surname;
 			fullName.push(firstName + lastName);
 			var motivText = prizes[i].laureates[j].motivation;
 			motiv = motivText;
 		}
 		namePara = '';
 		fullName.forEach(function(name){
 			namePara += '<li>' + name + '</li>';
 		})
 		$('#content').append('<div class="item">' + cat + '<p class="year">' + year + '</p>' + '<ul class="names">' + namePara + '</ul>' + '<p class="motiv">' + motiv + '</p>' + '</div>');
 	}	

 	var allItems = $('.item')
 	assignColors(allItems)

})


function assignColors(items) {
	$( items ).each(function( index ) {
	  	if ($(this).find('p').first().text() === 'physics') {
	  		$(this).addClass('physics')
	  	}

	  	else if ($(this).find('p').first().text() === 'chemistry') {
	  		$(this).addClass('chem')
	  	}

	  	else if ($(this).find('p').first().text() === 'medicine') {
	  		$(this).addClass('med')
	  	}

	  	else if ($(this).find('p').first().text() === 'peace') {
	  		$(this).addClass('peace')
	  	}

	  	else if ($(this).find('p').first().text() === 'economics') {
	  		$(this).addClass('econ')
	  	}

	  	else if ($(this).find('p').first().text() === 'literature') {
	  		$(this).addClass('lit')
	  	}

	});
}



$('body').on("mouseover", ".item", function(e) {
	var thisItem = $(this);
	var mot = $(this).find('.motiv');
	mot.css('visibility', 'visible');
	mot.hide().fadeIn(1000);
	var currentCatClass = thisItem.find('p').first().attr('class')
	
})

$('body').on("mouseleave", ".item", function(e) {
	var mot = $(this).find('.motiv')
	mot.hide();
	mot.hide().fadeOut(1000)
})
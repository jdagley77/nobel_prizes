

$.getJSON("nobel.json", function(data) {
 	var prizes = data.prizes

 	for (var i = 0; i < prizes.length; i++) {
 		var cat = prizes[i].category;
 		if (cat === 'physics') {
 			cat = '<p class="cat physics">' + cat + '</p>'
 		} else {
 			cat = '<p class="cat">' + cat + '</p>';
 		}
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
 		$('body').append('<div class="item">' + cat + '<p class="year">' + year + '</p>' + '<ul class="names">' + namePara + '</ul>' + '<p class="motiv">' + motiv + '</p>' + '</div>');
 	}	

})

// var categ = $('p .cat');
// console.log(categ.html())
// if ($('.cat').text('physics')) {
// 	var closeItem = this.find('.item');
// 	$(closeItem).css('background-color', 'green')
// }

var categ = $('.item').find('.cat')
console.log(categ.html())
// if($('.item').hasClass('cat').text() === 'physics') {
// 	console.log('hi')
// }
	// var cat = $('body').find('.cat')
	// console.log(cat.text())
	// if (cat.text()==='physics') {
	// 	$(this).css('background-color', 'green')
	// }

	if ($('.cat').hasClass('physics')) {
		$(this).parent('.item').addClass('physics');
	}


$('body').on("mouseover", ".item", function(e) {

	var mot = $(this).find('.motiv')
	mot.css('visibility', 'visible')
	mot.hide().fadeIn(1000)
})

$('body').on("mouseleave", ".item", function(e) {
	var mot = $(this).find('.motiv')
	mot.hide();
	mot.hide().fadeOut(1000)
})
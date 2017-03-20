// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Note: `cardNumber` will always be a string

var detectNetwork = function(cardNumber) {

  if (cardNumber.length >= 12 && cardNumber.length <= 19) {

  	// Diner's Club
  	// The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  	if (cardNumber.length === 14) {
	    if (cardNumber.substr(0, 2) === '38' || cardNumber.substr(0, 2) === '39') {
	      return 'Diner\'s Club';
	    }
  	}

  	// American Express
  	// The American Express network always starts with a 34 or 37 and is 15 digits long
  	if (cardNumber.length === 15) {
	    if (cardNumber.substr(0, 2) === '34' || cardNumber.substr(0, 2) === '37') {
				return 'American Express';
	    }
  	}

  	// Maestro
  	// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19
  	for (var i = 12; i <= 19; i++) {
  		if (cardNumber.length === i) {
  			if (cardNumber.substr(0, 4) === '5018' || cardNumber.substr(0, 4) === '5020' || cardNumber.substr(0, 4) === '5038' || cardNumber.substr(0, 4) === '6304') {
  				return 'Maestro';
  			}
  		}
	  }

	  // Visa
	  // Visa always has a prefix of 4 and a length of 13, 16, or 19
	  if (cardNumber.length === 13 && cardNumber[0] === '4') {
	  	return 'Visa';
	  }

  	if (cardNumber.length >= 16 && cardNumber.length <= 19) {

  		// Mastercard
  		// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16
	  	if (cardNumber.length === 16) {
	  		for (var j = 51; j < 56; j++) {
	  		  if (cardNumber.substr(0, 2) === j.toString()) {
	  			  return 'MasterCard';
	  		  }
	  	  }
	  	}

	  	// Discover
	  	// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19
	  	if (cardNumber.length === 16 || cardNumber.length === 19) {
	  		if (cardNumber.substr(0, 4) === '6011' || cardNumber.substr(0, 2) === '65') {
	  			return 'Discover';
	  		}

				for (var k = 644; k <= 649; k++) {
					if (cardNumber.substr(0, 3) === k.toString()) {
						return 'Discover';
					}
				}
	  	}

	  	// China UnionPay
	  	// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19
			for (var l = 622126; l <= 622925; l++) {
				if (cardNumber.substr(0, 6) === l.toString()) {
					return 'China UnionPay';
				}
			}

			for (var m = 624; m <= 626; m++) {
				if (cardNumber.substr(0, 3) === m.toString()) {
					return 'China UnionPay';
				}
			}

	  	for (var n = 6282; n <= 6288; n++) {
	  			if (cardNumber.substr(0, 4) === n.toString()) {
	  				return 'China UnionPay';
	  			}
	  	}

	  	// Switch
	  	// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

	  	// Visa
	  		// Visa always has a prefix of 4 and a length of 13, 16, or 19

			// Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose
			// the network with the longer prefix.
	  	if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) {
	  		var firstFour = [4903, 4905, 4911, 4936, 6333, 6759];
	  		var firstSix = [564182, 633110];

	  		if (firstFour.includes(parseInt(cardNumber.substr(0, 4))) || firstSix.includes(parseInt(cardNumber.substr(0, 6))) ) {
	  			return 'Switch';
	  		} else if ((cardNumber.length === 16 || cardNumber.length === 19) && cardNumber[0] === '4') {
			  return 'Visa';
			}
		}

  	}
  } else {
  	return 'unrecognized card';
  }
};

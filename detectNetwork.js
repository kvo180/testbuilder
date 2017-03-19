// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Note: `cardNumber` will always be a string

var detectNetwork = function(cardNumber) {

  var network = 'nothing';

  if (cardNumber.length === 14) {
    if (cardNumber.substr(0, 2) === '38' || cardNumber.substr(0, 2) === '39') {
      network = 'Diner\'s Club';
    }
  } else if (cardNumber.length === 15) {
    if (cardNumber.substr(0, 2) === '34' || cardNumber.substr(0, 2) === '37') {
    	network = 'American Express';
    }
  } else if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) {
  	if (cardNumber[0] === '4') {
  		network = 'Visa';
  	}
  	if (cardNumber.length === 16) {
  		for (var i = 51; i < 56; i++) {
  		  if (cardNumber.substr(0, 2) === i.toString()) {
  			  network = 'MasterCard';
  		  }
  	  }
  	}
  	if (cardNumber.length === 16 || cardNumber.length === 19) {
  		if (cardNumber.substr(0, 4) === '6011' || cardNumber.substr(0, 2) === '65') {
  			network = 'Discover';
  		} else {
  			for (var j = 644; j <= 649; j++) {
  				if (cardNumber.substr(0, 3) === j.toString()) {
  					network = 'Discover';
  				}
  			}
  		}
  	}
  }
  if (cardNumber.length >= 12 && cardNumber.length <= 19) {

  	for (var k = 12; k <= 19; k++) {
  		if (cardNumber.length === k) {
  			if (cardNumber.substr(0, 4) === '5018' || cardNumber.substr(0, 4) === '5020' || cardNumber.substr(0, 4) === '5038' || cardNumber.substr(0, 4) === '6304') {
  				network = 'Maestro';
  			}
  		}
  	}
  }

  return network;
};

// The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

// Visa always has a prefix of 4 and a length of 13, 16, or 19.
// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.



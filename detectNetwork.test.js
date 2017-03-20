/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
var numString = '123456789012345678901234567890';
var expect = chai.expect;

function makeString(length) {
  return numString.substr(0, length);
}

// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail.
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out.
//   // You will not be able to proceed with a failing test.

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });

// The Diner's Club network always starts with a 38 or 39 and is 14 digits long
describe('Diner\'s Club', function() {

  it('has a prefix of 38 and a length of 14', function() {
    expect(detectNetwork('38345678901234')).to.equal('Diner\'s Club')
  });

  it('has a prefix of 39 and a length of 14', function() {
    expect(detectNetwork('39345678901234')).to.equal('Diner\'s Club')
  });
});

// The American Express network always starts with a 34 or 37 and is 15 digits
describe('American Express', function() {

  it('has a prefix of 34 and a length of 15', function() {
    expect(detectNetwork('343456789012345')).to.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    expect(detectNetwork('373456789012345')).to.equal('American Express');
  });
});

// Visa always has a prefix of 4 and a length of 13, 16, or 19
describe('Visa', function() {

  it('has a prefix of 4 and a length of 13', function() {
    expect(detectNetwork('4123456789012')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    expect(detectNetwork('4123456789012345')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  });
});

// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16
describe('MasterCard', function() {

  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })

});

// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19
describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!

  for (var i = 644; i <= 649; i++) {

    (function(i) {
      it('has a prefix of ' + i.toString() + ' and a length of 16', function() {
        expect(detectNetwork(i.toString() + makeString(13))).to.equal('Discover');
      });

      it('has a prefix of ' + i.toString() + ' and a length of 19', function() {
        expect(detectNetwork(i.toString() + makeString(16))).to.equal('Discover');
      });
    })(i)
  }

  for (var j = 16; j <= 19; j += 3) {

    (function(j) {
      it('has a prefix of 6011 and a length of ' + j.toString(), function() {
        expect(detectNetwork('6011' + makeString(j - 4))).to.equal('Discover');
      });

      it('has a prefix of 65 and a length of ' + j.toString(), function() {
        expect(detectNetwork('65' + makeString(j - 2))).to.equal('Discover');
      });
    })(j)
  }
});

// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19
describe('Maestro', function() {

  for (var i = 12; i <= 19; i++) {
    (function(i) {
      it('has a prefix of 5018 and a length of ' + i.toString(), function() {
        expect(detectNetwork('5018' + makeString(i - 4))).to.equal('Maestro');
      });

      it('has a prefix of 5020 and a length of ' + i.toString(), function() {
        expect(detectNetwork('5020' + makeString(i - 4))).to.equal('Maestro');
      });

      it('has a prefix of 5038 and a length of ' + i.toString(), function() {
        expect(detectNetwork('5038' + makeString(i - 4))).to.equal('Maestro');
      });

      it('has a prefix of 6304 and a length of ' + i.toString(), function() {
        expect(detectNetwork('6304' + makeString(i - 4))).to.equal('Maestro');
      });
    })(i)
  }
});

// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19
describe('China UnionPay', function() {

  var test = function(prefix) {
    // prefix should be a string
    it('has a prefix of ' + prefix + ' and a length of 16', function() {
    expect(detectNetwork(prefix + makeString(16 - prefix.length))).to.equal('China UnionPay');
    });

    it('has a prefix of ' + prefix + ' and a length of 17', function() {
      expect(detectNetwork(prefix + makeString(17 - prefix.length))).to.equal('China UnionPay');
    });

    it('has a prefix of ' + prefix + ' and a length of 18', function() {
      expect(detectNetwork(prefix + makeString(18 - prefix.length))).to.equal('China UnionPay');
    });

    it('has a prefix of ' + prefix + ' and a length of 19', function() {
      expect(detectNetwork(prefix + makeString(19 - prefix.length))).to.equal('China UnionPay');
    });
  }

  for (var i = 622126; i <= 622925; i++) {
    test(i.toString());
  }

  for (var j = 624; j <= 626; j++) {
    test(j.toString());
  }

  for (var k = 6282; k <= 6288; k++) {
    test(k.toString());
  }
});

// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19
describe('Switch', function() {
  var firstFour = [4903, 4905, 4911, 4936, 6333, 6759];
  var firstSix = [564182, 633110];

  var test = function(prefix) {
    // prefix should be a string
    it('has a prefix of ' + prefix + ' and a length of 16', function() {
    expect(detectNetwork(prefix + makeString(16 - prefix.length))).to.equal('Switch');
    });

    it('has a prefix of ' + prefix + ' and a length of 18', function() {
    expect(detectNetwork(prefix + makeString(18 - prefix.length))).to.equal('Switch');
    });

    it('has a prefix of ' + prefix + ' and a length of 19', function() {
    expect(detectNetwork(prefix + makeString(19 - prefix.length))).to.equal('Switch');
    });
  }

  for (var i = 0; i < firstFour.length; i++) {
    test(firstFour[i].toString());
  }

  for (var j = 0; j < firstSix.length; j++) {
    test(firstSix[j].toString());
  }
});

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

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    expect(detectNetwork('38345678901234')).to.equal('Diner\'s Club')
  });

  it('has a prefix of 39 and a length of 14', function() {
    expect(detectNetwork('39345678901234')).to.equal('Diner\'s Club')
  });
});

describe('American Express', function() {

  it('has a prefix of 34 and a length of 15', function() {
    expect(detectNetwork('343456789012345')).to.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    expect(detectNetwork('373456789012345')).to.equal('American Express');
  });
});

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



  // for (var i = 40; i <= 49; i++) {
  //   (function(i) {
  //     it('has a prefix of ' + i.toString() + ' and a length of 13', function() {
  //       assert(detectNetwork(i.toString() + '23456789012') === 'Visa');
  //     });

  //     it('has a prefix of ' + i.toString() + ' and a length of 16', function() {
  //       assert(detectNetwork(i.toString() + '23456789012345') === 'Visa');
  //     });

  //     it('has a prefix of ' + i.toString() + ' and a length of 19', function() {
  //     assert(detectNetwork(i.toString() + '23456789012345678') === 'Visa');
  //     });
  //   })(i)
  // }
});

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

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!

  for (var i = 16; i <= 19; i += 3) {
    (function(i) {
      for (var j = 644; j <= 649; j++) {
        var cardNum = j.toString() + numString.substr(0, i - 3);

        (function(i, j) {
          it('has a prefix of ' + j.toString() + ' and a length of ' + i.toString(), function() {
            expect(detectNetwork(cardNum)).to.equal('Discover');
          });
        })(i, j)
    }

      it('has a prefix of 6011 and a length of ' + i.toString(), function() {
        expect(detectNetwork('6011' + numString.substr(0, i - 4))).to.equal('Discover');
      });

      it('has a prefix of 65 and a length of ' + i.toString(), function() {
        expect(detectNetwork('65' + numString.substr(0, i - 2))).to.equal('Discover');
      });
    })(i)
  }
});

describe('Maestro', function() {

  for (var i = 12; i <= 19; i++) {
    (function(i) {
      it('has a prefix of 5018 and a length of ' + i.toString(), function() {
        expect(detectNetwork('5018' + numString.substr(0, i - 4))).to.equal('Maestro');
      });

      it('has a prefix of 5020 and a length of ' + i.toString(), function() {
        expect(detectNetwork('5020' + numString.substr(0, i - 4))).to.equal('Maestro');
      });

      it('has a prefix of 5038 and a length of ' + i.toString(), function() {
        expect(detectNetwork('5038' + numString.substr(0, i - 4))).to.equal('Maestro');
      });

      it('has a prefix of 6304 and a length of ' + i.toString(), function() {
        expect(detectNetwork('6304' + numString.substr(0, i - 4))).to.equal('Maestro');
      });
    })(i)
  }
});

describe('should support China UnionPay')
describe('should support Switch')

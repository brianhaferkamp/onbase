function die1() {
  var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

  // result roll: determine strike or ball
  die1Result = dice.roll();
  console.log('Die 1 result: ' + die1Result);
  
}

function die2() {
  var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

  // result roll: determine strike or ball
  die2Result = dice.roll();
  console.log('Die 2 result: ' + die2Result);
  
}

function die3() {
  var dice = {
    sides: 9,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }

  // result roll: determine strike or ball
  die3Result = dice.roll();
  console.log('Die 3 result: ' + die3Result);
  
}


$('#roll').on('click', function() {
  // roll all the dice
  die1();
  die2();
  die3();
  
  $('.die1, .die2, .die3').hide();
  
  // output the results to the dice on the screen
  
  $('.die1 .dot, .die2 .dot').css('visibility', 'hidden');
  
  if (die1Result == 1) {
    $('.die1 .dot:nth-child(5)').css('visibility', 'visible');
  } else if (die1Result == 2) {
    $('.die1 .dot:nth-child(1)').css('visibility', 'visible');
    $('.die1 .dot:nth-child(9)').css('visibility', 'visible');
  } else if (die1Result == 3) {
    $('.die1 .dot:nth-child(1)').css('visibility', 'visible');
    $('.die1 .dot:nth-child(1)').css('visibility', 'visible');
    $('.die1 .dot:nth-child(9)').css('visibility', 'visible');
  } else if (die1Result == 4) {
    $('.die1 .dot:nth-child(1)').css('visibility', 'visible');
    $('.die1 .dot:nth-child(3)').css('visibility', 'visible');
    $('.die1 .dot:nth-child(7)').css('visibility', 'visible');
    $('.die1 .dot:nth-child(9)').css('visibility', 'visible');
  } else if (die1Result == 5) {
    $('.die1 .dot:nth-child(1)').css('visibility', 'visible');
    $('.die1 .dot:nth-child(3)').css('visibility', 'visible');
    $('.die1 .dot:nth-child(5)').css('visibility', 'visible');
    $('.die1 .dot:nth-child(7)').css('visibility', 'visible');
    $('.die1 .dot:nth-child(9)').css('visibility', 'visible');
  } else if (die1Result == 6) {
    $('.die1 .dot:nth-child(1)').css('visibility', 'visible');
    $('.die1 .dot:nth-child(3)').css('visibility', 'visible');
    $('.die1 .dot:nth-child(4)').css('visibility', 'visible');
    $('.die1 .dot:nth-child(6)').css('visibility', 'visible');
    $('.die1 .dot:nth-child(7)').css('visibility', 'visible');
    $('.die1 .dot:nth-child(9)').css('visibility', 'visible');
  }
  
  if (die2Result == 1) {
    $('.die2 .dot:nth-child(5)').css('visibility', 'visible');
  } else if (die2Result == 2) {
    $('.die2 .dot:nth-child(1)').css('visibility', 'visible');
    $('.die2 .dot:nth-child(9)').css('visibility', 'visible');
  } else if (die2Result == 3) {
    $('.die2 .dot:nth-child(1)').css('visibility', 'visible');
    $('.die2 .dot:nth-child(1)').css('visibility', 'visible');
    $('.die2 .dot:nth-child(9)').css('visibility', 'visible');
  } else if (die2Result == 4) {
    $('.die2 .dot:nth-child(1)').css('visibility', 'visible');
    $('.die2 .dot:nth-child(3)').css('visibility', 'visible');
    $('.die2 .dot:nth-child(7)').css('visibility', 'visible');
    $('.die2 .dot:nth-child(9)').css('visibility', 'visible');
  } else if (die2Result == 5) {
    $('.die2 .dot:nth-child(1)').css('visibility', 'visible');
    $('.die2 .dot:nth-child(3)').css('visibility', 'visible');
    $('.die2 .dot:nth-child(5)').css('visibility', 'visible');
    $('.die2 .dot:nth-child(7)').css('visibility', 'visible');
    $('.die2 .dot:nth-child(9)').css('visibility', 'visible');
  } else if (die2Result == 6) {
    $('.die2 .dot:nth-child(1)').css('visibility', 'visible');
    $('.die2 .dot:nth-child(3)').css('visibility', 'visible');
    $('.die2 .dot:nth-child(4)').css('visibility', 'visible');
    $('.die2 .dot:nth-child(6)').css('visibility', 'visible');
    $('.die2 .dot:nth-child(7)').css('visibility', 'visible');
    $('.die2 .dot:nth-child(9)').css('visibility', 'visible');
  }
  
  $('.die1, .die2, .die3').fadeIn();
  
  $('.die3 > span').text(die3Result).css('visibility', 'visible');
});
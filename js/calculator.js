$(document).ready(function(){
  var testNumLength = function(number) {
        if (num.length > 9) {
            displaySum.text(num.substr(num.length-9,9));
            if (num.length > 15) {
                num = '';
                displaySum.text('error');
            }
        } 
  }
});


var num = '0';
var newNum = '';
var operator = '';
var displaySum = $('#display');
displaySum.text(num);

$('.buttons button').on('click', function(event) {
  $('#display').append(event.currentTarget.innerHTML);
  
  if ($(this).attr('class') === 'clear') {
    num = '';
    displaySum.text('');
  }
  else if ($(this).attr('class') === 'clearall') {
      displaySum.text('');
      num = '';
      newNum = '';
  }
  else if ($(this).attr('class') === 'number') {
    num += $(this).text();
    displaySum.text(num);
    // testNumLength(num);
  }
  else if ($(this).attr('class') === 'operator') {
    operator = $(this).text();
    displaySum.text(operator);
    newNum = num;
    num = '';
  }
  else if ($(this).attr('class') === 'equals') {
    
    if (operator === '+') {
      num = (parseInt(newNum, 10) + parseInt(num, 10)).toString(10);
    }
    else if (operator === '-') {
      num = (parseInt(newNum, 10) - parseInt(num, 10)).toString(10);
    }
    else if (operator === 'x') {
      num = (parseInt(newNum, 10) * parseInt(num, 10)).toString(10);
    }
    else if (operator === '/') {
      num = (parseInt(newNum, 10) / parseInt(num, 10)).toString(10);
    }
    displaySum.text(num);
    number = '';
    newNum = '';

  }

});

    
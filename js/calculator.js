var oldValue = 0;
var newValue = 0;
var operation = 0;
var maxLength = 9;

// var number = document.buttons.number.value;
// var operator = document.getElementsByClassName('operator').value;


$('.buttons button').on('click', function(event) {
  $('#display').append(event.currentTarget.innerHTML);
});


// function addNum(number) {
//   alert ("Hi");
//   $('#display').
//   document.getElementById('display')

//   .innerHTML = button;
// }


/*$('.button').on('click', function(event) {
  console.log (document.getElementsByClassName("button").innerHTML);
}

$('#display').append(number);




/*function calculate(num, operator) {
  for (var i = 0; i < 9; i++){

    if (operator === '/') {
      numResult = numberA / numberB;
    }
    else if (operator === 'x') {
      numResult = numberA * numberB;
    }
    else if (operator === '-') {
      numResult = numberA - numberB;
    }
    else if (operator == '+') {
      numResult = numberA + numberB;
    }
    else if (operator == '%') {
      numResult = numberA / 100;
    }
    else if (operator == 'AC') {
      numResult = ' ';
    }
  }
};
*/
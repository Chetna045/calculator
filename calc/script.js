let currentNumber = '';
let operator = '';
let resultDisplay = document.getElementById('result');
var num1,num2;
var previousCalculation = '';
function appendNumber(num) {
  currentNumber += num;
  updateDisplay();
}

function appendOperator(op) {
  operator = op;
  num1=parseFloat(currentNumber)
  currentNumber='';
  updateDisplay();
}

function calculate() {                                       // calcultae the result after pressing the equals to button
  let result;
  
  let num2 = parseFloat(currentNumber);

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  }else if (operator === '*') {
    result = num1 * num2;
  }else if (operator === '/') {
    result = num1 / num2;
  }else if (operator === '%') {
    result = num1 % num2;
  }

  resultDisplay.textContent = result;
  currentNumber = '';
  previousCalculation = num1 + ' ' + operator + ' ' + num2 + ' = ' + result;
  operator = '';
 
}

function updateDisplay() {                                   // to udate the diaply with the currentnumber entered
  resultDisplay.textContent = currentNumber;
}

function Clear()                                             // to clear the dispaly and reset the values for both the no.'s to zero
{
    currentNumber='';
    num1=0;
    num2=0;
    updateDisplay();

}
function backspace()                                        // to backspace the last digit we entered
{
    if (currentNumber.length > 0) {
        currentNumber= currentNumber.slice(0, -1); 
    }
    else
   {
         currentNumber=''
    }
        updateDisplay();
}

function hist()                                            // to display the just previous calculation
{
    resultDisplay.textContent =  previousCalculation ;
    currentNumber = '';
    operator = '';

}
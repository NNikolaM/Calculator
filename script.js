let display = document.querySelector('.display');
let expression = '';

function appendNumber(number) {
    expression += number;
    display.value = expression;
  
}

function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}

function appendOperator(operator) {
  if (expression !== '') {
    if(!isOperator(expression[expression.length-1]) || expression[expression.length-1]!=='.'){
        expression += operator;
    }else{
        expression = expression.slice(0, expression.length - 1) + operator;
    }
    display.value=expression;
  }
}

function appendDecimal() {
  // Provera da li je poslednji broj već sadrži decimalnu tačku
  const lastNumber = expression.split(/[+\-*/]/).pop();
  if (!lastNumber.includes('.')) {
    expression += '.';
    display.value = expression;
  }
}


function clearDisplay() {
  expression = '';
  display.value = '';
}

function calculate() {
  try {
    const result = eval(expression);
    display.value = result;
    expression = result.toString();
  } catch (error) {
    display.value = 'ERROR';
    expression = '';
  }
}
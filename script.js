// script.js
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove the last character
  }
  
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      // Replace 'x²' with '**2' for exponentiation
      let expression = display.value.replace('x²', '**2');
      // Evaluate the expression
      const result = eval(expression);
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }
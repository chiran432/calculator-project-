function clearDisplay() {
    document.getElementById('display').value = '0';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
}

function appendCharacter(char) {
    let display = document.getElementById('display');
    if (display.value === '0') {
        display.value = char;
    } else {
        display.value += char;
    }
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace(/^0+/, '').replace('π', 'Math.PI').replace('e', 'Math.E').replace('^', '**').replace('sqrt(', 'Math.sqrt(').replace('log(', 'Math.log10(').replace('ln(', 'Math.log('));
    } catch (e) {
        display.value = 'Error';
    }
}

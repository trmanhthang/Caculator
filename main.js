
function resultAdd() {
    let firstNum = document.getElementById('num1');
    let secondNum = document.getElementById('num2');
    let totalAdd = parseInt(firstNum.value) + parseInt(secondNum.value)
    document.getElementById('messageDiv').innerHTML = 'Addition =' + ' ' + totalAdd;
}

function resultSub() {
    let firstNum = document.getElementById('num1');
    let secondNum = document.getElementById('num2');
    let totalSub = parseInt(firstNum.value) - parseInt(secondNum.value);
    document.getElementById('messageDiv').innerHTML = 'Subtraction =' + ' ' + totalSub;
}

function resultMul() {
    let firstNum = document.getElementById('num1');
    let secondNum = document.getElementById('num2');
    let totalMul = parseInt(firstNum.value) * parseInt(secondNum.value);
    document.getElementById('messageDiv').innerHTML = 'Multiplication =' + ' ' + totalMul;
}

function resultDiv() {
    let firstNum = document.getElementById('num1');
    let secondNum = document.getElementById('num2');
    let totalDiv = parseInt(firstNum.value) / parseInt(secondNum.value);
    document.getElementById('messageDiv').innerHTML = 'Division =' + ' ' + totalDiv;
}
let calculation = localStorage.getItem('calculation') || '';
function updateCalculation(value) {
    calculation += value;

    console.log(calculation);

    showcalculation(calculation);
    saveToLocalStorage();
}

function clearCalculation() {
    calculation = '';
    console.log(calculation);

    showcalculation(calculation);
    saveToLocalStorage();
}

function eraseNumber() {
    if (calculation.length > 0) {
        calculation = calculation.slice(0, -1);
        showcalculation(calculation);
        saveToLocalStorage();
    }
}

function calculate() {
    calculation = eval(calculation);
    console.log(calculation);

    showcalculation(calculation);
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem('calculation', calculation);
}

function showcalculation(calculation) {
    document.querySelector('.js-update-calculation-result').innerHTML = calculation;
}
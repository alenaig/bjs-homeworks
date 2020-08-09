function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";

    //let arguments = [percent, contribution, amount, date];
    /*for (argument of arguments) {
        
    } */
    let credit = amount - contribution;
    let month = date.getMonth() - new Date().getMonth() + 
    (12 * (date.getFullYear() - new Date().getFullYear()));
    let monthlyPercent = percent / 100 / 12;
    let monthlyPayment = credit * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ** month) - 1));
    let totalAmount = month * monthlyPayment;
    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
    greeting = (name == null || name.length === 0 ? `Привет, мир! Меня зовут Аноним` : `Привет, мир! Меня зовут ${name}`);
    return greeting;
}
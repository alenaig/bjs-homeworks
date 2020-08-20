 "use strict";
 
//Задача 1
function getSolutions(a, b, c) {

    const d = Math.pow(b,2) - 4 * a * c;
    let solution = new Object;
    solution.D = d;
    solution.roots = [];

    if (d < 0) {
        return solution;
    }

    else if (d == 0) {
        let x1 = - b / (2 * a);
        solution.roots.push(x1);
        return solution;
    }

    else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        solution.roots.push(x1, x2);  
        return solution;
    }
}

function showSolutionsMessage(a, b, c) {

    let result = getSolutions(a,b,c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    }
    else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    }
    else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

//Задача 2
function getAverageMark(marks) {
    let sum = 0;

    if (marks.length == 0)
    return 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }       
    return sum / marks.length;
}

function getAverageScore(data) {
    let result = {};
    
    for (let key in data) {
        result[key] = getAverageMark(data[key]);
    }
    result.average = getAverageMark(Object.values(result));
    return result;
}

//Задача 3

function getDecodedValue(secret) {
    return secret == 0 ? `Родриго`  : `Эмильо`;
}

function getPersonData(secretData) {

    let decodedName = {};

    for (let key in secretData) {    
        decodedName[key] = getDecodedValue(secretData[key]);
    }
    
    let decodedData = {
        firstName: decodedName.aaa,
        lastName: decodedName.bbb
    }
    
    return decodedData;

}

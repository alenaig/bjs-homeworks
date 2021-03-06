function getResult(a,b,c){
    "use strict";
    
    let d = Math.pow(b,2) - 4 * a * c;
    let x = [];
    if (d > 0) {
        x[0] = (-b + Math.sqrt(d)) / (2 * a);
        x[1] = (-b - Math.sqrt(d)) / (2 * a);
    } else if (d == 0) {
        x[0] = -b / (2 * a);
    }
      
    return x;
}

function getAverageMark(marks){
   
    let sum = 0;
    let averageMark;

    if (marks.length == 0)
        return 0;
    else if (marks.length > 5) 
        marks = marks.slice(0,5);

    for (i = 0; i < marks.length; i++){
        sum += marks[i];
    }
    
    return sum / marks.length;
}


function askDrink(name,dateOfBirthday){
    return (new Date().getFullYear() - dateOfBirthday.getFullYear() > 18) ? 
    `Не желаете ли олд-фэшн, ${name}?` : 
    `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
}


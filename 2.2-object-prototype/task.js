 "use strict";

//String.prototype.isPalindrome - для задачи №1


function getAverageMark(marks) {

    let sum = 0;

    if (marks.length == 0)
        return 0;

    for (let i = 0; i < marks.length; i++){
        sum += marks[i];
    }
    
    const average = sum / marks.length;
    
    return Math.round(average);
}

function checkBirthday(birthday) {
    
    const now = Date.now();
    const xday = +new Date(birthday); 
    const diff = now - xday;
    const age = diff / (((1000 * 60 * 60 * 24 * 365) * 3 + (1000 * 60 * 60 * 24 * 366)) / 4);
    return age > 18 ? true : false;
}

"use strict";

//Task 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    
    fix() {
        this.state *= 1.5;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        }
        else if (state > 100) {
            this._state = 100;
        }
        else
            this._state = state;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state) {
        super(name, releaseDate,pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(name, releaseDate,pagesCount, state);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate,pagesCount, state);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate,pagesCount, state);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate,pagesCount, state);
        this.type = "detective";
    }
}

//Task 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length ; i++) {
            if (this.books[i][type] == value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(bookName) {

        for (let i = 0; i < this.books.length; i++) {
            if(this.books[i][name] == bookName) {
                return this.books[i];
            }
            this.books = this.books.splice(i, 1);     
        }  
        return null; 
    }
}

//Task 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }
    getName() {
        return this.name;
    }

    addGrade(grade, subject) {

        if (this.grade < 1 || this.grade > 5 || typeof this.grade == NaN) {
            console.log(`Вы пытались поставить оценку ${this.grade} по предмету ${this.subject}. Допускаются только числа от 1 до 5.`);
            return this[subject].length; 
        }
        else 
            this[subject].push(this.grade);
            return this[subject].length;
    }
}


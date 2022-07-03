class PrintEditionItem {

    #state;

    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.#state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.#state * 1.5;
    }

    set state(value) {
        if (value < 0) {
            this.#state = 0;
        } else if (value > 100) {
            this.#state = 100;
        } else {
            this.#state = value;
        }
    }

    get state() {
        return this.#state;
    }
}

class Magazine extends PrintEditionItem {

    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {

    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "novel";
    }
}

class FantasticBook  extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "fantastic";
    }
}

class DetectiveBook  extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "detective";
    }
}

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
        const findBook = this.books.find(element => 
            element[type] === value
        );
        return (typeof findBook !== 'undefined') ? findBook : null;
    }

    giveBookByName(bookName) {
        const findBook = this.books.find(element => {
            if (typeof element !== 'undefined' && element.name === bookName) {
                return element;
            }
        });
        if (typeof findBook !== 'undefined') {
            this.books = this.books.filter(item =>
                item !== findBook
            )
            return findBook;
        } else {
            return null;
        }
    }
}
library = new Library('Библиотека имени Ленина');
printItem = new PrintEditionItem('Типовой школьный журнал', 2019, 102);
const printItemAdditional = new PrintEditionItem('Блокнот для заметок', 2021, 100);


library.addBook(printItem);
const firstBook = library.giveBookByName('Типовой школьный журнал');

// const secondBook = library.giveBookByName('Судовой журнал');
// console.log()
console.log(firstBook.name)
console.log(library.books.length)
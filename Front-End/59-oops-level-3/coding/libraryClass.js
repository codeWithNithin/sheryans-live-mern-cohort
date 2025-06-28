class Library {
  // add books
  // list books

  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  listBooks() {
    this.books.forEach((el, index) => {
        console.log(`${index} : ${el}`)
    })
  }
}

class Book {
  // create a book constructor with
  name;
  author;
  isbn;
  price;
  constructor(name, isbn, author, price) {
    this.name = name;
    this.isbn = isbn;
    this.author = author;
    this.price = price;
  }

  info() {
    return `${this.name} is written by ${this.author}`;
  }
}

const libraryObj = new Library();

const book1 = new Book("Power of subconcious mind", "some random id", "Nithin");
const book2 = new Book("Power of subconcious mind", "some random id", "Nithin");
const book3 = new Book("Power of subconcious mind", "some random id", "Nithin");

libraryObj.addBook(book1);
libraryObj.addBook(book2);
libraryObj.addBook(book3);

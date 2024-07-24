// Define your Book class here:

class Book {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    numberOfPages,
    timesCheckedOut,
    discarded
  ) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.isbn = isbn;
    this.numberOfPages = numberOfPages;
    this.timesCheckedOut = timesCheckedOut;
    this.discarded = discarded;
  }
}

// Define your Manual and Novel classes here:

class Manual extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    numberOfPages,
    timesCheckedOut,
    discarded
  ) {
    super(
      title,
      author,
      copyrightDate,
      isbn,
      numberOfPages,
      timesCheckedOut,
      discarded
    );
  }
  olderThanFive(currentYear) {
    if (currentYear - this.copyrightDate > 5) {
      this.discarded = "true";
    }
  }

  // constructor(age) {
  //   this.age = age;
  //   olderThanFive () {
  //     if (this.age > 5) {Book.discard === true};
  //   }
  // }
}

class Novel extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    numberOfPages,
    timesCheckedOut,
    discarded
  ) {
    super(
      title,
      author,
      copyrightDate,
      isbn,
      numberOfPages,
      timesCheckedOut,
      discarded
    );
  }

  checkedOutTooMuch(moreCheckOuts) {
    if (moreCheckOuts + this.timesCheckedOut > 100) {
      this.discarded = "true";
    }
  }

  // checkedOutTooMuch() {
  //   if (timesCheckedOut > 100) {
  //     Book.discarded === true;
  //   }
  // }
}

// Declare the objects for exercises 2 and 3 here:

let Jane = new Novel(
  "Pride and Prejudice",
  "Jane Austen",
  1813,
  11111111111111,
  432,
  32,
  "false"
);
let RedactedAuth = new Manual(
  "Top Secret Shuttle Building Manual",
  "redacted",
  2013,
  "00000000000000",
  1147,
  1,
  "false"
);

// Code exercises 4 & 5 here:

RedactedAuth.olderThanFive(2024);
Jane.moreCheckOuts(5);

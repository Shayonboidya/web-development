let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };

// all keys
let keys = Object.keys(book);
console.log(keys)

// all vhalues
let values = Object.values(book);
console.log(values);

// all keys and vhalues 
console.log(Object.entries(book))

// delete ar propertics
delete book.pages;
// delete book["pages"]
console.log(book)
const book = {
    title: 'JavaScript for Beginners',
    firstName: 'John',
    lastName: 'Doe',
    pages: 214,
    chapters: ['introduction', 'type of variables', 'loops'],
    published: true,
    tutorialCD : {
        size: 'full',
        capacity: '700Mb',
        title: 'Tutorial Disc For JS',
    }
    // 0 : 'testing'
}

console.log(book);
console.log(book.title);
//book.title = 'JavaScript from Zero to Hero';
book["title"] = 'JavaScript from Zero to Hero';
console.log(book.title);
console.log(book['pages']);

let indicator = 'last';

console.log(book[`${indicator}Name`]);

console.log(book.ISBN);
//book.ISBN = 28769475687
book['ISBN'] = 123132321321
console.log(book.ISBN);

console.log(book.tutorialCD.capacity);
console.log(book['tutorialCD'].capacity);
console.log(book['tutorialCD']['capacity']);

console.log(book.tutorialCD.size);
book.tutorialCD.size = 'small';
console.log(book.tutorialCD.size);





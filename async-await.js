let books = [
  { name: "book1", page: "100", author: "A.B.", date: "1971" },
  { name: "book2", page: "200", author: "C.D.", date: "1972" },
  { name: "book3", page: "300", author: "E.F.", date: "1999" },
  { name: "book4", page: "400", author: "G.H.", date: "2004" },
];

function listBooks() {
  console.log("-----------------");
  console.log("- Kitap Listesi -");
  console.log("-----------------");

  books.map((book) => {
    console.log(book.name, book.date);
  });
}

function addBook(newBook) {
  const promise1 = new Promise((resolve, reject) => {
    books.push(newBook);
    resolve("Kitap ekleme başarılı!");
    reject("Kitap eklenirken bir hata ile karşılaşıldı!");
  });

  return promise1;
}

async function processBooks() {

  try {

    console.log("Kitap ekleme işlemi devam ediyor...");
    const message = await addBook({ name: "book5", page: "500", author: "I.J.", date: "2005" });
    console.log(message);
    listBooks();

  } catch (error) {

    console.log(error);

  }

}

processBooks();
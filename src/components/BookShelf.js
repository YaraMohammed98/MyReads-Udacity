import React from "react";
import Book from "./Book";

function BookShelf({shelfName, books, section ,changeBookShelf}) {
  const bookSection=books.filter((book)=> book.shelf === section)

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol  className="books-grid">
          {bookSection.map((book)=>(
            <Book key={book.id} book={book} changeBookShelf={changeBookShelf}/> 
          ))}
        </ol>
      </div>
    </div>
  );
}
export default BookShelf;

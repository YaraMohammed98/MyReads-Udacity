import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";


function Books({AllBooks ,changeBookShelf}) {

  return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf shelfName='Currently Reading' books={AllBooks} section="currentlyReading" changeBookShelf={changeBookShelf} />
        <BookShelf shelfName='Want To Read' books={AllBooks} section="wantToRead" changeBookShelf={changeBookShelf}/>
        <BookShelf shelfName='Read' books={AllBooks} section="read" changeBookShelf={changeBookShelf}/>
      </div>
      </div>
    <div className="open-search">
      <Link to={'Search'}>Add a book</Link>
    </div>
  </div>
  );
}

export default Books;

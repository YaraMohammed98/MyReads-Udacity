import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";


function Books({AllBooks}) {

  return (
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf shelfName='Currently Reading' books={AllBooks} section="currentlyReading"/>
        <BookShelf shelfName='Want To Read' books={AllBooks} section="wantToRead"/>
        <BookShelf shelfName='Read' books={AllBooks} section="read"/>
      </div>
      </div>
    <div className="open-search">
      <Link to={'Search'}>Add a book</Link>
    </div>
  </div>
  );
}

export default Books;

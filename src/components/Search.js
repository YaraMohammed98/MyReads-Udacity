import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

function Search({
  searchKey,
  setSearchKey,
  searchedBooks,
  changeBookShelf,
  
}) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to={"/"} >
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            onChange={setSearchKey}
          />
        </div>
      </div>
      {searchKey === "" ? (
        <h1 id="nobooks"> Enter a word or letter above for searching</h1>
      ) : (
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.length > 0 ? (
              searchedBooks.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  changeBookShelf={changeBookShelf}
                />
                
              ))
            ) : (
              <h1 id="nobooks">No results match your search</h1>
            )}
          </ol>
        </div>
      )}
    </div>
  );
}

export default Search;

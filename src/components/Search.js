import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";


function Search() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="search-books">
        <div className="search-books-bar">
        <Link  className="close-search" to={'/'}>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
  );
}

export default Search;

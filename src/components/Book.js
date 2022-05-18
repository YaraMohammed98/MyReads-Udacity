import React from "react";


function Book({book ,changeBookShelf}) {

 const changeShelf = (event) =>{
       changeBookShelf(book,event.target.value)
   } 

  return (
    <div>
      <li>
        <div className="book">
          <div className="book-top">
            <img
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                
              }}
              src={book.imageLinks ? book.imageLinks.thumbnail : "https://ik.imagekit.io/upquizbqg/No_Image_Available_QdttPgGzm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652834944592"} 
            />
            <div className="book-shelf-changer">
              <select onChange={changeShelf} value={book.shelf ? book.shelf : "none" }>
                <option  disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title || ' title not available'}</div>
          <div className="book-authors">{book.authors || 'Author not available'}</div>
        </div>
      </li>
    </div>
  );
}
export default Book;

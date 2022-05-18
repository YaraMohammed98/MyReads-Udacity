import "./App.css";
import React, { useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Books from "./components/Books";
import Search from "./components/Search";
import * as BooksApi from "./BooksAPI";

function App () {
    const [books ,setbooks]=useState([]);
    const [searchKey,setsearchKey]= useState("");
    const [searchedBooks,setsearchedBooks]=useState([]);
  
  const getAllBooks = async () => {
    await BooksApi.getAll().then((response) =>
    setbooks(response)
    );
  };

  useEffect(() => {
    getAllBooks()
  },[searchKey]);

  const changeBookShelf = async (book, shelf) => {
    await BooksApi.update(book, shelf);
    getAllBooks();
    getSearchResult(searchKey);
    
  }

  const changeSearchKey = async(event)=>{
     setsearchKey(event.target.value)
    if(event.target.value.length){
     getSearchResult(event.target.value)
    }

  }

  const getSearchResult = async (searchKey) => {
    await BooksApi.search(searchKey).then((response) => {
      if (response && response.length>0) {
        setsearchedBooks( response.map((result)=>{
            books.forEach((book)=>{
            if(result.id === book.id){
              result.shelf=book.shelf
            }
          })
         return result;
        })
      );
      } 
      else{
        setsearchedBooks([])
      }
    });
  };


    return (
      <Router>
        <Routes>
          <Route
            path={"/"}
            exact
            element={
              <Books
                AllBooks={books}
                changeBookShelf={changeBookShelf}
              />
            }
          />
          <Route
            path={"/search"}
            element={
              <Search
                searchKey={searchKey}
                searchedBooks={searchedBooks}
                changeSearchKey={changeSearchKey}
                changeBookShelf={changeBookShelf}
              />
            }
          />
        </Routes>
      </Router>
    );
  }


export default App;

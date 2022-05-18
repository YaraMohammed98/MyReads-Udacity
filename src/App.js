import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Books from "./components/Books";
import Search from "./components/Search";
import * as BooksApi from "./BooksAPI";

class App extends React.Component {
  state = {
    books: [],
    searchKey: "",
    searchedBooks: [],
  };

  getAllBooks = async () => {
    await BooksApi.getAll().then((response) =>
      this.setState({ books: response })
    );
  };

  componentDidMount() {
    this.getAllBooks();
  }

  changeBookShelf = async (book, shelf) => {
    await BooksApi.update(book, shelf);
    this.getAllBooks();
    this.getSearchResult(this.state.searchKey);
  };

  setSearchKey = async (event) => {
    if (event.target.value === "") {
      this.setState({ searchKey: "" });
    } else {
      await this.setState({
        searchKey: event.target.value,
      });
      this.getSearchResult(this.state.searchKey);
    }
  };
  
  getSearchResult = async (searchKey) => {
    await BooksApi.search(searchKey).then((response) => {
      if (response) {
        this.setState({ searchedBooks: response.map((result)=>{
          this.state.books.forEach((book)=>{
            if(result.id === book.id){
              result.shelf=book.shelf
            }
          })
          return result;
        })
      });
      } else {
        this.setState({ toggleSearch: false });
      }
    });
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route
            path={"/"}
            exact
            element={
              <Books
                AllBooks={this.state.books}
                changeBookShelf={this.changeBookShelf}
              />
            }
          />
          <Route
            path={"/search"}
            element={
              <Search
                searchKey={this.state.searchKey}
                searchedBooks={this.state.searchedBooks}
                setSearchKey={this.setSearchKey}
                changeBookShelf={this.changeBookShelf}
                toggleSearch={this.state.toggleSearch}
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;

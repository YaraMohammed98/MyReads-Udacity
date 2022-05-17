import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import Books from "./components/Books";
import Search from "./components/Search";
import * as BooksApi from './BooksAPI';

class App extends React.Component {
  state={
    books:[]
  }

  getAllBooks=async () => {
    await BooksApi.getAll().then((response) => this.setState({books:response}));
  }

  componentDidMount() {
    this.getAllBooks();
    
  }

  changeBookShelf = async(book,shelf) =>{
   await BooksApi.update(book,shelf);
   this.getAllBooks();

  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path={"/"} exact element={<Books AllBooks={this.state.books} changeBookShelf={this.changeBookShelf} />} />
          <Route path={"/search"} element={<Search />} />
        </Routes>
      </Router>
    );
  }
}

export default App;

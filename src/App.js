/* eslint-disable */
import logo from './logo.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Book from './components/Book';
import './App.css';




function App() {


  const [books, setBooks] = useState([])
  const [query, setQuery] = useState('')
  const API_KEY = "AIzaSyCUusAGWWeALov5t5xlJjYQEzORRdkaGTY"
  const fetchBooks = async () => {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}+inauthor:keyes&key=${API_KEY}&maxResults=35`)
    const data = await res.json()
    setBooks(data.items)
  }

  /* Testeur de state */
  // useEffect(() => { console.log(books) }, [books])


  return (
    <div className="App">
      <div className='top'>
        <h2>Bienvenue sur E-books par Djibril SAMASSA</h2>
        <form>
          <label for="category">
            <input className='query' onChange={(e) => { setQuery(e.target.value) }} type="text" placeholder='Cherchez par mot-clé ou catégorie'></input>
          </label>
            <span className='btn' onClick={() => { query !== '' ? fetchBooks() : null }} >Chercher</span>
        </form>
      </div>
      <div className='booksContainer'>
        {books?.length > 0 ? books?.map((book) => {
          return <Book book={book} />
        }) : null}
      </div>
    </div>
  );
}

export default App;

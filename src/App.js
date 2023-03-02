/* eslint-disable */
import logo from './logo.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Book from './components/Book';
import './App.css';
import Description from './components/Description';




function App() {


  const [books, setBooks] = useState([])
  const [query, setQuery] = useState('')
  const [showD, setShowD] = useState(false)
  const [desc, setD] = useState('')
  const API_KEY = "AIzaSyCUusAGWWeALov5t5xlJjYQEzORRdkaGTY"
  const fetchBooks = async () => {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}+inauthor:keyes&key=${API_KEY}&maxResults=35`)
    const data = await res.json()
    setBooks(data.items)
  }

  const search = () => {
    showD ? setShowD(false) :
      query !== '' ? fetchBooks() : null
  }

  /* Testeur de state */

  return (
    <div className="App">
      <div className='top'>
        <h2>Bienvenue sur E-books par Djibril SAMASSA</h2>
        <form>
          <label for="category">
            <input className='query' onChange={(e) => { setQuery(e.target.value) }} type="text" placeholder='Cherchez par mot-clé ou catégorie'></input>
          </label>
          <span className='btn' onClick={() => { search() }} >Chercher</span>
        </form>
      </div>
      {showD ? <Description props={desc} close={setShowD} /> : <div className='booksContainer'>
        {books?.length > 0 ? books?.map((book) => {
          return <Book showD={showD} setD={setShowD} book={book} setDs={setD} />
        }) : null}
      </div>}

    </div>
  );
}

export default App;

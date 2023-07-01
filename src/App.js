/* eslint-disable no-unused-vars */

import {useDebugValue, useEffect, useState} from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

const API_KEY_VAL = process.env.REACT_APP_API_KEY
const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY_VAL}`


const App = () => {
    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm] = useState('')
    const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search);
  }
  useEffect(()=> {
    searchMovies('spiderman')
  },[])
  return (
    <>
      <div className="app">
        <h1>Idleguy</h1>

        <div className="search">
          <input
          placeholder="search for movies"
          value = {searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          />
          <img src={SearchIcon}
          alt = 'search'
          onClick={()=> searchMovies(searchTerm)}
          />
        </div>
{
  movies?.length > 0 
    ? (
       <div className="container">
         { movies.map(a => <MovieCard movie={a}/> )}
        </div>
        ) : (
          <div className="empty">
            <h2>no movies found</h2>
            </div>
        )
}
      </div>

    </>
  );
};
export default App;

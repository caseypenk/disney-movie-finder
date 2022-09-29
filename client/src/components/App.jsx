import React, { useEffect, useState } from 'react';
import TopNav from "./TopNav.jsx";
import Search from "./Search.jsx";
import BottomNav from "./BottomNav.jsx";
import axios from "axios";

const App = () => {
  const [movies, setMovies] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect( () => {
    axios.get('http://localhost:8080/', {
    }).then(response => {
      setMovies(response.data);
    }).catch(err => {
      console.log('err: ', err)
    })
  })

  return (
    <div>
        <TopNav />
        <div id="main-content">
          <Search movies={movies} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <BottomNav />
  </div>
  )
}

export default App;
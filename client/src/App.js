import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  console.log('movies', movieList);

  return (
    <div>
      <SavedList list={savedList} />
      {/*<div>Replace this Div with your Routes</div>*/}
      <MovieList movies={movieList}/>
      <div>
        <h2>helloooo?</h2>
        <Route exact path='/' component={MovieList.js}/>
        <Route path ='/movies/:id' component={Movie.js}/>
      </div>
    </div>
  );
};

export default App;

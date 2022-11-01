import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";

const UpComingMovie = (props) => {
  let [movies, setMovies] = useState([]);
  const favourites = movies.filter((m) => m.favourite);
  localStorage.setItem("favourites", JSON.stringify(favourites));

  const addToFavourites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favourite: true } : m
    );
    setMovies(updatedMovies);
  };

  let dateNow = new Date().toISOString().slice(0,10)
  console.log(dateNow);


  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        return json.results;
      })
      .then((movies) => {
        setMovies(movies);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  
  const movieList = movies;
  movies = [];
  console.log(movies)
  
  const ReleaseD = movieList.map(el => el.release_date)
  movieList.forEach((movie) => {
    if  (dateNow < movie.release_date )
    console.log(movie.id)
    movies.push(movie)
    console.log(ReleaseD)
      if(movieList.release_date === ReleaseD)
        movies.push(movieList)
        console.log(movies)
        console.log(movie)

  } );
 

  return (
    <PageTemplate
      title="UpComing movies"
      movies={movies}
      selectFavourite={addToFavourites}
    />
  );
};

export default UpComingMovie;
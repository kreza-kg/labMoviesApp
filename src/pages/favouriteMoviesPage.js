import React from "react";
import PageTemplate from "../components/templateMovieListPage";

const FavouriteMoviesPage = (props) => {
  const toDo = () => true;
  // Get movies from local storage.
  const movies = JSON.parse(localStorage.getItem("favourites")); 

  return (
    <PageTemplate
      title="favourite Movies"
      movies={movies}
      selectFavourite={toDo}
    />
  );
};

export default FavouriteMoviesPage;
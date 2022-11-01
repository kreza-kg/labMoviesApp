import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import Avatar, { avatarClasses } from "@mui/material/Avatar";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MovieHeader = (props) => {
  const movie = props.movie;
  const navigate = useNavigate();
  const FavouriteMovies = JSON.parse(localStorage.getItem("favourites")); 
  var movieI = document.location.href;
  var idmovie = movieI.substring(movieI.lastIndexOf( "/" )+1 );
  
  console.log(idmovie);
  let EqualId = false;
  FavouriteMovies.forEach((movie) => {
      if  (movie.id === idmovie /*recuperer l'id du film actuel*/ )
      console.log(movie.id)
      EqualId = true
  } );


  return (
    <Paper 
        component="div" 
        sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: 1.5,
            margin: 0,
        }}
      >
      <IconButton aria-label="go back" onClick={() => navigate(-1)} >
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>
      {( EqualId !== false ) ? (
            <Avatar sx={{ backgroundColor: "red" }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
      <Typography variant="h4" component="h3">
        {movie.title}
        <a href={movie.homepage}>
          <HomeIcon color="primary" />
        </a>
        <br />
        <span sx={{ fontSize: "1.5rem" }}>{`   "${movie.tagline}"`} </span>
      </Typography>

      <IconButton aria-label="go forward" onClick={() => navigate(+1) } >
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
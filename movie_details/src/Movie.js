import React from "react"
import "./Movie.css"
function Movie({ poster, title, type, year }) {
  return (
    <div className="movie">
      <img src={poster} alt="Movie Poster" className="movie__poster" />
      <h1 className="movie__title">{title}</h1>
      <h2>{type}</h2>
      <h3>{year}</h3>
    </div>
  )
}

export default Movie

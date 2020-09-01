import React from "react"

function Movie({ poster, title, type, year }) {
  return (
    <div>
      <img src={poster} alt="Movie Image" />
      <h1>{title}</h1>
      <h2>{type}</h2>
      <h3>{year}</h3>
    </div>
  )
}

export default Movie

import React from "react"
import "./MoviesDisplay.css"
import Movie from "./Movie"
import { useEffect, useState } from "react"

function MoviesDisplay() {
  const [movies, setMovies] = useState([])
  function callApi() {
    fetch("http://www.omdbapi.com/?s=Avengers&page=1&apikey=a2ab21b6")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.Search)
        setMovies(data.Search)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    callApi()
  }, [])

  return (
    <div className="moviesDisplay">
      {movies.map((message) => (
        <Movie
          key={message.imdbID}
          poster={message.Poster}
          title={message.Title}
          year={message.Year}
          type={message.Type}
        />
      ))}
    </div>
  )
}

export default MoviesDisplay

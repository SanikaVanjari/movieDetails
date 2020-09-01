import React from "react"
import "./MoviesDisplay.css"

function MoviesDisplay() {
  function callApi() {
    fetch("http://www.omdbapi.com/?s=Avengers&page=1&apikey=a2ab21b6")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="moviesDisplay">

    </div>
  )
}

export default MoviesDisplay

import React from "react"
import "./App.css"
import MoviesDisplay from "./MoviesDisplay"
import Space from "./Space"
function App() {
  return (
    <div className="app">
      <Space />
      <MoviesDisplay />
      <Space />
    </div>
  )
}

export default App

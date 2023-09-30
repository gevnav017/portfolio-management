import { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'

function App() {
  const [movies, setMovies] = useState([])
  const [newMovie, setNewMovie] = useState("")

  useEffect(() => {
    Axios.get("http://localhost:8800/movies")
      .then((res) => {
        setMovies(res.data)
      })
        .catch((err) => {
          console.log(err)
        })

  }, [movies])

  const handleInsert = () => {
    Axios.post("http://localhost:8800/input", {
      movie: newMovie
    })
      .then((res) => {
        console.log(res)
      })
        .catch((err) => {
          console.log(err)
        })
  }

  return (
    <>
      <input placeholder='movie' onChange={(e) => {setNewMovie(e.target.value)}}/>
      <button onClick={handleInsert}>Submit</button>

      {movies && movies.map((movie) => <div key={movie.id}>{movie.movie}</div>)}
    </>
  )
}

export default App
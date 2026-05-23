import {useEffect, useState} from 'react'

import {API} from '../../api'

import MovieCard from '../../components/MovieCard'
import Pagination from '../../components/Pagination'

import './index.css'

const Upcoming = () => {
  const [moviesList, setMoviesList] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const getUpcomingMovies = async () => {
      const response = await fetch(API.upcoming(page))
      const data = await response.json()

      setMoviesList(data.results || [])
      setTotalPages(data.total_pages || 1)
    }

    getUpcomingMovies()
  }, [page])

  return (
    <div className="movies-page">
      <h1 className="page-heading">Upcoming</h1>

      <ul className="movies-list">
        {moviesList.map(eachMovie => (
          <MovieCard key={eachMovie.id} movie={eachMovie} />
        ))}
      </ul>

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  )
}

export default Upcoming

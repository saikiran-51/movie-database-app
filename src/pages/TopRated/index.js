import {useEffect, useState} from 'react'

import {API} from '../../api'

import MovieCard from '../../components/MovieCard'
import Pagination from '../../components/Pagination'

import './index.css'

const TopRated = () => {
  const [moviesList, setMoviesList] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const getTopRatedMovies = async () => {
      const response = await fetch(API.topRated(page))
      const data = await response.json()

      setMoviesList(data.results || [])
      setTotalPages(data.total_pages || 1)
    }

    getTopRatedMovies()
  }, [page])

  return (
    <div className="movies-page">
      <h1 className="page-heading">Top Rated</h1>

      <ul className="movies-list">
        {moviesList.map(eachMovie => (
          <MovieCard key={eachMovie.id} movie={eachMovie} />
        ))}
      </ul>

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  )
}

export default TopRated

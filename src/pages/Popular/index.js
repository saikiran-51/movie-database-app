import {useEffect, useState} from 'react'

import {API} from '../../api'

import MovieCard from '../../components/MovieCard'
import Pagination from '../../components/Pagination'

import './index.css'

const Popular = () => {
  const [moviesList, setMoviesList] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const getPopularMovies = async () => {
      const response = await fetch(API.popular(page))
      const data = await response.json()

      setMoviesList(data.results || [])
      setTotalPages(data.total_pages || 1)
    }

    getPopularMovies()
  }, [page])

  return (
    <div className="movies-page">
      <h1 className="page-heading">Popular</h1>

      <ul className="movies-list">
        {moviesList.map(eachMovie => (
          <MovieCard key={eachMovie.id} movie={eachMovie} />
        ))}
      </ul>

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  )
}

export default Popular

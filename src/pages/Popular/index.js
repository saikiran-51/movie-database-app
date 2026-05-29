import {useEffect, useState} from 'react'

import {API} from '../../api'

import MovieCard from '../../components/MovieCard'
import Pagination from '../../components/Pagination'

import './index.css'

const MOVIES_PER_PAGE = 10

const Popular = () => {
  const [moviesList, setMoviesList] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getPopularMovies = async () => {
      const response = await fetch(API.popular(page))

      const data = await response.json()

      setMoviesList(data.results || [])
    }

    getPopularMovies()
  }, [page])

  const startIndex = (page - 1) * MOVIES_PER_PAGE
  const endIndex = startIndex + MOVIES_PER_PAGE

  const currentMovies = moviesList.slice(startIndex, endIndex)

  const totalPages = Math.ceil(moviesList.length / MOVIES_PER_PAGE)

  return (
    <div className="movies-page">
      <h1 className="page-heading">Popular</h1>

      <ul className="movies-list">
        {currentMovies.map(eachMovie => (
          <MovieCard key={eachMovie.id} movie={eachMovie} />
        ))}
      </ul>

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  )
}

export default Popular

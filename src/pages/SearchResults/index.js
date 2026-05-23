import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

import {API} from '../../api'

import MovieCard from '../../components/MovieCard'

import './index.css'

const SearchResults = () => {
  const {query} = useParams()

  const [moviesList, setMoviesList] = useState([])

  useEffect(() => {
    const getSearchResults = async () => {
      const response = await fetch(API.search(query, 1))
      const data = await response.json()

      setMoviesList(data.results || [])
    }

    getSearchResults()
  }, [query])

  return (
    <div className="movies-page">
      <h1 className="page-heading">Results for {query}</h1>

      <ul className="movies-list">
        {moviesList.map(eachMovie => (
          <MovieCard key={eachMovie.id} movie={eachMovie} />
        ))}
      </ul>
    </div>
  )
}

export default SearchResults

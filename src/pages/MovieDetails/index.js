import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

import {API, IMG_URL} from '../../api'

import './index.css'

const MovieDetails = () => {
  const {id} = useParams()

  const [movieDetails, setMovieDetails] = useState({})
  const [castList, setCastList] = useState([])

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieResponse = await fetch(API.details(id))
      const movieData = await movieResponse.json()

      const castResponse = await fetch(API.cast(id))
      const castData = await castResponse.json()

      setMovieDetails(movieData)
      setCastList(castData.cast || [])
    }

    getMovieDetails()
  }, [id])

  return (
    <div className="movie-details-page">
      <div className="movie-details-container">
        <img
          src={`${IMG_URL}${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className="movie-poster"
        />

        <div className="movie-info">
          <h1 className="movie-title">{movieDetails.title}</h1>

          <p className="movie-rating">⭐ {movieDetails.vote_average}</p>

          <p className="movie-release-date">
            Release Date: {movieDetails.release_date}
          </p>

          <p className="movie-overview">{movieDetails.overview}</p>
        </div>
      </div>

      <h1 className="cast-heading">Cast</h1>

      <ul className="cast-list">
        {castList.map(eachActor => (
          <li key={eachActor.id} className="cast-card">
            <img
              src={`${IMG_URL}${eachActor.profile_path}`}
              alt={eachActor.name}
              className="cast-image"
            />

            <p className="actor-name">{eachActor.name}</p>

            <p className="character-name">{eachActor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieDetails

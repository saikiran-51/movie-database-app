import {Link} from 'react-router-dom'

import {IMG_URL} from '../../api'

import './index.css'

const MovieCard = props => {
  const {movie} = props

  const {id, title, vote_average: voteAverage, poster_path: posterPath} = movie

  return (
    <li className="movie-card">
      <img
        src={`${IMG_URL}${posterPath}`}
        alt={title}
        className="movie-image"
      />

      <h1 className="movie-title">{title}</h1>

      <p className="movie-rating">{voteAverage}</p>

      <Link to={`/movie/${id}`}>
        <button type="button" className="details-button">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default MovieCard

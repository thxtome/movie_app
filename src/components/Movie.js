import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ id, title, year, summary, poster, genres }) {
  return (
    <Link
      className="movie__detail__link"
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres
        }
      }}
    >
      <div className="movies__movie">
        <img
          className="movie__poster"
          src={poster}
          alt={title}
          title={title}
        ></img>
        <div className="movie__data">
          <h4>{title}</h4>
          <h5>{year}</h5>
          <ul className="genres">
            {genres.map((genre, index) => (
              <li className="genres__genre" key={index}>
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__data__summary">{summary}</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;

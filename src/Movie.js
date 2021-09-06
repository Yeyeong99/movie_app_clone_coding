import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, genre, summary, poster }) {
  return <h4>{genre}</h4>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.array.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
